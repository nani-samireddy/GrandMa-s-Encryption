const encryptionButton = document.getElementById("EncryptionButton");
const decryptionButton = document.getElementById("DecryptionButton");
const copyButtonForEncryption = document.getElementById("CopyEncryptionButton");
const copyButtonForDecryption = document.getElementById("CopyDecryptionButton");
const messageInputTag = document.getElementById("messageInputTag");
const messageOutputTag = document.getElementById("messageOutputTag");
const grandmaCodeInputTag = document.getElementById("grandmaCodeInputTag");
const grandmaCodeOutputTag = document.getElementById("grandmaCodeOutputTag");

//Event listeners
encryptionButton.addEventListener("click", encryptAndEnableCopy);

decryptionButton.addEventListener("click", decryptAndEnableCopy);

copyButtonForEncryption.addEventListener("click", () => {
  console.log("CopyButtonForEncryption pressed");
  /* Copy the text inside the text field */
  navigator.clipboard.writeText(grandmaCodeOutputTag.innerText);
});

copyButtonForDecryption.addEventListener("click", () => {
  console.log("CopyButtonForDecryption pressed");
});

//functions
function encode(message) {
  return message.toString();
}

function decode(grandmaCode) {
  return grandmaCode;
}

function encryptAndEnableCopy() {
  let message = messageInputTag.value;
  message = message.toLowerCase();
  let grandMaCode = encode(message);
  grandmaCodeOutputTag.innerText = grandMaCode;

  //changing the button
  encryptionButton.classList.add("hidden");
  copyButtonForEncryption.classList.remove("hidden");
}

function decryptAndEnableCopy() {}
