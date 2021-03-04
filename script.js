//Caesar-koden:
let caesarCipher = (str) => {
  //Alfabetet i dets krypteret form efter Caesar-princippet
  let cipherTxt = {
    a: 'd', b: 'e', c: 'f',
    d: 'g', e: 'h', f: 'i',
    g: 'j', h: 'k', i: 'l',
    j: 'm', k: 'n', l: 'o',
    m: 'p', n: 'q', o: 'r',
    p: 's', q: 't', r: 'u',
    s: 'v', t: 'w', u: 'x',
    v: 'y', w: 'z', x: 'a',
    y: 'b', z: 'c'    
  }
  
  //konverterer str til lowercase bogstaver
  str = str.toLowerCase();
  
  //decipher den indtastede kode
  let decipher = '';
  for(let i = 0 ; i < str.length; i++){
    decipher += cipherTxt[str[i]];
  }
  
  //retunerer outputtet
  return decipher;
 }

document.getElementById("btn1").addEventListener("click", function(){
	let caesar = document.getElementById("caesarInput").value;
	document.getElementById("caesarOutput").innerHTML = caesarCipher(caesar);
});

//Vigenere-koden:
let vigenereCipher = (str) => {
  //Alfabetet i dets krypteret form efter Vigenere-princippet
  let cipherTxt2 = {
    a: 'd', b: 'e', c: 'f',
    d: 'g', e: 'h', f: 'i',
    g: 'j', h: 'k', i: 'l',
    j: 'm', k: 'n', l: 'o',
    m: 'p', n: 'q', o: 'r',
    p: 's', q: 't', r: 'u',
    s: 'v', t: 'w', u: 'x',
    v: 'y', w: 'z', x: 'a',
    y: 'b', z: 'c'    
  }
  
  //konverterer str til lowercase bogstaver
  str = str.toLowerCase();
  
  //decipher den indtastede kode
  let decipher = '';
  for(let i = 0 ; i < str.length; i++){
    decipher += cipherTxt2[str[i]];
  }
  
  //retunerer outputtet
  return decipher;
 }

document.getElementById("btn2").addEventListener("click", function(){
	let vigenere = document.getElementById("vigenereInput").value;
	document.getElementById("vigenereOutput").innerHTML = vigenereCipher(vigenere);
});


