import { Box, CircularProgress } from '@mui/material';
import useSearchCharacter from '../hooks/characters/useSearchCharacter';
import SingleSuperHero from './SingleSuperHero';
import './Styles.css';

const SuperHeros = () => {
    const { characters, isLoading } = useSearchCharacter();
    if (isLoading) {
        return (
            <div className="container__spinner" >
                <Box>
                    <CircularProgress color='success' />Loading...
                </Box>
            </div>
        )
    }
    if (characters.response === 'error') {
        return (
            <div>
                <span style={{ color: 'white' }} >{characters.error}</span>
            </div>
        )
    }
    return (
        <>
            <div className="main__container">
                {
                    characters && characters.results.map(character => (
                        <SingleSuperHero key={character.id} character={character} />
                    ))
                }
            </div>
        </>
    )
}

export default SuperHeros