import Normalize from 'react-normalize';
import GlobalStyle from "./styles/GlobalStyles.js"
import LandingPage from "./components/LandingPage";
function App() {
  return (
    <div className="App">
      {/* normalize the css */}
      <Normalize/>
      {/* global styles  and reset css */}
      <GlobalStyle/>
      {/* Landing page with loader  */}
      <LandingPage/>
      


    </div>
  );
}

export default App;
