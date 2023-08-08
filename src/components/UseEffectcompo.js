import React,{useEffect,useState} from 'react'

function UseEffectcompo() {

	const [count,setCount]=useState(0)
	// This is a UseEffect

	//useEffect(() => {
	//	console.log("UseEffect...");
	//	if(count>=1) {
	//		document.title=`Chats(${count})`
	//	}
	//	else {
	//		document.title=`Chats`
	//	}
	//})

	//________________________________________________________________


	//useEffect(() => {
	//	if(count>=1) {
	//		document.title=`Chats(${count})`
	//	}

	//	else {
	//		document.title=`Chats`
	//	}

	//},[])


	///________________________________________________________________


	useEffect(() => {
		if(count>=1) {
			document.title=`Chats(${count})`
		}


		else {
			document.title=`Chats`
		}
	},[count])












	console.log(" outside the  useEffect")

	return (
		<div>

			<h1> UseState Info </h1>
			<h3>Count <br /> {count}</h3>

			<button onClick={() => setCount(count+1)}>  Counter </button>
		</div>
	)
}

export default UseEffectcompo