import NavBar from "./components/NavBar";
import Aside from "./components/Aside";
import Home from "./pages/Home";
import NewRelease from "./components/NewRelease";
import Footer from "./components/Footer";
import "./App.css";



const App = () => {

  return (
    <div className='bg-[#1D2123] h-full font-["Quicksand"]'>
      <div className='max-w-[95%] lg:max-w-[97%] mx-auto py-8  '>
        <NavBar />
        <Aside />
        <Home />
        <NewRelease />
        <Footer />
        

      </div>
    </div>
  );
};

export default App;
