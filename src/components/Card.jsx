
export default function Card({image, selected, onClick}) {
  return (
    <div className="card" >
      <div className={selected && 'selected'}>

        <img src={image} alt=""  className="card-face" />
        <img src={'https://images.pexels.com/photos/1715092/pexels-photo-1715092.jpeg?auto=compress&cs=tinysrgb&w=600'} alt="" onClick={onClick} className="card-back"/>
      </div>
    </div>
  )
}
