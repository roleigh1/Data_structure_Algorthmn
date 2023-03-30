// Queue data staturue

function Queue() {
    collection = [];
    this.print = function() {
        console.log(collection)
    }

this.enqueue= function(element) {
    collection.push(element);
}

this.dequeue = function() {
    return collection.shift(); 
}
this.front = function(){
    return collection[0]; 
}
this.size = function(){
    return collection.length; 
}
this.isEmpty = function() {
    return (collection.length === 0); 
}
}
var q = new Queue(); 
q.enqueue("a"); 
q.dequeue(); 
q.enqueue("ab",)
q.print();
// priority Queue
function priorityQueue(){
    var collection = []; 
    this.printCollection = function(){
        console.log(collection); 
    }
    this.enqueue = function(element) {
        if(this.isEmpty(element)){
            collection.push(element);
        } else {
            var added = false; 
            for (var i = 0; i < collection;i++) {
                if(element[i] < collection[i][1]) {
                    collection.splice(i,0,element);
                    added = true; 
                    break; 
                }
            }
            if(!added){
                collection.push(element)
            }
        }
 };
            this.dequeue = function() {
                var value = collection.shift(); 
                return value[0]; 
            };
            this.front = function() {
                return collection[0]
            };
            this.size = function() {
                return collection.length; 
            };
            this.isEmpty = function() {
                return(collection.length === 0); 
            }
        };
        var pq = new priorityQueue(); 
        pq.enqueue(["beau Carres",2])
        pq.enqueue(["robin leitner",1])
        pq.enqueue(["david links",0]); 
        pq.printCollection()