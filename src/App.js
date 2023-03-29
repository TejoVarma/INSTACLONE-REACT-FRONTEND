import React from 'react';
import './styles/App.css';
import './styles/App.media.css'
import Context from './components/Context';
import Routers from './routers/Routers';

function App() {
  return (
    <Context>
      <div>
        <Routers/>
      </div>
    </Context>
  );
}

export default App;
