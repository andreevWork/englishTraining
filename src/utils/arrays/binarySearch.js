export function binarySearch(haystack, needle, comparator, isLess) {
  let mid, cmp;
  let low = 0;
  let high = haystack.length - 1;
  
  while(low <= high) {
    mid = low + (high - low >> 1);
    cmp = +comparator(haystack[mid], needle, mid, haystack);
    
    if(cmp < 0.0)
      low  = mid + 1;
    
    else if(cmp > 0.0)
      high = mid - 1;
    
    else
      return mid;
  }
  
  return isLess ? low - 1 : low;
}
