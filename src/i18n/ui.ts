export const languages = {
  zh: '简体中文',
  en: 'English',
};

export const defaultLang = 'zh';

export const ui = {
  zh: {
    'site.title': 'NodeAuth | 私有化 2FA/TOTP 验证码管理工具',
    'site.desc': 'NodeAuth 是一款支持 Docker 与 Cloudflare Serverless 部署的私有化 2FA/TOTP 管理工具。采用零知识加密与离线备份，完美替代 Google Authenticator 与 Authy。',

    'nav.demo': '在线演示',
    'nav.docs': '部署文档',
    'nav.extension': '浏览器插件',
    'nav.pricing': '终身授权',
    'nav.buy': '立即购买',

    'hero.tag': '专属福利！结算输入 EARLYBIRD20 立享 8 折优惠',
    'hero.title': '你的 2FA 验证码，<br>现在由你 <span class="text-gradient">真正做主</span>。',
    'hero.desc': 'NodeAuth 是一款专为极客打造的私有化 2FA/TOTP 二步验证管理工具。通过零知识加密技术，彻底告别云端泄露风险，将数字资产的安全主权真正交还给您。',
    'hero.f1': '零知识加密',
    'hero.f2': '数据完全离线备份',
    'hero.f3': '100% 开源透明',
    'hero.buy': '获取正版授权',
    'hero.demo': '体验在线 Demo',

    'ext.subtitle': 'NodeAuth Extension',
    'ext.title': '桌面端的<br>完美搭档。',
    'ext.desc': '告别在手机和电脑间来回看验证码的繁琐。基于零知识加密技术，插件能安全地自动为你填充验证码，让每一次登录都丝滑流畅。',

    'feat.export.subtitle': '数据主权 (Data Sovereignty)',
    'feat.export.title': '自由掌控，<br>灵活导出。',
    'feat.export.desc': '你的数据，由你做主。NodeAuth 提供完全无锁定的数据导出机制，支持标准 JSON 格式。随时随地备份或转移所有 2FA 令牌，彻底告别生态绑定与平台封锁。',
    'feat.export.btn': '阅读导出指南',
    
    'feat.import.subtitle': '无缝迁移 (Easy Migration)',
    'feat.import.title': '零成本迁移，<br>万能导入。',
    'feat.import.desc': '搬家从未如此简单。借助强大的万能导入引擎，NodeAuth 可一键无损解析并接管 Authy、Google Authenticator 等 20+ 主流工具的数据，让你丝滑过渡到更安全的开源体验。',
    'feat.import.btn': '阅读导入指南',

    'feat.backup.subtitle': '坚如磐石 (Rock-solid Reliability)',
    'feat.backup.title': '多重云端备份，<br>数据永不丢失。',
    'feat.backup.desc': '拒绝“设备一丢，全网账号找回”的噩梦。基于强力端到端加密，NodeAuth 允许将核心数据安全同步至你信任的私有云端，即使设备意外损坏，也能瞬间恢复所有数字身份。',
    'feat.backup.btn': '阅读备份指南',

    'feat.multi.subtitle': '全平台覆盖 (Cross-platform)',
    'feat.multi.title': '随时随地，<br>多端无缝协同。',
    'feat.multi.desc': '一次配置，全端打通。无论在手机、平板还是电脑前，NodeAuth 均能提供极致顺滑的原生体验。加密数据在所有授权设备间实时同步，让验证码永远唾手可得。',

    'wiki.subtitle': 'NodeAuth Wiki',
    'wiki.title': '私有化部署，<br>从未如此简单。',
    'wiki.desc': '无论是想要 1 分钟通过 Docker 在本地局域网点亮，还是免费部署到 Cloudflare Serverless 边缘网络。完善的中文文档都能手把手带你完成全过程。',
    'wiki.btn': '阅读部署指南',

    'price.subtitle': 'NodeAuth License',
    'price.title': '投资你的绝对安全。',
    'price.desc': '一次买断，获取长久的自动化更新与专属支持。<br>今天，就把数据主权拿回自己手中。',
    'price.plan': '终身授权版',
    'price.price': '$9.99',
    'price.period': '买断制 / 终身有效',
    'price.f1': '无限制的设备同时在线同步',
    'price.f2': '支持私有化部署及后续版本免费更新',
    'price.f3': '提供官方专属交流群与持续的售后技术支持',
    'price.f4': '支持微信、信用卡及 USDT 免手续费直付',
    'price.btn': '立即获取授权 ($9.99)',
    'price.help': '需要新手协助？联系 <a href="https://t.me/NodeAuthBot" target="_blank">@NodeAuthBot</a> 即可获取 1v1 代部署',

    'faq.subtitle': 'FAQ',
    'faq.title': '常见问题与解答。',
    'faq.q1': 'NodeAuth 和 Google Authenticator 有什么区别？',
    'faq.a1': '最本质的区别在于数据主权。NodeAuth 采用零知识加密，支持多端数据离线备份与私有化 2FA 部署，彻底避免了由于设备丢失、或云端服务遭受攻击而导致不可逆的数据泄露风险。',
    'faq.q2': '我可以把以前的二步验证数据导过来吗？',
    'faq.a2': '绝对可以。NodeAuth 内置万能数据搬家引擎，目前已支持一键无损导入 Authy, Aegis, Google Authenticator 以及 Bitwarden 等 20+ 款主流应用的导出数据。',
    'faq.q3': '云端托管和 Docker 本地部署哪个更安全？',
    'faq.a3': '两者在架构上都采用了严格的安全标准。Cloudflare Serverless 边缘网络部署能提供全球高可用和防 DDoS 攻击的特性；而 Docker 本地部署则实现了物理网络的彻底隔离，您可以根据自身需求灵活选择。',
    'faq.q4': '浏览器插件是否会收集或上传我的登录数据？',
    'faq.a4': '绝对不会。NodeAuth 插件在您的设备本地对数据进行零知识加解密，所有操作均在客户端完成。您的核心凭据只存在于您自己部署的服务中，没有任何第三方（包括我们）能够访问或截获。',

    'footer.desc': '一个十分安全的 2FA 服务管理工具。<br><span style="font-size: 0.85em; opacity: 0.6; display: inline-block; margin-top: 8px;">Keywords: 2fa, 2fa-manager, 2fauth, end-to-end-encryption, zero-knowledge, cloudflare-workers</span>',
    'footer.rights': '&copy; 2026 NodeAuth. All rights reserved.',
    'footer.tools': '辅助工具 (Tools)',
    
    'footer.col1.title': '产品',
    'footer.col1.l1': '授权中心',
    'footer.col1.l2': '浏览器插件',
    
    'footer.col2.title': '资源',
    'footer.col2.l1': '在线演示',
    'footer.col2.l2': 'Wiki 文档',
    'footer.col2.l3': '辅助工具',
    
    'footer.col3.title': '政策',
    'footer.col3.l1': '服务条款',
    'footer.col3.l2': '隐私政策',
    
    'footer.col4.title': '帮助',
    'footer.col4.l1': '联系我们',
    'footer.col4.l2': 'Telegram 群组',
  },
  en: {
    'site.title': 'NodeAuth | A Secure 2FA Management Tool',
    'site.desc': 'High-security, Lightweight 2FA/TOTP management tool supporting Cloudflare Serverless and Docker on-premise deployment.',
    'nav.demo': 'Online Demo',
    'nav.docs': 'Documentation',
    'nav.extension': 'Extension',
    'nav.pricing': 'Lifetime License',
    'nav.buy': 'Buy Now',

    'hero.tag': 'Special Offer! Use EARLYBIRD20 for 20% off',
    'hero.title': 'Your 2FA Codes,<br>Now <span class="text-gradient">Truly Yours</span>.',
    'hero.desc': 'NodeAuth is a highly secure, self-hosted 2FA management tool. Featuring zero-knowledge encryption and seamless TOTP migration, it keeps your digital assets absolutely secure.',
    'hero.f1': 'Zero-knowledge encryption',
    'hero.f2': 'Fully offline backups',
    'hero.f3': '100% open source & transparent',
    'hero.buy': 'Get License',
    'hero.demo': 'Try Online Demo',

    'ext.subtitle': 'NodeAuth Extension',
    'ext.title': 'The Perfect<br/>Desktop Companion.',
    'ext.desc': 'Say goodbye to looking back and forth between your phone and computer. Built with zero-knowledge encryption, the extension securely autofills your 2FA codes, making every login seamless.',

    'feat.export.subtitle': 'Data Sovereignty',
    'feat.export.title': 'Freedom to Control,<br/>Flexible Export.',
    'feat.export.desc': 'Your data belongs to you. NodeAuth provides a completely lock-in-free export mechanism supporting standard JSON formats. Backup or transfer your 2FA tokens anytime, free from ecosystem traps.',
    'feat.export.btn': 'Read Export Guide',

    'feat.import.subtitle': 'Easy Migration',
    'feat.import.title': 'Zero-Cost Migration,<br/>Universal Import.',
    'feat.import.desc': 'Switching is a breeze. With our universal import engine, seamlessly migrate from Authy, Google Authenticator, and 20+ other tools with a single click, transitioning smoothly to a safer open-source experience.',
    'feat.import.btn': 'Read Import Guide',

    'feat.backup.subtitle': 'Rock-solid Reliability',
    'feat.backup.title': 'Multi-Cloud Backup,<br/>Zero Data Loss.',
    'feat.backup.desc': 'Never fear losing your device again. Based on strong end-to-end encryption, NodeAuth securely syncs your core data to your trusted cloud, ensuring your digital identity is instantly recoverable.',
    'feat.backup.btn': 'Read Backup Guide',

    'feat.multi.subtitle': 'Cross-platform',
    'feat.multi.title': 'Seamless Sync,<br/>Anywhere, Anytime.',
    'feat.multi.desc': 'Configure once, sync everywhere. Whether on a phone, tablet, or desktop, NodeAuth delivers a buttery-smooth native experience. Encrypted data syncs in real-time across all authorized devices.',

    'wiki.subtitle': 'NodeAuth Wiki',
    'wiki.title': 'Self-Hosting,<br/>Simpler Than Ever.',
    'wiki.desc': 'Whether you want to spin it up in 1 minute via Docker on your local network, or deploy it for free to the Cloudflare edge network, our comprehensive documentation will guide you step by step.',
    'wiki.btn': 'Read Documentation',

    'price.subtitle': 'NodeAuth License',
    'price.title': 'Invest in Absolute Security.',
    'price.desc': 'Pay once, get long-term automated updates and exclusive support.<br/>Take back your data sovereignty today.',
    'price.plan': 'Lifetime License',
    'price.price': '$9.99',
    'price.period': 'One-time payment / Lifetime valid',
    'price.f1': 'Unlimited devices sync concurrently',
    'price.f2': 'Self-hosting & free future basic updates',
    'price.f3': 'Official exclusive group & continuous after-sales technical support',
    'price.f4': 'Zero-fee payments via Card, Crypto & WeChat',
    'price.btn': 'Get License ($9.99)',
    'price.help': 'Need deployment assistance? Contact <a href="https://t.me/NodeAuthBot" target="_blank">@NodeAuthBot</a> for 1v1 help',

    'faq.subtitle': 'FAQ',
    'faq.title': 'Frequently Asked Questions',
    'faq.q1': 'What is the difference between NodeAuth and Google Authenticator?',
    'faq.a1': 'The fundamental difference is data sovereignty. NodeAuth uses zero-knowledge encryption, supports multi-device offline backups, and self-hosted 2FA deployment, completely avoiding the risk of irreversible data leaks due to lost devices or attacked cloud services.',
    'faq.q2': 'Can I import my previous 2FA data?',
    'faq.a2': 'Absolutely. NodeAuth has a powerful built-in migration engine that supports one-click lossless imports from over 20 mainstream apps like Authy, Aegis, Google Authenticator, and Bitwarden.',
    'faq.q3': 'Which is more secure: Cloudflare Serverless or Docker local deployment?',
    'faq.a3': 'Both adopt strict security standards in their architectures. Cloudflare Serverless edge deployment provides global high availability and DDoS protection; while Docker local deployment achieves complete physical network isolation. You can choose flexibly based on your needs.',
    'faq.q4': 'Will the browser extension collect or upload my login data?',
    'faq.a4': 'Absolutely not. The NodeAuth extension performs zero-knowledge encryption and decryption of your data locally. All operations are completed on the client side. Your core credentials only exist in your self-hosted service, and no third party (including us) can access or intercept them.',

    'footer.desc': 'A Secure 2FA Management Tool.<br><span style="font-size: 0.85em; opacity: 0.6; display: inline-block; margin-top: 8px;">Keywords: 2fa, 2fa-manager, 2fauth, end-to-end-encryption, zero-knowledge, cloudflare-workers</span>',
    'footer.rights': '&copy; 2026 NodeAuth. All rights reserved.',
    'footer.tools': 'Tools',

    'footer.col1.title': 'Product',
    'footer.col1.l1': 'License Center',
    'footer.col1.l2': 'Browser Extension',
    
    'footer.col2.title': 'Resources',
    'footer.col2.l1': 'Online Demo',
    'footer.col2.l2': 'Wiki Docs',
    'footer.col2.l3': 'Tools',
    
    'footer.col3.title': 'Legal',
    'footer.col3.l1': 'Terms of Service',
    'footer.col3.l2': 'Privacy Policy',
    
    'footer.col4.title': 'Help',
    'footer.col4.l1': 'Contact Us',
    'footer.col4.l2': 'Telegram Group',
  },
} as const;
