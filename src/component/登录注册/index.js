import React, { Component } from 'react';
import {MocknetWork} from "../../until"
class Login extends Component {
    state={
        username:"",
        password:"",
    }
   
      userLoginIn=()=>{
          let obj={
              username:this.state.username,
              password:this.state.password
          }
         //数据接口请求  
         MocknetWork('/login/login',obj).then(data=>{
            window.confirm(data)
        })  
      }
    render() {
        const {username,password}=this.state;
        return (
        //     <div>
        //         账户：
        //         <input type="text" value={username} onChange={(ev)=>this.setState({username:ev.target.value})}/></br>
        //         密码：
        //         <input type="password" value={username} onChange={(ev)=>this.setState({ password:ev.target.value})}/>
        //    <button onClick={()=>alert(this.state.username)}>登录</button>
        //     </div>\
        <div>
           
          <p>
               账户:
                    <input type="text" value={username} onChange={(ev)=>this.setState({username:ev.target.value})} />
              </p> 
  <p>
      密码：
      <input type="password" value={password} onChange={(ev)=>this.setState({password:ev.target.value})} />
      <br></br>
      {/* <button onClick={()=>alert(this.state.username)}>点击登录</button> */}
     
  </p>
  <button onClick={()=>this.userLoginIn()}>注册</button>
        </div>
        );
    }
}

export default Login;