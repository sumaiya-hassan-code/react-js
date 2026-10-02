
const Button = ({btnText, className}) => {
  return (
    <button className={`bg-orange-400 py-5 px-8 text-white rounded-xl ${className}`}>{btnText}</button>
  )
}

export default Button