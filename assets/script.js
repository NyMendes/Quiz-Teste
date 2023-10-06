document.getElementById('btn').onclick = function () {
  var contA = 0 // importante
  var contB = 0 // urgente
  var contC = 0 // circunstancial

  var radio = document.getElementsByClassName('alt')
  for (var i = 0; i < radio.length; i++) {
    if (radio[i].checked) {
      if (radio[i].value === '3') {
        contA++
      } else if (radio[i].value === '-2') {
        contB++
      } else {
        contC++
      }
    }
  }

  localStorage.setItem('exibeA', `${contA * 10}%`)
  localStorage.setItem('exibeB', `${contB * 10}%`)
  localStorage.setItem('exibeC', `${contC * 10}%`)
}
