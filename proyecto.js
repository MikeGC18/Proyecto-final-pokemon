let obtenerPokemon = async () => {
    let respuesta = await fetch('https://pokeapi.co/api/v2/pokemon/');
    let datos = await respuesta.json();  
    return datos.results;  
};

let descripciones = {
    "bulbasaur": "Bulbasaur es un Pokémon de tipo Planta/Veneno, tiene una semilla en su espalda.",
    "ivysaur": "Ivysaur es la evolución de Bulbasaur, con una planta que empieza a crecer.",
    "venusaur": "Venusaur tiene una gran flor en su espalda y es la evolución final de Bulbasaur.",
    "charmander": "Charmander es un Pokémon de tipo fuego, que tiene una llama en su cola.",
    "charmeleon": "Charmeleon es el siguiente nivel de charmander. Empieza a crecer de tamaño.",
    "charizard": "Charizard es la evolución final de Charmander. Tiene alas y lanza fuego.",
    "squirtle": "Squirtle es un Pokémon de tipo agua, conocido por su caparazón duro.",
    "wartortle": "Wartortle es la evolución de Squirtle. Su caparazón se hace más grande y tiene una cola que se agita.",
    "blastoise": "Blastoise es la evolución final de Squirtle. Su caparazón tiene cañones de agua.",
    "caterpie": "Caterpie es un Pokémon de tipo bicho, pequeño y verde, que se convierte en Metapod.",
    "metapod": "Metapod es la fase de transición de Caterpie antes de convertirse en Butterfree.",
    "butterfree": "Butterfree es la evolución final de Caterpie. Es un Pokémon volador de tipo Bicho/Volador.",
    "weedle": "Weedle es un Pokémon de tipo bicho/veneno. Tiene un cuerno venenoso en su cabeza.",
    "kakuna": "Kakuna es la fase de transición de Weedle, que evoluciona en Beedrill.",
    "beedrill": "Beedrill es la evolución final de Weedle. Es un Pokémon de tipo Bicho/Veneno con grandes aguijones.",
    "pidgey": "Pidgey es un Pokémon de tipo Normal/Volador, conocido por ser común en muchas áreas.",
    "pidgeotto": "Pidgeotto es la evolución de Pidgey, más fuerte y con mejores habilidades de vuelo.",
    "pidgeot": "Pidgeot es la evolución final de Pidgey. Es un Pokémon de tipo Normal/Volador con gran agilidad.",
    "rattata": "Rattata es un Pokémon de tipo Normal, conocido por ser rápido y ágil.",
    "raticate": "Raticate es la evolución de Rattata. Tiene colmillos afilados y es más agresivo."
};

let habilidades = {
    "bulbasaur": "Latigo Cepa, Empuje, Clorofila",
    "ivysaur": "Hoja Afilada, Latigo Cepa, Clorofila",
    "venusaur": "Sobrecrecimiento, Clorofila, Puño Sombra",
    "charmander": "Cola de Fuego, Gruñido, Rugido",
    "charmeleon": "Llamarada, Cola de Fuego, Gruñido",
    "charizard": "Llamarada, Vuelo, Puño Fuego",
    "squirtle": "Chorro de Agua, Burbuja, Mordisco",
    "wartortle": "Cañón de Agua, Burbuja, Mordisco",
    "blastoise": "Cañón Hidroeléctrico, Chorro de Agua, Puño Hielo",
    "caterpie": "Hilo, Ataque Rápido",
    "metapod": "Endurecer",
    "butterfree": "Confusión, Polvo Veneno, Vuelo",
    "weedle": "Picotazo, Hilo",
    "kakuna": "Endurecer",
    "beedrill": "Picotazo, Puño Drenaje, Ataque Rápido",
    "pidgey": "Giro, Ataque Rápido, Vuelo",
    "pidgeotto": "Giro, Ataque Rápido, Vuelo",
    "pidgeot": "Giro, Ataque Rápido, Vuelo",
    "rattata": "Mordisco, Ataque Rápido",
    "raticate": "Mordisco, Ataque Rápido, Puño Drenaje"
};

let mostrarPokemons = async () => {
    let pokemons = await obtenerPokemon();  
    let pokemonContainer = document.getElementById('pokemon-container');  
    pokemonContainer.innerHTML = '';  

    for (let pokemon of pokemons) {
        let detalle = await fetch(pokemon.url);
        let pokemonDetalle = await detalle.json();

        let imagenUrl = pokemonDetalle.sprites.front_default;
        let nombrePokemon = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);

        let descripcion = descripciones[pokemon.name.toLowerCase()];
        let habilidad = habilidades[pokemon.name.toLowerCase()] ;

        let pokemonDiv = document.createElement('div');
        pokemonDiv.classList.add('pokemon-card');  

        pokemonDiv.innerHTML = `
            <h2>${nombrePokemon}</h2>
            <img src="${imagenUrl}" alt="Imagen de ${pokemon.name}" style="width: 100px;">
            <p>Descripción: ${descripcion}</p>
            <p>Habilidad: ${habilidad}</p>
        `;

      
        pokemonDiv.addEventListener('mouseenter', () => {
            pokemonDiv.style.transform = 'scale(1.2)'; 
            pokemonDiv.style.transition = 'transform 0.3s ease'; 
        });

        pokemonDiv.addEventListener('mouseleave', () => {
            pokemonDiv.style.transform = 'scale(1)'; 
        });

        pokemonContainer.appendChild(pokemonDiv);
    }
};

document.querySelector('.Pokeball').addEventListener('click', () => {
    document.querySelector('.Pokeball').style.display = 'none';  
    mostrarPokemons();  
});





















  
