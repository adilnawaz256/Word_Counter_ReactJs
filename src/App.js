import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Text from './components/Text';
import React, { useState } from 'react'

function App() {
  const [mode, setmode] = useState('light');
 let [mode2, setMode2] = useState("Enable dark mode")

function toggleMode(){
  if(mode=='light'){
    setmode(
      'dark',
      document.body.style.backgroundColor='#202025',
      document.querySelector('h2').style.color='white',
      document.querySelector('p').style.color='white',
      document.getElementById('prev').style.color='white',
      document.getElementById('ans').style.color='white',
    
    )
    setMode2("Enable light mode")
  }else{
    setmode(
      'light',
      document.body.style.backgroundColor='whitesmoke',
      document.querySelector('h2').style.color='black',
      document.querySelector('p').style.color='black',
      document.getElementById('prev').style.color='black',
      document.getElementById('ans').style.color='black',

    )

    setMode2("Enable dark mode")
  }
}


  return (

<>
  <Navbar mode={mode} toggleMode={toggleMode} mode2={mode2}/>
  <Text heading="Words Here"/>
</>
  );

}

export default App;
