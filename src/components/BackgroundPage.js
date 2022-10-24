import styled from 'styled-components';

const MainPage = styled.div`
  background: url('https://images.hdqwalls.com/wallpapers/planet-space-mars-4k-8l.jpg') no-repeat center center fixed;
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  min-height: 100%;
  min-width: 100%;
  position: fixed;
  top: 0;
  bottom:0;
  overflow-y:scroll;
  overflow-x:hidden;
`;

const BackgroundPage = ({children}) => {
    return (<MainPage>
        {children}
          </MainPage>);
};
export default BackgroundPage;