import startApp from './app.mjs';

document.addEventListener('DOMContentLoaded', startApp); 


const mtn = document.querySelector('#mtn')
const glo = document.querySelector('#glo')
const etisalat = document.querySelector('#etisalat')
const airtel = document.querySelector('#airtel')

document.querySelector('#check-logo').addEventListener('click', showTelecomLogo);


function showTelecomLogo() {
    let getVal = document.getElementById('phone').value;
    let getPhoneCode = getVal.substr(0,4);
    
    
    if (getPhoneCode == "0803"){
        mtn.classList.toggle('hidden')
    }else if (getPhoneCode == "0805") {
        glo.classList.toggle('hidden')
    }else if (getPhoneCode == "0809") {
        etisalat.classList.toggle('hidden')
    }else if (getPhoneCode == "0802") {
        airtel.classList.toggle('hidden')
    }
        
}