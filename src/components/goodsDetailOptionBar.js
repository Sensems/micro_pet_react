import React from 'react'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const goodsDetailOptionBar = (props) => {
	return (
			<div style={props.style} onClick={props.onClick} className={`goodsDetailOptionBar ${props.className}`}>
				<div className="title">
					<span>{props.title}</span>
				</div>
				<div className="content">
					{props.children}
				</div>
				<div className="leftIcon">
					<KeyboardArrowRightIcon />
				</div>
			</div>
	)
};

export default goodsDetailOptionBar;