import React, { Component } from 'react';
import { FilePond } from 'react-filepond';
import 'filepond/dist/filepond.min.css';
import './komponenta.css';

class UploadFiles extends Component {
  render() {
    return (
        <div className="header">
            <h3>Select project files for automatic upload: </h3>
            <div className="upload">
                <FilePond id="uploadkomponenta" allowMultiple={true} server="/" />
            </div>
        </div>
    );
  }
}

export default UploadFiles;