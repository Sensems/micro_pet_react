import React from 'react';
import style from './productList.module.scss';

const productList = (props) => {

	let goToGoodsDetail = (id) => {
		props.history.push(`/goodsDetails/${id}`)
	};

	return (
			<div className={style.productList}>
				{props.data.map(item => {
					return <div className={style.productItem} onClick={goToGoodsDetail.bind(this,item.id)} key={item.id}>
										<img src={item.img_url} alt=""/>
										<p className={style.title}>{item.title}</p>
										<p className={style.price}><span>￥</span>339</p>
									</div>
				})}
			</div>
	)
};



export default productList;