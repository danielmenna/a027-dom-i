const frutas = ['laranja', 'limão', 'uva']
for (let i = 0; i < frutas.length; i++) {
  let fruta = document.getElementById('fruta-' + (i + 1))
  fruta.innerHTML = frutas[i]
  console.log(fruta)
}

function inserirFruta() {
  let valor = document.getElementById('fruta-' + (frutas.length + 1))
  valor.innerHTML = frutaInput.value
  console.log(valor.innerHTML)
}
