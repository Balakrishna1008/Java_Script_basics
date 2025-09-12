let set = new Set();

set.add('krish');
set.add('bala');

set.add('krish').add('bala').add('bala').add(3); // only stores unique value, does not add duplicates
console.log(set);

console.log(set.size);

set.delete('krish'); // deletes the  element
console.log(set);

console.log(set.has('bala'));

for(s of set)
    {
    console.log(s);
}

set.clear(); // clears all the elements
console.log(set);

let set1 = new Set();

// Practice Qs
set1.add(98789987896);
console.log(set1.size);