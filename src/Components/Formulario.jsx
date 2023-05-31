import React from 'react'

const Formulario = ({setBday, setStyles}) => {
  return (
    <div>
        <label >Nombre del compleañero: </label>
        <input type="text" onChange={(e) => setBday((prevBday)=>({...prevBday, name: e.target.value}))} />

        <label >Fecha: </label>
        <input type="date" onChange={(e) => setBday((prevBday) => ({ ...prevBday, date: e.target.value }))} />

        <label >Nombre del invitado: </label>
        <input type="text" onChange={(e) => setBday((prevBday) => ({ ...prevBday, invt: e.target.value }))} />   

        <label >fondo: </label>
        <select onChange={(e) => setStyles((prevStyles) => ({...prevStyles, background: e.target.value}))}>
              <option value="transparent">transparent</option>
              <option value="black">black</option>
              <option value="yellow">yellow</option>
              <option value="red">red</option>
              <option value="pink">pink</option>
              <option value="orange">orange</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
        </select>
          
        <label >Color letra: </label>
        <select onChange={(e)=> setStyles((prevStyles)=>({...prevStyles, color: e.target.value}))}>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="yellow">yellow</option>
              <option value="red">red</option>
              <option value="pink">pink</option>
              <option value="orange">orange</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
        </select>
    </div>
  )
}

export default Formulario