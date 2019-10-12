import {lazy} from 'react'
import Login from '../view/login/login'
const Home = lazy(() => import('../view/home/home'));
	const HomeIndex = lazy(() => import('../view/home_index/home_index'));
	const HomeArticle = lazy(() => import('../view/home_article/home_article'));
	const HomeFavorite = lazy(() => import('../view/home_favorite/home_favorite'));
	const HomeMy = lazy(() => import('../view/home_my/home_my'));


const routes = [
	{
		path:"/",
		component:Login,
		exact:true
	},
	{
		path:"/home",
		component:Home,
		routes: [
			{
				path:"/home/",
				component:HomeIndex
			},
			{
				path:"/home/article",
				component:HomeArticle
			},
			{
				path:"/home/favorite",
				component:HomeFavorite
			},
			{
				path:"/home/my",
				component:HomeMy
			},
		]
	},
];

export default routes