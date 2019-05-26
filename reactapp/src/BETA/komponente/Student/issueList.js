import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Spinner from 'react-bootstrap/Spinner';
import Issue from '../helpers/issue.js';
import axios from 'axios';

class IssueList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            key: 'new',
            dataNew: {
                title: null,
                messages: null,
            },
            dataInProgress: {
                title: null,
                messages: null,
            },
            dataResolved: {
                title: null,
                messages: null,
            },
            isLoading: true
        }
    };

    setStateAsync(state) {
        return new Promise((resolve) => {
            this.setState(state, resolve)
        });
    }

    async componentDidMount() {
        this.setState({isLoading: true});
        const res = await axios.get('http://localhost:31902/issues/get');

        let dN = [];
        let dIP = [];
        let dR = [];

        //new
        res.data.new.forEach( async (issue) => {
            let cn = await axios.get(`http://localhost:31902/category/get/${issue.categoryID}`);
            let dn = issue.messages;
            dN.push({id: issue.id, title: cn.data.naziv, messages: dn});
        });

        //inProgress
        res.data.inProgress.forEach( async (issue) => {
            let cip = await axios.get(`http://localhost:31902/category/get/${issue.categoryID}`);
            let dip = issue.messages;
            dIP.push({id: issue.id, title: cip.data.naziv, messages: dip});
        });

        //resolved
        res.data.resolved.forEach( async (issue) => {
            let cr = await axios.get(`http://localhost:31902/category/get/${issue.categoryID}`);
            let dr = issue.messages;
            dR.push({id: issue.id, title: cr.data.naziv, messages: dr});
        });

        this.setStateAsync({dataNew: dN});
        this.setStateAsync({dataInProgress: dIP});
        this.setStateAsync({dataResolved: dR});

        this.setState({isLoading: false});
    }

    render() {
        if (this.state.isLoading) {
            return (
                <Spinner animation='border' role='status'>
                    <span className="sr-only">Loading...</span>
                </Spinner>
            );
        }
        return (
            <div >
                <Tabs
                    className=".p-3"
                    id="tabs"
                    activeKey={this.state.key}
                    onSelect={key => this.setState({ key })}
                >
                    <Tab
                        className = "tab-issue"
                        eventKey="new"
                        title={`New (${this.state.dataNew.length})`}
                    >
                        {!this.state.isLoading &&
                            <div>
                                <Issue
                                className="tab-issue card"
                                data={this.state.dataNew}
                                />

                            </div>
                        }
                    </Tab>
                    <Tab
                        className = "tab-issue"
                        eventKey="inProgress"
                        title={`In progress (${this.state.dataInProgress.length})`}
                    >
                        {!this.state.isLoading  &&
                            <Issue
                                className="tab-issue card"
                                data={this.state.dataInProgress}
                            />
                        }
                    </Tab>
                    <Tab
                        className = "tab-issue"
                        eventKey="resolved"
                        title={`Resolved (${this.state.dataResolved.length})`}
                    >
                        {!this.state.isLoading &&
                            <Issue
                                className="tab-issue card"
                                data={this.state.dataResolved}
                            />
                        }
                    </Tab>
                </Tabs>
            </div>
        );
    }
}

export default IssueList;
