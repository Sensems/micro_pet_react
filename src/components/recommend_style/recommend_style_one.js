import React from 'react'
import Chat from '@material-ui/icons/Chat';

const recommend_style_one = (props) => {
	return (
			<div className='recommend_style_one' onClick={props.onClick}>
				<p>{props.data.title}</p>
				<div className='tip'>
					<Chat style={{marginBottom:'-8px'}} />
					<span className="commentNum">{props.data.commentNum}</span>
					<span className="genre">{props.data.genre}</span>
					<span className="time">{props.data.time}</span>
				</div>
			</div>
	)
};

export default recommend_style_one;