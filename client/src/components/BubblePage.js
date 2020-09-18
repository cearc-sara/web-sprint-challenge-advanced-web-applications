import React, { useState, useEffect } from "react";
import axios from "axios";

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

import { fetchColors } from "../api/fetchColors";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  // fetch your colors data from the server when the component mounts
  const getColors = () => {
    fetchColors()
    .then(res => {
      setColorList(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  useEffect(() => {
    getColors()
  },[])
  // set that data to the colorList state property

  return (
    <>
      <ColorList colors={colorList} getColors={getColors} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
