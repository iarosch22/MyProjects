const classes = ['key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key' ,'double-key',
                'key', 'key', 'space', 'key', 'key', 'key', 'key', 'key'];

const enKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                `Tab`, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
                'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];

const ruKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                `Tab`, 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
                'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
                'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];



function сreateKeyboard() {
    let lang = 'en';
    let caps = false;
    let shift = true;

    const BODY = document.querySelector('body');

    
    textarea = document.createElement('textarea');
    divKeyboard = document.createElement('div');
    

    BODY.appendChild(textarea);
    BODY.appendChild(divKeyboard);

    divKeyboard.classList.add('keyboard');

    for(let i = 0; i < enKeys.length; i++) {
        button = document.createElement('button');
        button.innerHTML = getKeyValue(i);
        button.classList.add(getKeyClass(i));
        divKeyboard.appendChild(button);
    }

    function getKeyValue(index) {
        let key = '';
        if(lang === 'en') {
            key = enKeys[index];
        } else {
            key = ruKeys[index];
        }

        return key;
    }

    function getKeyClass(index) {
        return classes[index];
    }
}

сreateKeyboard();
