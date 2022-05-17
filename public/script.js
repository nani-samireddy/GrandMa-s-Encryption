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
function encode(inputString) {
  let grandmaSecretCode="";
  for(let i=0;i<inputString.length;i++)
  {
      let characterAscii=inputString.charCodeAt(i);
      let grannyCode=characterAscii-96;
      let letterCode="";
      if(grannyCode==-64) 
      {
          letterCode=".0";
      }
      else
      {
          letterCode="."+grannyCode.toString();

      }
      grandmaSecretCode=grandmaSecretCode+letterCode; 
  }
  return grandmaSecretCode;
}
function decode(inputGrandmaCode)
{
  let decriptedMessage="";
  let grannyCodes=inputGrandmaCode.split(".");
  for(i=1;i<grannyCodes.length;i++)
  {
      let letterCode=Number(grannyCodes[i]); 
      let character="";
      if(letterCode==0)
      {
          character =" ";
      }
      else
      {
          let asciiValue=96+letterCode;
          character=String.fromCharCode(asciiValue);
      }
      decriptedMessage=decriptedMessage+character;
  }
  return decriptedMessage;
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
