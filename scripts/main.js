

function init(){
    let myImage = document.querySelector('img');
    myImage.onclick = function () {
        let mySrc = myImage.getAttribute('src');
        if (mySrc === 'images/firefox-icon.png') {
            myImage.setAttribute('src', 'images/firefox2.png');
        } else {
            myImage.setAttribute('src', 'images/firefox-icon.png');
        }
    }
}

function setHeading(name){
    document.querySelector('h1').textContent='Mozilla 酷毙了，' + name + '！';
}
function setUserName() {
    let myName = prompt('请输入你的名字');
    localStorage.setItem('name', myName);
    setHeading(myName);
  } 
//按钮点击
function btnClick(){
    let storedName = localStorage.getItem('name');
    if(!storedName) {
       setUserName();
    } else {
       setHeading(storedName);
    }
    let myButton = document.querySelector('button'); 
    myButton.onclick = setUserName;
}
