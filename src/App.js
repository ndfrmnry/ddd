
import './App.css';
import { BsBorderWidth } from "react-icons/bs";
import { FiTwitter } from "react-icons/fi";
import { BsTelegram } from "react-icons/bs";
import SideBar from './components/sideBar';
import Backdrop from './components/Backdrop';
import { useState } from 'react';

function App() {

  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState)
  }
  return (
    <div className='body' >
      
       <nav className="nav-bar">
       <h1>$SPUNK </h1>
       <div className="nav-bar1" >
       <a href="#header">Home</a>
        <a href="#writeup">$PUNK</a>
        <a href="#roadmap">Roadmap</a>
        <a href="#pnks">Tokenomics</a>
       </div>
       <div className="nav-bar3">
      <div > <div onClick={toggleSidebar}><BsBorderWidth /> </div>
      <SideBar sidebar={sidebar} closeSidebar={toggleSidebar}/>
      <Backdrop sidebar={sidebar} closeSidebar={toggleSidebar}/>
      </div> 
      

       </div>
      </nav>
      <header className="App-header" id='header'>
       
      <div className="App-pnk1"></div>
        <h1 className="App-pnk">$SPUNK ERC20</h1>
        <h className="App-pnk2">BUY NOW</h>
        <div className='sign'>
        <div> <a className='sign1' href='http://Twitter.com/spunkETH'><FiTwitter /></a> </div>
        <div> <a className='sign1' href='http://Twitter.com/spunkETH' ><BsTelegram /></a></div>
        </div>
    
      </header>

 
      <div id="writeup" className='writeup'>
        <h2>$SPUNK</h2>
        <p>
          $SPUNK is a P2E concept with a singleplayer campaign and a
          multiplayer one under development. The idea is that players can get
          better items and experience in the multiplayer.
        </p>
        <p>
          While on single player mode, $SPUNK will have to shoot down all
          opposing tokens and NFT projects.
        </p>
        <div className='writeup1'>
        <h3 className='writeup2'>$SPUNK <br />NFT</h3>
        <h3 className='writeup3'>$SPUNK <br />SWAP</h3>
        </div>
       
      </div>
      <div id="roadmap" className='roadmap'>
        <h2>Roadmap</h2>
        <div className='roadmap1'>
          <div className='roadmap2'>
            <h3>Phase 1</h3>
            <div>
              <p>Creating contract</p>
              <p>Building website V1</p>
              <p>Whitepaper V1</p>
              <p>Stealth launch on ERC-20</p>
              <p>Twitter Update</p>
              <p>Buy contest</p>
              <p>Update Dextool</p>
            </div>
          </div>
          <div className='roadmap3'>
            <h3>Phase 2</h3>
            <div>
              <p>Contract audits</p>
              <p>Marketing campaigns (Callers & Twitter)</p>
              <p>Community Engagement</p>
              <p>Community Partnership</p>
            </div>
          </div>
          <div className='roadmap4'>
            <h3>Phase 3</h3>
            <p>More Exciting Stuff Will Be Announced Soon, Stay Tuned</p>
          </div>
        </div>
        <section id="pnks" className='last-section'>
        <h2>Tokenomics for $SPUNK</h2>
        <div>
          <p>Total supply: 1,000,000,000 $SPUNK</p>
          <p>Tax Buy: 4% / Tax Sell: 4%</p>
          <p>pquidity Pool: 100%</p>
          <p>Locked: 100 Years</p>
        </div>
        </section>
      </div>
      
      

    </div>
  );
}

export default App;
