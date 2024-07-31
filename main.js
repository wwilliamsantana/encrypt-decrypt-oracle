const textTextarea = document.getElementById("content-textarea")
const containerResult = document.getElementById("content-result")
let simpleCrypto = new SimpleCrypto("NextEducationOne")


function encryptOrDecrypt(action) {
  containerResult.innerHTML = ""
  containerResult.classList.add("result-completed")

  const paragraph = document.createElement("p")
  paragraph.className = 'content-result-text'

  if (action == "encrypt") {
    paragraph.innerText = simpleCrypto.encrypt(textTextarea.value)
  } else {
    paragraph.innerText = simpleCrypto.decrypt(textTextarea.value)
  }

  const button = document.createElement("button")
  button.innerText = "Copiar"
  button.className = "content-result-button"
  button.onclick = copyContent

  containerResult.appendChild(paragraph)
  containerResult.appendChild(button)

  textTextarea.value = ""
}

function onEncrypt() {
  encryptOrDecrypt("encrypt")
}

function onDecrypt() {
  encryptOrDecrypt("decrypt")
}

function copyContent() {
  const textCopy = document.querySelector(".content-result-text")

  navigator.clipboard.writeText(textCopy.textContent).then(() => {
    textCopy.textContent = "Texto Copiado com sucesso!"
    textCopy.classList.add("success")
  }).catch(err => {
    textCopy.textContent = `Erro ao copiar o texto: ${err}`
    textCopy.classList.add("failure")
  })
}