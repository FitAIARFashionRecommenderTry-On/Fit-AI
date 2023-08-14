import React,{useState} from 'react'
import { Header } from './Header'
import { Footer } from './Footer'
import { Feedback } from './Feedback'
import {Shop} from './Shop';
import { Body } from './Body';

export const Page = ( ) => {
  // const [showOutput, setShowOutput] = useState(false);

  // const handleButton = () => {
  //   setShowOutput(!showOutput);
  // };
  return (
   <>
      {/* <Body /> */}
      <Shop />

   </>
  )
}
