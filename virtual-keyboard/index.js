const enKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                `Tab`, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
                'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];

const ruKeys = [];

function сreateKeyboard() {
    const BODY = document.querySelector('body');

    
    textarea = document.createElement('textarea');
    divKeyboard = document.createElement('div');
   
    

    BODY.appendChild(textarea);
    BODY.appendChild(divKeyboard);

    divKeyboard.classList.add('keyboard');

    for(let i = 0; i < enKeys.length; i++) {
        this.button = document.createElement('button');
        this.button.innerHTML = enKeys[i];
        this.button.classList.add('keyboard_key');

        if(enKeys[i] === 'Backspace' ||
        enKeys[i] === 'Tab' ||
        enKeys[i] === 'Capslock' ||
        enKeys[i] === 'Enter' ||
        enKeys[i] === 'Shift') {
            this.button.classList.add('double-key');
        }
        if(enKeys[i] === 'Space') {
            this.button.classList.add('space');
        }
        divKeyboard.appendChild(this.button);
    }
}

сreateKeyboard();
