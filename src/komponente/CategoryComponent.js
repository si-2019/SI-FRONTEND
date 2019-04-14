import React from 'react';
import axios from 'axios';

class CategoryComponent extends React.Component {

  constructor() {
    super();
        var responseArray;

    this.state = {
    	categoryArray: []

    };
  }

  componentDidMount(){
    axios.get('/getCategories').then( res => {

      let displeyNames = [];
      for(let i = 0; i < res.data.length; i++)
      {
        displeyNames.push(res.data[i].DispleyName)
      }
    
      this.setState({categoryArray: displeyNames, loading: true});
    })
    
  }

  render() {
    let options = [];
    for(let j = 0; j < this.state.categoryArray.length; j++)
      options.push(<option key={j}>{this.state.categoryArray[j]}</option>)
    return (
      <select className="form-control col-9" id="naslovSelect">{options}</select>
     
    );
  }
}

 
export default CategoryComponent;

