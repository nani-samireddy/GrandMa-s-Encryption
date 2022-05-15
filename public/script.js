const copyButtonForEncryption = document.getElementById("CopyEncryptionButton");
const copyButtonForDecryption = document.getElementById("CopyDecryptionButton");
const messageInputTag = document.getElementById("messageInputTag");
const messageOutputTag = document.getElementById("messageOutputTag");
const grandmaCodeInputTag = document.getElementById("grandmaCodeInputTag");
const grandmaCodeOutputTag = document.getElementById("grandmaCodeOutputTag");

//Event listeners
messageInputTag.addEventListener("input", (value) => {
  encrypt();
});

grandmaCodeInputTag.addEventListener("input", (value) => {
  decrypt();
});

copyButtonForEncryption.addEventListener("click", () => {
  console.log("CopyButtonForEncryption pressed");
  copyToClipboard(grandmaCodeOutputTag.innerText);
});

copyButtonForDecryption.addEventListener("click", () => {
  copyToClipboard(messageOutputTag.innerText);
});

//functions
function encode(message) {
  return message.toString();
}

function decode(grandmaCode) {
  return grandmaCode.toString();
}

function encrypt() {
  let message = messageInputTag.value;
  message = message.toLowerCase();
  let grandMaCode = encode(message);
  grandmaCodeOutputTag.innerText = grandMaCode;
}

function decrypt() {
  let grandMaCode = grandmaCodeInputTag.value;
  let message = decode(grandMaCode);
  messageOutputTag.innerText = message;
}

function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
}
