def capitalize(word):
  first = word[0].upper()
  i = 0
  while i < len(word):
    if (i == 0):
      i += 1
    else:
      first += word[i]
      i += 1
  return first


print(capitalize('a'))
print(capitalize('link'))
print(capitalize('to'))
print(capitalize('the'))
print(capitalize('past'))
print(capitalize('helloooooooo'))
