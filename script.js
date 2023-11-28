// 1
document.addEventListener("DOMContentLoaded", function() {
    var spalvuMasyvas = ["red", "green", "blue", "yellow"]
    var mygtukas = document.getElementById("keistiSpalva")
  
    mygtukas.addEventListener("click", function() {
      var atsitiktineSpalva = spalvuMasyvas[Math.floor(Math.random() * spalvuMasyvas.length)]
  
      mygtukas.style.backgroundColor = atsitiktineSpalva;
    })
  })
  

// 2
// document.addEventListener("DOMContentLoaded", function() {
//     var mygtukas = document.getElementById("keistiSpalva")
  
//     mygtukas.addEventListener("click", function() {
//       var r = Math.floor(Math.random() * 256)
//       var g = Math.floor(Math.random() * 256)
//       var b = Math.floor(Math.random() * 256)
  
//       var atsitiktineSpalva = "rgb(" + r + "," + g + "," + b + ")";
//       mygtukas.style.backgroundColor = atsitiktineSpalva;
//     })
//   })


// 3
// document.addEventListener("DOMContentLoaded", function() {
//     var mygtukas = document.getElementById("pridetiSpalva")
//     var boxesElement = document.getElementById("boxes")
  
//     mygtukas.addEventListener("click", function() {
//       var r = Math.floor(Math.random() * 256)
//       var g = Math.floor(Math.random() * 256)
//       var b = Math.floor(Math.random() * 256)
  
//       var atsitiktineSpalva = "rgb(" + r + "," + g + "," + b + ")"
  
//       var naujasKvadratėlis = document.createElement("div")
//       naujasKvadratėlis.className = "box"
//       naujasKvadratėlis.style.backgroundColor = atsitiktineSpalva
  
//       boxesElement.appendChild(naujasKvadratėlis)
//     })
//   })
  


// 4
// document.addEventListener("DOMContentLoaded", function() {
//     var mygtukas = document.getElementById("pridetiSpalva")
//     var boxesElement = document.getElementById("boxes")
//     var spalvuMasyvas = []
  
//     mygtukas.addEventListener("click", function() {
//       boxesElement.innerHTML = ''
//       spalvuMasyvas = []
  
//       for (var i = 0; i < 3; i++) {
//         var r = Math.floor(Math.random() * 256)
//         var g = Math.floor(Math.random() * 256)
//         var b = Math.floor(Math.random() * 256)
//         var atsitiktineSpalva = "rgb(" + r + "," + g + "," + b + ")"
//         spalvuMasyvas.push({
//           spalva: atsitiktineSpalva,
//           kodas: rgbToHex(r, g, b)
//         })
//       }
  
//       spalvuMasyvas.forEach(function(spalva) {
//         var naujasKvadratėlis = document.createElement("div")
//         naujasKvadratėlis.className = "box"
//         naujasKvadratėlis.style.backgroundColor = spalva.spalva
//         naujasKvadratėlis.textContent = spalva.kodas
//         boxesElement.appendChild(naujasKvadratėlis)
//       })
//     })

//     function rgbToHex(r, g, b) {
//       return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b)
//     }

//     function componentToHex(c) {
//       var hex = c.toString(16)
//       return hex.length == 1 ? "0" + hex : hex
//     }
//   })
