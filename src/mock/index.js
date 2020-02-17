//导出数据
import  LoginData from './login.json'
//模拟后台
// const Mock={
//     '/login/login':function(){
//         //注册接口
//         return '注册成功'
//     },
//     '/login/check':function(){
//         //登录
//         return LoginData
//     }
    
// }
 const Mock={
     '/login/login'(obj){
let islogin=LoginData.some(item=>item.username===obj.username)
if(islogin) return "账户已注册"
LoginData.push(obj)
return '注册成功'
     }
 }
export default Mock