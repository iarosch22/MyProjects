const classes = ['key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key' ,'double-key',
                'key', 'key', 'space', 'key', 'key', 'key', 'key', 'key'];


const data = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'NumpadSubtract', 'Equal', 'Backspace',
             'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
             'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
             'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp' ,'ShiftRight',
             'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlRight'];


const enKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                `Tab`, 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\',
                'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter',
                'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];

const enShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace',
                `Tab`, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|',
                'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter',
                'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];

const enCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                `Tab`, 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\',
                'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter',
                'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];


const ruKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                `Tab`, 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\',
                'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter',
                'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];

const ruShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
                `Tab`, 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/',
                'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
                'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];

const ruCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace',
                `Tab`, 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\',
                'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter',
                'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#8593;' ,'Shift',
                'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'Ctrl'];


function сreateKeyboard() {
    let lang = 'en';
    let caps = false;
    let shift = false;

    const BODY = document.querySelector('body');

    
    textarea = document.createElement('textarea');
    keyboard = document.createElement('div');
    

    BODY.appendChild(textarea);
    BODY.appendChild(keyboard);

    keyboard.classList.add('keyboard');

    for(let i = 0; i < 62; i++) {
        button = document.createElement('button');

        button.innerHTML = getKeyValue(i);
        button.classList.add(getKeyClass(i));
        button.dataset.key = getKeyDate(i);

        keyboard.appendChild(button);
    }

    function getKeyValue(index) {
        let key = '';
        if(lang === 'en') {
            if(caps) {
                key = enCaps[index];
            }
            if(shift) {
                key = enShift[index];
            }
            if(!caps && !shift) {
                key = enKeys[index];
            }
        } else {
            if(caps) {
                key = ruCaps[index];
            } 
            if(shift) {
                key = ruShift[index];
            }
            if(!caps && !shift) {
                key = ruKeys[index];
            }
        }
        return key;
    }
    function getKeyClass(index) {
        return classes[index];
    }
    function getKeyDate(index) {
        return data[index];
    }

    document.addEventListener('keydown', function(event) {

        let buttons = document.querySelectorAll('button');
        let key = event.code;
        let index = data.indexOf(key);
        console.log(index);
    
        if(index >= 0) {
            event.preventDefault();
            buttons[index].classList.add('active');
            switch (key) {
                case 'Tab':
                    textarea.innerHTML = textarea.innerHTML + '    ';
                    break;
                case 'CapsLock':
                    capslockKeyboard();
                    break;
                case 'ShiftLeft':
                    shiftKeyboard();
                    break;
                case 'ShiftRight':
                    shiftKeyboard();
                    break;
                case 'Enter':
                    textarea.innerHTML = textarea.innerHTML + '\n';
                    break;
                case 'Backspace':
                    backspaceKeyboard();
                    break;
                case 'Space':
                    textarea.innerHTML = textarea.innerHTML + ' ';
                    break;
                default:
                    textarea.innerHTML = textarea.innerHTML + getKeyValue(index);
            }
        }

        console.log(event.code);
    })
    document.addEventListener('keyup', function(event) {
        event.preventDefault();

        let buttons = document.querySelectorAll('button');
        let key = event.code;
        let index = data.indexOf(key);
        if(index >= 0) {
            buttons[index].classList.remove('active');
        }
    })



    keyboard.addEventListener('click', function() {
        if(event.target.tagName === 'BUTTON') {
            let key = event.target.dataset.key;
            let index = data.indexOf(key);
            
            switch (key) {
                case 'Tab':
                    textarea.innerHTML = textarea.innerHTML + '    ';
                    break;
                case 'CapsLock':
                    capslockKeyboard();
                    break;
                case 'ShiftLeft':
                    shiftKeyboard();
                    break;
                case 'ShiftRight':
                    shiftKeyboard();
                    break;
                case 'Enter':
                    textarea.innerHTML = textarea.innerHTML + '\n';
                    break;
                case 'Backspace':
                    backspaceKeyboard();
                    break;
                case 'Space':
                    textarea.innerHTML = textarea.innerHTML + ' ';
                    break;
                default:
                    textarea.innerHTML = textarea.innerHTML + getKeyValue(index);
            }
        }
    });

    function capslockKeyboard() {
        let cpsBtn = document.querySelector('[data-key="CapsLock"]');
        if(caps) {
            caps = false;
            cpsBtn.classList.remove('caps');
            changeKeyboard();
        } else {
            caps = true;
            cpsBtn.classList.add('caps');
            changeKeyboard();
        }
    }
    function backspaceKeyboard() {
        let str = textarea.innerHTML;
        textarea.innerHTML = str.slice(0, -1);
    }
    function shiftKeyboard() {
        let shiftBtn = document.querySelector('[data-key="Shift"]');

        if(shift) {
            shift = false;
            changeKeyboard();
        } else {
            shift = true;
            changeKeyboard();
        }
    }


    function changeKeyboard() {
        const buttons = document.querySelectorAll('button');
        if(lang === 'en') {
            if(caps) {
                for(let i = 0; i < 62; i++) {
                    buttons[i].innerHTML = getKeyValue(i);
                }
            } else {
                for(let i = 0; i < 62; i++) {
                    buttons[i].innerHTML = getKeyValue(i);
                }
            }
        } else {

        }
    }
}

сreateKeyboard();
