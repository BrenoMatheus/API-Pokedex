import React, { useContext } from "react";
import "./pokemon.css"
import FavoriteContext from "../../contexts/favoritesContext";
import { FaRegHeart , FaHeart } from "react-icons/fa";

const Pokemon = (props) => {
    const {favoritePokemons,updateFavoritePokemons} = useContext(FavoriteContext)
    const {pokemon} = props
    const onHeartClick = () => {
        updateFavoritePokemons(pokemon.name)
    }
    const heart = favoritePokemons.includes(pokemon.name) ? <FaHeart/> : <FaRegHeart/>
    return (
        <div className="pokemon-card">
            <div className="pokemon-img-container">
                <img alt={pokemon.name} src={pokemon.sprites.front_default} className="pokemon-img"/>
            </div>
            <div className="card-body">
                <div className="card-top">
                    <h3>{pokemon.name}</h3>
                    <div>#{pokemon.id}</div>
                </div>
                <div className="card-bottom">
                    <div className="pokemon-type">
                        {pokemon.types.map((type, index) => {
                                return(
                                    <div key={index} className="pokemon-type-text">{type.type.name}</div>
                                )
                            })}
                    </div>
                    <button className="pokemon-heart-btn" onClick={onHeartClick}>
                        {heart}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemon