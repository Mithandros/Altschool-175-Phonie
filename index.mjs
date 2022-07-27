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
    
    
    if (getPhoneCode == "0803" || getPhoneCode == "0806" || getPhoneCode == "0816" || getPhoneCode == "0810" || getPhoneCode == "0813" || getPhoneCode == "0814" || getPhoneCode == "0903" || getPhoneCode == "0906" || getPhoneCode == "0703" || getPhoneCode == "0706"){
        mtn.classList.toggle('hidden')
        glo.classList.add('hidden')
        etisalat.classList.add('hidden')
        airtel.classList.add('hidden')
    }else if (getPhoneCode == "0805" || getPhoneCode == "0905" ||getPhoneCode == "0807" || getPhoneCode == "0811" || getPhoneCode == "0705" || getPhoneCode == "0815") {
        glo.classList.toggle('hidden')
        mtn.classList.add('hidden')
        etisalat.classList.add('hidden')
        airtel.classList.add('hidden')
    }else if (getPhoneCode == "0809" || getPhoneCode == "0909" || getPhoneCode == "0908" || getPhoneCode == "0818" || getPhoneCode == "0817") {
        etisalat.classList.toggle('hidden')
        mtn.classList.add('hidden')
        glo.classList.add('hidden')
        airtel.classList.add('hidden')
    }else if (getPhoneCode == "0802" || getPhoneCode == "0907" || getPhoneCode == "0708" || getPhoneCode == "0902" || getPhoneCode == "0812" || getPhoneCode == "0808" || getPhoneCode == "0701") {
        airtel.classList.toggle('hidden')
        mtn.classList.add('hidden')
        glo.classList.add('hidden')
        etisalat.classList.add('hidden')
    }
        
}