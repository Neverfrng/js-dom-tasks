// BEGIN
(function beautifyBody() {
    const bodyContent = document.body.innerHTML.trim();
  
    const lines = bodyContent.split('\n');
  
    const wrappedLines = lines.map(line => `<p>${line.trim()}</p>`);
  
    document.body.innerHTML = wrappedLines.join('\n');
  })();
// END