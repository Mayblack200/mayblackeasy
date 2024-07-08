import { Link } from "react-router-dom";
import usePokeAll from "../_hooks/usePokeAll";


const DetailPage= () =>{
    const {pokemon, isLoading, error} = usePokeAll();
    if(isLoading){
        return<h1>Loading</h1>
    }if(pokemon?.name){
        return <div>
            <h1>{pokemon.name}</h1>
            <h2>{pokemon.id}</h2>
            <h2>{pokemon.abilities.map((ability)=>{ return ability.ability.name})}</h2>
    
    <Link to={"/home"}>Link alla home</Link>
    </div>

    }
}
export default DetailPage;