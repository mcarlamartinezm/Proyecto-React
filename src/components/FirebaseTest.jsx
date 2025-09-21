import { useEffect } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase"; // ajustar la ruta

// Funciones 
async function getSinglePokemon(idOrName) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    const data = await res.json();

    const speciesRes = await fetch(data.species.url);
    const speciesData = await speciesRes.json();
    const nombreES = speciesData.names.find(n => n.language.name === "es")?.name || data.name;
    const descripcionES = speciesData.flavor_text_entries.find(entry => entry.language.name === "es")?.flavor_text || "";

    return {
      id: data.id,
      name: nombreES,
      description: descripcionES,
      image: data.sprites.front_default,
      type: data.types.map(t => t.type.name),
      height: data.height / 10, // convertir decímetros a metros
      weight: data.weight / 10, // convertir hectogramos a kg
      abilities: data.abilities.map(a => a.ability.name),
      stats: data.stats.reduce((acc, s) => {
        acc[s.stat.name] = s.base_stat;
        return acc;
      }, {})
    };
  } catch (err) {
    console.error("Error fetching Pokémon:", err);
    return null;
  }
}

async function getPokemonList(limit = 151) {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
  const data = await res.json();
  return data.results;
}

function FirebaseTest() {
  useEffect(() => {
    const uploadAllPokemons = async () => {
      const pokemonList = await getPokemonList();
      for (let i = 0; i < pokemonList.length; i++) {
        const pokeData = await getSinglePokemon(i + 1); // id del 1 al 151
        if (pokeData) {
          try {
            await addDoc(collection(db, "pokemones"), pokeData);
            console.log(`Pokémon ${pokeData.name} agregado`);
          } catch (e) {
            console.error("Error agregando Pokémon:", e);
          }
        }
      }
      console.log("Todos los Pokémon subidos!");
    };

    uploadAllPokemons();
  }, []);

  return <h2>Subiendo todos los Pokémon a Firestore...</h2>;
}

export default FirebaseTest;
