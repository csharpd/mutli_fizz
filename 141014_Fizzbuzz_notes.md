#FizzBuzz Multi

##Ruby Fizz

**tree**
.
├── lib
│   └── fizzbuzz.rb
└── spec
    └── fizzbuzz_spec.rb

###Fizzbuzz_spec.rb
1. require 'Fizzbuzz'

2. First test
```
describe 'fizzbuzz' do
	context 'knows that a number is divisible by' do
		it '3' do
			expect(is_divisible_by_three?(3)).to be_truthy
		end
```
###FizzBuzz.rb

```
def is_divisible_by_three?(number)
	number % 3 == 0
end
```
+**refactored**
```
def is_divisible_by_fifteen?(number)
	is_divisible_by(number,15)
end

def is_divisible_by(number, divisor)
	number % divisor == 0
end
```
+3. **Playing the game**
###FizzBuzz.rb
```
def fizzbuzz(number)
	return 'FizzBuzz' if is_divisible_by_fifteen?(number)
	return 'Fizz' if is_divisible_by_three?(number)
	return 'Buzz' if is_divisible_by_five?(number)
	number
end
```

###Fizzbuzz_spec.rb

````
	context 'playing the game' do
		it 'returns the number' do
			expect(fizzbuzz(1)).to eq 1
		end
		it 'returns fizz' do
			expect(fizzbuzz(3)).to eq 'Fizz'
		end
````
