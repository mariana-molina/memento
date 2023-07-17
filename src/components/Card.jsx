
export default function Card({image, selected, onClick}) {
  return (
    <div className="card">
      <div className={selected && 'selected'}></div>
      <img src={image} alt=""  className="card-face" />
      <img src={'/assets/cat.jpg'} alt="" className="card-back"/>
    </div>
  )
}
