var zavrsniRad = {
    nazivTeme: 'Blockchain',
    mentor: 'Mujo Mujic',
    sazetak: 'Blockchain je nova tehnologija....'
}

class PredmetZavrsni extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nazivTeme: 'Blockchain',
            mentor: 'Mujo Mujic',
            sazetak: 'Blockchain je nova tehnologija....'
        };
    }
    render() {
        return (
            <div>
                <p>Naziv teme: {this.state.nazivTeme}</p>
                <p>Mentor: {this.state.mentor}</p>
                <p>Sazetak teme: {this.state.sazetak}</p>
            </div>
        );
    }
}
ReactDOM.render(<PredmetZavrsni />, document.getElementById('app'));