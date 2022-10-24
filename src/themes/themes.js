import {createTheme} from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#bcaaa4'
        },
        secondary: {
            main: '#455a64',
        }
    },
    components: {
        MuiSlider: {
            styleOverrides:{
                markLabel:{
                    color:'inherit'
                }
            }
        }
    }
});