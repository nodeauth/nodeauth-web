import fs from 'fs';
import path from 'path';

/**
 * 展平 Sitemap 文件结构：
 * 将 Astro 默认生成的 dist/sitemap-0.xml 直接提升为单层标准的 dist/sitemap.xml，
 * 并清理中间碎片文件。
 */
const distDir = path.resolve('dist');
const sitemap0 = path.join(distDir, 'sitemap-0.xml');
const sitemapTarget = path.join(distDir, 'sitemap.xml');
const sitemapIndex = path.join(distDir, 'sitemap-index.xml');

try {
  if (fs.existsSync(sitemap0)) {
    fs.copyFileSync(sitemap0, sitemapTarget);
    console.log('✅ Generated standalone sitemap.xml (urlset)');
    fs.unlinkSync(sitemap0);
    if (fs.existsSync(sitemapIndex)) {
      fs.unlinkSync(sitemapIndex);
    }
    console.log('🧹 Cleaned up sitemap-0.xml and sitemap-index.xml');
  } else {
    console.warn('⚠️ Warning: sitemap-0.xml not found in dist, skipping flatten.');
  }
} catch (error) {
  console.error('❌ Failed to flatten sitemap:', error);
  process.exit(1);
}
