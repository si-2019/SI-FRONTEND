import React from 'react'
import '../bootstrap.css';

class Baza extends React.Component {
 
    constructor(props) {
        super(props);

        this.state={
            data: this.props.data
        }
    }
        
        
    klikPotvrdi = () => {/*
        var mysql = require('mysql')
        var connection = mysql.createConnection({
            host     : 'remotemysql.com',
            user     : 'TYQcLL35gV',
            password : 'TYQcLL35gV',
            database : 'BLysSj9ZrP'
        });

        connection.connect()

        connection.query('INSERT INTO Zadaca VALUES...', function (err, result) {
            if (err) throw err
        })

        for(var i=0;i<brojzadataka;i++){
            connection.query('INSERT INTO Zadatak VALUES...', function (err, result){
                if (err) throw err
            })
        }

        connection.end()*/
    }

    klikVratiSeNazad = () => {
        this.props.fun(this.state.data)
    }
        

    render(){
        return (
            <div>
                <button type="button" className="btn btn-secondary ml-3 " onClick={this.klikPotvrdi}>POTVRDI</button>
                <button type="button" className="btn btn-secondary ml-3 " onClick={this.klikVratiSeNazad}>VRATI NA KREIRANJE</button>
            </div>
            )
        }
    }

    export default Baza;