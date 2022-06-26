import 'regenerator-runtime/runtime';
import axios from 'axios';

async function api() {
    try {
        const api_url = "https://pokeapi.co/api/v2/pokemon/";
        var response = await fetch(api_url);
        var data = await response.json();
        try {
            for (let i = 0; i < data.results.length; i++) {
                var url = data.results[i].url;
                const response = await axios.get(url);
                var data2 = response.data;
                var sprites = data2.sprites.front_default;
                var name = data2.species.name;
                var array = [name, sprites];
                show(array)
            }
        } catch (error) {
            console.log(error + ' | Error en la API AXIOS')
        }
    } catch (error) { console.log(error + ' | Error en la API FETCH') }
}


api()


function show(data) {
    let tab =
        `<div class="card">
    <img src="${[data[1]]}"></img>
    <h1>${[data[0]]}</h1>
</div>`;

    document.getElementById("container-grid").innerHTML += tab;
}