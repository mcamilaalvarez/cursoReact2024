/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import PropTypes from 'prop-types'
export const FirstApp = ({title, subtitle, name }) => {

  


    return (
        <>
          {/* <code> {newMessage}</code> */}
          <h1> {title} </h1>
          <p>{subtitle }</p>
          <p>{ name}</p>
        </>
    )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string,

}

FirstApp.defaultProps = {
  name: 'Camila Alvarez',
  subtitle: 'No hay subtitulo',
  // title: 'No hay titulo',
}