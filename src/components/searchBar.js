import React  from 'react'
import Search from '@material-ui/icons/Search';

const searchBar = () => {
		return (
				<div className="searchBox">
					<Search style={{fontSize:'28px',marginRight:'6px',marginBottom:'-8px'}} />
					<span>搜索</span>
				</div>
		)
};

export default searchBar