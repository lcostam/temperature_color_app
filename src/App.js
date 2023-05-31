import { useState } from 'react';
import './App.css';

function App() {
  const [temperature, setTemperature] = useState(25);
  const [tempColor, setTempColor] = useState('warm');

  const decrementTemp = () => {
   const newTemp = temperature-1;
   updateColor(newTemp);
   setTemperature(newTemp);
   
  };

  const incrementTemp = () => {
    const newTemp = temperature+1;
    updateColor(newTemp);
    setTemperature(newTemp);
   };


   const updateColor = (newTemp) => {
    if(newTemp>=30){
      setTempColor('hot')
     }else if(newTemp<=15){
      setTempColor('cold')
     }else{
      setTempColor('warm')
     }
   }

  return (
    <div className="container">
    <div className={`circle ${tempColor}`}>
      <span className="temperature">{temperature}</span>
    </div>
    <div className="buttons">
      <button className={`material-icons ${tempColor}`} onClick={decrementTemp}>remove</button>
      <button className={`material-icons ${tempColor}`} onClick={incrementTemp}>add</button>
    </div>
  </div>
  );
}

export default App;
