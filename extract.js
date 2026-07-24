const fs = require('fs');

const content = fs.readFileSync('src/components/Home.astro', 'utf8');

const extractBlock = (startMarker, endMarker, filename) => {
    const startIndex = content.indexOf(startMarker);
    const endIndex = endMarker ? content.indexOf(endMarker) : content.indexOf('</style>');
    
    if (startIndex === -1) {
        console.log(`Could not find start marker: ${startMarker}`);
        return;
    }
    
    // Find the end of the </FeatureBlock> or just before the next marker
    const blockContent = content.substring(startIndex, endIndex).trim();
    // But we need to stop at </FeatureBlock>
    const finalEndIndex = blockContent.lastIndexOf('</FeatureBlock>') + '</FeatureBlock>'.length;
    const finalContent = blockContent.substring(0, finalEndIndex);

    const astroComponent = `---
import FeatureBlock from './FeatureBlock.astro';
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
${finalContent}
`;

    fs.writeFileSync(`src/components/${filename}`, astroComponent);
    console.log(`Wrote ${filename}`);
};

extractBlock('<!-- Import Feature Block -->', '<!-- Export Feature Block -->', 'FeatureImport.astro');
extractBlock('<!-- Export Feature Block -->', '<!-- Backup Feature Block -->', 'FeatureExport.astro');
extractBlock('<!-- Backup Feature Block -->', '<!-- Multi-device Feature Block -->', 'FeatureBackup.astro');
extractBlock('<!-- Multi-device Feature Block -->', '<style is:global>', 'FeatureMultiDevice.astro');

