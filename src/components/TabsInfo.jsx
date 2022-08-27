import { Box } from "@mui/system"
import useInitializeModal from "../hooks/modal/useInitializeModal";
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import { APEARANCE, POWERSTATS } from "../utils/utils";
import SinglePowerStats from "./SinglePowerStats";
import Apearance from "./Apearance";


/**
 * Pestañas que contienen componentes hijos,
 * que son: Estadísticas y Apariencia del personaje de forma 
 * individual.
 */
const TabsInfo = ({ powerstats, apearance_data }) => {
    const { handleChange, currentTab } = useInitializeModal();
    return (
        <Box sx={{ width: '100%', typography: 'body1' }}>
            <Tabs
                value={currentTab}
                onChange={handleChange}
                textColor="primary"
                indicatorColor="primary"
            >
                <Tab value="powerstats" label="POWERSTATS" /> 
                <Tab value="appearance" label="APEARANCES" />

            </Tabs>

            {
                currentTab === 'powerstats'
                    ?
                    <>
                        <div className="powerstats-bar">
                            {
                                Object.values(powerstats).map((powerstat, index) => (
                                    <SinglePowerStats
                                        key={index}
                                        index_powerstat={POWERSTATS[index]}
                                        powerstat_item={powerstat} />
                                )).sort((a, b) => a - b)
                            }
                        </div>


                    </>
                    :
                    <div className="apearance-bar">
                        {

                            Object.values(apearance_data).map((powerstat, index) => (
                                <Apearance
                                    key={index}
                                    powerstat_index={APEARANCE[index]}
                                    powerstat_value={powerstat}
                                />
                            )).sort((a, b) => a - b)
                        }
                    </div>
            }

        </Box>
    )
}

export default TabsInfo