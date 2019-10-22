import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';

import routes from './router/index'
import './App.css'
let style = {
	fallbackBoxStyle: {
		position: 'fixed',
		top: '0',
		left: '0',
		bottom: '54px',
		right: '0',
		background: 'rgb(255,255,255,.6)',
	},
	CircularProgressStyle:{
		position: 'absolute',
		left:'50%',
		top:'50%',
		color: '#00bfff',
		marginLeft: '-20px',
		marginTop: '-20px',
	}
};

function App() {
	let fallbackBox = <div style={style.fallbackBoxStyle}><CircularProgress style={style.CircularProgressStyle}/></div>;
  return (
  		<div className="animate-route">
				<Router>
					<Suspense fallback={fallbackBox}>
						<CssBaseline />
						<Switch>
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
						</Switch>
					</Suspense>
				</Router>
			</div>
  );
}

export default App;
