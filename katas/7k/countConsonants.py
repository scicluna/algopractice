# Complete the function that takes a string of English-language text and returns the number of consonants in the string.
# Consonants are all letters used to write English excluding the vowels a, e, i, o, u.
def consonant_count(string):
    regex = r'[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]'
    count = 0
    for letter in string:
        if letter in regex:
            count = count + 1
    return count

print(consonant_count('hello'))