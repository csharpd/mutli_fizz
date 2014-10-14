
Fizzbuzz := Object clone

Fizzbuzz divisiblebythree := method(number, number % 3 == 0)
# This will result in a true or false result

Fizzbuzz divisiblebyfive := method(number, number % 5 == 0)

Fizzbuzz divisiblebyfifteen := method(number, number % 15 == 0)

Fizzbuzz fizzbuzz := method(number, if(Fizzbuzz divisiblebyfifteen(number), "Fizzbuzz", if(Fizzbuzz divisiblebythree(number), "Fizz", if(Fizzbuzz divisiblebyfive(number), "Buzz", number))))

# i.e if(Fizzbuzz divisiblebyfifteen(number) returns true, print Fizzbuzz.

#Testing
IOspec := Object clone

IOspec toBe := method(result,result)
# This will be fed into the expect slot as the evaluation argument

IOspec expect := method(expectation, evaluation, if(expectation == evaluation, "passed", "failed"))

"*** LET'S TEST ***" println
"should return Fizz if divisible by 3:" println
IOspec expect(Fizzbuzz fizzbuzz(3), IOspec toBe("Fizz")) println

"should return Fizz if divisible by 5:" println
IOspec expect(Fizzbuzz fizzbuzz(5), IOspec toBe("Buzz")) println

"Fizzbuzz says Fizz when a number is divisible by 15:" println
IOspec expect(Fizzbuzz fizzbuzz(15),IOspec toBe("Fizzbuzz")) println

"Fizzbuzz says the number in any other case:" println
IOspec expect(Fizzbuzz fizzbuzz(11), IOspec toBe(11)) println

"*** LET'S PLAY ***" println
for (number, 1, 100, Fizzbuzz fizzbuzz(number) println)





