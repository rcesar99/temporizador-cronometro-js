export class Timer {
  constructor(updateDisplay) {
    this.time = 0;
    this.isRunning = false;
    this.intervalId = null;
    this.updateDisplay = updateDisplay;
    this.isCountingUp = true;
  }

  start() {
    if (!this.isRunning) {
      this.isRunning = true;
      this.intervalId = setInterval(() => this.tick(), 1000);
    }
  }

  pause() {
    if (this.isRunning) {
      this.isRunning = false;
      clearInterval(this.intervalId);
    }
  }

  reset() {
    this.pause();
    this.time = 0;
    this.isCountingUp = true;
    this.updateDisplay(this.formatTime(this.time));
  }

  setTimer(seconds) {
    this.pause();
    this.time = seconds;
    this.isCountingUp = false;
    this.updateDisplay(this.formatTime(this.time));
  }

  tick() {
    if (this.isCountingUp) {
      this.time++;
    } else {
      this.time--;
      if (this.time <= 0) {
        this.pause();
        this.time = 0;
        alert("Tempo esgotado!");
      }
    }
    this.updateDisplay(this.formatTime(this.time));
  }

  formatTime(timeInSeconds) {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  }
}
