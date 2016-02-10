var MergeSortUtility = (function () {
function _mergeSort(inputArray, ascendingOrderRequired) {
  if (inputArray.length < 2){   return inputArray;  }

  var mid = Math.floor(inputArray.length / 2);
  var subLeft = 
_mergeSort(inputArray.slice(0, mid), ascendingOrderRequired);
  var subRight = _mergeSort(inputArray.slice(mid), ascendingOrderRequired);

  return _merge(subLeft, subRight, ascendingOrderRequired);
}

function _merge(subLeft, subRight, ascendingOrderRequired) {
  var result = [];

  while (subLeft.length > 0 && subRight.length > 0) {
    if (ascendingOrderRequired) {
      result.push(subLeft[0] < subRight[0] ? subLeft.shift() : subRight.shift());
    } else {
      result.push(subLeft[0] > subRight[0] ? subLeft.shift() : subRight.shift());

    }
  }

  return result.concat(subLeft.length ? subLeft : subRight);
}

return{
Sort:_mergeSort
}

})(MergeSortUtility || {});


var GetCombinations= (function () {
function _withDiff(inputArray, diff) {
  var sortedArray = MergeSortUtility.Sort(inputArray, false);
  console.log("sorted array: " + sortedArray);
  var combinationsfound = [];
  var counter = 0,
    innerCounter = 0,
    differencefound = 0;
    
  while (counter < sortedArray.length - 1) {
    innerCounter = counter + 1;
    
    while (innerCounter < sortedArray.length) {
      differencefound = sortedArray[counter] - sortedArray[innerCounter];
      if (differencefound == diff) {
        combinationsfound.push(sortedArray[counter] + "," + sortedArray[innerCounter]);
        break;
      } 
      else if (differencefound > diff) {
        break;
      } 
      else {
        innerCounter++;
      }
    }
    
    counter++;
  }

  return combinationsfound;

}

return{
WithDiff:_withDiff
};

})(GetCombinations||{});

var test = [1, 4, 5, 9, 11, 7, 6, 8];
//var test = [1];
console.log(GetCombinations.WithDiff(test, 3));

//output:
// sorted array: 11,9,8,7,6,5,4,1
//"11,8", "9,6", "8,5", "7,4", "4,1"]
