# s1 = "my&friend&Paul has heavy hats! &"
# s2 = "my friend John has many many friends &"
# mix(s1, s2) --> "2:nnnnn/1:aaaa/1:hhh/2:mmm/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

# s1 = "mmmmm m nnnnn y&friend&Paul has heavy hats! &"
# s2 = "my frie n d Joh n has ma n y ma n y frie n ds n&"
# mix(s1, s2) --> "1:mmmmmm/=:nnnnnn/1:aaaa/1:hhh/2:yyy/2:dd/2:ff/2:ii/2:rr/=:ee/=:ss"

# s1="Are the kids at home? aaaaa fffff"
# s2="Yes they are here! aaaaa fffff"
# mix(s1, s2) --> "=:aaaaaa/2:eeeee/=:fffff/1:tt/2:rr/=:hh"

def mix(s1, s2):
    lowercase_letters = 'abcdefghijklmnopqrstuvwxyz'
    one = {}
    two = {}

    for letter in s1:
        if letter in lowercase_letters:
            if letter not in one:
                one[letter] = 1
            else:
                one[letter] += 1
    
    for letter in s2:
        if letter in lowercase_letters:
            if letter not in two:
                two[letter] = 1
            else:
                two[letter] += 1

    for letter in lowercase_letters:
        if letter not in one:
            one[letter] = 0
        if letter not in two:
            two[letter] = 0

    bigdict = {}
    for key in one:
        if one[key] > two[key] and one[key] > 1:
            bigdict["1:" + key*one[key]] = one[key]
        elif two[key] > one[key] and two[key] > 1:
            bigdict["2:" + key*two[key]] = two[key]
        elif one[key] == two[key] and one[key] > 1:
            bigdict["=:" + key*one[key]] = one[key]
    
    sorted_big = sorted(bigdict.items(), key=lambda kv: (-kv[1], kv[0]))

    return "/".join([k for k, v in sorted_big])

print(mix("Are the kids at home? aaaaa fffff", "Yes they are here! aaaaa fffff"))