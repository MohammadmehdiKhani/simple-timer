import React, { Component } from 'react';
import './Timer.css';

export class Timer extends Component {
    render() {
        return <div className="container">
            <div className="timer">
                {this.state.currentTime}
            </div>
            <button onClick={this.resetTimer}>Reset Timer</button>
        </div>;
    }

    constructor() {
        super();
        this.state = { currentTime: 0 };
        this.resetTimer = this.resetTimer.bind(this);
    }

    componentDidMount() {
        this.timerInterval = setInterval(() => this.increaseTime(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerInterval);
    }

    increaseTime() {
        this.setState({ currentTime: this.state.currentTime + 1 })
    }

    resetTimer() {
        clearInterval(this.timerInterval);
        this.setState({ currentTime: 0 });
        this.timerInterval = setInterval(() => this.increaseTime(), 1000);
    }
}
