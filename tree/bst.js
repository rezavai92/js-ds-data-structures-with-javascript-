class Node{

    constructor(value){
        this.value=value;
        this.left=null;
        this.right= null;
    }
}
class BST {

    constructor(){
        this.root=null;
        
    }
    addRoot(value){
        let root = new Node(value);
        this.root=root;

    }

    // add Element
    addElement(value){

        let newElement = new Node(value);
        let current = this.root;
        let previousRoot=this.root;
        while(1){
            if(!current && value<=previousRoot.value){
                previousRoot.left=newElement;
            
                break;
            }
            else if (!current && value > previousRoot.value){
                previousRoot.right=newElement;
                break;
            }
            //
            if(value<=current.value){
                previousRoot=current;
                current=current.left;

            }
            else{
                previousRoot=current;
                current=current.right;
            }
         //   console.log(this); 
        }

    }

   search(value ){  

    let check =0;
    let current = this.root;
    let previousRoot = current;
    while(1){
        if(!current){

            return "not found";
        }
        if(value==current.value){
            return "found";
            
        }
        else if (value<=current.value){

            current=current.left;
        }   
        else{
            current=current.right;

        }
        
    }
   } 
}

const t1 = new BST();
t1.addRoot(2);
t1.addElement(3);
t1.addElement(1);
t1.addElement(5);
t1.addElement(9);
t1.addElement(7);
t1.addElement(11);
t1.addElement(33);
t1.addElement(12);
t1.addElement(35);
t1.addElement(69);
t1.addElement(17);
t1.addElement(111);

console.log(JSON.stringify(t1,null,4));

console.log(t1.search(11));
console.log(t1.search(7));
console.log(t1.search(9));
console.log(t1.search(5));
console.log(t1.search(111));
console.log(t1.search(3));
console.log(t1.search(2));
console.log(t1.search(34));