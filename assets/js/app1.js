'use strict';

const e = React.createElement;
class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            txt: 'TXT mac dinh'
        }
    }
    update(e) {
        this.setState({txt: e.target.value})
    }
    render() {
        return (
            <div>
                <input type="text" onChange={this.update.bind(this)} />
                <h1>{this.state.txt}</h1>
            </div>
        );
    }
}

const domContainer = document.querySelector('#demo');
ReactDOM.render(e(App), domContainer);
