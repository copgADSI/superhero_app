import { useState } from "react";

/**
 * Custom Hook usado para darle funcionalidad al modal encargado
 * de mostrar los detalles de cada personaje
 */
export const useInitializeModal = () => {

    const [open, setOpen] = useState(false);

    const [currentTab, setCurrentTab] = useState('powerstats')

    //Abrir Modal
    const handleOpen = () => {
        setOpen(true);
    };

    //Cerrar modal
    const handleClose = () => {
        setOpen(false);
    };

    /**
     * Actualizar la pestaña actual  (Habilidades y/o Apariencia)
     */
    const handleChange = (event, newValue) => {
        setCurrentTab(newValue)
    };

    return {
        handleOpen,
        handleClose,
        handleChange,
        open,
        currentTab
    }

}

export default useInitializeModal