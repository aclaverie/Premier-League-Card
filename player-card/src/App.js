import logo from './logo.svg';

import Avatar from './components/avatar';
import Details from './components/details';
import Contact from './components/contact';
import Record from './components/record';
import Awards from './components/awards';
import Social from './components/social';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className='bk-card'>
          <div className="player-card">
            <div className="rdImgTop">
              <Avatar />
            </div>
            <Details />
            <Contact />
            <Record />
            <Awards />
            <Social />
          </div>  
        </div>
      </header>
     
    </div>
  );
}

export default App;
