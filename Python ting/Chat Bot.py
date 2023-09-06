brain = {
    "hello": "hello there, how are you",
    "im good":"ok. cool story bro",
    "wtf man": "yeah, L til dig",
    "good morning": "good morning "
    
}

while True:

    user_input = input(">>>>").lower()

    if user_input == "gå væk":  
        break
    elif user_input in brain:
        responses = brain[user_input]
        print(responses)
    else:
        print("WHAT?!!?")