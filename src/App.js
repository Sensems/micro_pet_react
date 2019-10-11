import React, {Suspense} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import CircularProgress from '@material-ui/core/CircularProgress';
import routes from './router/index'
let style = {
	fallbackBoxStyle: {
		position: 'fixed',
		top: '0',
		left: '0',
		bottom: '0',
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
			<Router>
				<Suspense fallback={fallbackBox}>
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
				</Suspense>
			</Router>
  );
}

export default App;
