/**
 * Notes: 全局/首页模块业务逻辑
 * Date: 2021-03-15 04:00:00 
 * Ver : CCMiniCloud Framework 2.0.1 ALL RIGHTS RESERVED BY cclinux0730 (wechat)
 */

const BaseProjectService = require('./base_project_service.js');
const setupUtil = require('../../../framework/utils/setup/setup_util.js');
const dataUtil = require('../../../framework/utils/data_util.js');
const NewsModel = require('../model/news_model.js');
const ActivityModel = require('../model/activity_model.js');
const MeetModel = require('../model/meet_model.js');

class HomeService extends BaseProjectService {

	async getSetup(key) {
		return await setupUtil.get(key);
	}

	/**首页列表 */
	async getHomeList() {
		let list = [];

		// 公告
		let orderBy = {
			'NEWS_ORDER': 'asc',
			'NEWS_ADD_TIME': 'desc'
		};
		let fields = 'NEWS_VIEW_CNT,NEWS_PIC,NEWS_CATE_NAME,NEWS_TITLE,NEWS_DESC,NEWS_ADD_TIME';
		let where = { NEWS_STATUS: 1, NEWS_VOUCH: 1 };

		let retList = await NewsModel.getAll(where, fields, orderBy);
		for (let k = 0; k < retList.length; k++) {
			list.push({
				type: 'news',
				ext: retList[k].NEWS_CATE_NAME,
				title: retList[k].NEWS_TITLE,
				id: retList[k]._id,
				desc: retList[k].NEWS_DESC,
				pic: retList[k].NEWS_PIC,
				cnt: retList[k].NEWS_VIEW_CNT,
			})
		}

		// 活动
		orderBy = {
			'ACTIVITY_ORDER': 'asc',
			'ACTIVITY_ADD_TIME': 'desc'
		};
		fields = 'ACTIVITY_VIEW_CNT,ACTIVITY_OBJ.cover,ACTIVITY_CATE_NAME,ACTIVITY_TITLE,ACTIVITY_DESC,ACTIVITY_ADD_TIME';
		where = { ACTIVITY_STATUS: 1, ACTIVITY_VOUCH: 1 };

		retList = await ActivityModel.getAll(where, fields, orderBy);
		for (let k = 0; k < retList.length; k++) {
			list.push({
				type: 'activity',
				ext: retList[k].ACTIVITY_CATE_NAME,
				title: retList[k].ACTIVITY_TITLE,
				id: retList[k]._id,
				pic: retList[k].ACTIVITY_OBJ.cover,
				time: retList[k].ACTIVITY_ADD_TIME,
				cnt: retList[k].ACTIVITY_VIEW_CNT,
			})
		}


		// 预约
		orderBy = {
			'MEET_ORDER': 'asc',
			'MEET_ADD_TIME': 'desc'
		};
		fields = 'MEET_VIEW_CNT,MEET_OBJ.cover,MEET_CATE_NAME,MEET_TITLE,MEET_DESC,MEET_ADD_TIME';
		where = { MEET_STATUS: 1, MEET_VOUCH: 1 };

		retList = await MeetModel.getAll(where, fields, orderBy);
		for (let k = 0; k < retList.length; k++) {
			list.push({
				type: 'meet',
				ext: retList[k].MEET_CATE_NAME,
				title: retList[k].MEET_TITLE,
				id: retList[k]._id,
				pic: retList[k].MEET_OBJ.cover,
				time: retList[k].MEET_ADD_TIME,
				cnt: retList[k].MEET_VIEW_CNT,
			})
		}

		if (list.length == 0) {
			let orderBy = {
				'NEWS_ORDER': 'asc',
				'NEWS_ADD_TIME': 'desc'
			};
			let fields = 'NEWS_PIC,NEWS_CATE_NAME,NEWS_TITLE,NEWS_DESC,NEWS_ADD_TIME';

			let where = {};
			where.NEWS_STATUS = 1; // 状态    

			let retList = await NewsModel.getAll(where, fields, orderBy, 10);
			for (let k = 0; k < retList.length; k++) {
				list.push({
					type: 'news',
					ext: retList[k].NEWS_CATE_NAME,
					title: retList[k].NEWS_TITLE,
					id: retList[k]._id,
					desc: retList[k].NEWS_DESC,
					pic: retList[k].NEWS_PIC,
					time: retList[k].NEWS_ADD_TIME
				})
			}
		}

		list.sort(dataUtil.objArrSortDesc('time'));

		return list;
	}
}

module.exports = HomeService;