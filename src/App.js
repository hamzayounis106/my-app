import './App.css';
import Alert from './Components/Alert';
import Navbar from './Components/Navbar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react'
import About from './Components/about';
import { BrowserRouter, Routes, Route } from "react-router-dom";




function App() {
  const [mode, setMode] = useState("light");
  const [modetext, setModeText] = useState("Enable Dark Mode")
  const [alert, setAlert] = useState(null)
  const showalert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    document.body.style.transition = "0.5s all "

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const tooglemode = () => {
    if (mode === 'light') {
      setMode('dark');
      setModeText('Enable Light Mode');
      document.body.style.backgroundColor = "rgb(70 84 80)";
      document.body.style.color = "white";
      document.body.style.transition = "0.5s all "
      showalert("Dark Mode Enabled", "success")
    }
    else {
      showalert("Light Mode Enabled", "success")
      setMode('light');
      setModeText('Enable Dark Mode');
      document.body.style.transition = "0.5s all "
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";

    }
  }
  const darkmode = () => {
    showalert("Dark Mode Enabled", "success")
    setMode('dark');
    document.body.style.transition = "0.5s all "

    document.body.style.backgroundColor = "grey";
    document.body.style.color = "white";
  }
  const lightmode = () => {
    showalert("Light Mode Enabled", "success")
    setMode('light');
    document.body.style.transition = "0.5s all "

    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
  const bluemode = () => {
    showalert("Blue Mode Enabled", "success")
    setMode('info');
    document.body.style.transition = "0.5s all "

    document.body.style.backgroundColor = "rgb(18 174 205)";
    document.body.style.color = "white";
  }
  const yellowmode = () => {
    showalert("Yellowish Mode Enabled", "success")
    setMode('warning');
    document.body.style.transition = "0.5s all "

    document.body.style.backgroundColor = "yellow";
    document.body.style.color = "black";
  }
  const greenmode = () => {
    showalert("Green Mode Enabled", "success")
    setMode('success');
    document.body.style.transition = "0.5s all "

    document.body.style.backgroundColor = "Green";
    document.body.style.color = "White";
  }
  return (
    <>
      <BrowserRouter>
        <Navbar mode={mode} tooglemode={tooglemode} modetext={modetext} darkmode={darkmode} lightmode={lightmode} yellowmode={yellowmode} bluemode={bluemode} greenmode={greenmode} />
        <Alert alert={alert} />

        {/* <Switch>
          <Route path="/about">
            <About />
          </Route>

          <Route path="/">
            <TextForm mode={mode} alert={alert} showalert={showalert} />
          </Route>
        </Switch> */}

        <Routes>
       
            <Route index element={<TextForm mode={mode} alert={alert} showalert={showalert} />} />
            <Route exact path="about" element={<About />} />
           
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
