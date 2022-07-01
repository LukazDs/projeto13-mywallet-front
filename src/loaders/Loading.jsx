import React from 'react';
import {ThreeDots} from "react-loader-spinner";
const Loading = () => {
  return (
    <ThreeDots color='#ffffff' width={50} height={50} timeout={3000}/>
  )
}

export default Loading;
