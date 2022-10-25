import React from "react";
const Card = ({ pokemons, loading, Pokemoninfo }) => {
    return (
        <>
            {
                loading ? <h1>Loading...</h1> :
                    pokemons.map((pokemon) => {
                        return (
                            <div className="card" key={pokemon.id} onClick={() => {
                                Pokemoninfo(pokemon)
                                if (screen.width < 672) {
                                    window.scrollTo(0, 0)
                                }
                            }}>
                                <h2>{pokemon.id}</h2>
                                <img src={pokemon.sprites.front_default} alt="" />
                                <h2>{pokemon.name}</h2>
                            </div>
                        )
                    })
            }

        </>
    )
}
export default Card;