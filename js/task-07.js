const refs = {
    input: document.querySelector('#font-size-control'),
    inputLabel: document.querySelector('#text'),
};

const changeFontSize = () => {
    refs.inputLabel.style.fontSize = `${refs.input.value * 1.5}px`;
};

refs.input.addEventListener('change', changeFontSize);

