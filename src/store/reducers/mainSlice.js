import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    content: {},
    anotherPage: {},
    roverName: '5',
    cameraName: '5',
    sol: '5',
    activeCameras: false,
    isActiveSol: false,
    isLoading: false,
    error: '',
    currentPage: 2
};

const mainSlice = createSlice({
    name: 'main', initialState: initialState, reducers: {
        photosFetching(state) {
            state.isLoading = true;
        }, photosFetchingSuccess(state, action) {
            state.isLoading = false;
            state.content = action.payload;
        }, photosFetchingForSecondPage(state, action) {
            state.isLoading = false;
            state.anotherPage = action.payload;
            for (const value of state.anotherPage.photos) {
                state.content.photos.push(value);
            }

        }, photosFetchingError(state, action) {
            state.isLoading = false;
            state.error = action.payload;
        }, setRoverName(state, action) {
            state.roverName = action.payload;
        }, setCameraName(state, action) {
            state.cameraName = action.payload;
        }, setSolCount(state, action) {
            state.sol = action.payload;
        }, setActiveCameras(state, action) {
            state.activeCameras = action.payload;
        }, setActiveSol(state, action) {
            state.isActiveSol = action.payload;
        }, setCurrentPage(state, action) {
            state.currentPage = action.payload;
        }

    }
});

export default mainSlice.reducer;

export const {
    setCameraName,
    setRoverName,
    setSolCount,
    setActiveCameras,
    setActiveSol,
    photosFetchingSuccess,
    photosFetching,
    photosFetchingError,
    photosFetchingForSecondPage,
    setCurrentPage
} = mainSlice.actions;