import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Skils from "./components/Skils";
import Portifolio from "./components/Portifolio";
import Contact from './components/Contact'
import Footer from "./components/Footer";


function App() {
  return (
    <div className="">
      <NavBar />
      <Home/>
      <About/>
      <Skils/>
      <Portifolio/>
      <Contact/>
      <Footer/>
    </div>
  );
}

export default App;
