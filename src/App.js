import { Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Courses from './components/pages/Courses';
import Course from './components/pages/Course';
import Contact from './components/pages/Contact';
import './App.css';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route exact path='/courses' element={<Courses />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/courses/:slug' element={<Course />} />
        {/* <Route exact path='/:slug' element={<Course />} /> */}
        {/* <Route path='*' element={<Error />} /> */}
      </Routes>
    </div>
  );
};

export default App;
