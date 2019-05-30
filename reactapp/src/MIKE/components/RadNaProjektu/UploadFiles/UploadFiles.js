import React, { Component } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import './komponenta.css';

class UploadFiles extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      fajlovi : []
    };
  }

  render() {
    let detalji = <div id="detalji"></div>
    if(this.state.fajlovi.length > 0)
      detalji = (<div id="detalji">
        <h3>Files to be uploaded: </h3>
      { this.state.fajlovi != null ? this.state.fajlovi.map((fajl) => { return (<h4>{fajl.name}</h4>)}) : null }
      </div>);

    return (
        <div className="header">
            <h3>Select project files for automatic upload: </h3>
            <div className="upload">
              <form method="post" action="/" enctype="multipart/form-data">
                <input id="filesToUpload" type="file" onChange={this.handleChange.bind(this)} required multiple />
                <br></br><br></br>
                <input type="submit" value="Upload files" />
              </form>
            </div>
            <br></br><br></br>
            {detalji}
        </div>
    );
  }

  handleChange(event) {
    this.setState({ fajlovi : [...event.target.files] })
    console.log(event.target.files);
  }
}

export default UploadFiles;