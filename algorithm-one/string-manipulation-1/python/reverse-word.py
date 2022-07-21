def reverseWord(word):
  reverseWrd = ''
  i = len(word) - 1
  while (i >= 0):
    reverseWrd += word[i]
    i -= 1
  return reverseWrd



print(reverseWord('foo'))
print(reverseWord('rab'))
print(reverseWord('ezuFgninraeL'))
print(reverseWord('tpircSavaJ'))
print(reverseWord('yppah'))
print(reverseWord('dlrow olleh'))
