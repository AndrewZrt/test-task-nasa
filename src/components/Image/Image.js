import {Box} from '@mui/material';

const Image = ({val}) => {
    return(
          <Box>
              <img style={{width:'200px',height:'200px'}} src={val.img_src} alt=""/>
          </Box>
             );
 }
 export default Image