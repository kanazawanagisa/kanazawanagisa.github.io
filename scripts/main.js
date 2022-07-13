let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/やかん.jfif') {
      myImage.setAttribute('src','images/yakan.jfif');
    } else {
      myImage.setAttribute('src','images/やかん.jfif');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('名前を教えて');
  if(!myName) {
    setUserName();
  } else {
   localStorage.setItem('name', myName);
   myHeading.textContent = myName+'さんようこそ';
}
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'storedName+'さんようこそ';
}
myButton.onclick = function() {
  setUserName();
}
