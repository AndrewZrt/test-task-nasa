import {Container} from '@mui/material';


const Content = ({children}) => {
     return(
     <Container sx={{paddingTop:'80px',maxWidth:'80%'}}>
         {children}
     </Container>
             );
 }
 export default Content