/* eslint-disable no-unused-vars */
import { useEffect } from 'react';
import { useState } from 'react'
function CurrencyData(currency) {
    const [Data,setData]=useState({});
    useEffect(()=>{
        fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`).then((data)=>data.json()).then((res)=>setData(res[currency]))  
    },[currency]);
    console.log(Data);
  return Data;
}

export default CurrencyData
