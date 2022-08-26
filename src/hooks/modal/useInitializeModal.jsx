import { useState } from "react";

export const useInitializeModal = () => {

    const [open, setOpen] = useState(false);

    const [currentTab, setCurrentTab] = useState('powerstats')

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

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