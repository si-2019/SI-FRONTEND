import React from 'react'
import DateTimePicker from 'react-datetime-picker'

class UrediIspit extends React.Component{
  state = {
    date: new Date(),
  }
 
  onChange = date => this.setState({ date })
  render(){
    return(
      
      <div className="col-12">
        <h3>Uredi ispit</h3>
        <form>
          <label>Rok prijave ispita</label>
          <br></br>
          <DateTimePicker
            onChange={this.onChange}
            value={this.state.date}
            format="dd-MM-yyyy HH:mm"
          />
          <br></br>
          <input type="button" class="btn btn-primary" id="btnPotvrdi" value="Potvrdi"/>
        </form>
      </div>
    )
  }
}

export default UrediIspit