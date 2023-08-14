import './App.css';
import React,{useState} from 'react';
// import { Page } from './Components/Page';
import { Header } from './Components/Header';
import { Shop } from './Components/Shop';
import { Body } from './Components/Body';
import Webcam from "react-webcam";


function App() {

  // const [state, setState] = useState(false);
  const [buttontxt, setButtontxt] = useState('initial');

  const handleChange = () => {
    if (pageState === "initial") {
      setButtontxt("clicked");
    } else {
      setButtontxt("initial");
    }
  }

  return (
  <>
    <Header /> <br></br>
    <div className='d-flex justify-content-center align-items-center'>
      <button className="btn btn-primary center" onClick={handleChange}>
        {buttontxt === "initial" ? "Try Fit AI" : "Scan with Camera"}
      </button>
    </div>
    {/* <Page /> */}
    {/* {state ? (<Shop />):(<Body />)} */}
    {state ? (<Shop />) : (<Body />)}
  </>
  );
}

export default App;
