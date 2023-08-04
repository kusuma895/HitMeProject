import React, { Component } from 'react'
 import './HitMeProject.css'
class HitMeProject extends Component {

  constructor(props) {
    super(props);
    this.state = {
      timeLeft: 100,
      score: 0,
      isGameOver: false,
    };
    this.timerInterval = null;
  }

  componentDidMount() {
    this.startTimer();
  }

  componentWillUnmount() {
    clearInterval(this.timerInterval);
  }

  startTimer = () => {
    this.timerInterval = setInterval(() => {
      this.setState((prevState) => ({
        timeLeft: prevState.timeLeft - 1,
      }), () => {
        if (this.state.timeLeft <= 0) {
          this.handleGameOver();
        }
      });
    },1000);
  };

  handleImageClick = () => {
    if (!this.state.isGameOver) {
      this.setState((prevState) => ({
        score: prevState.score + 1,
      }));
    }
  };

  handleRestart = () => {
    clearInterval(this.timerInterval);
    this.setState({
      timeLeft: 5,
      score: 0,
      isGameOver: false,
    }, () => this.startTimer());
  };

  handleGameOver = () => {
    clearInterval(this.timerInterval);
    this.setState({
      isGameOver: true,
    });
  };

  render() {
    const { timeLeft, score, isGameOver } = this.state;

    return (
      <div>
        <h1 id='hit'>HIT</h1>
        <h1 id='me'>ME</h1>
        {isGameOver ? (
          <h1 id='msg'>Enough! I cant be beaten by you</h1>
        ) : (
          <div>
            <img
              id='img1'
              src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN24XQ3OpXAUNWrOelYQ8WLREhQotwNGouaA&usqp=CAU'
              alt="Click Me"
              onClick={this.handleImageClick}
              style={{ cursor: 'pointer' }}
            />
            <p id='time'>Time Left: {timeLeft} seconds</p>
            <p id='score'>Score: {score}</p>
          </div>
        )}
        <button onClick={this.handleRestart}>Restart</button>
      </div>
    );
  }
}





 export default HitMeProject

