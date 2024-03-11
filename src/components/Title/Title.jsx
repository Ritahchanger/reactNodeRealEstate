import "./Title.css"
const Title = ({title,subtitle}) => {
  return (
    <div className="title-container">
        <p className="title">{title}</p>
        <p className="subtitle">{subtitle}</p>
    </div>
  )
}

export default Title