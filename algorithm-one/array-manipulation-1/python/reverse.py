def reverse(list):
  if (list == []):
    return []
  else:
    reverseList = []
    i = len(list) - 1
    while ( i >= 0):
      reverseList.append(list[i])
      i -= 1
    return reverseList


print(reverse(['foo', 'bar', 'baz']))
print(reverse([1, 2, 3, 4, 5]))
print(reverse([False, True, False, True]))
print(reverse([]))
