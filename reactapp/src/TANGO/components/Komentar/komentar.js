import React, {Component} from 'react';

class Komentar extends Component {
    render() {

        return (
            <div class="form-group">
                <label for="tekstKomentara">Komentar</label>
                <textarea class="form-control col-md-4" id="tekstKomentara" rows="3" ></textarea>
          </div>
         
        );
    }
}

export default Komentar;