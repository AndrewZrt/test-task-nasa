import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {setCurrentPage} from '../store/reducers/mainSlice';


const LinkButton = ({click, name, children}) => {
    const dispatch = useDispatch();
    const handleClick = () => {
        click(name);
        dispatch(setCurrentPage(2));
    };

    return (<Button size="large" variant="outlined" color="primary" sx={{padding: '5px 20px 5px 20px'}}
                    onClick={handleClick}>
        {children}
    </Button>);
};
export default LinkButton;