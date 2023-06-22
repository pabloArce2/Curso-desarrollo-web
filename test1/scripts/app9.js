const textField1 = document.getElementById("text1");
setTimeout(() => {
  const existingContent = textField1.innerHTML;
  const updatedContent = existingContent.replace(/dolor/g, 'dolor (he encontrado la palabra dolor)');
  textField1.innerHTML = updatedContent;
}, 5000);
