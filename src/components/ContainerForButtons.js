import styled from 'styled-components';
import {Box} from '@mui/material';

const Container = styled(Box)`
  margin-top: 30px;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  column-gap: 20px;
  
  
  
  
  
  
`

const ContainerForButtons = ({children}) => {

    return(
     <Container sx={{flexDirection:{xs:'column', md:'row'},rowGap:{xs:'10px'}}}>
         {children}
     </Container>
             );
 }
 export default ContainerForButtons