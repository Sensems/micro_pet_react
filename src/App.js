import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';
import routes from './router/index'

function App() {
  return (
			<Router>
				{/*<div className="App">
					<header className="App-header">
						<img src={logo} className="App-logo" alt="logo" />
						<p>
							Edit <code>src/App.js</code> and save to reload.
						</p>
						<Link
								to="/login"
								className="App-link"
						>
							go to login
						</Link>
					</header>
				</div>*/}
				{
					routes.map((router,index)=>{
						if(router.exact){
							return <Route exact key={index} path={router.path}
								render = {
									props =>(
										<router.component {...props} routes = {router.routes}/>
									)
								}
							/>
						}else{
							return <Route key={index} path={router.path}
								render = {
									props =>(
										<router.component {...props} routes = {router.routes} />
									)
								}
							/>
						}
					})
				}
			</Router>
  );
}

export default App;
