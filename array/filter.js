//filter method creates a shallow copy. of a portion of a given array
// filtered down to just the element from the given array
// that pass the test implemented by the provided function

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(element => element.length > 6)

console.log(result);