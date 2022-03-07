const removeSpacesFromString = () => { 
      let text1 = ""; 
          
      let text2 =  
      text.split(" ").join(""); 
          
      document.querySelector('.outputString').textContent 
                    = text2; 
        } 

const alphabet = [
  'A','B','C','D','E','F',
  'G','H','I','J','K','L',
  'M','N','O','P','Q','R',
  'S','T','U','V','W','X',
  'Y','Z'
];

const table = document.table[0];
const resultado = document.getElementById('output');

table.addEventListener ('submit',event => {
  event.preventDefault();
  resultado.innerHTML = [... table.plaintext.value ].map(char => encrypt(char)).join('');
}
);

function encrypt(char) {
  const encrypt = Number(table.encrypt.value);
  if (alphabet.includes(char.toUpperCase()))
  { 
    const position = alphabet.indexOf(char.toUpperCase());
    const newPosition = (position + encrypt)%26;
    return alphabet[newPosition] 
  }
  else { return char }
  }
