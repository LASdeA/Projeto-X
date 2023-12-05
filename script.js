function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  // Esse código abaixo faz a mesma coisa da função "toggle" destrita acima como: "html.classList.toggle("light")"
  //  if (html.classList.contains("light")) {
  //    html.classList.remove("light")
  //  } else {
  //    html.classList.add('light')
  //  }

  // pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir a img
  if (html.classList.contains("light")) {
    // se tiver light mode, adicionar a img light
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute(
      "alt",
      "Foto de Maik Brito sorrindo, usando óculos escuro e jaqueta, sem barba e fundo azul"
    )
  } else {
    // se tiver sem light mode, manter a img normal
    img.setAttribute("src", "./assets/avatar.png")
  }
}
