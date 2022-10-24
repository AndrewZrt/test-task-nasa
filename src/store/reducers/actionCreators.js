import {photosFetching, photosFetchingError, photosFetchingForSecondPage, photosFetchingSuccess} from './mainSlice';
import axios from 'axios';


export const fetchPhotos = (rover, camera, sol) => async dispatch => {

    try {
        dispatch(photosFetching());
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&page=1&api_key=QXYhezwrUvr9cYGNmjJ3ykKdQR88dkeLpVbC8ZJb`);

        dispatch(photosFetchingSuccess(response.data));

    } catch (error) {
        dispatch(photosFetchingError(error.message));
    }
};
export const fetchMorePhotos = (rover, camera, sol, page) => async dispatch => {

    try {
        dispatch(photosFetching());
        const response = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/${rover}/photos?sol=${sol}&camera=${camera}&page=${page}&api_key=QXYhezwrUvr9cYGNmjJ3ykKdQR88dkeLpVbC8ZJb`);

        dispatch(photosFetchingForSecondPage(response.data));

    } catch (error) {
        dispatch(photosFetchingError(error.message));
    }
};