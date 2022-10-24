import {useDispatch, useSelector} from 'react-redux';

import LinkButton from '../Button';
import ContainerForButtons from '../ContainerForButtons';

import {setActiveSol, setCameraName} from '../../store/reducers/mainSlice';

import {Box, Typography} from '@mui/material';

export const cameras = {
    fhaz: 'Front Hazard Avoidance',
    rhaz: 'Rear Hazard Avoidance',
    mast: 'Mast',
    chemcam: 'Chemistry',
    mahli: 'Mars Hand Lens Imager',
    mardi: 'Mars Descent Imager',
    navcam: 'Navigation',
    pancam: 'Panoramic',
    minites: 'Miniature Thermal Emission Spectrometer (Mini-TES)',
};
const camerasByRover = {
    curiosity: ['fhaz', 'rhaz', 'mast', 'chemcam', 'mahli', 'mardi', 'navcam'],
    opportunity: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites'],
    spirit: ['fhaz', 'rhaz', 'navcam', 'pancam', 'minites']
};

const CamerasBox = () => {
    const dispatch = useDispatch();
    const {roverName, activeCameras} = useSelector(state => state.mainReducer);

    const setCamera = (name) => {
        dispatch(setCameraName(name));
        dispatch(setActiveSol(true));
    };

    if (roverName === 'curiosity') {
        return (

              <Box style={activeCameras ? {display: 'block'} : {display: 'none'}}>
                  <ContainerForButtons>
                      <Typography variant="h4" sx={{
                          textTransform: 'uppercase', color: 'white', fontWeight: 'lighter', letterSpacing: 20
                      }}> Camera</Typography>
                      {camerasByRover.curiosity.map((value, index) => <LinkButton key={index} click={setCamera}
                                                                                  name={value}>{value}</LinkButton>)}

                  </ContainerForButtons>
              </Box>);
    } else if (roverName === 'opportunity' || 'spirit') {
        return (<Box style={activeCameras ? {display: 'block'} : {display: 'none'}}>
            <ContainerForButtons>
                <Typography variant="h4" sx={{
                    textTransform: 'uppercase', color: 'white', fontWeight: 'lighter', letterSpacing: 20

                }}> Camera</Typography>

                {camerasByRover.opportunity.map((value, index) => <LinkButton key={index} click={setCamera}
                                                                              roverName={value}>{value}</LinkButton>)}

            </ContainerForButtons>
        </Box>);
    }

};
export default CamerasBox;