const fileInput = document.getElementById("evidence");
if (fileInput) {
  const fileName = document.getElementById("evidence-names");
  const defaultText = "Choose a file...";
  fileInput.onchange = () => {
    const numFiles = fileInput.files.length;
    if (numFiles > 1) {
      fileName.textContent = `${numFiles} files attached`;
    } else if (numFiles == 1) {
      fileName.textContent = fileInput.files[0].name;
    } else {
      fileName.textContent = defaultText;
    }
  };
  fileName.textContent = defaultText;
}

if (document.getElementById("backToTop")) {
  addBackToTop({backgroundColor: '#00d5b3'});
}