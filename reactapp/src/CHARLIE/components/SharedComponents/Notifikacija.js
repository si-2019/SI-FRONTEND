import React from 'react'

const Notifikacija = (props) => {
  return (<div style={{backgroundColor:props.background}}>
    {props.poruka}
  </div>)
}

export default Notifikacija