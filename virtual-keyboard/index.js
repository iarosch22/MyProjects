const classes = ['key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key',
                'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key' ,'double-key',
                'key', 'key', 'space', 'key', 'key', 'key', 'key', 'key'];


const data = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'NumpadSubtract', 'Equal', 'Backspace',
             'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash',
             'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter',
             'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'NumpadDecimal', 'Period', 'Slash', 'ArrowUp' ,'ShiftLeft',
             'ControlLeft', 'AltLeft', 'Space', 'AltLeft', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'ControlLeft'];


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
    let lang = 'ru';
    let caps = false;
    let shift = true;

    const BODY = document.querySelector('body');

    
    textarea = document.createElement('textarea');
    keyboard = document.createElement('div');
    

    BODY.appendChild(textarea);
    BODY.appendChild(keyboard);

    keyboard.classList.add('keyboard');

    for(let i = 0; i < enKeys.length; i++) {
        button = document.createElement('button');

        button.innerHTML = getKeyValue(i);
        button.classList.add(getKeyClass(i));
        button.dataset.key = getKeyDate(i);

        keyboard.appendChild(button);
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
    function getKeyDate(index) {
        return data[index];
    }

    keyboard.addEventListener('click', function() {
        if(event.target.tagName === 'BUTTON') {
            let key = event.target.dataset.key;
            let index = data.indexOf(key);
            textarea.innerHTML = textarea.innerHTML + getKeyValue(index);
        }
    });

    function capslockKeyboard() {

    }
    function backspaceKeyboard() {

    }
    function shiftKeyboard() {

    }

}

сreateKeyboard();
