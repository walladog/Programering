from p5 import *
import random


A = [random.randint(0,height) for _ in range(random.randint(25,100))]

def Bubble_Sort(A):
    for i in range(1,len(A)):
        for j in range(0,len(A)-1):
            if A[j] > A[j+1]:
                tempAj = A[j]
                A[j] = A[j+1]
                A[j+1] = tempAj
    print(A)            
#Bubble_Sort(A)    

x = 0
def Animation(A,x):
     x+=1
     if len(A) < x:
         x=0
     for j in range(0,len(A)-x):
            if A[j] > A[j+1]:
                tempAj = A[j]
                A[j] = A[j+1]
                A[j+1] = tempAj


def setup():
    size(600,400)
    
    

def draw():
    background(230)
    translate(0, height)
    
    for i in range (0,len(A)):
        fill(A[i], A[i]/3, A[i])
        rect(i*(width/(len(A))),0,width/len(A),-A[i]-10)

    Animation(A,x)

#width/(len(A)) + i * len(A)*6,0,width/(len(A)),A[i]*20





if __name__=='__main__':
    run(frame_rate=100)