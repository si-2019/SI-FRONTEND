import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Issue from './helpers/issue.js';
import axios from 'axios';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNew: [],
            dataInProgress: [],
            dataResolved: [],
        }
    };

    componentWillMount(){
        /*
        axios.get('http://localhost:31902/issues').then( res => {
            console.log(res);
            this.setState({
                dataNew: res.data.new,
                dataInProgress: res.data.inProgress,
                dataResolved: res.data.resolved
            });
            console.log(this.state);
        }).catch(err => console.log(err));
        */
    }

    componentDidMount() {
        axios.get('http://localhost:31902/issues').then( res => {
            console.log(res);
            this.setState({
                dataNew: res.data.new,
                dataInProgress: res.data.inProgress,
                dataResolved: res.data.resolved
            });
            console.log(this.state);
        }).catch(err => console.log(err));
    }

    render() {
        return (
            <div>
                <Tabs
                className=".p-3"
                    id="tabs"
                    
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab eventKey="new" title={`New (${this.state.dataNew.length})`}>
                    <table class="table table-hover" id="newIssueTable">
                        <thead>
                            <tr>
                            <th scope="col">Status</th>
                            <th scope="col">Naslov</th>
                            <th scope="col" colSpan="2">Poruka</th>
                            <th scope="col">Datum</th>
                            </tr>
                        </thead>
                            <tbody>
                                {this.state.dataNew.map(item => <tr class="table-light"
                                /*Active key = {item.naslov,item.poruka}*/>
                                <td>{item.status}</td>
                                <td><a href="#">{item.naslov}</a></td>
                                <td colSpan="2">{item.poruka}</td>
                                <td>{item.datum}</td>
                                </tr>)}
                            </tbody>
                        </table>
                    </Tab>
                    
                    <Tab eventKey="inProgress" title={`In progress (${this.state.dataInProgress.length})`}>
                        <Issue className="card" data={this.state.dataInProgress}/>
                    </Tab>
                    <Tab eventKey="resolved" title={`Resolved (${this.state.dataResolved.length})`}>
                        <Issue data={this.state.dataResolved}/>
                    </Tab>
                </Tabs>
            </div>
        );
   }
};

const styles = {
    conainer: {
        width: 100,
    }
}

export default IssueList;
