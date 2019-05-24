import React, { Component } from "react";
class ListaPredmeta extends Component {
  render() {
    return (
      <div class="list-group" style={{margin:-5}}>
        <a href="#" class="list-group-item list-group-item-action active">
          Softver Inženjering
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          Vještačka Inteligencija
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          Projektovanje Informacionih sistema
        </a>
        <a href="#" class="list-group-item list-group-item-action">
          Administracija Računarskih Mreža
        </a>
        <a href="#" class="list-group-item list-group-item-action disabled">
          Završni Rad
        </a>
      </div>
    );
  }
}

export default ListaPredmeta;
