import { useState } from "react";
import { useQuery } from "react-query";

export const useSearchCharacter = () => {

    const [search, setSearch] = useState("a")
    const handleValue = async (character) => {
        if (character.length === 0) {
            character = 'a'
        }

        const response_data = await fetch(
            process.env.REACT_APP_SUPER_HERO_API.concat(`/search/${character ?? 'a'}`)
        )
        return await response_data.json()
    }

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