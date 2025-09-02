//Pokemon con descripcion

export async function getSinglePokemon(idOrName) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${idOrName}`);
    const data = await res.json();

    const speciesRes = await fetch(data.species.url);
    const speciesData = await speciesRes.json();
    const nombreES = speciesData.names.find(n => n.language.name === "es")?.name || data.name;
    const descripcionES = speciesData.flavor_text_entries.find(entry => entry.language.name === "es")?.flavor_text || "";

    return {
      nombre: nombreES,
      descripcion: descripcionES,
      sprite: data.sprites.front_default,
      types: data.types.map(t => t.type.name),
      stats: data.stats.map(s => ({ name: s.stat.name, value: s.base_stat })),
      weight: data.weight,
      height: data.height,
      abilities: data.abilities.map(a => a.ability.name)
    };
  } catch (err) {
    console.error("Error fetching Pokémon:", err);
    return null;
  }
}

//listado de pokemones

export async function getPokemonList(limit = 150) {
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}`);
    const data = await res.json();
    return data.results;
  } catch (err) {
    console.error("Error fetching Pokémon list:", err);
    return [];
  }
}
