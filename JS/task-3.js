const textInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

textInput.addEventListener('input', () => {
    const name = textInput.value.trim();
    nameOutput.textContent = name === '' ? 'Anonymous' : name;
});

// 