import fs from 'fs';
// 引入 toml 解析库
import toml from '@iarna/toml';

// 获取配置文件路径，默认为 wrangler.toml
const configPath = process.env.CONFIG_FILE || 'wrangler.toml';

try {
    // 1. 读取并解析原始 TOML 文件
    const tomlString = fs.readFileSync(configPath, 'utf-8');
    const config = toml.parse(tomlString);

    console.log(`Updating ${configPath}...`);

    // 2. 注入 Worker 名称
    if (process.env.CLOUDFLARE_WORKERS_NAME) {
        config.name = process.env.CLOUDFLARE_WORKERS_NAME;
        console.log(`- Updated name to: ${config.name}`);
    }

    // 3. 注入全局配置 (注意处理字符串 'true'/'false' 转换为真正的 Boolean)
    if (process.env.CLOUDFLARE_WORKERS_DEV) {
        config.workers_dev = process.env.CLOUDFLARE_WORKERS_DEV === 'true';
        console.log(`- Updated workers_dev to: ${config.workers_dev}`);
    }

    if (process.env.CLOUDFLARE_WORKERS_PREVIEW_URLS) {
        config.preview_urls = process.env.CLOUDFLARE_WORKERS_PREVIEW_URLS === 'true';
        console.log(`- Updated preview_urls to: ${config.preview_urls}`);
    }

    // 4. 注入路由 (Routes)
    if (process.env.CLOUDFLARE_WORKERS_ROUTES) {
        // 输入格式为: pattern1,zone1;pattern2,zone2, 例如: demo.nodeauth.io/*,nodeauth.io
        const routesArray = process.env.CLOUDFLARE_WORKERS_ROUTES.split(';');
        config.routes = routesArray.map(routeStr => {
            const parts = routeStr.split(',');
            const routeObj = { pattern: parts[0].trim() };
            if (parts.length >= 2) {
                routeObj.zone_name = parts[1].trim();
            }
            return routeObj;
        });
        console.log(`- Updated routes:`, config.routes);
    }

    // 5. 注入 D1 数据库配置
    if (process.env.CLOUDFLARE_D1_DATABASE_ID) {
        const dbName = process.env.CLOUDFLARE_D1_DATABASE_NAME || 'nodeauth-db';
        const newDbConfig = {
            binding: 'DB',
            database_name: dbName,
            database_id: process.env.CLOUDFLARE_D1_DATABASE_ID
        };

        if (!config.d1_databases) {
            config.d1_databases = [];
        }

        // 查找是否已经存在 binding 为 'DB' 的配置
        const existingDbIndex = config.d1_databases.findIndex(db => db.binding === 'DB');
        if (existingDbIndex !== -1) {
            config.d1_databases[existingDbIndex] = newDbConfig; // 覆盖已有的 DB 绑定
        } else {
            config.d1_databases.push(newDbConfig); // 追加新的 DB 绑定
        }
        console.log(`- Updated D1 Database binding: DB -> ${dbName}`);
    }

    // 6. 将修改后的对象序列化回 TOML 格式并写入文件
    const newTomlString = toml.stringify(config);
    fs.writeFileSync(configPath, newTomlString);
    console.log(`✅ Successfully saved changes to ${configPath}`);

} catch (error) {
    console.error(`❌ Failed to parse or write TOML file:`, error.message);
    process.exit(1); // 抛出错误并中断工作流
}