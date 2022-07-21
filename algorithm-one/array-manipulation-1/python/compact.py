def compact(list):
  for x in list:
    if (bool(x) == True or x != None):
      print('true', x)
    else:
      print('false', x)



# print(compact([True, True, False, True]))
# print(compact([{}, None, {}, {}]))
# print([1, 2, 3, 4, , 6, 7])
# print([-0, 8, 9, 10, 11, 0, 13])
# print([[], None, [], [], None])
# print(['', 'foo', 'bar', '', 'baz', 'qux'])
# print([1, 'a', {}, [], true])
