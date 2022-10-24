import {useDispatch, useSelector} from 'react-redux';
import {setCurrentPage, setSolCount} from '../../store/reducers/mainSlice';
import {fetchPhotos} from '../../store/reducers/actionCreators';

import Slider from '@mui/material/Slider';
import {Box, Typography} from '@mui/material';


const SliderForSol = () => {
    const noActive = {display: 'none'};
    const active = {width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '20px'};

    const {isActiveSol, roverName, cameraName, sol} = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();


    const mark = [{
        value: 0, label: '0'
    }, {
        value: 250, label: '250'
    }, {
        value: 500, label: '500'
    }, {
        value: 750, label: '750'
    }, {
        value: 1000, label: '1000'
    }, {
        value: 1250, label: '1250'
    }, {
        value: 1500, label: '1500'
    }];

    const getValue = (e, val) => {
        dispatch(setSolCount(val));

    };
    const submit = () => {
        dispatch(fetchPhotos(roverName, cameraName, sol));
        dispatch(setCurrentPage(2));
    };

    return (<Box style={isActiveSol ? active : noActive}>
        <Typography variant="h4" sx={{
            textTransform: 'uppercase', color: 'white', fontWeight: 'lighter', letterSpacing: 20

        }}> Sol</Typography>
        <Slider
              sx={{width: '90%'}}
              max={1500}
              marks={mark}
              valueLabelDisplay="auto"
              onChange={getValue}
              onMouseUp={submit}
              onTouchEnd={submit}
        />
    </Box>);
};
export default SliderForSol;