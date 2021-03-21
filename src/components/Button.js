import PropTypes from 'prop-types'

const Button = ({color, text, onClick}) => {
    return (
        <button onClick={onClick} style={{backgroundColor : color}} 
        className='btn btn-block'>
            {text}
        </button>
    )
}

Button.defaultProps = {
    color : '#848888',
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onClick: PropTypes.func,
}


export default Button
