// Task 1
function isEven(number) {
  return number % 2 === 0;
}

function sortBy(arr, callBack) {
  return arr.filter(callBack);
}

console.log(sortBy([1, 2, 3, 4, 5, 6, 6, 6], isEven));

// Task 2
function setNewArr(arr1, arr2) {
  const newArr = arr1;
  for (let element of arr2) {
    const index = newArr.indexOf(element);
    console.log(index);
    if (index === -1) {
      newArr.push(element);
    } else {
      newArr.splice(index, 1);
    }
  }
  console.log(newArr);
}

setNewArr([12, 3, 4, 5], [12, 5, "a", "b"]);
