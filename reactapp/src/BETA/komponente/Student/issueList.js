import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Issue from './issue.js';
import axios from 'axios';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataNew: [],
            dataInProgress: [{
                title: "loya",
                message: "kkakdadja",
                date: "12.13"
            }],
            dataResolved: [{
                title: "pura",
                message: "jajajajaj",
                date: "12.14"
            }],
            id: 1
        }
    };

    componentDidMount() {
        axios.get('http://localhost:31902/issues/get').then( res => {
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
            <div >
                <Tabs
                    className=".p-3"
                    id="tabs"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab className = "tab-issue" eventKey="new" title={`New (${this.state.dataNew.length})`}>
                        <Issue  data={this.state.dataNew}/>
                    </Tab>
                    
                    <Tab eventKey="inProgress" title={`In progress (${this.state.dataInProgress.length})`}>
                        <Issue className="tab-issue card" data={this.state.dataInProgress}/>
                    </Tab>
                    <Tab className = "tab-issue" eventKey="resolved" title={`Resolved (${this.state.dataResolved.length})`}>
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
