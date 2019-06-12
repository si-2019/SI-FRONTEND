import React from 'react';

function Poruka(props) {
    const greska = props.greska;
    if (greska==1) {
        return (
            <div class="alert alert-dismissible alert-danger">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>{props.naslovGreska}</strong> <br/> {props.opisGreska}
            </div>
        );
    }
    if (greska===2) {
        return (
            <div class="alert alert-dismissible alert-success">
                <button type="button" class="close" data-dismiss="alert">&times;</button>
                <strong>{props.naslovUspjeh}</strong> <br/> {props.opisUspjeh}
            </div>
        );
    }
    return ""
}

export default Poruka;