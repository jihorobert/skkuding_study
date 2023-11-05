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
    <div className="detail-wrap" id="detailWrap">
      <div className="asdf">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${props.id}.png`}
          alt={props.name}
          className="image-item"
        />

        <h1 style={{ color: "white" }}>{props.data[props.id - 1].name}</h1>
        <div className="table-box">
          <table className="table-style">
            {data.pokemon_v2_pokemon.slice(props.id - 1, props.id).map((pokemon) => (
              <div>
                <tr>
                  <th>ID</th>
                  <td>{pokemon.id}</td>
                </tr>
                <tr>
                  <th>name</th>
                  <td>{pokemon.name}</td>
                </tr>
                <tr>
                  <th>height</th>
                  <td>{pokemon.height}</td>
                </tr>
                <tr>
                  <th>base-experience</th>
                  <td>{pokemon.base_experience}</td>
                </tr>
                <tr>
                  <th>weight</th>
                  <td>{pokemon.weight}</td>
                </tr>

                {pokemon.pokemon_v2_pokemonstats.map((stat, index) => (
                  <tr>
                    <th>{stat.pokemon_v2_stat.name}</th>
                    <td>{stat.base_stat}</td>
                  </tr>
                ))}

                <tr>
                  <th>types</th>
                  <td>
                    {pokemon.pokemon_v2_pokemontypes.map((type, index) => (
                      <>{type.pokemon_v2_type.name}</>
                    ))}
                  </td>
                </tr>
                <tr>
                  <th>abilities</th>
                  <td>
                    <ul>
                      {pokemon.pokemon_v2_pokemonabilities.map(
                        (ability, index) => (
                          <>{ability.pokemon_v2_ability.name}</>
                        )
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
