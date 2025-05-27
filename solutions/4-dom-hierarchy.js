// BEGIN
export default function extractData(root) {
    const paragraphs = root.getElementsByTagName('p');
    
    return Array.from(paragraphs).map(p => p.textContent.trim());
  }
// END