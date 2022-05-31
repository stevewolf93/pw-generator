

const label = document.querySelector(`#showPassword`);
function randomString() {
  let randomString = Math.random().toString(36).slice(2, 16);
  console.log(randomString);
label.innerHTML = randomString;
  return randomString;
}
