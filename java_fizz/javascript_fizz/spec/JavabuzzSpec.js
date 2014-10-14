describe('Javabuzz', function() {

	var javabuzz;
// this declares a local variable. Prevents a global one from being created
	describe('knows when a number is divisible by ', function() {
		it('3', function() {
			javabuzz = new Javabuzz();
			// we need an instance of javabuzz to test against
			expect(javabuzz.isDivisibleByThree(3)).toEqual(true);
			// we need to tell javascript explicitly that the isDivisibleByThree method belongs to the javabuzz class
		});
	});
	describe('knows when a number is NOT', function() {

	  it('divisible by 3', function() {
	    javabuzz = new Javabuzz();
	    expect(javabuzz.isDivisibleByThree(1)).toBe(false);
	  });
	});
});