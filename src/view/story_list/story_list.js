import React from 'react'
import HeaderOne from '../../components/header_one';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import './story_list_e.scss'
import 'antd-mobile/dist/antd-mobile.css';
import { PullToRefresh } from 'antd-mobile';
import Chat from '@material-ui/icons/Chat';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

class StoryList extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			refreshing: false,
			height:null
		}
	}

	componentDidMount() {
		this.setState({
			height: document.documentElement.clientHeight
		})
	}


	render() {
		// let data = this.state;
		return (
				<div>
					<HeaderOne title="故事" history={this.props.history} />
					<PullToRefresh
							damping={60}
							distanceToRefresh={25}
							className="pullToRefresh"
							// style={{overflow: 'auto',height:data.height + 'px',paddingBottom:'20px'}}
							indicator={{ deactivate: '下拉可以刷新' }}
							direction={'up'}
							refreshing={this.state.refreshing}
							onRefresh={() => {
								this.setState({ refreshing: true });
								setTimeout(() => {
									this.setState({ refreshing: false });
								}, 1000);
							}}
					>
							<div className="storyAllList" ref={el => this.storyList = el}>
								<Card className="storyAllItem">
									<CardActionArea>
										<CardMedia
												component="img"
												alt="Contemplative Reptile"
												height="140"
												image="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3989456927,3058243259&fm=15&gp=0.jpg"
												title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												Lizard
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
												across all continents except Antarctica
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<div className="tip">
											<span><Chat style={{fontSize:20}}/>23.5k</span>
											<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
										</div>
									</CardActions>
								</Card>
								{/*<Card className="storyAllItem">
									<CardActionArea>
										<CardMedia
												component="img"
												alt="Contemplative Reptile"
												height="140"
												image="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3989456927,3058243259&fm=15&gp=0.jpg"
												title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												Lizard
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
												across all continents except Antarctica
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<div className="tip">
											<span><Chat style={{fontSize:20}}/>23.5k</span>
											<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
										</div>
									</CardActions>
								</Card>
								<Card className="storyAllItem">
									<CardActionArea>
										<CardMedia
												component="img"
												alt="Contemplative Reptile"
												height="140"
												image="https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=3989456927,3058243259&fm=15&gp=0.jpg"
												title="Contemplative Reptile"
										/>
										<CardContent>
											<Typography gutterBottom variant="h5" component="h2">
												Lizard
											</Typography>
											<Typography variant="body2" color="textSecondary" component="p">
												Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
												across all continents except Antarctica
											</Typography>
										</CardContent>
									</CardActionArea>
									<CardActions>
										<div className="tip">
											<span><Chat style={{fontSize:20}}/>23.5k</span>
											<span><FavoriteBorder style={{fontSize:20}} />22.2k</span>
										</div>
									</CardActions>
								</Card>*/}
						</div>
					</PullToRefresh>
				</div>
		);
	}
}

export default StoryList;