/** @format */

import React, { useEffect } from 'react'
import { Core } from './components/core'

const App = () => {
	useEffect(() => {
		console.log('first: ');
	
	}, [])
	

	return <Core></Core>
}

export default App

