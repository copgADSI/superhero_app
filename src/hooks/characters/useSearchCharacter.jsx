import { useState } from "react";
import { useQuery } from "react-query";

/**
 * Custom Hook usado para la búsqueda de personajes,
 * inicialmente filtra por los tenga la leta a 
 */
export const useSearchCharacter = () => {

    const [search, setSearch] = useState("a")
    /**
     *Método usado para hacer la solicitud a la api de superhero
     */
    const handleValue = async (character) => {
        if (character.length === 0) {
            character = 'a'
        }
        const response_data = await fetch(
            process.env.REACT_APP_SUPER_HERO_API.concat(`/search/${character ?? 'a'}`)
        )
        return await response_data.json()
    }

    /**
     * Se usa React Query para administrar el estado del backend en este caso la api
     */
    const { data: characters, isLoading } = useQuery(['character'], () => handleValue(search), {
        refetchInterval: 2000
    })

    return {
        handleValue,
        setSearch,
        characters,
        isLoading
    }
}

export default useSearchCharacter