def initial(list):
  if (list == []):
    return []
  else:
    return list[0:(len(list) - 1)]




print(initial(['foo', 'bar', 'baz']))
print(initial([1, 2, 3, 4, 5]))
print(initial([False, True, False, True]))
print(initial([]))
