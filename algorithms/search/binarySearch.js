const array = [5, 8, 12, 15, 18, 22, 25, 28, 32, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 82, 85, 88, 92, 95, 98, 102, 105, 108, 112, 115, 118, 122, 125, 128, 132, 135, 138, 142, 145, 148, 152, 155, 158, 162, 165, 168, 172, 175, 178, 182, 185, 188, 192, 195, 198, 202, 205, 208, 212, 215, 218, 222, 225, 228, 232];
const top = array.length - 1
const middle = Math.round(array.length/2)

const binarySearch = (x, arr) => 
  {
    if ( x < arr[middle] | x >= 0)
      {
        console.log("x less than middle")
        for (let index = 0; index < middle; index++) {
          if ( x === arr[index])
            {
              console.log(`The element is on the index ${index+1}`)
              return
            }
          else if (arr[index + 1] === arr[middle])
            {
              console.log(`Element not found in the list`)
            }
        }
      }
    else if ( x >= arr[middle] | x <= arr[top])
      {
        console.log("x more than middle")
        for (let index = middle; index < top; index++) {
          if ( x == arr[index])
            {
              console.log(index)
            }
          else if ( arr[index + 1] === arr[top])
            {
              console.log(`Element not found in the list`)
            }
        }
      }
    else
      {
        console.log("error")
      }
  }
binarySearch(92, array)