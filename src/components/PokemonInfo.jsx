import React from "react";

const Pokemoninfo = ({ data }) => {

    return (
        <>
            {
                (!data) ? "" : (
                    <div >
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <div className="abilities">
                            {
                                data.abilities?.map(poke => {
                                    return (
                                        <div key={poke.ability.name} >
                                            <div className="group">
                                                <span>{poke.ability.name}</span>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div className="base-stat">
                            {
                                data.stats.map(poke => {
                                    return (
                                        <div key={poke.stat.name} className="poke-stat">
                                            <h3>
                                                {poke.stat.name}:
                                                {poke.base_stat}
                                            </h3>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                )
            }

        </>
    )
}
export default Pokemoninfo