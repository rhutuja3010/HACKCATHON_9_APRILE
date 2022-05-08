friend=int(input("how many frd are going to party :"))
if friend>4:
    d=friend/4
    c=int(d)
    if type(d) is float:
        print(c+1," :car are accommodate")
    elif type(d) is int:
        print(d," :car are accommodate")
else:
    print("1 car is accommodate")