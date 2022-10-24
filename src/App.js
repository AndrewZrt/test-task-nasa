import BackgroundPage from './components/BackgroundPage';
import Content from './components/Container';
import SetParamsPage from './components/SetParamsPage/SetParamsPage';
import {theme} from './themes/themes';
import {ThemeProvider} from '@mui/material';
import Photos from './components/Photos/Photos';

function App() {
  return (
        <ThemeProvider theme={theme}>
            <BackgroundPage>
                <Content>
                    <SetParamsPage/>
                    <Photos/>
                </Content>
            </BackgroundPage>
        </ThemeProvider>



  );
}

export default App;
