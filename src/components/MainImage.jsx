const MainImage = ({women, title}) => {

const handleClick = (e) => {
    e.target.parentElement.style.background = "red"
}

  return (
    <div className="image" onClick={handleClick}>
        <img src={women} alt="woman" />
        <p>{title ? title : "Default Title"}</p>
    </div>
  )
}

export default MainImage
