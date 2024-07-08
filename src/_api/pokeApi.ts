const BASE_URL = "https://pokeapi.co/api/v2";

export const getPokeList = async (): Promise<PokemonLIstApiResponse> => {
try {
    const res = await fetch(`${BASE_URL}/pokemon`);
    if (!res.ok) throw new Error("Failed to complie");
    return res.json();
} catch (error) {
    throw new Error("unexpected API error");
}
};

export const getPokeAll = async (name: string): Promise<PokemonApiResponse> =>{
    try{
        const res = await fetch(`${BASE_URL}/pokemon/${name}`);
        if (!res.ok) throw new Error("Failed to complie");
        return res.json();
    } catch (error) {
        throw new Error("unexpected API error");
    }
    };

