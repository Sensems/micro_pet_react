import React from 'react';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'



const headerOne = (props) => {

	let goBack = () => {
		props.history.goBack()
	};

	return (
			<div className="headerOne">
				<span className="leftBtn" onClick={goBack}>
					<KeyboardArrowLeft style={{fontSize:40}} />
				</span>
				<p>{props.title || ''}</p>
			</div>
	)
};

export default headerOne;