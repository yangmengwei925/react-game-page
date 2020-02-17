import React, { Component } from 'react';
import './style.css'


class App extends Component {
    render(){
        return(
            <div>
                <input type="text" ref="myInput"/><button>添加#3</button>
                
            </div>
        )
    }
}
   
    
    class List extends Component {
        render(){
            console.log(this.props);
            const {list} = this.props;
             return(
                 <div>
                     <ul>
                         {
                             list && list.map((v,i)=>{
                                 return(
                                     <li key={i}>{v}</li>
                                 )
                             })
                         }
                     </ul>
                     
                 </div>
             )
         }
    }
    
 
    class Grade extends Component {
        state={
            list:[
                '吃饭',
                '睡觉',
                "打游戏",
                '打篮球'
            ]
        }
        render() {
         const {list}=this.state;
            return (
                <div>
                 <App />
                        <List list={list}/>
               
          
                </div>
            );
        }
    }
    
   


export default Grade;