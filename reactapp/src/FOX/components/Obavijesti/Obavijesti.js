import React, {Component } from 'react';


class Obavijesti extends Component {
    render() {
        return (
          <Form.Row>
            <Col md= {{span: 4, offset: 6 }}>
              <Form.Label className="Obavijesti"> 
            </Col>
          </Form.Row>
            
            <div class="col-sm-6">
               <h1> Obavijesti  </h1>
          
               <form>
                    <label> Naslov: </label>
                    <input type="text" class="form-control"></input>
                </form>
            </div>
            <div class="col-sm-6">
            </div>

            
          </div>
          </div>
        );
    }

}
export default Obavijesti;
