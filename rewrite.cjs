const fs = require('fs');
let content = fs.readFileSync('src/components/Home.astro', 'utf8');

// Add imports
const imports = `import FeatureImport from './FeatureImport.astro';
import FeatureExport from './FeatureExport.astro';
import FeatureBackup from './FeatureBackup.astro';
import FeatureMultiDevice from './FeatureMultiDevice.astro';`;

content = content.replace('import FAQ from \'./FAQ.astro\';', `import FAQ from './FAQ.astro';\n${imports}`);

// Replace blocks
const startIndex = content.indexOf('<!-- Import Feature Block -->');
// find the end of Multi-device block
const multiStart = content.indexOf('<!-- Multi-device Feature Block -->');
const multiEnd = content.indexOf('</FeatureBlock>', multiStart) + '</FeatureBlock>'.length;

const newContent = content.substring(0, startIndex) + `<FeatureImport />
<FeatureExport />
<FeatureBackup />
<FeatureMultiDevice />

` + content.substring(multiEnd);

fs.writeFileSync('src/components/Home.astro', newContent);
console.log('Rewrote Home.astro');
