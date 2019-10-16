import React from 'react'
import Chat from '@material-ui/icons/Chat';

const recommend_style_two = (props) => {
	return (
			<div className='recommend_style_two'>
				<div className="left">
					<p>{props.data.title}</p>
					<div className='tip'>
						<Chat style={{marginBottom:'-8px'}} />
						<span className="commentNum">{props.data.commentNum}</span>
						<span className="genre">{props.data.genre}</span>
						<span className="time">{props.data.time}</span>
					</div>
				</div>
				<div className="right">
					<img src={props.data.img_url} alt=""/>
				</div>
			</div>
	)
};

export default recommend_style_two;