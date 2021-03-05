import PropTypes from 'prop-types'

export const Button = ({text, color, onClick}) => {
  return (
    <button className='btn'
    onClick={onClick}
    style={{backgroundColor: color}}>
      {text}
    </button>
  )
}

export default Button

//default propperty if you don't pass any
Button.defaultProps = {
  color: 'steelBlue'
}

Button.propTypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  onClick: PropTypes.func
}