import useSearchCharacter from "../hooks/characters/useSearchCharacter";

/**
 * Componente usado para la búsqueca dinámica de 
 * personajes
 */
const SearchCharacter = () => {
    const { setSearch } = useSearchCharacter();
    return (
        <input
            placeholder='Search superhero...'
            className='input__search'
            onChange={e => setSearch(e.target.value)}
        />
    )
}

export default SearchCharacter