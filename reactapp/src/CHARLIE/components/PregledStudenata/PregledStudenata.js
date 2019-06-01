import React from 'react'
import { Link } from 'react-router-dom'

class PregledStudenata extends React.Component{
  render(){
    return(
      <div>
        Pregled studenata
        <br />
        <Link to="/charlie/kreirani-ispiti">
          <button type="button" class="btn btn-primary" id="vratiMeNazad">Nazad</button>
        </Link>
      </div>
    )
  }
}

export default PregledStudenata