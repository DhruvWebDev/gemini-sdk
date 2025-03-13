function formatFileContents(fileContents) {
    return fileContents.replace(/\\n/g, '\n');
  }
  
  const data = {
    ".eslintrc.json": {
      content: "{\n  \"extends\": \"next/core-web-vitals\"\n}",
    },
  };
  
  function formatFiles(files) {
    const formattedFiles = {};
    for (const filename in files) {
      if (files.hasOwnProperty(filename)) {
        formattedFiles[filename] = {
          content: formatFileContents(files[filename].content),
        };
      }
    }
    return formattedFiles;
  }
  
  const output = formatFiles(data);
  console.log(JSON.stringify(output, null, 2)); // Use JSON.stringify for better output