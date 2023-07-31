// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name) {
 return cats.push(name);
}

function destructivelyPrependCat(name) {
 return cats.unshift(name);
}

function destructivelyRemoveLastCat() {
 return cats.pop();
}

function destructivelyRemoveFirstCat() {
 return cats.shift();
}

function appendCat(name) {
 const copyOfCats = [...cats, name];
 return copyOfCats
}

function prependCat(name) {
 const anotherCopyofCats = [name, ...cats];
 return anotherCopyofCats
}

function removeLastCat() {
 const thridCopyOfCats = cats.slice(0, -1);
 return thridCopyOfCats
}

function removeFirstCat() {
 const fourthCopyOfCats = cats.slice(-(cats.length) + 1);
 return fourthCopyOfCats
}