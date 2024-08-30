import logo from './logo.svg';
import './App.css';

import AboutMe from "./Components/AboutMe";
import Contact from "./Components/Contact";
import MyPortfolio from "./Components/MyPortfolio";
import Footer from "./Components/Footer";


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <AboutMe></AboutMe>
          <Contact></Contact>
          <MyPortfolio></MyPortfolio>
          <Footer></Footer>
      </header>
    </div>
  );
}

export default App;
