import React, { Component } from 'react';

class dropdown extends Component {
  render() {

    return (

    	<li class="nav-item dropdown show">
    		<a class="nav-link dropdown-toggle" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="true">Dropdown</a>
    		<div class="dropdown-menu show" x-placement="bottom-start" style="position: absolute; will-change: transform; top: 0px; left: 0px; transform: translate3d(0px, 38px, 0px);">
    		<a class="dropdown-item" href="#">{this.props.naslov}</a>
    		</div>
  		</li>
    );
  }
}

export default dropdown;