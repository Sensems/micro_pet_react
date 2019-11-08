import Mock from 'mockjs'

const Random = Mock.Random;

const mockOption = [
	{
		url:'/api/getProductList',
		method:'post',
		data:{
			"data|10":[
				{
					"id|+1":1,
					"title": Random.ctitle(3,5),
					"img_url":Random.dataImage('200x130')
				}
			]
		}
	},
	{
		url:'/api/getGoodDetail',
		method:'post',
		data:{
			"data":[
				{
					"id|+1":1,
					"title": Random.ctitle(3,5),
					'describe': Random.ctitle(3,20),
					"img_url_list":[Random.dataImage('400x300'),Random.dataImage('400x300'),Random.dataImage('400x300'),],
					"price|99-9999":9999,
					// 'tip':''
					'tip': {
						'value':Random.ctitle(8,20),
						'url':''
					},
					"favorite|1": true
				}
			]
		}
	}
];

mockOption.map(e => {
	return Mock.mock(e.url, e.method, e.data);
});


export default Mock;