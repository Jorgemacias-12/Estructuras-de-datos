def sort_by_insert(list):
  for i in range(1, len(list)):
    item = list[i]
    
    j = i - 1
    
    while j >= 0 and item < list[j]:
      list[j + 1] = list[j]
      j -= 1

    list[j + 1] = item
  
  return list  

def recursive_sort(list):
  if not len(list) > 1:
    return
  
  mid = len(list) // 2
  
  left_half = list[:mid]
  right_half = list[mid:]
  
  recursive_sort(left_half)
  recursive_sort(right_half)
  
  i = 0
  j = 0
  k = 0
  
  while i < len(left_half) and j < len(right_half):
    if left_half[i] <= right_half[j]:
      list[k] = left_half[i]
      i += 1
    else:
      list[k] = right_half[j]
      j += 1
    
    k += 1
    
    while i < len(left_half):
      list[k] = left_half[i]
      i += 1
      k += 1
      
    while j < len(right_half):
      list[k] = right_half[j]
      j += 1
      k += 1

  return list    
  
def bubble_sort(list):
  size = len(list)
  
  for i in range(size):
    for j in range(0, size - i - 1):
      if list[j] > list[j + 1]:
        list[j], list[j + 1] = list[j + 1], list[j]
  
  return list