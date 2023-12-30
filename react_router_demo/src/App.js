import React from 'react';
import {Routes,Route,Link} from 'react-router-dom';
import Main from './components/Pages/Main';
import Dog from './components/Pages/Dog';
import Cat from './components/Pages/Cat';

function App() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to='/'>Main Page</Link></li>
          <li><Link to='/dogs'>Dogs Page</Link></li>
          <li><Link to='/cats'>Cats Page</Link></li>

        </ul>
      </nav>
    <Routes>
      <Route path="/" element={<Main/>} />
      <Route path="/dogs" element={<Dog/>} />
      <Route path="/cats" element={<Cat/>} />

    </Routes>
    </div>

    )
}

export default App