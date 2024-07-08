import { Link } from "react-router-dom";
import usePokeList from "../_hooks/usePokeList";

const HomePage = () => {
    const {pokemon, isLoading, error} = usePokeList();

    if(isLoading){
        return<h1>Loading</h1>
    }
    if(pokemon?.results){
        return(
        <ul>{pokemon.results.map((poke,i)=>{
            return <Link key={i} to={poke.name}><li>{poke.name}</li></Link>
        })}</ul>
    )}
};

export default HomePage;
