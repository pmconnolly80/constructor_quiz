/*1. Create a constructor function called Tree. It should take 4 arguments that correspond to attributes on the objects it creates. Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes*/
var tree_Array = [];

var treeList = document.getElementById("tree-holder");

var tree = function(name, leafShape, size, age) {
	this.name = name;
	this.leafShape = leafShape;
	this.size = size;
	this.age = age;
}

var oak = new tree ("Oak", "Notched", "Large", "50ft");
tree_Array.push(oak)
var maple = new tree ("Maple", "Notched", "Medium Large", "35ft");
tree_Array.push(maple)
var pine = new tree ("Pine", "Needle", "Large", "55ft");
tree_Array.push(pine)
var magnolia = new tree ("Magnolia", "Oval", "Medium", "30ft");
tree_Array.push(magnolia)

console.log(tree_Array)


for (i = 0; i < tree_Array.length; i++) {  
     treeList.innerHTML = JSON.stringify(tree_Array, null, "<p>");

}





