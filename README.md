##fetch的完整解决方案

支持请求和文件上传

##安装 

	npm install perfect-fetch

##使用
	
	import {nodeserver} from '../common/config';
	import {sendrequest, upload} from 'prefech-fetch';

	export function querycmspage(data){
		return sendrequest(`${nodeserver}/room/timer/querycmspage`, data)
	}

	export function uploadimg(input){
		return upload(`${nodeserver}/room/timer/upload`, input)
	}