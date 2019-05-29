import React from 'react'

class PregledStudenata extends React.Component{
  render(){
    return(
      <div>
        Pregled studenata
        <Link
          type="button"
          className="btn btn-light"
          to="/charlie/prijava-ispita"
        >
          Nazad
        </Link>
      </div>
    )
  }
}

export default PregledStudenata