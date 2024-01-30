const Card = ({id,desc,image,title})=> {
    
    return(
  <div className="card-container">     
    <div className="cards">
        <div className="title">
            <h1>{title}</h1>
        </div>
        <img src={image} />
        <div className="card-over">
            <p>{desc}</p>
        </div>
    </div>
    </div>
    )
}

export default Card