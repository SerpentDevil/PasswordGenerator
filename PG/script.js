const mainEl = document.querySelector(".main");

const passwordEl = document.createElement("input");
passwordEl.classList.add("password");
passwordEl.setAttribute("placeholder", "Сгенерировать пароль");
passwordEl.addEventListener("keypress", (e) => {
  e.preventDefault();
});
passwordEl.addEventListener("focus", (e) => {
  navigator.clipboard.writeText(passwordEl.value);
});

const copyBtn = document.createElement("button");
copyBtn.classList.add("password-button");
copyBtn.innerText = "Copy";
copyBtn.addEventListener("click", (e) => {
  passwordEl.select();
  passwordEl.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(passwordEl.value);
});

const generateBtn = document.createElement("button");
generateBtn.classList.add("password-button");
generateBtn.innerText = "Сгенерировать";
generateBtn.addEventListener("click", (e) => {
  let password = generatePassword(12);
  console.log();
  passwordEl.value = password;
});

function generatePassword(passwordLenght) {
  const numberChars = "0123456789";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const allChars = numberChars + upperChars + lowerChars;

  let randomString = "";

  for (let i = 0; i < passwordLenght; i++) {
    let randomNumber = Math.floor(Math.random() * allChars.length);
    randomString += allChars[randomNumber];
  }

  return randomString;
}

mainEl.appendChild(passwordEl);
mainEl.appendChild(copyBtn);
mainEl.appendChild(generateBtn);