function clearDisplay(){
    display.textContent = '';
}

const display = document.querySelector('.display');
const numKeys = document.querySelectorAll('.num');
let defaultDisplay = true;

numKeys.forEach(key => {
    key.addEventListener('click', e => {
        if(defaultDisplay){
            clearDisplay();
            defaultDisplay = !defaultDisplay;
        }
        display.textContent += key.value;
    })
})