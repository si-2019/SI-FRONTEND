import React, { Component } from 'react'

export class dodavanjeLiterature extends Component {
    render() {
        return (
            <div className="card border-success mb-3">
                <div className="card-header">
                    <a href="#"><h4>Dodavanje literature</h4></a>
                </div>
                <div className="card-body">
                    <form>
                        Opis: <br></br>
                        <textarea rows="4" id="opisObjave"  name="opisObjave" class="form-control mr-sm-2"cols="2000"></textarea>
                    </form>
                </div>
            </div>
            
        )
    }
}

export default dodavanjeLiterature
