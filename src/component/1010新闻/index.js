import React from 'react'
import FetchnetWork from '../../until'
import './style.css'
class NewList extends React.Component{
    state={
        newlist:[],
        page:1,
        newlistUrl:"/data/content/list.json?categoryIds=201129%2C205968&pageSize=",
        pagesize:10
    }

    getData=()=>{
        let {newlist,page,newlistUrl,pagesize} = this.state;
        this.setState({page:++page})

        FetchnetWork(newlistUrl+pagesize+"&pageNo="+page)
        .then(
            (data)=>{  
                data.data.forEach(item=>{
                    newlist.push(item)
                })
                this.setState({newlist})             
            }
        )
    }
    render(){
        return <div>
                新闻列表
                {
                    this.state.newlist.map(item=>{
                        return <div key={item.id}>
                            <p>{item.id}</p>  
                            
                          <dl>
                             <dt><img src={item.imgPath} className="img"/> </dt> 
                              <dd>{item.title}</dd>
                              <dd>{item.contentKey}</dd>
                        
                          </dl>
             
                        </div>
                        
                    })
                }
            <button onClick={()=>this.getData()}>点击加载更多</button>
        </div>
    }
    componentDidMount(){
        let {page,newlistUrl,pagesize} = this.state
        FetchnetWork(newlistUrl+pagesize+"&pageNo="+page).then(
            (data)=>{  
                this.setState({newlist:data.data})    
            }
        ).catch((error)=>{
                console.log(error)
        })
        
    }
}
export default NewList