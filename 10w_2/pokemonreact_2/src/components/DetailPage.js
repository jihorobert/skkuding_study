import { React, useState } from "react";
import { useQuery, gql } from "@apollo/client";

// id, name, height , weight, types*, base_experience, abilities*, stats*

const GET_POKEMON = gql`
  query MyQuery {
    pokemon_v2_pokemon {
      id
      name
      height
      base_experience
      weight
      pokemon_v2_pokemonstats {
        base_stat
        pokemon_v2_stat {
          name
        }
      }
      pokemon_v2_pokemontypes {
        pokemon_v2_type {
          name
        }
      }
      pokemon_v2_pokemonabilities {
        pokemon_v2_ability {
          name
        }
      }
    }
  }
`;

function DetailPage(props) {
  const { loading, error, data } = useQuery(GET_POKEMON);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error!</p>;

  return (
    <div className="flex flex-col items-center p-[30px]">
      <div className="flex flex-col items-center">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
          alt={props.name}
          className="rounded-full border-[2px] border-yellow-300 w-full"
        />

        <h1 style={{ color: "white" }}>{props.data[props.id - 1].name}</h1>
        <div className="flex border border-yellow-300 w-[340px] max-w-[900px] rounded-[10px] p-[15px]">
          <table className="w-full h-full border-collapse border-style-hidden">
            {data.pokemon_v2_pokemon
              .slice(props.id - 1, props.id)
              .map((pokemon) => (
                <div>
                  <tr className="text-white">
                    <th className="border-b border-yellow-300 p-[10px] pl-[25px] text-start">
                      ID
                    </th>
                    <td className="border-b border-yellow-300 p-[10px] pr-[30px] text-end">
                      {pokemon.id}
                    </td>
                  </tr>
                  <tr className="text-white">
                    <th className="border-b border-yellow-300 p-[10px] pl-[25px] text-start">
                      name
                    </th>
                    <td className="border-b border-yellow-300 p-[10px] pr-[30px] text-end">
                      {pokemon.name}
                    </td>
                  </tr>
                  <tr className="text-white">
                    <th className="border-b border-yellow-300 p-[10px] pl-[25px] text-start">
                      height
                    </th>
                    <td className="border-b border-yellow-300 p-[10px] pr-[30px] text-end">
                      {pokemon.height}
                    </td>
                  </tr>
                  <tr className="text-white">
                    <th className="border-b border-yellow-300 p-[10px] pl-[25px] text-start">
                      base-experience
                    </th>
                    <td className="border-b border-yellow-300 p-[10px] pr-[30px] text-end">
                      {pokemon.base_experience}
                    </td>
                  </tr>
                  <tr className="text-white">
                    <th className="border-b border-yellow-300 p-[10px] pl-[25px] text-start">
                      weight
                    </th>
                    <td className="border-b border-yellow-300 p-[10px] pr-[30px] text-end">
                      {pokemon.weight}
                    </td>
                  </tr>

                  {pokemon.pokemon_v2_pokemonstats.map((stat, index) => (
                    <tr className="text-white">
                      <th className="border-b border-yellow-300 p-[10px] pl-[25px] text-start">
                        {stat.pokemon_v2_stat.name}
                      </th>
                      <td className="border-b border-yellow-300 p-[10px] pr-[30px] text-end">
                        {stat.base_stat}
                      </td>
                    </tr>
                  ))}

                  <tr className="text-white">
                    <th className="border-b border-yellow-300 p-[10px] pl-[25px] text-start">
                      types
                    </th>
                    <td className="border-b border-yellow-300 p-[10px] pr-[30px] text-end">
                      {pokemon.pokemon_v2_pokemontypes.map((type, index) => (
                        <>{type.pokemon_v2_type.name}</>
                      ))}
                    </td>
                  </tr>

                  <tr className="text-white">
                    <th className="border-b border-yellow-300 p-[10px] pl-[25px] text-start">
                      abilities
                    </th>
                    <td className="border-b border-yellow-300 p-[10px] pr-[30px] text-end">
                      <ul>
                        {pokemon.pokemon_v2_pokemonabilities.map(
                          (ability, index) => (
                            <>{ability.pokemon_v2_ability.name}</>
                          ),
                        )}
                      </ul>
                    </td>
                  </tr>
                </div>
              ))}
          </table>
        </div>
      </div>
    </div>
  );
}

export default DetailPage;
