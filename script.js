fetchData();

async function fetchData() {

    try{
        
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if(!response.ok){
            throw new Error("Could not fetch data.")
        }

        const data = await response.json();
        const pokemonSprite = data.sprites.front_default;
        const pokemonImg = document.getElementById("pokemonImg");

        pokemonImg.src = pokemonSprite;
        pokemonImg.style.display = "block";
        
        document.getElementById("errorP").textContent = "";

    }

    catch(error){
        document.getElementById("errorP").textContent = error;
        document.getElementById("errorP").style.color = "red";
        pokemonImg.style.display = "none";
    }

}