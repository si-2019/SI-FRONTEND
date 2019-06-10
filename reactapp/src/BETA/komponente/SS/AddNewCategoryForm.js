import React from 'react';
import axios from 'axios';

class AddNewCategoryForm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            categoryName: '',
            id: 5,
        }

        this.onChangeName = this.onChangeName.bind(this);
    }

    onSubmit = (e) => {
        //Pokupiti naziv unesene kategorije i upisati je u bazu
        e.preventDefault();
        const naziv  = this.state.categoryName;
        axios.post('http://localhost:31902/category/add', {naziv})
        .then((result) => {
            alert(result.data);
        });

        this.props.triggerCloseModal(false);
    }

    close = () => {
        //Zatvoriti formu za dodavanje nove kategorije
        this.props.triggerCloseModal(false);
    }

    onChangeName(e) {
        this.setState({
            categoryName: e.target.value
        })
    }

    render() {
        return (

                <div className ="modal-content" id = "addNewCategoryModal">
                    <div className ="modal-header">
                        <h5 className ="modal-title">Dodaj novu kategoriju</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                        </button>
                    </div>
                    <div className ="modal-body" id = "addNewCatModalBody">
                        <label>Ime kategorije:</label>
                        <input 
                            type = "text" 
                            name = "naziv" 
                            id = "naziv"
                            onChange = {this.onChangeName}
                            value={this.state.categoryName}></input>    
                    </div>
                    <div className ="modal-footer">
                        <button 
                            type="submit" 
                            class="btn btn-primary"
                            onClick = {this.onSubmit}>Dodaj kategoriju</button>
                        <button 
                            type="button" 
                            class="btn btn-secondary" 
                            data-dismiss="modal"
                            onClick = {this.close}>Zatvori</button>
                    </div>
                </div>
        
        );
    }
}

export default AddNewCategoryForm;



