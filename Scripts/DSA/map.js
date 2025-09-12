let map = new Map();

console.log(typeof(map)); // type is object

// inserting data inside map
map.set('ch1','krish'); // even you can set whatever not only numbers
map.set(1,'bala');

map.set(1,'krish').set(2,'bala').set(3,'balakrish'); // easy way to insert

console.log(map.size); // size property returns the size 

console.log(map.get(1)); // to get the particular value in map

console.log(map.has(1)); // to check the value for a key has defined 
console.log(map);

for(key of map){
    console.log(key);
}
console.log(map.delete(2)); // to delete a particular element 
console.log(map);

map.clear(); // clear used to delete all the elements in the map
console.log(map);


