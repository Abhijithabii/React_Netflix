
import './App.css';
import React from 'react'
import NavBar from './Components/NavBar/NavBar';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';
import {originals,action,romantic, trending} from './urls'

function App() {
  return (
    <div className='App'>
        <NavBar/>
        <Banner/>
        <RowPost url={trending} title='Trending' />
        <RowPost url={action} title='Action Movies' isSmall />
        <RowPost url={romantic} title='Romantic Movies' isSmall />
        <RowPost url={originals} title='NEtflix originals' isSmall />

    </div>
  );
}

export default App;
