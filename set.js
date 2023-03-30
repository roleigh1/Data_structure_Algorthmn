// sets 
function mySet() {
    // the car collection will hold the set 
    var collection = [];
    // this method will check for the presence of an elemement and return true or false 
    this.has = function(element) {
        return (collection.indexOf(element) !== -1);
    };
    
    // this method will return all the values in a set
    this.values = function() {
        return collection;

    };
    // this method will add an element to the set;  
    this.add = function(element) {
        if(!this.has(element)){
        collection.push(element);
        return true; 
    }
    return false; 
};
// this will remove an element from the set
this.remove = function(element){
        if(this.has(element)){
        index = collection.indexOf(element);
        collection.splice(index,1);
        return true
    }
    return false;
}
// this method will return the union of two sets 
this.size = function(element) {
        return collection.length;
}
// this method will return the union of two sets
this.union = function(otherSet) {
    var unionSet = new mySet();
    var firstSet = this.values();
    var secondSet = otherSet.values(); 
    firstSet.forEach(function(e){
        unionSet.add(e);
    });
    secondSet.forEach(function(e){
        unionSet.add(e);
    });
    return unionSet
    };
    // this method will return the inerection of two sets as a new set
    this.intersection = function(otherSet){
        var intersectionSet = new mySet();
        var fistSet = this.values(); 
        fistSet.forEach(function(e){
            if(otherSet.has(e)){
                intersectionSet.add(e)
            }
        })
        return intersectionSet; 
    }
    // this method will return the diffrence of two sets as a new set
    this.diffrence = function(otherSet) {
        var diffrenceSet = new mySet(); 
        var firstSet = this.values(); 
        firstSet.forEach(function(e){
            if(!otherSet.has(e)){
                diffrenceSet.add(e)
            }
        })
        
    }; 
    this.subset = function(otherSet){
        var fistSet = this.values();
        return fistSet.every(function(value){
            return otherSet.has(value); 
        });
    }
}
var setA = new mySet();
var setB = new mySet();
setA.add("a");
setB.add("b");
setB.add("c");
setB.add("a");
setB.add("d");
console.log(setA.subset(setB));
