// Always  write it inside the component or fuction
// component name must  be  pascal-case
// we can directly  import  or can directly write it using React.hookname
 // dont call hooks inside  loops , conditions or nested functions

import React, {useEffect, useState} from 'react'



function UseEffect2() {


	const [num , setNum] = useState(0)
	const [nums , setNums] = useState(0)


	//  ________________always  executed  __________________

// useEffect(() =>{
//	alert(" I  am Runnning........")
// })

//  ________________ executed when page refreshes one __________________

// useEffect(() =>{
//	alert(" I  am Runnning........")
// } , [])



//  ________________ executed when  value of num is change __________________

// useEffect(() =>{
//	alert(" I  am Runnning........")
// } , [num])


 //  ________________ executed when  value of nums is change __________________

 useEffect(() =>{
	alert(" I  am Runnning........")
 } , [nums])





useEffect(() =>{
	alert(" I  am Runnning........")
 } , [num])

	return (

		<div>
			<button onClick={ () => { setNum(num+1)}}> Click  {num} </button>

			<br/>
			<button onClick={ () => { setNums(nums+1)}}> Click2  {nums} </button>


		</div>

	)
}

export default UseEffect2