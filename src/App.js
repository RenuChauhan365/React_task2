//import logo from './logo.svg';


import React,{useState} from 'react';
import './App.css';
//import Ruleshooks from './components/ruleshooks'
//import  UseStateArr  from './components/UseStateArr'
//import UseEffectcompo from './components/UseEffectcompo';
import UseEffect2 from './components/UseEffect2';



function App() {
  console.log(useState())  //  [undefined, ƒ]  this  will return an array
  console.log(useState('Renu vyas ...'))   //  ['Renu vyas ...', ƒ]
  console.log(useState('Vyas ')[0])  // vyas
  const [updateName,setUpdateName]=useState('This is a initial value ....')

  //console.log(updateName)  //  Something....

  let name="Renu Chauhan..."


  const changeName=() => {
    let initialval='This is a initial value ....'
    if(initialval===updateName) {
      setUpdateName("Finally this is  updated")
    }
    else {
      setUpdateName("This is a initial value ....")
    }


    console.log(name)
  }




  return (



    // __________________________

    <div className="App">
      {/*<Ruleshooks/>*/}
      {/*<UseStateArr />*/}
      {/*<UseEffectcompo/>*/}
      <UseEffect2/>



      <hr /> <hr />
      <h1>  {updateName} </h1>
      <button className='btn' onClick={changeName}> Click</button>
      {/*<h1> {updateName}</h1>*/}



    </div>




  );
}

export default App;
