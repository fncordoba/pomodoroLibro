import React, { Component } from 'react';
import './Timer.css';

class Timer extends Component {
  constructor() {
    super();

    // Estado inicial
    this.state = {
      alert: {
        type: '',
        message: ''
      },
      time: 0
    };

    // Definimos los tiempos de funcionamiento, pausas corta y larga...
    this.times = {
      defaultTime: 10, // 25 min
      shortBreak: 300, // 5 min
      longBreak: 900 // 15 min
    };
  }

  componentDidMount() {
    // Establecemos el tiempo por defecto con el que se monta elcomponente
    this.setDefaultTime();
  }

  setDefaultTime = () => {
    // El tiempo por defecto es de 25 minutos
    this.setState({
      time: this.times.defaultTime
    });
  }

  setTime = newTime => {
    this.restartInterval();

    this.setState({
      time: newTime
    });
  }

  restartInterval = () => {
    // Borramos el intervalo
    clearInterval(this.interval);

    // Ejecutamos countDown cada segundo
    this.interval = setInterval(this.countDown, 1000);
  }

  countDown = () => {
    // Si el tiempo llega a cero, presentamos la alarma ¡Buzzzz!.
    if (this.state.time === 0) {
      this.setState({
        alert: {
          type: 'buz',
          message: 'Buzzzzzzzz!'
        }
      });
    } else {
      // Descontamos el tiempo segundo a segundo
      this.setState({
        time: this.state.time - 1
      });
    }
  }

  setTimeForWork = () => {
    this.setState({
      alert: {
        type: 'work',
        message: 'Working!'
      }
    });

    return this.setTime(this.times.defaultTime);
  }

  setTimeForShortBreak = () => {
    this.setState({
      alert: {
        type: 'shortBreak',
        message: 'Taking a Short Break!'
      }
    });

    return this.setTime(this.times.shortBreak);
  }

  setTimeForLongBreak = () => {
    this.setState({
      alert: {
        type: 'longBreak',
        message: 'Taking a Long Break!'
      }
    });

    return this.setTime(this.times.longBreak);
  }

  displayTimer(seconds) {
    // Formateamos el tiempo a mm:ss
    const m = Math.floor(seconds % 3600 / 60);
    const s = Math.floor(seconds % 3600 % 60);

    return `${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
  }

  render() {
    const { alert: { message, type }, time } = this.state;

    return (
      <div className="Pomodoro">
        <div className={`alert ${type}`}>
          {message}
        </div>

        <div className="timer">
          {this.displayTimer(time)}
        </div>

        <div className="types">
           <button 
		   className="start" 
		   onClick={this.setTimeForWork}
		   >
		   Start Working
		   </button>
           <button 
		   className="short" 
		   onClick={this.setTimeForShortBreak}
		   >
		   Short Break
		   </button>
           <button 
		   className="long" 
		   onClick={this.setTimeForLongBreak}
		   >
		   Long Break
		   </button>
         </div>
      </div>
    );
  }
}

export default Timer;
