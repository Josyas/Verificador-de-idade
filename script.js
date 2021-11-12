function verificar()
{
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[erro] Verifique os dados novamente!')
    }
    else {
      var fsex = document.getElementsByName('radsex') 
      var idade = ano - Number(fano.value) 
      var genero = ''
      var img = document.createElement('img')
      img.setAttribute('id', 'foto')
      if (fsex[0].checked) {
        genero = 'Homem'
        if (idade >= 0 && idade < 10) {
          //Criança
          img.setAttribute('src', 'fotos/criançamenino.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'fotos/jovemhomem.png')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'fotos/adulto.png')
        } else {
          //Idoso
          img.setAttribute('src', 'fotos/velho.png')
        }
      } else if (fsex[1].checked) {
        genero = 'Mulher'
        if (idade >= 0 && idade < 10) {
          //Criança
          img.setAttribute('src', 'fotos/criançamenina.png')
        } else if (idade < 21) {
          //Jovem
          img.setAttribute('src', 'fotos/jovemmulher.png')
        } else if (idade < 50) {
          //Adulto
          img.setAttribute('src', 'fotos/adulta.png')
        } else {
          //Idosa
          img.setAttribute('src', 'fotos/velha.png')
        }
      }
      res.style.textAlign = 'center'
      res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
      res.appendChild(img)
    }
}


