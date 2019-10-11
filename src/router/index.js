import {lazy} from 'react'
import Login from '../view/login/login'
const Home = lazy(() => import('../view/home/home'));

const routes = [
	{
		path:"/",
		component:Login,
		exact:true
	},
	{
		path:"/index",
		component:Home,
		exact:true
	},
];

export default routes