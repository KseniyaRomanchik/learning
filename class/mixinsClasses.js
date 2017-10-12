class Alive {

	constructor() {
		this.breatheInterval = 0;
	}

	breathe(interval) {
		this.breatheInterval = interval;
		console.log(this, 'breathe');
	}
}

class Undead {
  
  constructor() {
    this.ateBrains = 0;
  }

  eatBrain(number) {
    this.ateBrains += number;
    console.log(this, 'om nom nom');
  }
}

const Animal = AbstractClass => class extends AbstractClass {

	constructor() {
    super();
		this.speed = 0;
	}

	run(speed) {
		this.speed = speed;
	}

	stop() {
		this.speed = 0;
	}
}

class AliveRabbit extends Animal(Alive) {

	constructor(name) {
    super();
    this.name = name;
  }
  
  chew() {
    console.log(this)
  }
}

class DeadRabbit extends Animal(Undead) {
  
    constructor(name) {
      super();
      this.name = name;
    }
    
    chew() {
      console.log(this)
    }
  }

const aliveRabbit = new AliveRabbit('Bunny');

aliveRabbit.chew();

const deadRabbit = new DeadRabbit('Evilanny');

deadRabbit.chew();