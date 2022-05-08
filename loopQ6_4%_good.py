from time import clock_getres


num=int(input("enter the number :"))
div=num//4
while True:
    if type (div) is int:
        print("good")
        break
    else:
        print("not good")
        break