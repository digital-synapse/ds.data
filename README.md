# ds.data
Typescript classes to deal with arrays, lists, and more complex data structures.

## Arrays
Javascript's built in array has alot of useful methods like push, pop, and filter. We didn't want you to loose any of that so we derived a new subclass from Array called Array1 and added a few helpful methods that were missing. Array2 is a new array class that is specificly designed to deal with initializing and working with 2-dimensional arrays.

Example:
```
  var a = new Array2<number>([
    [1,2],
    [3,4]
  ]);
  
  // just like a regular array
  console.log(a[1][1]);  // prints '4'
  
  // but with extras
  console.log(a.resize(2,1).rotateClockwise().column(0).sum());  // prints '3'
```

Tests:
```
  Array1
    #constructor
      √ should init the array with data
      √ should init the array with dimensions
    #get
      √ should return element at coordinates
      √ should be safe (bounds checked) and not throw exception
    #set
      √ should set element at coordinates
      √ should be safe (bounds checked) and not throw exception
    [] (direct access)
      √ should set element at coordinates
      √ should get element at coordinates
    #hashCode
      √ should return consistent hashcodes
      √ should return different hashcodes when data has changed
    #sum
      √ should return the sum of all the numbers in the array
    #avg
      √ should return the average of all the numbers in the array
    #min
      √ should return the smallest of all the numbers in the array
    #max
      √ should return the largest of all the numbers in the array
    #each
      √ should enumerate the collection
      √ should preserve the calling context
      √ should break if a value is returned
    #copy
      √ should return a new object
      √ should copy by value

  Array2
    #constructor
      √ should init the array with data
      √ should init the array with dimensions
    #rotateClockwise
      √ should return a new object
      √ should rotate the array data 90 degrees clockwise
    #rotateCounterClockwise
      √ should return a new object
      √ should rotate the array data 90 degrees counter-clockwise
    #resize
      √ should return a new object
      √ should reduce the array size and preserve data
      √ should increase the array size and preserve data
    #region
      √ should return a new object
      √ should return a section from the array (inclusive)
    #column
      √ should return a new array
      √ should return a column of data
    #row
      √ should return a new array
      √ should return a row of data
    #get
      √ should return element at coordinates
      √ should be safe (bounds checked) and not throw exception
    #set
      √ should set element at coordinates
      √ should be safe (bounds checked) and not throw exception
    [] (direct access)
      √ should set element at coordinates
      √ should get element at coordinates
    #hashCode
      √ should return consistent hashcodes
      √ should return different hashcodes when data has changed
    #each
      √ should enumerate the collection
      √ should preserve the calling context
      √ should break if a value is returned
    #flatten
      √ should flatten the 2D array to a 1D Array
    #copy
      √ should return a new object
      √ should copy by value


  48 passing (141ms)      
```
