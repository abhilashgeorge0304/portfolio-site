const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDirectory = path.join(__dirname, 'src', 'content', 'blog');
const files = fs.readdirSync(postsDirectory).filter(file => file.endsWith('.mdx'));

for (const file of files) {
  const fullPath = path.join(postsDirectory, file);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  
  // Use gray-matter to parse the file
  const parsed = matter(fileContents);
  
  // Find first image in markdown `![alt](url)` or HTML `<img src="url" />`
  let firstImageUrl = '';
  
  // Regex for Markdown images: ![alt](url)
  const mdRegex = /!\[.*?\]\((.*?)\)/;
  // Regex for HTML images: <img src="url" ... />
  const htmlRegex = /<img.*?src=["'](.*?)["'].*?>/i;
  
  const mdMatch = parsed.content.match(mdRegex);
  const htmlMatch = parsed.content.match(htmlRegex);
  
  // Find which one appears first in the content
  const mdIndex = mdMatch ? parsed.content.indexOf(mdMatch[0]) : Infinity;
  const htmlIndex = htmlMatch ? parsed.content.indexOf(htmlMatch[0]) : Infinity;
  
  if (mdIndex < htmlIndex && mdMatch) {
    firstImageUrl = mdMatch[1];
  } else if (htmlMatch) {
    firstImageUrl = htmlMatch[1];
  }
  
  // Update the frontmatter
  if (firstImageUrl && (!parsed.data.heroImage || parsed.data.heroImage === '')) {
    parsed.data.heroImage = firstImageUrl;
    
    // Convert back to string
    const newFileContents = matter.stringify(parsed.content, parsed.data);
    fs.writeFileSync(fullPath, newFileContents, 'utf8');
    console.log(`Updated ${file} with heroImage: ${firstImageUrl}`);
  } else if (parsed.data.heroImage) {
    console.log(`${file} already has heroImage: ${parsed.data.heroImage}`);
  } else {
    console.log(`No image found for ${file}`);
  }
}
