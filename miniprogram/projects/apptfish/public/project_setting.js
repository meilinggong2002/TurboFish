module.exports = { //apptfish
	PROJECT_COLOR: '#5c9ce3',
	NAV_COLOR: '#ffffff',
	NAV_BG: '#5c9ce3',

	// setup
	SETUP_CONTENT_ITEMS: [
		{ title: '关于我们', key: 'SETUP_CONTENT_ABOUT' },
	],

	// 用户
	USER_REG_CHECK: false,
	USER_FIELDS: [
		 
	],
	USER_CHECK_FORM: {
		name: 'formName|must|string|min:1|max:30|name=昵称',
		mobile: 'formMobile|must|mobile|name=手机',
		pic: 'formPic|must|string|name=头像',
		forms: 'formForms|array'
	},

	NEWS_NAME: '内容管理',
	NEWS_CATE: [
		{ id: 1, title: '公告通知', style: 'leftbig1' },
		{ id: 2, title: '钓鱼宝典', style: 'rightpic' },
	],
	NEWS_FIELDS: [

	],

	MEET_NAME: '预约',
	MEET_CATE: [
		{ id: 1, title: '湖库', style: 'leftbig1' }, 
		{ id: 2, title: '江河', style: 'leftbig1' }, 
		{ id: 3, title: '鱼塘', style: 'leftbig1' }, 
		{ id: 4, title: '海区', style: 'leftbig1' }, 
	],
	MEET_CAN_NULL_TIME: false, // 是否允许有无时段的日期保存和展示
	MEET_FIELDS: [
		{ mark: 'cover', title: '封面图片', type: 'image', min: 1, max: 1, must: true }, 
		{ mark: 'tag', title: '特点标签', type: 'rows', ext: { titleName: '标签', maxCnt: 5, minCnt: 0 }, must: false },
		{ mark: 'content', title: '详情', type: 'content', must: true },
	],

	MEET_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, min: 2, max: 30, edit: false },
		{ mark: 'phone', type: 'text', len: 11, title: '手机号', must: true, edit: false },
	],

	// 时间默认设置
	MEET_NEW_NODE:
	{
		mark: 'mark-no', start: '10:00', end: '10:59', limit: 50, isLimit: true, status: 1,
		stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
	},
	MEET_NEW_NODE_DAY: [
		{
			mark: 'mark-am', start: '08:00', end: '19:59', limit: 30, isLimit: true, status: 1,
			stat: { succCnt: 0, cancelCnt: 0, adminCancelCnt: 0, }
		} 
	],

	ACTIVITY_NAME: '活动比赛',
	ACTIVITY_CATE: [
		{ id: 1, title: '活动' }, 
		{ id: 2, title: '比赛' }, 
		{ id: 3, title: '找搭子' }, 

	],
	ACTIVITY_FIELDS: [
		{ mark: 'cover', title: '活动封面', type: 'image', min: 1, max: 1, must: true },
		{ mark: 'desc', title: '活动内容', type: 'content', must: true },
	],
	ACTIVITY_JOIN_FIELDS: [
		{ mark: 'name', type: 'text', title: '姓名', must: true, max: 30 },
		{ mark: 'phone', type: 'mobile', title: '手机', must: true, edit: false }
	],


	COMMENT_NAME: '评价',
	COMMENT_FIELDS: [
		{ mark: 'content', title: '评价内容', type: 'textarea', must: true },
		{ mark: 'img', title: '图片', type: 'image', min: 0, max: 8, must: false },

	],

}