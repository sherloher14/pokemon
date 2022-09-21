function getPokemon() {
    var request = new XMLHttpRequest();
    var pokemonInput = document.getElementById("nombrePokemon");

    request.open("GET", "https://pokeapi.co/api/v2/pokemon/" + pokemonInput.value.toLowerCase(), true);
    
    request.onerror = function (e) {
        alert("Problemas al encontrar la informacion" + e);
    }

    request.send();

    request.onload = function (resp) {
        console.log(JSON.parse(resp.target.response));

        var data = JSON.parse(resp.target.response);

        insertInfor(data);
    }
}

function insertInfor(data   ) {
    var pokeName = document.getElementById("name");
    var imagen = document.getElementById("imgPokemon");
    var num = document.getElementById("num");

    var t1 = document.getElementById("type1");
    var t2 = document.getElementById("type2");

    var valueHp = document.getElementById("valueHp");
    var valueAtaque = document.getElementById("valueAtaque");
    var valueDefensa = document.getElementById("valueDefensa");
    var valueVelocidad = document.getElementById("valueVelocidad");

    imagen.setAttribute("src", data.sprites.front_default);
    pokeName.textContent = data.name.charAt(0).toUpperCase()+data.name.slice(1);
    num.textContent = "N° " + data.id;

    if(data.types.length > 1){
        t2.textContent = data.types[1].type.name.charAt(0).toUpperCase() + data.types[1].type.name.slice(1);
        t1.textContent = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
    }
    else{
        t2.textContent = "";
        t1.textContent = data.types[0].type.name.charAt(0).toUpperCase() + data.types[0].type.name.slice(1);
    }


    valueHp.textContent = data.stats[0].base_stat;
    valueAtaque.textContent = data.stats[1].base_stat;
    valueDefensa.textContent = data.stats[2].base_stat;
    valueVelocidad.textContent = data.stats[5].base_stat;
}
