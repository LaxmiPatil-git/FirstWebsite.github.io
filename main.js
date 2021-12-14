// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Hello World";

let myImage = document.querySelector("img");
myImage.onclick = function () {
  let mySrc = myImage.getAttribute("src");
  if (mySrc == "images/firefox_icon.jpg") {
    myImage.setAttribute("src", "images/firefox2.jpg");
  } else {
    myImage.setAttribute("src", "images/firefox_icon.jpg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUsername() {
  let myName = prompt("Please entre your name");
  if (!myName) {
    setUsername();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is Cool " + myName;
  }
}
if (!localStorage.getItem("name")) {
  setUsername();
} else {
  let storedName = localStorage.getItem("name");
  myHeading.textContent = "Mozill is Cool " + storedName;
}
myButton.onclick = function () {
  setUsername();
};
