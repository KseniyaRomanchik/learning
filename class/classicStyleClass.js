class Animal {

	constructor(name) {
		this.speed = 0;
		this.name = name;
	}

	run (speed) {
		this.speed += speed;
		console.log(this.name + this.speed);
	}
	
	stop () {
		this.speed = 0;
		console.log(this.name);
	}

	static reset() {
		console.log(this)
	}
}

class Rabbit extends Animal {
	
	constructor(name) {
		// super();
		this.time = 0;
		this.name = name;
	}

	jump (interval) {
		this.interval += interval;
		this.constructor.chew();
	}

	static chew() {
		// console.log(this.reset)
	}
}

const rabbit = new Rabbit('Bunny');
rabbit.jump();

console.log(rabbit instanceof Animal, rabbit instanceof Rabbit);