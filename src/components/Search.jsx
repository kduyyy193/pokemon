
const Search = ({ searchPokemon, setPokemonName, pokemonName, setErrorName, errorName }) => {

    const btnSearch = document.querySelector('#search-btn')

    document.addEventListener('keypress', (event) => {
        if (event.key === "Enter" && btnSearch) {
            btnSearch.click()
        }
    })


    const handleSearch = () => {
        if (pokemonName) {
            searchPokemon()
        } else {
            setErrorName("incorrect name")
        }
    }


    return (
        <div>
            <div className="title-section">
                <div>
                    <h2>Pokemon </h2>
                    <img src="https://cdn.pixabay.com/photo/2022/04/02/21/59/pokeball-7107788__340.png" alt="ERROR" />
                </div>
                <input
                    placeholder="name pokemon..."
                    value={pokemonName}
                    onChange={(e) => {
                        setPokemonName(e.target.value.toLowerCase())
                        setErrorName("")
                    }}
                />
                {errorName && <span>{errorName}</span>}
                <button id='search-btn' onClick={handleSearch}>search pokemon</button>
            </div>
        </div>
    )
}

export default Search