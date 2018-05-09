export function binarySearch(haystack, needle, comparator) {
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
  
  // Возвращаем наиболее подходящее значение, но по нижней границе
  // То есть был массив [1, 4, 6] мы искали 5, и в данном случае будет возвращено 4, а не 6
  return low - 1;
}
