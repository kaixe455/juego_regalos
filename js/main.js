function irRegalo1() {
let cargando = document.getElementById("cargando")
cargando.classList.remove("d-none")
let i = 0;
  if (i == 0) {
    i = 1;
    var elem = document.getElementById("myBar")
    var width = 1;
    var id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
        window.location.href = "regalo1.html"
      } else {
        width++;
        elem.style.width = width + "%"
      }
    }
    //voy a regalo1
  }
}

function checkRegalo1() {
    let letra = document.getElementById("respuesta").value.toUpperCase()
    let primeraPalabra = document.getElementById("primeraPalabra").innerText
    let segundaPalabra = document.getElementById("segundaPalabra").innerText
    let contieneLetra = false
    if(letra.length == 1) {
        let regalo1 = "HAKUNA"
        let regalo2 = "MATATA"
        if(regalo1.indexOf(letra) != -1) {
            const indexes = [];
            for (let i = 0; i < 6; i++) {
                if (regalo1[i] === letra) {
                    let audio = new Audio('mp3/correcto.mp3');
                    audio.play();
                    indexes.push(i);
                    contieneLetra = true
                }
            }
            document.getElementById("primeraPalabra").innerText = reemplazarPalabra(indexes,letra,primeraPalabra)

        }
        if(regalo2.indexOf(letra) != -1) {
            const indexes2 = [];
            for (let i = 0; i < 6; i++) {
                if (regalo2[i] === letra) {
                    let audio = new Audio('mp3/correcto.mp3');
                    audio.play();
                    indexes2.push(i);
                    contieneLetra = true
                }
            }
            document.getElementById("segundaPalabra").innerText = reemplazarPalabra(indexes2,letra,segundaPalabra)

        }

        if(!contieneLetra) {
            alert("La letra " + letra + " no está contenida!!")
            let audio = new Audio('mp3/incorrecto.mp3');
            audio.play();
        }
    } else {
        alert("Solo se puede introducir una letra")
        document.getElementById("respuesta").value = ""
    }
}

function checkRegalo2() {
    let letra = document.getElementById("respuesta").value.toUpperCase()
    let primeraPalabra = document.getElementById("primeraPalabra").innerText
    let segundaPalabra = document.getElementById("segundaPalabra").innerText
    let contieneLetra = false
    if(letra.length == 1) {
        let regalo1 = "ALMOHADA"
        let regalo2 = "DORMITORIO"
        if(regalo1.indexOf(letra) != -1) {
            const indexes = [];
            for (let i = 0; i < regalo1.length; i++) {
                if (regalo1[i] === letra) {
                    let audio = new Audio('mp3/correcto.mp3');
                    audio.play();
                    indexes.push(i);
                    contieneLetra = true
                }
            }
            document.getElementById("primeraPalabra").innerText = reemplazarPalabra(indexes,letra,primeraPalabra)

        }
        if(regalo2.indexOf(letra) != -1) {
            const indexes2 = [];
            for (let i = 0; i < regalo2.length; i++) {
                if (regalo2[i] === letra) {
                    let audio = new Audio('mp3/correcto.mp3');
                    audio.play();
                    indexes2.push(i);
                    contieneLetra = true
                }
            }
            document.getElementById("segundaPalabra").innerText = reemplazarPalabra(indexes2,letra,segundaPalabra)

        }

        if(!contieneLetra) {
            let audio = new Audio('mp3/incorrecto.mp3')
            audio.play()
            alert("La letra " + letra + " no está contenida!!")
        }
    } else {
        alert("Solo se puede introducir una letra")
        document.getElementById("respuesta").value = ""
    }
}

function checkRegalo3() {
    let letra = document.getElementById("respuesta").value.toUpperCase()
    let primeraPalabra = document.getElementById("primeraPalabra").innerText
    let segundaPalabra = document.getElementById("segundaPalabra").innerText
    let contieneLetra = false
    if(letra.length == 1) {
        let regalo1 = "MASAJE"
        let regalo2 = "CORPORAL"
        if(regalo1.indexOf(letra) != -1) {
            const indexes = [];
            for (let i = 0; i < regalo1.length; i++) {
                if (regalo1[i] === letra) {
                    let audio = new Audio('mp3/correcto.mp3');
                    audio.play();
                    indexes.push(i);
                    contieneLetra = true
                }
            }
            document.getElementById("primeraPalabra").innerText = reemplazarPalabra(indexes,letra,primeraPalabra)

        }
        if(regalo2.indexOf(letra) != -1) {
            const indexes2 = [];
            for (let i = 0; i < regalo2.length; i++) {
                if (regalo2[i] === letra) {
                    let audio = new Audio('mp3/correcto.mp3');
                    audio.play();
                    indexes2.push(i);
                    contieneLetra = true
                }
            }
            document.getElementById("segundaPalabra").innerText = reemplazarPalabra(indexes2,letra,segundaPalabra)

        }

        if(!contieneLetra) {
            let audio = new Audio('mp3/incorrecto.mp3');
            audio.play();
            alert("La letra " + letra + " no está contenida!!")
        }
    } else {
        alert("Solo se puede introducir una letra")
        document.getElementById("respuesta").value = ""
    }
}

function reemplazarPalabra(index,letra, palabra) {
    for(let h =0; h < index.length; h++) {
        palabra = setCharAt( index[h],letra, palabra)
    }
    return palabra;
}

function setCharAt(index, replacement, palabra) {
    if (index >= palabra.length) {
        return this.valueOf()
    }
 
    return palabra.substring(0, index) + replacement + palabra.substring(index + 1)
}

function resolverRegalo1() {
    let respuesta = document.getElementById("respuesta").value.toUpperCase()
    if(respuesta == "HAKUNA MATATA") {
        document.getElementById("acertijo").classList.add("d-none")
        document.getElementById("btnSiguiente").classList.remove("d-none")
        document.getElementById("fechaPremio").classList.remove("d-none")
        let imagen = document.getElementById("regaloImg")
        imagen.src = "img/entrada.jpg"
        let audio = new Audio('mp3/si.mp3');
        audio.play();
    }else {
        alert("error")
    }
}

function resolverRegalo2() {
    let respuesta = document.getElementById("respuesta").value.toUpperCase()
    if(respuesta == "ALMOHADA DORMITORIO") {
        document.getElementById("acertijo").classList.add("d-none")
        document.getElementById("btnSiguiente").classList.remove("d-none")
        document.getElementById("fechaPremio").classList.remove("d-none")
        let audio = new Audio('mp3/si.mp3');
        audio.play();
    }else {
        alert("error")
    }
}

function resolverRegalo3() {
    let respuesta = document.getElementById("respuesta").value.toUpperCase()
    if(respuesta == "MASAJE CORPORAL") {
        document.getElementById("acertijo").classList.add("d-none")
        document.getElementById("fechaPremio").classList.remove("d-none")
        let imagen = document.getElementById("regaloImg")
        imagen.src = "img/masaje.png"
        let audio = new Audio('mp3/si.mp3')
        audio.play()
        let cumple = new Audio('mp3/cumple.mp3')
        audio.addEventListener("ended", cumple.play())
        //let audio = new Audio('mp3/audio_file.mp3');
        //audio.play();
        //cancion cumpleaños
    }else {
        alert("error")
    }
}

function regalo2() {
    window.location.href = "regalo2.html"
}

function regalo3() {
    window.location.href = "regalo3.html"
}
