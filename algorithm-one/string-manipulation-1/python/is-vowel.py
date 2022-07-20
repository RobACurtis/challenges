vowel = {
  'a': True,
  'e': True,
  'i': True,
  'o': True,
  'u': True,
  'A': True,
  'E': True,
  'I': True,
  'O': True,
  'U': True
}

def isVowel(char):
  if (vowel.get(char)):
    return True
  else:
    return False


print(isVowel('L'))
print(isVowel('f'))
print(isVowel('Z'))
print(isVowel('a'))
print(isVowel('E'))
print(isVowel('I'))
print(isVowel('o'))
print(isVowel('u'))
