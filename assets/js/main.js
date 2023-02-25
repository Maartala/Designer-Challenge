const form = document.getElementById('form');
const inputEmail = document.getElementById('inputEmail');
const confirmationPage= document.getElementById("confirmationPage");
const subscribeButton= document.getElementById('subscribe')


function confirmationPopUp(){
    confirmationPage.classList.add('openPopup');
    subscribeButton.classList.add('openPopupButton');
    inputEmail.classList.add('openPopupButton');
    console.log(inputEmail.value);
}

function backToHomePage(){
    confirmationPage.classList.remove('openPopup')
    subscribeButton.classList.remove('openPopupButton');
    inputEmail.classList.remove('openPopupButton');
}
