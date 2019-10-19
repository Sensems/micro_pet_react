import React from 'react';
import HeaderOne from '../../components/header_one'
import style from './search.module.scss'
import Button from '@material-ui/core/Button'
import TitleBar from '../../components/titleBar'
import Chip from '@material-ui/core/Chip';

class Search extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			historySearchList: [],
		}
	}

	UNSAFE_componentWillMount() {
		if(window.localStorage.getItem('historySearchList')) {
			this.setState({
				historySearchList: JSON.parse(window.localStorage.getItem('historySearchList'))
			})
		}else {
			window.localStorage.setItem('historySearchList','[]')
		}
	}

	render() {
		let data = this.state;
		return (
				<div>
					<HeaderOne title="搜索" history={this.props.history} />
					<div className={style.search}>
						<div className={style.searchBox}>
							<input ref={el => this.searchVal = el} type="text" onKeyDown={this.inputKeyDown} autoFocus="autoFocus"/>
							<Button onClick={this.search} variant="contained" color="primary">搜索</Button>
						</div>
					</div>
					<TitleBar title="历史搜索" />
					<div className={style.historySearch}>
							{data.historySearchList.map((item,key) => {
								return (
										<Chip
												key={key}
												label={item}
												onDelete={this.handleChipDelete.bind(this,key)}
												style={{marginRight:'8px',marginBottom:'8px'}}
										/>
								);
							})}
					</div>
				</div>
		);
	}


	search = () => {
		this.joinToLocalHistorySearch();
		this.searchVal.value = ''
	};

	//添加历史搜索
	joinToLocalHistorySearch = () => {
		let historyList = JSON.parse(window.localStorage.getItem('historySearchList'));
		for(let i in historyList) {
			if (historyList[i] === this.searchVal.value && this.searchVal.value === "") {
				return false;
			}
		}
		historyList.push(this.searchVal.value);
		this.setState({
			historySearchList: historyList
		}, () => {
			window.localStorage.setItem('historySearchList', JSON.stringify(this.state.historySearchList));
		});
	};

	//删除历史搜索
	handleChipDelete = (index) => {
		let historyList = JSON.parse(window.localStorage.getItem('historySearchList'));
		historyList.splice(index, 1);
		this.setState({
			historySearchList: historyList
		}, () => {
			window.localStorage.setItem('historySearchList', JSON.stringify(this.state.historySearchList));
		})
	};

	inputKeyDown = (e) => {
		if(e.keyCode === 13) {
			this.joinToLocalHistorySearch();
		}
	}

}

export default Search;