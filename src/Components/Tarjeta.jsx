import React from 'react'

const Tarjeta = ({ bday, styles }) => {
    let estilos = { backgroundColor: styles.background, color: styles.color }
  return (
    <div className='tarjeta' style={estilos}>
          <h3>Estas invitado al cumple de {bday.name}</h3>
          <h4>Te espero el dia {bday.date} a las 3 pm</h4>
          <h2>No faltes</h2>
          <h4>Para: {bday.invt}</h4>
    </div>
  )
}

export default Tarjeta