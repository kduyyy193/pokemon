import React from "react";
import Card from "./Card";
import Pokemoninfo from "./Pokemoninfo";
import { apiPokemonUrl } from "../common/apiUrl";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Search from "./Search";
const Main = () => {
    const [pokeData, setPokeData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [url, setUrl] = useState(apiPokemonUrl)
    const [nextUrl, setNextUrl] = useState();
    const [prevUrl, setPrevUrl] = useState();
    const [pokeDex, setPokeDex] = useState();
    const [pokemonName, setPokemonName] = useState("")
    const [errorName, setErrorName] = useState()

    const pokeFun = async () => {
        setLoading(true)
        const res = await axios.get(url);
        setNextUrl(res.data.next);
        setPrevUrl(res.data.previous);
        getPokemon(res.data.results)
        setLoading(false)
    }
    const getPokemon = async (res) => {
        res.map(async (item) => {
            const result = await axios.get(item.url)
            setPokeData(state => {
                state = [...state, result.data]
                state.sort((a, b) => a.id > b.id ? 1 : -1)
                return state;
            })
        })
    }

    const searchPokemon = async () => {
        try {
            const res = await axios.get(`${apiPokemonUrl}${pokemonName}`)
            if (res.data) {
                setPokeDex(res.data)
                setErrorName("")
            }
        }
        catch {
            setErrorName("incorrect name!!!")
            setPokemonName("")
        }
    }
    useEffect(() => {
        pokeFun();
    }, [url])
    return (
        <>

            <Search searchPokemon={searchPokemon} setPokemonName={setPokemonName} pokemonName={pokemonName} setErrorName={setErrorName} errorName={errorName} />
            <div className="container">
                <div className="left-content">
                    <Card pokemons={pokeData} loading={loading} Pokemoninfo={poke => setPokeDex(poke)} />

                    <div className="btn-group">
                        {prevUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(prevUrl)
                        }}>Prev<img src="https://cdn.pixabay.com/photo/2022/04/02/21/59/pokeball-7107788__340.png" alt="ERROR" /></button>}

                        {nextUrl && <button onClick={() => {
                            setPokeData([])
                            setUrl(nextUrl)
                        }}>Next<img src="https://cdn.pixabay.com/photo/2022/04/02/21/59/pokeball-7107788__340.png" alt="ERROR" /></button>}

                    </div>
                </div>
                <div className="right-content">
                    {pokeDex && <Pokemoninfo data={pokeDex} />}
                </div>
            </div>
        </>
    )
}
export default Main;