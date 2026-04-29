const myImage = document.querySelector("img");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if(mySrc === "images/doggy.jpg") {
        myImage.setAttribute("src","images/doggy2.jpg");
    } else {
        myImage.setAttribute("src","images/doggy.jpg");
    }
}

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name",myName);
    myHeading.textContent = `Do you love doggy, ${myName} ?`;
}

if(!localStorage.getItem("name")){
    setUserName();
}else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Do you love doggy,${storedName}`;
}

myButton.onclick = function () {
    setUserName();
}