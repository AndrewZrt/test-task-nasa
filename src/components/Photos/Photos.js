import {useDispatch, useSelector} from 'react-redux';

import Image from '../Image/Image';

import {v4 as uuidv4} from 'uuid';

import {fetchMorePhotos} from '../../store/reducers/actionCreators';
import {setCurrentPage} from '../../store/reducers/mainSlice';

import {Box, Button} from '@mui/material';

const Photos = () => {

    const {
        isLoading,
        error,
        content: {photos},
        currentPage,
        roverName,
        cameraName,
        sol
    } = useSelector(state => state.mainReducer);
    const dispatch = useDispatch();

    const changePage = () => {
        dispatch(fetchMorePhotos(roverName, cameraName, sol, currentPage));
        setTimeout(() => dispatch(setCurrentPage(currentPage + 1)), 1000);
    };
    return (<>

        {isLoading && <h2 style={{textAlign: 'center', color: 'darkgray'}}>Downloading . . .</h2>}
        {error && <h1>{error}</h1>}

        <Box style={{
            width: '100%',
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '70px',
            columnGap: '20px',
            rowGap: '20px'
        }} sx={{flexDirection: {xs: 'column', md: 'row'}, alignItems: {xs: 'center'}}}>

            {photos !== undefined && photos.length === 0 &&
            <h2 style={{textAlign: 'center', color: 'darkgray'}}>There are no photos, please try another camera or sol .
                . .</h2>}

            {photos && photos.map(value => <Image key={uuidv4()} val={value}/>)}

        </Box>
        {photos !== undefined && photos.length >= 25 && <Box style={{display: 'flex', justifyContent: 'center'}}>
            <Button size="large" color="secondary" variant="contained" style={{margin: '30px 0 30px 0'}}
                    onClick={changePage}>LOAD
                MORE...</Button>
        </Box>}
    </>);
};
export default Photos;