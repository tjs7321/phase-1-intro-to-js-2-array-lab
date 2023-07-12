// Write your solution here!
const cats = ['Milo', 'Otis', 'Garfield']

 function destructivelyAppendCat(newCat) {
    cats.push(newCat)
 }

 function destructivelyPrependCat(newCat) {
    cats.unshift(newCat)
 }

 function destructivelyRemoveLastCat() {
    cats.pop()
 }

 function destructivelyRemoveFirstCat() {
    cats.shift()
 }

 function appendCat(newCat) {
    const newCatList = [...cats, newCat]
    return newCatList
 }

 function prependCat(newCat) {
    const newCatList = [newCat, ...cats]
    return newCatList
 }

 function removeLastCat() {
    const newCatList = cats.slice(0,2)
    return newCatList
 }

 function removeFirstCat() {
    const newCatList = cats.slice(1, 3)
    return newCatList
 }