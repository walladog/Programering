
#Exercise 1
#What is 5 to the power of 5?
print('5^5 =',5**5)

#Exercise 2
#What is the remainder from dividing 73 by 6?
print('rest =',76%6)

#Exercise 3
#How many times does the whole number 3 go into 123? What is the remainder of dividing 123 by 3?
print('hvor mange gange det går op =',123//3)
print('rest =', 123%3)

#Exercise 4
#Split the following string into a list by splitting on the space character:
s = 'MDS is going virtual!'
print(s.split())

#Exercise 5
#Given the following variables:
thing = "light"
speed = 299792458  # m/s
l1 = f'The speed of {thing} is {speed:e} m/s'
print(l1)

#Exercise 6
#Given this nested list, use indexing to grab the word “MDS”:
l2 = [10, [3, 4], [5, [100, 200, ["MDS"]], 23, 11], 1, 7]
print(l2[2][1][2])

#Exercise 7
#Given this nest dictionary grab the word “MDS”:
d = {
    "outer": [
        1,
        2,
        3,
        {"inner": ["this", "is", "inception", {"inner_inner": [1, 2, 3, "MDS"]}]},
    ]
}

print(d["outer"][3]["inner"][3]["inner_inner"][3])

#Exercise 8
#Why does the following cell return an error?
#t = (1, 2, 3, 4, 5)
#t[-1] = 6
print('nej fordi TUBLE!!! Imutable NONO CHANGE!')

#Exercise 9
#Use string methods to extract the website domain from an email, e.g., from the string "tomas.beuzen@fakemail.com", you should extract "fakemail".
email = "tomas.beuzen@fakemail.com"
print(email.split('@')[1].split('.')[0])

#Exercise 10
#Given the variable language which contains a string, use if/elif/else to write a program that:
language = "diller"
def kk(language):
    if language.lower() == "python":
        return "I love snakes!"
    elif language.lower() == "r":
        return "Are you a pirate?"
    else:
        return f"What is {language}?"
print(kk("R"))