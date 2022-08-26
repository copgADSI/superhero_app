import useSearchCharacter from "../hooks/characters/useSearchCharacter";

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