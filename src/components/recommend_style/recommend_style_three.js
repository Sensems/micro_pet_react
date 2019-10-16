import React from 'react'
import Chat from '@material-ui/icons/Chat';

const recommend_style_three = (props) => {
	return (
			<div className='recommend_style_three'>
				<p>{props.data.title}</p>
				<div className="imgList">
					<div className="imgWrap"><img src={props.data.imgList[0]} alt=""/></div>
					<div className="imgWrap"><img src={props.data.imgList[1]} alt=""/></div>
					<div className="imgWrap"><img src={props.data.imgList[2]} alt=""/></div>
				</div>
				<div className='tip'>
					<Chat style={{marginBottom: '-8px'}}/>
					<span className="commentNum">{props.data.commentNum}</span>
					<span className="genre">{props.data.genre}</span>
					<span className="time">{props.data.time}</span>
				</div>
			</div>
	)
};

export default recommend_style_three;