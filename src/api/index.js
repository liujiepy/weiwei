import mockRequests from '@/api/mockAjax'
import maoyanRequests from '@/api/ajax'
//导入UUID模块
import { v4 as uuidv4 } from 'uuid';


//模拟citylist数据，对外暴露
export const reqGetCityList = ()=> mockRequests.get('/citylist2')

//猫眼正在上映接口数据 https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E5%BE%B7%E6%B8%85&ci=467&channelId=4
//ct: 武汉
//ci: 57
//channelId: 4
export const ajaxRequests = ()=> maoyanRequests.get('/api/mmdb/movie/v3/list/hot.json?ct=%E5%BE%B7%E6%B8%85&ci=467&channelId=4')


//猫眼即将上映接口
//https://i.maoyan.com/ajax/comingList?ci=57&limit=10&movieIds=&token=&optimus_uuid=5D0C43B0A61D11EC9A341F20AC06D27636B99146197F41A5A31DDF069B738858&optimus_risk_level=71&optimus_code=10
export const comingRequests = ()=> maoyanRequests.get(`/ajax/comingList?ci=57&limit=10&movieIds=&token=&optimus_uuid=5D0C43B0A61D11EC9A341F20AC06D27636B99146197F41A5A31DDF069B738858&optimus_risk_level=71&optimus_code=10`)

//聚合API热门视频接口 http://apis.juhe.cn/fapig/douyin/billboard?key=&type=hot_video   size=?  最大值为50
export const juheRequests = ()=> maoyanRequests.get('/fapig/douyin/billboard?key=dfcf4012072db4c4d6504652d05b7d80&type=hot_video&size=50')