import React from "react";

window.onscroll = () => {
    const rightContent = document.querySelector(".right-content");
    if (scrollY >= 200) {
        if (rightContent) {
            if (screen.width <= 1180) {
                rightContent.style.top = '4%'
            } else {
                rightContent.style.top = '13%'
            }
        }
    } else {
        if (rightContent) {
            rightContent.style.top = '35%'
        }
    }
}

const Pokemoninfo = ({ data }) => {
    return (
        <>
            {
                (!data) ? "" : (
                    
                    <div >
                        <h1>{data.name}</h1>
                        <img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`} alt="" />
                        <div className="types">
                            {
                                data.types?.map(item => {
                                    return (
                                        <div key={item.type.name} >
                                            <div className="group">
                                                <div>{item.type.name}</div>
                                                <img className="group-img" src={`../../public/assets/img/${item.type.name}.png`} alt="Error" />
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
                                            <div>
                                                <div className="base-stat-name">{poke.stat.name}</div>
                                                <div className="base-state-wrapper">
                                                    <div className="base-state-power " style={{ "width": `${poke.base_stat * 2}px` }} >{poke.base_stat}</div>
                                                </div>
                                            </div>
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