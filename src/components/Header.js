import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
        <Button color='green' 
          text = {showAdd ? 'Close': 'Add'}
          onClick = {onAdd}
          color = {showAdd ? 'red': 'green'}>
        </Button>
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker'
}

Header.propTypes = {
  title: PropTypes.string.isRequired
}

// css in js
// const headingStyle = {
//   color: 'green',
//   backgroundColor: 'blue'
// };


export default Header