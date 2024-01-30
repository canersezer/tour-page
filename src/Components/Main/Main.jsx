import {data} from '../../data'
import Card from './Card' 
import './Main.css'
const Main = () =>{

    return(
        <div className='card-container'>
            {
                data.map((item,index)=>{
                    return(
                        <Card {...item} key={index}/>
                    )
                })
            }
        </div>
    )
}

export default Main