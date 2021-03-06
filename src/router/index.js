import {lazy} from 'react'
import Login from '../view/login/login'
import ArticleDetails from '../view/article_details/article_details'
import StoryList from '../view/story_list/story_list'
import Search from '../view/search/search'
import GoodsDetails from '../view/goods_details/goods_details'

const Home = lazy(() => import('../view/home/home'));
	const HomeIndex = lazy(() => import('../view/home_index/home_index'));
	const HomeArticle = lazy(() => import('../view/home_article/home_article'));
	// const HomeFavorite = lazy(() => import('../view/home_favorite/home_favorite'));
	const HomeStore = lazy(() => import('../view/home_favorite/home_store'));
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
				component:HomeStore
			},
			{
				path:"/home/my",
				component:HomeMy,
				auth: true
			},
		]
	},
	{
		path:"/articleDetails/:articleId",
		component:ArticleDetails,
		exact:true
	},
	{
		path:"/storyList",
		component:StoryList,
		exact:true
	},
	{
		path:"/search",
		component:Search,
		exact:true
	},
	{
		path:"/goodsDetails/:goodId",
		component:GoodsDetails,
		// exact:true
	},
];

export default routes