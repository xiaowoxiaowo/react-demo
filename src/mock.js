var Mock = require('mockjs')
Mock.setup({
  timeout: '200-600'
})
var data = Mock.mock('/mock', 'post', {
  /*'data|4':[{   			//生成四个如下格式的数据
    'id|+1':1, 						//数字从1开始，后续依次加1
    'name':'@cname',			//名字为随机中文名
    'age|18-28':25, 			//年龄是18-28之间的随机数
    'sex|1':['男','女'],	 //性别是数组里的随机一项
    'job|1':['web','teacher','python','php'],   //job是数组里的随机一项
    'url': '@url',
    'text': '@csentence'
  }]*/
  'data|4':['@cname']
})
// 输出结果
export default data