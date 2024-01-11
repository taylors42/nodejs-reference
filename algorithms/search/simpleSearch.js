let array = [5, 8, 12, 15, 18, 22, 25, 28, 32, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 78, 82, 85, 88, 92, 95, 98, 102, 105, 108, 112, 115, 118, 122, 125, 128, 132, 135, 138, 142, 145, 148, 152, 155, 158, 162, 165, 168, 172, 175, 178, 182, 185, 188, 192, 195, 198, 202, 205, 208, 212, 215, 218, 222, 225, 228, 232];

const simpleSearch = (x, arr) => 
  {
    for(let i = 0; i <= arr.length -1; i++)
      {
        if (x === arr[i])
          {
            console.log(`The element is on the index ${i+1}`)
            return
          }
        else if (arr[i+1] == arr[arr.length])
          {
            console.log('The element is not in the array')
          }
        console.log(arr[i]) 
      }
  }

simpleSearch(18, array)