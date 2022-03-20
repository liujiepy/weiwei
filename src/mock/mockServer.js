import Mock from 'mockjs'
import citylist2 from '@/mock/citylist2.json'

//调用Mock的一个mock对象，传递2个参数。 第一个为：请求地址  第二个为：请求的数据
Mock.mock('/mock/citylist2',{code:200,data:citylist2});