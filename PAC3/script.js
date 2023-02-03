
const light = document.getElementById('light');
const dark = document.getElementById('dark');
const theme = document.getElementById('theme');
const currentTheme = localStorage.getItem('theme');



function masInfo(pokemonID, volteardevuelta = false) {
    //document.getElementById(pokemonID).style.display = volteardevuelta ? "block": "none";
    //document.getElementById("back".concat("_", pokemonID)).style.display = volteardevuelta ? "none" : "block";
    }


function filtrado() {
    let filtrar = document.getElementById('filtradobox').value;
    
    if (filtrar) {
    let elementos = document.getElementsByClassName('flex-item');
    for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "none";
    }
    
    
    for (let i = 0; i < elementos.length; i++) {
    if (elementos[i].id.indexOf(filtrar) == 0) {
    elementos[i].style.display = "block";
    }
    }
    
    } else {
    let elementos = document.getElementsByClassName('flex-item');
    for (let i = 0; i < elementos.length; i++) {
    elementos[i].style.display = "block";
    }
    }
    }

if (currentTheme == 'dark') {
    document.body.classList.toggle('dark');
}
light.addEventListener('change', () => {
    document.body.classList.remove('dark');
    localStorage.setItem('theme', 'light');
});
dark.addEventListener('change', () => {
    document.body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
});

