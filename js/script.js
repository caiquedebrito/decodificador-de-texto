const textField = document.querySelector('#text-field');
const textResult = document.querySelector('#text-result');

const resultContainer = document.querySelector('#result');
const resultWarning = document.querySelector('#result-warning');

const warning = document.querySelector('#warning');

const encryptButton = document.querySelector('#encrypt-button');
const decryptButton = document.querySelector('#decrypt-button');

encryptButton.addEventListener('click', () => {
    const text = textField.value;

    if (text === '') {
      resultContainer.classList.add('hidden');
      resultWarning.classList.remove('hidden');
      return;
    }

    const encryptedText = encrypt(text);

    textResult.textContent = encryptedText;
    resultContainer.classList.remove('hidden');
    resultWarning.classList.add('hidden');
})

textField.addEventListener('input', (event) => {
  if (isInvalid(event.target.value)) {
    warning.classList.add('alert');
    encryptButton.disabled = true;
    decryptButton.disabled = true;
  } else {
    warning.classList.remove('alert');
    encryptButton.disabled = false;
    decryptButton.disabled = false;
  }
});

const isInvalid = (text) => {
  return /[\W A-Z \d]/.test(text.split(' ').join(''));
}

const encryptKeys = {
  "a": "ai",
  "e": "enter",
  "i": "imes",
  "o": "ober",
  "u": "ufat"
}

function encrypt(text) {
  const encryptedText = text.split('').map(letter => {
    return encryptKeys[letter] || letter;
  }).join('');

  return encryptedText;
}