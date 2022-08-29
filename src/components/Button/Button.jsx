import estilos from'./button.module.css'

const Button = ({value, variant}) => {
  return (
    <button className={estilos[variant]}>{value}</button>
  )
}

export default Button;