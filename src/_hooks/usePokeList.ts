import { useEffect, useState } from "react"
import { getPokeList } from "../_api/pokeApi";

const usePokeList = ()=>{
    const[pokemon, setPokemon]=useState<PokemonLIstApiResponse>();
    const[isLoading, setIsLoading]=useState<boolean>(true);
    const[error, setError]=useState<boolean>(false);

    useEffect(()=>{
        setError(false)
        getPokeList().then((data)=>{
            setPokemon(data);
        }).catch(()=>{setError(true)}).finally(()=>{setIsLoading(false)})
    },[])
    return{
        pokemon, isLoading, error
    }
}

export default usePokeList;