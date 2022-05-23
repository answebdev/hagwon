import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Contact from './components/pages/Contact';
import './App.css';

// Integrating Google Maps with React: https://blog.logrocket.com/integrating-google-maps-react/

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/contact' element={<Contact />} />
        {/* <Route exact path='/:slug' element={<Course />} /> */}
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
