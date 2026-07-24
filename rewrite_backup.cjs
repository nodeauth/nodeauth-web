const fs = require('fs');
let content = fs.readFileSync('src/components/FeatureBackup.astro', 'utf8');

const getSVG = (str) => {
    const match = content.match(new RegExp(str, 's'));
    return match ? match[0] : '';
}

const tgSVG = getSVG('<svg width="18" height="18" viewBox="0 0 24 24" fill="#24A1DE">.*?<\/svg>');
const smtpSVG = getSVG('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#D44638".*?<\/svg>');
const baiduSVG = getSVG('<svg width="18" height="18" viewBox="0 0 100 100" fill="#06A7E1">.*?<\/svg>');
const webdavSVG = getSVG('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor".*?<\/svg>');
const s3SVG = getSVG('<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F48120".*?<\/svg>');
const dropSVG = getSVG('<svg width="20" height="20" viewBox="0 0 1333.34 1133.07" fill="#0061FF">.*?<\/svg>');
const driveSVG = getSVG('<svg width="20" height="20" viewBox="0 0 122.88 109.79">.*?<\/svg>');
const oneSVG = getSVG('<svg width="20" height="20" viewBox="0 0 512 512" fill="#0078D4">.*?<\/svg>');

const newHtml = `    <div class="mockup-wrapper" style="width: 100%; max-width: 440px; aspect-ratio: 44/36; margin: 0 auto; position: relative;">
        <div class="backup-mockup" style="background: var(--card-bg); border: 1px solid var(--border); border-radius: 12px; width: 100%; height: 100%; box-shadow: var(--shadow-lg); position: relative; overflow: hidden; box-sizing: border-box;">
            <!-- Background Lines via SVG -->
            <svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1;" overflow="visible">
                <line x1="14%" y1="14%" x2="50%" y2="47%" stroke="var(--border)" stroke-width="2" />
                <line x1="50%" y1="14%" x2="50%" y2="47%" stroke="var(--border)" stroke-width="2" />
                <line x1="86%" y1="14%" x2="50%" y2="47%" stroke="var(--border)" stroke-width="2" />
                <line x1="14%" y1="47%" x2="86%" y2="47%" stroke="var(--border)" stroke-width="2" />
                <line x1="14%" y1="80%" x2="50%" y2="47%" stroke="var(--border)" stroke-width="2" />
                <line x1="50%" y1="80%" x2="50%" y2="47%" stroke="var(--border)" stroke-width="2" />
                <line x1="86%" y1="80%" x2="50%" y2="47%" stroke="var(--border)" stroke-width="2" />
            </svg>

            <!-- Animated sync dots -->
            <div class="anim-sync-tl sync-dot"></div>
            <div class="anim-sync-tc sync-dot"></div>
            <div class="anim-sync-tr sync-dot"></div>
            <div class="anim-sync-cl sync-dot"></div>
            <div class="anim-sync-cr sync-dot"></div>
            <div class="anim-sync-bl sync-dot"></div>
            <div class="anim-sync-bc sync-dot"></div>
            <div class="anim-sync-br sync-dot"></div>

            <!-- Center node -->
            <div style="position: absolute; top: 47%; left: 50%; transform: translate(-50%, -50%); width: 52px; height: 52px; background: var(--accent); border-radius: 14px; display: flex; align-items: center; justify-content: center; z-index: 4; box-shadow: 0 8px 24px rgba(0,113,227,0.4);">
                <img src="/logo.svg" width="28" height="28" alt="NodeAuth" style="border-radius: 8px; filter: brightness(0) invert(1);" />
            </div>

            <!-- TL: Telegram -->
            <div class="node-wrapper" style="top: 14%; left: 14%;">
                <div class="node-icon">${tgSVG}</div>
                Telegram
            </div>

            <!-- TC: SMTP (Mail icon) -->
            <div class="node-wrapper" style="top: 14%; left: 50%;">
                <div class="node-icon" style="color: var(--text-primary);">${smtpSVG}</div>
                SMTP
            </div>

            <!-- TR: Baidu -->
            <div class="node-wrapper" style="top: 14%; left: 86%;">
                <div class="node-icon">${baiduSVG}</div>
                Baidu
            </div>

            <!-- CL: WebDAV -->
            <div class="node-wrapper" style="top: 47%; left: 14%;">
                <div class="node-icon" style="color: var(--text-primary);">${webdavSVG}</div>
                WebDAV
            </div>

            <!-- CR: S3/R2 -->
            <div class="node-wrapper" style="top: 47%; left: 86%;">
                <div class="node-icon" style="color: var(--text-primary);">${s3SVG}</div>
                S3 / R2
            </div>

            <!-- BL: Dropbox -->
            <div class="node-wrapper" style="top: 80%; left: 14%;">
                <div class="node-icon">${dropSVG}</div>
                Dropbox
            </div>

            <!-- BC: Google Drive -->
            <div class="node-wrapper" style="top: 80%; left: 50%;">
                <div class="node-icon">${driveSVG}</div>
                Drive
            </div>

            <!-- BR: OneDrive -->
            <div class="node-wrapper" style="top: 80%; left: 86%;">
                <div class="node-icon">${oneSVG}</div>
                OneDrive
            </div>
            
            <div style="position: absolute; bottom: 20px; left: 0; right: 0; text-align: center; font-size: 0.85rem; font-weight: 500; color: var(--text-secondary); display: flex; justify-content: center; align-items: center; gap: 8px; z-index: 5;">
                <div class="anim-blink" style="width: 8px; height: 8px; background: #10b981; border-radius: 50%; box-shadow: 0 0 8px #10b981;"></div>
                Syncing to 8 remote sources
            </div>
        </div>
    </div>
</FeatureBlock>

<style>
.node-wrapper {
    position: absolute;
    transform: translate(-50%, -50%);
    width: 48px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
    z-index: 3;
    font-size: 0.65rem;
    font-weight: 600;
    color: var(--text-primary);
}
.node-icon {
    width: 36px;
    height: 36px;
    background: var(--bg-color);
    border: 1px solid var(--border);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: var(--shadow-sm);
}
.sync-dot {
    position: absolute;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
    z-index: 2;
}

@keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0.3; }
}
.anim-blink { animation: blink 2s infinite; }
</style>

<style is:global>
.anim-sync-tl { animation: syncTL 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1); animation-delay: 0.1s; }
.anim-sync-tc { animation: syncTC 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1); animation-delay: 0.8s; }
.anim-sync-tr { animation: syncTR 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1); animation-delay: 0.4s; }
.anim-sync-cl { animation: syncCL 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1); animation-delay: 1.2s; }
.anim-sync-cr { animation: syncCR 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1); animation-delay: 1.5s; }
.anim-sync-bl { animation: syncBL 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1); animation-delay: 0.6s; }
.anim-sync-bc { animation: syncBC 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1); animation-delay: 1.8s; }
.anim-sync-br { animation: syncBR 2.5s infinite cubic-bezier(0.4, 0, 0.2, 1); animation-delay: 1.0s; }

@keyframes syncTL { 0% { top: 47%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } 15% { top: 43.7%; left: 46.4%; transform: translate(-50%,-50%) scale(1); opacity:1; } 85% { top: 17.3%; left: 17.6%; transform: translate(-50%,-50%) scale(1); opacity:1; } 100% { top: 14%; left: 14%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } }
@keyframes syncTC { 0% { top: 47%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } 15% { top: 43.7%; left: 50%; transform: translate(-50%,-50%) scale(1); opacity:1; } 85% { top: 17.3%; left: 50%; transform: translate(-50%,-50%) scale(1); opacity:1; } 100% { top: 14%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } }
@keyframes syncTR { 0% { top: 47%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } 15% { top: 43.7%; left: 53.6%; transform: translate(-50%,-50%) scale(1); opacity:1; } 85% { top: 17.3%; left: 82.4%; transform: translate(-50%,-50%) scale(1); opacity:1; } 100% { top: 14%; left: 86%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } }
@keyframes syncCL { 0% { top: 47%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } 15% { top: 47%; left: 46.4%; transform: translate(-50%,-50%) scale(1); opacity:1; } 85% { top: 47%; left: 17.6%; transform: translate(-50%,-50%) scale(1); opacity:1; } 100% { top: 47%; left: 14%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } }
@keyframes syncCR { 0% { top: 47%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } 15% { top: 47%; left: 53.6%; transform: translate(-50%,-50%) scale(1); opacity:1; } 85% { top: 47%; left: 82.4%; transform: translate(-50%,-50%) scale(1); opacity:1; } 100% { top: 47%; left: 86%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } }
@keyframes syncBL { 0% { top: 47%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } 15% { top: 50.3%; left: 46.4%; transform: translate(-50%,-50%) scale(1); opacity:1; } 85% { top: 76.7%; left: 17.6%; transform: translate(-50%,-50%) scale(1); opacity:1; } 100% { top: 80%; left: 14%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } }
@keyframes syncBC { 0% { top: 47%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } 15% { top: 50.3%; left: 50%; transform: translate(-50%,-50%) scale(1); opacity:1; } 85% { top: 76.7%; left: 50%; transform: translate(-50%,-50%) scale(1); opacity:1; } 100% { top: 80%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } }
@keyframes syncBR { 0% { top: 47%; left: 50%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } 15% { top: 50.3%; left: 53.6%; transform: translate(-50%,-50%) scale(1); opacity:1; } 85% { top: 76.7%; left: 82.4%; transform: translate(-50%,-50%) scale(1); opacity:1; } 100% { top: 80%; left: 86%; transform: translate(-50%,-50%) scale(0.5); opacity:0; } }
</style>
`;

const startIndex = content.indexOf('<div class="mockup-wrapper"');
const head = content.substring(0, startIndex);
fs.writeFileSync('src/components/FeatureBackup.astro', head + newHtml);
console.log('done2');
