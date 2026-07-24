const fs = require('fs');

const content = fs.readFileSync('src/components/Home.astro', 'utf8');

const extractBlock = (startMarker, endMarker, filename) => {
    const startIndex = content.indexOf(startMarker);
    const endIndex = endMarker ? content.indexOf(endMarker) : content.indexOf('<!-- Multi-device Feature Block -->');
    
    if (startIndex === -1) {
        console.log(`Could not find start marker: ${startMarker}`);
        return;
    }
    
    let blockContent;
    if (endMarker) {
        blockContent = content.substring(startIndex, endIndex).trim();
        const finalEndIndex = blockContent.lastIndexOf('</FeatureBlock>') + '</FeatureBlock>'.length;
        blockContent = blockContent.substring(0, finalEndIndex);
    } else {
        blockContent = content.substring(startIndex).trim();
        const finalEndIndex = blockContent.lastIndexOf('</FeatureBlock>') + '</FeatureBlock>'.length;
        blockContent = blockContent.substring(0, finalEndIndex);
    }

    const astroComponent = `---
import FeatureBlock from './FeatureBlock.astro';
import { getLangFromUrl, useTranslations } from '../i18n/utils';

const lang = getLangFromUrl(Astro.url);
const t = useTranslations(lang);
---
${blockContent}
`;

    fs.writeFileSync(`src/components/${filename}`, astroComponent);
    console.log(`Wrote ${filename}`);
};

extractBlock('<!-- Import Feature Block -->', '<!-- Export Feature Block -->', 'FeatureImport.astro');
extractBlock('<!-- Export Feature Block -->', '<!-- Backup Feature Block -->', 'FeatureExport.astro');
extractBlock('<!-- Backup Feature Block -->', '<!-- Multi-device Feature Block -->', 'FeatureBackup.astro');
extractBlock('<!-- Multi-device Feature Block -->', null, 'FeatureMultiDevice.astro');

