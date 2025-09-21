import { useEffect } from "react";
import { db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";
import { getSinglePokemon } from "../utils/pokemonFetch"; // ajusta la ruta a donde tengas tu función

function UploadPokemons() {
  useEffect(() => {
    const uploadAll = async () => {
      try {
        for (let id = 1; id <= 151; id++) {
          const p = await getSinglePokemon(id);
          if (!p) continue;

          await setDoc(doc(db, "pokemones", id.toString()), {
            id,
            name: p.nombre,
            description: p.descripcion,
            image: p.sprite,
            types: p.types,
            weight: p.weight,
            height: p.height,
            abilities: p.abilities,
            stats: {
              hp: p.stats.find(s => s.name === "hp")?.value || 0,
              attack: p.stats.find(s => s.name === "attack")?.value || 0,
              defense: p.stats.find(s => s.name === "defense")?.value || 0,
              "special-attack": p.stats.find(s => s.name === "special-attack")?.value || 0,
              "special-defense": p.stats.find(s => s.name === "special-defense")?.value || 0,
              speed: p.stats.find(s => s.name === "speed")?.value || 0,
            },
          });

          console.log(`Subido: ${p.nombre}`);
        }

        console.log("¡Todos los Pokémon subidos a Firestore!");
      } catch (e) {
        console.error("Error subiendo Pokémon:", e);
      }
    };

    uploadAll();
  }, []);

  return <div>Subiendo los 151 Pokémon a Firestore... Revisa la consola del navegador</div>;
}

export default UploadPokemons;
