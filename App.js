import React, { useState } from 'react'

function App() {
   const [ input, setInput]= useState('sai');
   const [ inputMoney, setInputMoney]= useState(0);
   const [ marketData, setMarketData]= useState([]);
    
   
   const handleClick=()=> 
   {
     if(input && inputMoney>0)
     {
      setMarketData([...marketData,{name:input,money:inputMoney}])
      setInput('')
      setInputMoney(0)
     }


     
   }
   
   console.log(marketData);
 

   
    
   
   
  return (
  <div>

    <input type="text" value={input} onChange={(data)=>setInput(data.target.value)}/>
    <input type="number"  value={inputMoney} onChange={(data)=>setInputMoney(data.target.value)}/>
    <button onClick={handleClick}>Add</button>


    <div>
       <ol>
         {marketData.map((data,index)=><li key={index} style={{display:'flex'}}><p>{data.name}</p><p>{data.money}</p></li>)}
       </ol>
    </div>
  </div>
  )
}

export default App