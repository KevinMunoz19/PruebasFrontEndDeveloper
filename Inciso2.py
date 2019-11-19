import itertools
import operator

def most_common(L):
  SL = sorted((x, i) for i, x in enumerate(L))
  groups = itertools.groupby(SL, key=operator.itemgetter(0))

  def _auxfun(g):
    item, iterable = g
    count = 0
    min_index = len(L)
    for _, where in iterable:
      count += 1
      min_index = max(min_index, where)
    return count, -min_index
  return max(groups, key=_auxfun)[0]

NumbersList=[20,1,-1,6,6,-2,3,3,5,5,1,6,4,20,4,-1,-2,5,6,5,20,20,20,6,5,5,6,20];
print(most_common(NumbersList))
