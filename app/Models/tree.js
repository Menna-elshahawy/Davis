

export default class tree {

        constructor() {
            this.root=new Node();
        }

        static add (key) {
            //var current=new Node();
            var current = this.root;
            var parent = null;
            while (current != null) {
                if (key.compareTo(current.data) < 0) {
                    parent = current;
                    current = current.left;
                }

                else{
                    parent = current;
                    current = current.right;
                }
            }

            if (parent == null)
                root = new Node(key); 

            else {
               if (key.compareTo(parent.data) < 0)
                    parent.left = new Node(key);

                else
                    parent.right = new Node(key);
            }
	    }


        static delete(key) {
            if (root == null)
                   return false;
            var current = root;
            var parent = root;
            var right = true;
            // searching for the node to be deleted
            while (key.compareTo(current.data) != 0) {  
                   if (key.compareTo(current.data) < 0) {         right = false;
                         parent = current;
                         current = current.left;
                   } else {
                         right = true;
                         parent = current;
                         current = current.right;
                   }
                   if (current == null)
                         return false;
            }
    
            var substitute = null;
            //  case 1: Node to be deleted has no children
            if (current.left == null && current.right == null)
                   substitute = null;
    
            //  case 2: Node to be deleted has one child
            else if (current.left == null)
                   substitute = current.right;
            else if (current.right == null)
                   substitute = current.left;
            else // case 3: Node to be deleted has two children
            {
                   var successor = current.right;
                   var successorParent = current;
                   //  searching for the inorder successor of the node to be deleted
                   while (successor.left != null) {
                         successorParent = successor;
                         successor = successor.left;
                   }
                   substitute = successor;
                   if (successorParent == current) {
                         if (successor.right == null)
                                successorParent.right = null;
                         else
                                successorParent.right = successor.right;
                   } else {
                         if (successor.right == null)
                                successorParent.left = null;
                         else
                                successorParent.left = successor.right;
                   }
                   successor.right = current.right;
                   successor.left = current.left;
                   substitute = successor;
            } // case 3 done
            if (current == root) // Replacing the deleted node
                   root = substitute;
            else if (right)
                   parent.right = substitute;
            else
                   parent.left = substitute;
            return true;
    
     }
        

}

t =new tree();
tree.add(5);
console.log(t);