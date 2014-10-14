describe('Javabuzz', function() {

	var javabuzz;
// this declares a local variable. Prevents a global one from being created
	beforeEach(function() {
		javabuzz = new Javabuzz();
	});
	describe('knows when a number is divisible by ', function() {
		it('3', function() {
			// we need an instance of javabuzz to test against
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
			// we need to tell javascript explicitly that the isDivisibleByThree method belongs to the javabuzz class
		});
		it('5',function() {
			expect(javabuzz.isDivisibleByFive(5)).toEqual(true);
		});
		it('15',function() {
			expect(javabuzz.isDivisibleByFifteen(15)).toEqual(true);
		});
	});

	describe('knows when a number is NOT', function() {

	  it('divisible by 3', function() {
	    expect(javabuzz.isDivisibleByThree(1)).toBe(false);
	  });
	  it('divisible by 5',function() {
			expect(javabuzz.isDivisibleByFive(1)).toBe(false);
	  });
	  it('divisible by 15',function(){
	  	expect(javabuzz.isDivisibleByFifteen(1)).toBe(false);
	  });
	});

	describe('when playing, says',function(){
		it('"Java" when a number is divisible by 3', function() {
			expect(javabuzz.says(3)).toEqual("Java");
		});
		it('"Buzz" when a number is divisible by 5', function(){
			expect(javabuzz.says(5)).toEqual("Buzz");
		});
		it('"Javabuzz" when a number is divisible by 15', function(){
			expect(javabuzz.says(15)).toEqual("Javabuzz");
		})
	});
});