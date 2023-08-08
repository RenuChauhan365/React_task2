import React, {useState} from 'react'

function UseStateArr() {



	const [ myName , setMyName]  = useState('  UseState  with Array..')

//  this is an array of objects

	let bioData = [
		{id:1 , myName:"maya  ",age:20},
		{id:2 , myName:"Kaya  ",age:20},
		{id:3 , myName:"Renu ",age:20}
	]

const [ myArr ,setmyArr] = useState(bioData)

	const clearArray = () =>{
		setmyArr([]);
	}
	return (
		<>
		{
		  myArr.map(  (currElem , index ) =>
           <h1 key = {index}> {currElem.myName } , {currElem.age}</h1>
		  )

			}
			 <button onClick={clearArray}> Delete </button>
		</>
	)
}

export default UseStateArr