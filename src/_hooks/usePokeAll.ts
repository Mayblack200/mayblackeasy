import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getPokeAll } from "../_api/pokeApi";

const usePokeAll = () => {
const [pokemon, setPokemon] = useState<PokemonApiResponse>();
const [isLoading, setIsLoading] = useState<boolean>(true);
const [error, setError] = useState<boolean>(false);
const {name}= useParams() 
let pokeName= "";

if(name){
    pokeName=name;
}

useEffect(() => {
    setError(false);
    getPokeAll(pokeName).then((data) => {
    setPokemon(data);
    }).catch(()=>{setError(true)}).finally(()=>{setIsLoading(false)});
}, []);
return{
    pokemon, isLoading, error
} ;
};

export default usePokeAll;
