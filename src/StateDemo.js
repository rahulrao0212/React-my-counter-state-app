import { Component } from "react";

export default class StateDemo extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.updateCounter()} className="btn btn-success">Click Me</button>&nbsp;&nbsp;&nbsp;
                <button onClick={() => this.resetCounter()} className="btn btn-danger">Reset</button>
                <br />
            No of times button clicked- {this.state.count}
            </div>
        )
    }
    updateCounter() {
        this.setState({
            count: this.state.count + 1
        })
    }
    resetCounter = function () {
        this.setState({
            count: 0
        })
    }
}