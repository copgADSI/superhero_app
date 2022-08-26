
import { Box, Modal } from '@mui/material';
import useInitializeModal from '../hooks/modal/useInitializeModal';
import { MODAL_STYLES } from '../utils/styles';
import './Styles.css';
import TabsInfo from './TabsInfo';

function SingleSuperHero({ character }) {
  const { handleOpen, handleClose, open } = useInitializeModal();
  return (
    <>
      <div className="single__card">
        <h1 style={{ color: 'white' }}>{character.name}</h1>
        <img src={character.image.url} alt="" onClick={handleOpen} />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...MODAL_STYLES, maring: '0 auto' }}>
          <h2 id="parent-modal-title"> {character.name} </h2>
          <img src={character.image.url} alt="" onClick={handleOpen} style={{ width: 200 }} />
          <TabsInfo powerstats={character.powerstats} apearance_data={character.appearance} />
        </Box>
      </Modal>
    </>
  )
}

export default SingleSuperHero