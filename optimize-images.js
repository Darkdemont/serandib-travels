const fs = require('fs');
const path = require('path');

const imagesDir = './images';
const outputDir = './images-optimized';

// Ensure output directory exists
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

// Get all SVG files
const svgFiles = fs.readdirSync(imagesDir).filter(file => file.endsWith('.svg'));

console.log(`Found ${svgFiles.length} SVG files to process...\n`);

svgFiles.forEach(file => {
    const filePath = path.join(imagesDir, file);
    const content = fs.readFileSync(filePath, 'utf8');
    const originalSize = fs.statSync(filePath).size;
    
    // Check if SVG contains embedded base64 images
    const hasEmbedded = content.includes('data:image');
    
    if (hasEmbedded) {
        console.log(`❌ ${file} (${(originalSize/1024/1024).toFixed(2)} MB) - Contains embedded images`);
        console.log(`   This should be converted to JPG/WebP format instead.`);
    } else {
        // Clean up SVG: remove comments, extra whitespace, unnecessary attributes
        let optimized = content
            // Remove comments
            .replace(/<!--[\s\S]*?-->/g, '')
            // Remove unnecessary whitespace between tags
            .replace(/>\s+</g, '><')
            // Remove leading/trailing whitespace
            .trim();
        
        // Write optimized SVG
        const outputPath = path.join(outputDir, file);
        fs.writeFileSync(outputPath, optimized, 'utf8');
        
        const newSize = fs.statSync(outputPath).size;
        const saved = ((1 - newSize/originalSize) * 100).toFixed(1);
        
        console.log(`✓ ${file}: ${(originalSize/1024).toFixed(2)} KB → ${(newSize/1024).toFixed(2)} KB (saved ${saved}%)`);
    }
});

console.log('\n\n⚠️  RECOMMENDATION:');
console.log('The large files (home1.svg, home2.svg, home3.svg, AB1.svg, hsection4.svg, D1.svg)');
console.log('contain embedded raster images and should be converted to JPG or WebP format.');
console.log('This will reduce file sizes by 70-90%.');
console.log('\nWould you like me to help convert them to JPG/WebP?');
