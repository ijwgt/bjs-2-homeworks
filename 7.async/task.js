class AlarmClock {
	constructor() {
		this.alarmCollection = [];
		this.intervalId = null;
	}

	addClock(time, callback) {
		if (!time || !callback) {
			throw new Error('Отсутствуют обязательные аргументы');
		} else if (this.alarmCollection.find(call => call.time === time)) {
		console.warn('Уже присутствует звонок на это же время');
		  }
		this.alarmCollection.push({callback, time, canCall: true});
	}

	removeClock(time) {
		this.alarmCollection = this.alarmCollection.filter(call => call.time !== time);
	}

	getCurrentFormattedTime() {
		new Date().toLocaleTimeString().slice(0, 5);
	}

	start() {
		if (this.intervalId !== null) {
			return;
		}

		this.intervalId = setInterval( () => {
			this.alarmCollection.forEach(call => {
				if (call.time === this.getCurrentFormattedTime() && call.canCall) {
					call.canCall = false;
					call.callback();
				}
			})
		}, 1000);
	}

	stop() {
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	resetAllCalls() {
		this.alarmCollection.forEach(call => call.canCall = true);
	}

	clearAlarms() {
		this.stop();
		this.alarmCollection = [];
	}
}