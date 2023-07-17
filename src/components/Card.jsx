
export default function Card({image, selected, onClick}) {
  return (
    <div className="card" >
      <div className={selected && 'selected'}>

        <img src={image} alt=""  className="card-face" />
        <img src={'/assets/cat.jpg'} alt="" onClick={onClick} className="card-back"/>
      </div>
    </div>
  )
}
