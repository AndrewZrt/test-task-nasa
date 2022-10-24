import {useDispatch} from 'react-redux';

import LinkButton from '../Button';
import ContainerForButtons from '../ContainerForButtons';

import {setActiveCameras, setRoverName} from '../../store/reducers/mainSlice';
import {Typography} from '@mui/material';

const RoversBox = () => {

    const dispatch = useDispatch();

    const setRover = (name) => {
        dispatch(setRoverName(name));
        dispatch(setActiveCameras(true));
    };


    return (

          <ContainerForButtons>
              <Typography variant="h4" sx={{
                  textTransform: 'uppercase', color: 'white', fontWeight: 'lighter', letterSpacing: 20

              }}>
                  Rover
              </Typography>
              <LinkButton click={setRover} name="curiosity">Curiosity </LinkButton>
              <LinkButton click={setRover} name="opportunity">Opportunity</LinkButton>
              <LinkButton click={setRover} name="spirit">Spirit</LinkButton>
          </ContainerForButtons>);
};
export default RoversBox;