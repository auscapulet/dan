let arr = ['hello', 'world', 22, 19, undefined];

function filterBy(arr, dataType) {
  let newArr = arr.filter(function (item) {
    return typeof (item) !== dataType;
  })
  return newArr
}
filterBy(arr, "string")