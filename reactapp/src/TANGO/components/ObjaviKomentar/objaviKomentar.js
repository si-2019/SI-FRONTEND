import React, {Component} from 'react';
import DugmeZaObjavu from '../DugmeZaObjavu';



class ObjaviKomentar extends Component {

    constructor() {
        super();
        this.state = {
          komentar: ""
         
        };
      }
    
      handleOdgovorChange = evt => {
        this.setState({
          komentar: evt.target.value
        });
      }

    render() {
     
        return(
            <div class="row">
                <div class="col"></div>
                <div class="col">
                    <div class="card border-info mb-3">
                    <div class="card-header">Komentar</div>
                          <div class="card-body">
                            <h3 class="card-title">{this.props.location.state.nazivTeme.title}</h3>
                            <div class="form-group">
                            <textarea class="form-control" onChange={this.handleOdgovorChange}></textarea>
                            <DugmeZaObjavu idTeme={this.props.location.state.id.idTheme} text={this.state.komentar}/>
                            </div>
                        </div>
                        </div>
                </div>
                <div class="col"></div>
            </div>
           
        );
    }
}
 
export default ObjaviKomentar;