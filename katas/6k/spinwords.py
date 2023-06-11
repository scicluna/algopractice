# Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed 
# (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

# Examples:

# spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" 
# spinWords( "This is a test") => returns "This is a test" 
# spinWords( "This is another test" )=> returns "This is rehtona test"

def spin_words(sentence):
    final_words = []
    for word in sentence.split():
        if len(word) >= 5:
            reverse = word[::-1]
            final_words.append(reverse)
        else:
            final_words.append(word)
    return " ".join(final_words)

print(spin_words("Hey fellow warriors"))