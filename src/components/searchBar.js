import React  from 'react'
import Search from '@material-ui/icons/Search';

const searchBar = (props) => {
		return (
				<div className="searchBar" onClick={props.onClick}>
					<div className="searchBox">
						<Search style={{fontSize:'28px',marginRight:'6px',marginBottom:'-8px'}} />
						<span>搜索</span>
					</div>
				</div>
		)
};

export default searchBar