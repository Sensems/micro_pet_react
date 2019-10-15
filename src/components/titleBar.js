import React from 'react'
import {Link} from 'react-router-dom'

const titleBar = (props) => {
	return (
			<div className="titleBar">
				<span>{props.title}</span>
				<Link to={props.url || 'javascript:void(0)'}>
					{props.secondTitle || ''}
				</Link>
			</div>
	)
};

export default titleBar