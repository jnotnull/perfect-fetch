##fetch的完整解决方案

支持请求和文件上传

##安装 

	npm install perfect-fetch

##使用
	
	import {nodeserver} from '../common/config';
	import {sendrequest, upload} from 'perfect-fetch';

	export function querycmspage(){
		return sendrequest(`${nodeserver}/room/timer/querycmspage`, {
			id: 1,
			name: 'jnotnull'
		})
	}

	export function uploadimg(event){
		return upload(`${nodeserver}/room/timer/upload`, event.target.files[0])
	}