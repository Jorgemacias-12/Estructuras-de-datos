def linear_search(list, value_to_search):
  matches = []
  
  if len(list) == 0:
    return
  
  for item in list:
    if item == value_to_search:
      matches.append(matches)
  
  return matches

def binary_search(list, value_to_search):
  matches = []
  
  sorted_list = sorted(list)
  
  low = 0
  high = len(sorted_list) - 1
  
  while low <= high:
    
    mid = (low + high) // 2
    
    if sorted_list[mid] == value_to_search:
      matches.append(sorted_list[mid])
      
      left = mid - 1
      right = mid + 1
      
      while left >= 0 and sorted_list[left] == value_to_search:
        matches.append(sorted_list[left])
        left -= 1
        
      while right >= 0 and sorted_list[right] == value_to_search:
        matches.append(sorted_list[right])
        right += 1
        
      return matches
    
    elif sorted_list[mid] == value_to_search:
      low = mid + 1
    else:
      high = mid - 1