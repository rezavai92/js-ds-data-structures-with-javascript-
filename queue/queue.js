class Node {

    constructor(value){
        this.value=value;
        this.next = null;

    }
}

class Queue {

    constructor(){
        this.front=null;
        this.back = this.front;
        this.length =0;
    }

    enqueue(value){
    const newNode = new Node(value);
    if(this.length==0){
        this.front=newNode;
        this.back= this.front;

    }
    else{
        
        this.back.next=newNode;
        this.back = newNode;
    }
    this.length++;
    }

    dequeue(){
        this.front=this.front.next;
        if(this.length==1){
            this.back=this.front;
        }
        this.length--;

    }
    front(){

        return this.front;
    }
}

const queue = new Queue()
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(JSON.stringify(queue,null,4))
queue.dequeue();
queue.dequeue();
queue.dequeue();
queue.dequeue();
console.log(JSON.stringify(queue,null,4))
