import React from 'react';
import HeaderOne from '../../components/header_one'
import style from './search.module.scss'
import Button from '@material-ui/core/Button'

class Search extends React.Component{
	constructor(props) {
		super(props);
		this.state  = {

		}
	}

	render() {
		return (
				<div>
					<HeaderOne title="搜索" history={this.props.history} />
					<div className={style.search}>
						<div className={style.searchBox}>
							<input type="text" autoFocus="autoFocus"/>
							<Button>搜索</Button>
						</div>
					</div>
				</div>
		);
	}

}

export default Search;