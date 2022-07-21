def last(list):
  if (list == []):
    return None
  else:
    return list[len(list) - 1]

print(last(['foo', 'bar', 'baz']))
print(last([1, 2, 3, 4, 5]))
print(last([False, True, False, True]))
print(last([]))
