import { useEffect, useState } from "react";
import "./PokemonList.css";

const limit = 20;

export default function PokemonList() {
  const [page, setPage] = useState(0);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    async function loadPokemon() {
      try {
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${
            limit * page
          }`
        );
        const data = await response.json();
        setPokemon(data.results);
      } catch (error) {
        console.log(error);
      }
    }

    loadPokemon();
  }, [page]);

  return (
    <main>
      <button
        type="button"
        onClick={() =>
          setPage((currentPage) => (currentPage === 0 ? 0 : currentPage - 1))
        }
        // onClick={() => setPage(Math.max(0, page - 1))}
      >
        Previous Page
      </button>
      <button
        type="button"
        onClick={() => setPage((currentPage) => currentPage + 1)}
      >
        Next Page
      </button>
      <ul>
        {pokemon.map(({ name }) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
    </main>
  );
}
