/* eslint-disable linebreak-style */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-undef */
/* eslint-disable no-use-before-define */
const classes = ['key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key', 'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key', 'double-key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'key', 'double-key', 'key', 'key', 'space', 'key', 'key', 'key', 'key', 'key'];
const data = ['Backquote', 'Digit1', 'Digit2', 'Digit3', 'Digit4', 'Digit5', 'Digit6', 'Digit7', 'Digit8', 'Digit9', 'Digit0', 'NumpadSubtract', 'Equal', 'Backspace', 'Tab', 'KeyQ', 'KeyW', 'KeyE', 'KeyR', 'KeyT', 'KeyY', 'KeyU', 'KeyI', 'KeyO', 'KeyP', 'BracketLeft', 'BracketRight', 'Backslash', 'CapsLock', 'KeyA', 'KeyS', 'KeyD', 'KeyF', 'KeyG', 'KeyH', 'KeyJ', 'KeyK', 'KeyL', 'Semicolon', 'Quote', 'Enter', 'ShiftLeft', 'KeyZ', 'KeyX', 'KeyC', 'KeyV', 'KeyB', 'KeyN', 'KeyM', 'Comma', 'Period', 'Slash', 'ArrowUp', 'ShiftRight', 'ControlLeft', 'AltLeft', 'Space', 'AltRight', 'ArrowLeft', 'ArrowDown', 'ArrowRight', 'Lang'];
const enKeys = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Capslock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', '\'', 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', '&#8593;', 'Shift', 'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'EN'];
const enShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '{', '}', '|', 'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ':', '"', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', '<', '>', '?', '&#8593;', 'Shift', 'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'EN'];
const enCaps = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P', '[', ']', '\\', 'Capslock', 'A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L', ';', '\'', 'Enter', 'Shift', 'Z', 'X', 'C', 'V', 'B', 'N', 'M', ',', '.', '/', '&#8593;', 'Shift', 'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'EN'];
const ruKeys = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Capslock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', '&#8593;', 'Shift', 'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'RU'];
const ruShift = ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '/', 'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', ',', '&#8593;', 'Shift', 'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'RU'];
const ruCaps = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'Й', 'Ц', 'У', 'К', 'Е', 'Н', 'Г', 'Ш', 'Щ', 'З', 'Х', 'Ъ', '\\', 'Capslock', 'Ф', 'Ы', 'В', 'А', 'П', 'Р', 'О', 'Л', 'Д', 'Ж', 'Э', 'Enter', 'Shift', 'Я', 'Ч', 'С', 'М', 'И', 'Т', 'Ь', 'Б', 'Ю', '.', '&#8593;', 'Shift', 'Ctrl', 'Alt', 'Space', 'Alt', '&#8592', '&#8595;', '&#8594;', 'RU'];
function сreateKeyboard() {
  let lang = 'en';
  if (localStorage.getItem('language')) {
    lang = localStorage.getItem('language');
  }
  let caps = false;
  let shift = false;

  const BODY = document.querySelector('body');

  textarea = document.createElement('textarea');
  keyboard = document.createElement('div');
  message = document.createElement('p');

  BODY.appendChild(textarea);
  BODY.appendChild(keyboard);
  BODY.appendChild(message);

  message.innerHTML = 'Switch language - Ctrl + Alt';

  keyboard.classList.add('keyboard');

  for (let i = 0; i < 62; i += 1) {
    button = document.createElement('button');

    button.innerHTML = getKeyValue(i);
    button.classList.add(getKeyClass(i));
    button.dataset.key = getKeyDate(i);

    keyboard.appendChild(button);
  }

  function getKeyValue(index) {
    let key = '';
    if (lang === 'en') {
      if (caps) {
        key = enCaps[index];
      }
      if (shift) {
        key = enShift[index];
      }
      if (!caps && !shift) {
        key = enKeys[index];
      }
    } else {
      if (caps) {
        key = ruCaps[index];
      }
      if (shift) {
        key = ruShift[index];
      }
      if (!caps && !shift) {
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

  document.addEventListener('keydown', (event) => {
    const buttons = document.querySelectorAll('button');
    const key = event.code;
    const index = data.indexOf(key);

    if (index >= 0) {
      event.preventDefault();
      buttons[index].classList.add('active');
      if ((event.altKey && key === 'ControlLeft')
                || (event.ctrlKey && key === 'AltLeft')) {
        changeLanguage();
      }
      switch (key) {
        case 'Tab':
          textarea.innerHTML += '    ';
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
          textarea.innerHTML += '\n';
          break;
        case 'Backspace':
          backspaceKeyboard();
          break;
        case 'Space':
          textarea.innerHTML += ' ';
          break;
        case 'AltLeft':
          break;
        case 'ControlLeft':
          break;
        default:
          textarea.innerHTML += getKeyValue(index);
      }
    } else if (key !== 'F5') {
      event.preventDefault();
    }
  });
  document.addEventListener('keyup', (event) => {
    event.preventDefault();

    const buttons = document.querySelectorAll('button');
    const key = event.code;
    const index = data.indexOf(key);
    if (index >= 0) {
      buttons[index].classList.remove('active');
    }
  });

  this.keyboard.addEventListener('click', () => {
    if (event.target.tagName === 'BUTTON') {
      const { key } = event.target.dataset;
      const index = data.indexOf(key);
      switch (key) {
        case 'Tab':
          textarea.innerHTML += '    ';
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
          textarea.innerHTML += '\n';
          break;
        case 'Backspace':
          backspaceKeyboard();
          break;
        case 'Space':
          textarea.innerHTML += ' ';
          break;
        case 'Lang':
          changeLanguage();
          break;
        case 'AltLeft':
          break;
        case 'AltRight':
          break;
        case 'ControlLeft':
          break;
        default:
          textarea.innerHTML += getKeyValue(index);
      }
    }
  });
  function capslockKeyboard() {
    const cpsBtn = document.querySelector('[data-key="CapsLock"]');
    if (caps) {
      caps = false;
      cpsBtn.classList.remove('caps');
      changeKeyboard();
    } else {
      caps = true;
      cpsBtn.classList.add('caps');
      changeKeyboard();
    }
  }
  function changeLanguage() {
    if (lang === 'ru') {
      lang = 'en';
      localStorage.setItem('language', lang);
      changeKeyboard();
    } else {
      lang = 'ru';
      localStorage.setItem('language', lang);
      changeKeyboard();
    }
  }
  function backspaceKeyboard() {
    const str = this.textarea.innerHTML;
    textarea.innerHTML = str.slice(0, -1);
  }
  function shiftKeyboard() {
    if (shift) {
      shift = false;
      changeKeyboard();
    } else {
      shift = true;
      changeKeyboard();
    }
  }

  function changeKeyboard() {
    const buttons = document.querySelectorAll('button');
    if (lang === 'en') {
      if (caps) {
        for (let i = 0; i < 62; i += 1) {
          buttons[i].innerHTML = getKeyValue(i);
        }
      } else {
        for (let i = 0; i < 62; i += 1) {
          buttons[i].innerHTML = getKeyValue(i);
        }
      }
    } else if (caps) {
      for (let i = 0; i < 62; i += 1) {
        buttons[i].innerHTML = getKeyValue(i);
      }
    } else {
      for (let i = 0; i < 62; i += 1) {
        buttons[i].innerHTML = getKeyValue(i);
      }
    }
  }
}

сreateKeyboard();
