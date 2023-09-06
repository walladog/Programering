#Exercise 1
#Create a function website() that grabs the website domain from a url string. For example, if your function is passed "www.google.com", it should return "google".

url = "www.google.com"
def website(url):
    print(url.split('.')[1])
website(url)

#Exercise 2
#Create a function divisible(a, b) that accepts two integers (a and b) and returns True if a is divisble by b without a 
#remainder. For example, divisible(10, 3) should return False, while divisible(6, 3) should return True.
def divisible(a, b):
    if a%b == 0: 
        return True
    else:
        return False

print(divisible(6,8))

#Exercise 3
#Use list comprehension to square every number in the following list of numbers.
for n in [1, 2, 3, 4, 5, 6, 7, 8, 9]:
    print(f"tallet er {n} og tallet i anden er {n**2}" )
print("der er ikke flere tal")

#Exercise 4
#For the following list of names, write a list comprehension that creates a list of only words that start with a capital letter (hint: str.isupper()).
names =  ['Steve Irwin', 'koala', 'kangaroo', 'Australia', 'Sydney', 'desert']
storebogstaver = [i for i in names if i [0].isupper()]

print(storebogstaver)



