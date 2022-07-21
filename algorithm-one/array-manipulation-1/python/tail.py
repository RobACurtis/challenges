def tail(list):
  if (list == []):
    return []
  else:
    return list[1:(len(list))]




print(tail(['foo', 'bar', 'baz']))
print(tail([1, 2, 3, 4, 5]))
print(tail([False, True, False, True]))
print(tail([]))
