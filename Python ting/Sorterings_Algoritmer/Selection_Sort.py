from p5 import *
import random

A = [random.randint(0, height) for _ in range(random.randint(25, 100))]


def Selection_Sort(A):
    for i in range(0, len(A) - 1):
        min = i
        for j in range(i + 1, len(A)):
            if A[j] < A[min]:
                min = j
        tempAi = A[i]
        A[i] = A[min]
        A[min] = tempAi


Selection_Sort(A)
print(A)


x = 0


def Animation(A, x):
    x += 1
    if len(A) < x:
        x = 0
    for j in range(0, len(A) - x):
        if A[j] > A[j + 1]:
            tempAj = A[j]
            A[j] = A[j + 1]
            A[j + 1] = tempAj


def setup():
    size(600, 600)


def draw():
    background(230)
    translate(0, height)

    for i in range(0, len(A)):
        rect(i * (width / (len(A))), 0, width / len(A), -A[i] - 10)

    Animation(A, x)


if __name__ == "__main__":
    run(frame_rate=1000)
