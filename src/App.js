import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import Alert from './components/Alert';

function App() {

  const [mode, setmode] = useState('info-subtle');  //by previous set -> light mode
  const [alert, setalert] = useState(null);

  const [modetext, setmodetext] = useState('Dark Mode');
  const showalert = (message, type) => {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1000);
  }

  const togglemode = () => {
    if (mode === 'info-subtle') {        //onn the dark mode
      setmode('dark');
      setmodetext("Light Mode");
     
      
      showalert("Dark mode has enabled", "success");
      document.body.style.backgroundColor = "#042743";
    }

    else {                              //onn the light mode
      setmode('info-subtle');
      setmodetext("Dark Mode");
   
      
      showalert("Light mode has enabled", "success");
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      

        <Navbar title="Textutils" input1="Home" modes={mode} key={new Date()} togglemode={togglemode} modetext={modetext} />

        <Alert alert={alert} />

        <div className="container my-3">

         

            

            
              <Textform modes={mode} showalert={showalert}   />

         


        </div>


     
    </>
  );
}

export default App;
