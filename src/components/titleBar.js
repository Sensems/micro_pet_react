import React from 'react'
import {Link} from 'react-router-dom'

const titleBar = (props) => {

	let link = <Link to={props.url || 'javascript:void(0)'}>{props.secondTitle || ''}</Link>;
	return (
			<div className="titleBar">
				<span>{props.title}</span>
				{props.secondTitle && link}
			</div>
	)
};

export default titleBar