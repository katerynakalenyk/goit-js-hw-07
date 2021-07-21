const checkValid = document.querySelector("#validation-input");

checkValid.addEventListener("focus", onInputFocus);
checkValid.addEventListener("blur", onInputBlur);

function onInputFocus(event) {
  checkValid.classList.remove("valid");
  checkValid.classList.remove("invalid");
}

function onInputBlur(event) {
  Number(event.currentTarget.value.length) ===
  Number(checkValid.dataset.length)
    ? checkValid.classList.add("valid")
    : checkValid.classList.add("invalid");
}