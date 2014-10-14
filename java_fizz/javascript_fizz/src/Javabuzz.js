//this is a class
function Javabuzz(){};

//these are methods
Javabuzz.prototype._isDivisibleBy = function(number, divisor) {
	return (number % divisor === 0 );
};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return this._isDivisibleBy(number, 3);
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
	return this._isDivisibleBy(number, 5);
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
	return this._isDivisibleBy(number, 15);
	// need to tell javascript that _isDivisibleBy belongs to the javascript class. As we are already inside the class we just need to add this. to the the begining of our method.
};

Javabuzz.prototype.says = function(number) {
	if (this.isDivisibleByFifteen(number)) return "Javabuzz";
	if (this.isDivisibleByThree(number)) return "Java";
	if (this.isDivisibleByFive(number)) return "Buzz";
	return number;
};

