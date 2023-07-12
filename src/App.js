import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import ContactUs from './components/ContactUs';
import Locations from './components/Locations';
import Sevices from './components/Sevices';
import { Route, Routes } from 'react-router-dom';
import Carousel from './components/Carousel';

function App() {
  return (
    <nav className="App">
      

        <Header />

        <Routes>
          <Route path='/' element={<Carousel/>}></Route>
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/location' element={<Locations />} />
          <Route path='/service' element={<Sevices/>} />
        </Routes>

        <Footer />


    </nav>
  );
}

export default App;
