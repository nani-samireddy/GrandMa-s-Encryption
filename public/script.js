const encryptionButton = document.getElementById("EncryptionButton");
const decryptionButton = document.getElementById("DecryptionButton");
const copyButtonForEncryption = document.getElementById(
  "CopyButtonForEncryption"
);
const copyButtonForDecryption = document.getElementById(
  "CopyButtonForDecryption"
);

const messageInputTag = document.getElementById("messageInputTag");
const messageOutputTag = document.getElementById("decryptedMessageCodeOutput");
const grandmaCodeOutputTag = document.getElementById(
  "encryptedMessageCodeOutput"
);
const grandmaCodeInputTag = document.getElementById("grandmaCodeInputTag");

//Event listeners
encryptionButton.addEventListener("click", encryptAndEnableCopy);

decryptionButton.addEventListener("click", decryptAndEnableCopy);

copyButtonForEncryption.addEventListener("click", () => {
  console.log("CopyButtonForEncryption pressed");
});

copyButtonForDecryption.addEventListener("click", () => {
  console.log("CopyButtonForDecryption pressed");
});

//functions
function encode(message) {
  return message;
}

function decode(grandmaCode) {
  return grandmaCode;
}

function encryptAndEnableCopy() {
  let message = messageInputTag.value;
  message = message.toLowerCase();
  let grandMaCode = encode(message);
  grandmaCodeOutputTag.value = grandMaCode;
}

function decryptAndEnableCopy() {}
