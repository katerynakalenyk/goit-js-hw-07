const refs = {
    input: document.querySelector('#name-input'),
    nameLabel: document.querySelector('#name-output'),
};

refs.input.oninput= ({ target: { value } }) =>
  (refs.nameLabel.textContent = value.trim() !== "" ? value : "незнакомец");



