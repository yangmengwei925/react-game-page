
import Mock from '../mock'

export default function FetchnetWork(url){
     return fetch(url).then(res=>{return res.json();})
 }

// export default FetchnetWork


///假的异步请求

export function MocknetWork(url,obj){
    return new Promise(res=>{
        setTimeout(
            ()=>res(Mock[url](obj)),Math.random()*5000
        )
    })
}