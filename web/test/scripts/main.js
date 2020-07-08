let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/apple.png') {
      myImage.setAttribute ('src','images/think.png');
    } else {
      myImage.setAttribute ('src','images/apple.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'BYTE INTO AN APPLE, ' + myName;
  }
}

if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.innerHTML = 'BYTE INTO AN APPLE, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}