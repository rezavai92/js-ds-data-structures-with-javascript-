class Node {

    constructor (value){
        this.value =value;
        this.next=null;
    }
}


class LinkedList{

 constructor(value){

    const newNode = new Node(value)
    this.head=newNode;
    this.tail=this.head;
    this.length = 1

 }

 append(value){

    const newNode = new Node(value)
    this.tail.next=newNode;
    this.tail = newNode;
    this.length++;
 }

 prepend(value){

    const newNode = new Node(value)
    newNode.next=this.head;
    this.head=newNode;
    this.length++;
 }

 insert(index,value){

    const newNode = new Node(value);
    let currentNode=this.head;
    for(let i=0;i<index;i++){
        
        if(i===index-1){

            let toBeNexted= currentNode.next;
            currentNode.next=newNode;
            newNode.next=toBeNexted;
            break;

        }
        currentNode=this.head.next;
    }
    this.length++;

 }

delete(value){
   
    let n = this.length;
    let current = this.head;
    if(value==this.head.value){

        this.head=this.head.next;
        if(this.length==1){
            this.tail=this.head;
        }
    
        this.length-=1;

    }
    
    for (let i =0;i<n-1;i++){

        
        if(current.next.value==value){

            current.next=current.next.next;
            if(i==this.length-2){
                this.tail =current;
            }
            this.length-=1;
            
            break;
        }
        else{
            current=current.next;
        }
    }
    
 
} 

}

const myLinkedList = new LinkedList(10);
console.log("initial",myLinkedList)
myLinkedList.append(15)
myLinkedList.append(20)
//console.log("after appending one node",myLinkedList)
myLinkedList.prepend(5)
//console.log("after prepending one node",JSON.stringify(myLinkedList,null,4))

//myLinkedList.insert(1,25);
//console.log(JSON.stringify(myLinkedList,null,4))
myLinkedList.delete(20);

console.log(JSON.stringify(myLinkedList,null,4))
myLinkedList.delete(10);

console.log(JSON.stringify(myLinkedList,null,4))
myLinkedList.delete(15);

console.log(JSON.stringify(myLinkedList,null,4))
myLinkedList.delete(5);
console.log(JSON.stringify(myLinkedList,null,4))
