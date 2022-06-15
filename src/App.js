import React, { Component, useState } from 'react';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';

import './App.css';
import Main from './component/main/main';
import SignupAdmin from './component/sign-up-admin/signup';
import Signup from './component/sign-up/signup';

function App()  {


	return (
	<Router>
		<div className="App">

		<Routes>
				<Route exact path='/' element={< Main />}></Route>
			
				<Route exact path='/admin-signup' element={< SignupAdmin />}></Route>
        <Route exact path='/user-signup' element={< Signup />}></Route>
		</Routes>
		</div>
	</Router>
);
}


export default App;
