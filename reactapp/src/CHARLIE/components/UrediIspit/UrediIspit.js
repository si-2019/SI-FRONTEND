import React from 'react'

class UrediIspit extends React.Component{
  render(){
    return(
      <div>
        Uredi ispit
        <Link to="/charlie/kreirani-ispiti">
          <button type="button" class="btn btn-danger" id="btnPovratak">Odustani</button>
        </Link>
      </div>
    )
  }
}

export default UrediIspit