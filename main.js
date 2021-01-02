function Person(first, last, age, gender, interests) {
	this.name = {
	first : first,
	last : last
	};
	this.age = age;
	this.gender = gender;
	this.interests = interests;
	this.bio = function() {
		let pronoun = '';
		let interestsString = '';

		if(this.gender === 'male')
		{
			pronoun = 'He';
		}
		else
		{
			pronoun = 'She';
		}

		for(let i = 0; i < this.interests.length; i++)
		{
			interestsString += this.interests[i] + ' and ';
		}

		interestsString = interestsString.slice(0, interestsString.length - 5);

		alert(this.name.first + ' ' + this.name.last + ' is ' + this.age + ' years old. ' + pronoun + ' likes ' + interestsString + '.');
	};
	this.greeting = function() {
		alert('Hi! I\'m ' + this.name.first + '.');
	};
}

function Hello(){
	alert("Hello");
}

let person1 = new Person('Anna', 'Smith', 32, 'female', ['music', 'skiing', 'swimming', 'football']);
let person2 = new Person('Bob', 'Smith', 32, 'male', ['music', 'skiing']);