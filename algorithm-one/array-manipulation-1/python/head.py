def head(list):
  if (list == []):
    return None
  else:
    return list[0]



print(head(['foo', 'bar', 'baz']))
print(head([1, 2, 3, 4, 5]))
print(head([False, True, False, True]))
print(head([]))