//check parametros
const queryString = window.location.search;
console.log(queryString);
if (!queryString || getParameterByName('pokeId') == '') {


function generarNumerosAleatorios() {
$numeros = [];
$numero = 0;

var numPokesdefecto = 10;
var numeroPokes = window.location.href.indexOf('NumPokes') == -1 ? numPokesdefecto : getParameterByName('NumPokes');

for ($i = 0; $i < numeroPokes; $i++) {
$numero = Math.floor(Math.random() * 900);
if ($numeros.indexOf($numero) == -1) {
$numeros.push($numero);
} else {
$i--;
}
}
return $numeros;
}

const alldetailedinfo = [];
$numeros = generarNumerosAleatorios();
document.write("<ul class='flexbox'>");
for ($i = 0; $i < $numeros.length; $i++) {
$numero = $numeros[$i];
$url = "https://pokeapi.co/api/v2/pokemon/" + $numero;
fetch($url)
.then(function(response) {
return response.json();
})
.then(function(data) {
let cartaspokemon = "";
cartaspokemon += '<li class="flex-item" style="border:   0px;" id="' + data.name + '">';
cartaspokemon += '<div class="scene scene--card">';
cartaspokemon += '<div class="card" id="" style="height: 390px;">';
cartaspokemon += '<div class="card__face card__face--front" id="' + data.id + '">';
cartaspokemon += '<h5 class="card-title">' + data.name + '</h5>';
cartaspokemon += '<img src="' + data.sprites.front_default +'" style="width: 100%;" "/>';
if (data.types.length == 1) {
cartaspokemon += '<p>' + data.types[0].type.name + '</p>';
} else {
cartaspokemon += '<p>' + data.types[0].type.name + "|" + data.types[1].type.name + '</p>';
}

cartaspokemon += '<p>' + '<button onclick="masInfo('+ data.id +')">' + 'Más info pokémon Nº ' + data.id + '</button>' + '</p>';

//Trasera carta

    cartaspokemon += '</div>';

    cartaspokemon += '<div class="card__face card__face--back" id="' + data.id + '">';
    cartaspokemon += '<h5 class="card-title">' + data.name + '</h5>';
    cartaspokemon += '<img src="' + data.sprites.back_default + '"/>';
    cartaspokemon += '<div class="column">';
    cartaspokemon += '<p>' + 'HP: ' + data.stats[0].base_stat + '</p>';
    cartaspokemon += '<p>' + 'Attack: ' + data.stats[1].base_stat + '</p>';
    cartaspokemon += '<p>' + 'Defense: ' + data.stats[2].base_stat + '</p>';
    cartaspokemon += '<p>' + 'Special Attack: ' + data.stats[3].base_stat + '</p>';
    cartaspokemon += '<button style="height: 70px;width: 70px;background-image: url(\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + data.id + '.gif\');background-size: cover;border-radius: 40px;"></button>';
    cartaspokemon += '</div><div class="column">';
    cartaspokemon += '<p>' + 'Special Defense: ' + data.stats[4].base_stat + '</p>';
    cartaspokemon += '<p>' + 'Speed: ' + data.stats[5].base_stat + '</p>';
    let sum = data.stats[0].base_stat+data.stats[1].base_stat+data.stats[2].base_stat+data.stats[3].base_stat+data.stats[4].base_stat+data.stats[5].base_stat;
    cartaspokemon += '<p>' + 'Total: ' + sum + '</p>';
    cartaspokemon += '<p>' + 'Weight: ' + data.weight + '</p>';
    cartaspokemon += '</div>';
    cartaspokemon += '</div>';

cartaspokemon += '</div>';
cartaspokemon += '</li>';
cartaspokemon += '</ul>';
document.getElementById('Pokemonflexbox').innerHTML += cartaspokemon;
filtrado();
var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
})
}

function masInfo(pokemonID, volteardevuelta = false) {
//document.getElementById(pokemonID).style.display = volteardevuelta ? "block": "none";
//document.getElementById("back".concat("_", pokemonID)).style.display = volteardevuelta ? "none" : "block";
}

function filtrado() {
  let filtrar = document.getElementById('filtradobox').value;

  if (filtrar) {
    let elementos = document.getElementsByClassName('flex-item');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.display = "none";
    }


    for (let i = 0; i < elementos.length; i++) {
			//Habilitar filtrado con comodín *!
    	let filtrarsincomodin = filtrar.split("");
			let nombrepokesincomodin = elementos[i].id.split("");
      if(filtrar.indexOf("*") >= 0){
				for (let m = 0; m < filtrar.match(/\*/g).length; m++){
					nombrepokesincomodin.splice(filtrarsincomodin.indexOf("*"), 1);
					filtrarsincomodin.splice(filtrarsincomodin.indexOf("*"), 1);
				}
      }
			filtrarsincomodin = filtrarsincomodin.join("");
			nombrepokesincomodin = nombrepokesincomodin.join("");
      if (nombrepokesincomodin.indexOf(filtrarsincomodin) == 0) {
        elementos[i].style.display = "block";
      }
    }

  } else {
    let elementos = document.getElementsByClassName('flex-item');
    for (let i = 0; i < elementos.length; i++) {
      elementos[i].style.display = "block";
    }
  }
}

}
else {

  //Si hay PokeID mostramos solo el
var id = getParameterByName('pokeId');
const url = "https://pokeapi.co/api/v2/pokemon/" + id;
fetch(url)
.then(function(response) {
return response.json();
})
.then(function(data) {
  let cartaspokemon = "";
  cartaspokemon += '<ul class="flexbox">'
  cartaspokemon += '<li class="flex-item" style="border:   0px;" id="' + data.name + '">';
  cartaspokemon += '<div class="scene scene--card">';
  cartaspokemon += '<div class="card" id="" style="height: 390px;">';
  cartaspokemon += '<div class="card__face card__face--front" id="' + data.id + '">';
  cartaspokemon += '<h5 class="card-title">' + data.name + '</h5>';
  cartaspokemon += '<img src="' + data.sprites.front_default +'" style="width: 100%;" "/>';
  if (data.types.length == 1) {
  cartaspokemon += '<p>' + data.types[0].type.name + '</p>';
  } else {
  cartaspokemon += '<p>' + data.types[0].type.name + "|" + data.types[1].type.name + '</p>';
  }
  
  cartaspokemon += '<p>' + '<button onclick="masInfo('+ data.id +')">' + 'Más info pokémon Nº ' + data.id + '</button>' + '</p>';
  
  //Trasera carta
      cartaspokemon += '</div>';
      cartaspokemon += '<div class="card__face card__face--back" id="' + data.id + '">';
      cartaspokemon += '<h5 class="card-title">' + data.name + '</h5>';
      cartaspokemon += '<img src="' + data.sprites.back_default + '"/>';
      cartaspokemon += '<div class="column">';
      cartaspokemon += '<p>' + 'HP: ' + data.stats[0].base_stat + '</p>';
      cartaspokemon += '<p>' + 'Attack: ' + data.stats[1].base_stat + '</p>';
      cartaspokemon += '<p>' + 'Defense: ' + data.stats[2].base_stat + '</p>';
      cartaspokemon += '<p>' + 'Special Attack: ' + data.stats[3].base_stat + '</p>';
      cartaspokemon += '<button style="height: 70px;width: 70px;background-image: url(\'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/' + data.id + '.gif\');background-size: cover;border-radius: 40px;"></button>';
      cartaspokemon += '</div><div class="column">';
      cartaspokemon += '<p>' + 'Special Defense: ' + data.stats[4].base_stat + '</p>';
      cartaspokemon += '<p>' + 'Speed: ' + data.stats[5].base_stat + '</p>';
      let sum = data.stats[0].base_stat+data.stats[1].base_stat+data.stats[2].base_stat+data.stats[3].base_stat+data.stats[4].base_stat+data.stats[5].base_stat;
      cartaspokemon += '<p>' + 'Total: ' + sum + '</p>';
      cartaspokemon += '<p>' + 'Weight: ' + data.weight + '</p>';
      cartaspokemon += '</div>';
      cartaspokemon += '</div>';
  cartaspokemon += '</div>';
  cartaspokemon += '</li>';
  cartaspokemon += '</ul>';
  var url = window.location.href.split('?')[0];
  cartaspokemon += '<div> <button onclick="location.href=\''+url+'\';">Volver</button></div>'
  document.body.innerHTML = cartaspokemon;
  var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});
})
}





function getParameterByName(name, url = window.location.href) {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
}

var cards = document.querySelectorAll('.card');

[...cards].forEach((card)=>{
  card.addEventListener( 'click', function() {
    card.classList.toggle('is-flipped');
  });
});