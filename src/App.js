import React from 'react';
import { Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Service from './pages/Service';
import Realization from './pages/Realization';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import LegalNotice from './pages/LegalNotice';

function App() {
    return(
        <div className='App'>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/Service' element={<Service/>} />
                <Route path='/Realization' element={<Realization/>} />
                <Route path='/Blog' element={<Blog/>} />
                <Route path='/Contact' element={<Contact/>} />
                <Route path='/LegalNotice' element={<LegalNotice/>} />
            </Routes>
        </div>
    )
};

export default App;