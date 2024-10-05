**Branch Sums in a Binary Tree**

This repository contains a JavaScript implementation of a function to calculate the branch sums of a binary tree. A branch sum is the total of all values in a path from the root to any leaf node in a binary tree.

Overview

Functionality: The main function branchSums computes the sums of all branches in a binary tree. It traverses the tree and returns an array containing the sum of values from the root node to each leaf node.

Binary Tree Structure: The tree is built using the BinaryTree class.

Recursive Approach: The helper function calculateBranchSum recursively calculates the sum for each branch.

Time Complexity: O(N), where N is the number of nodes in the binary tree. The function visits every node once.

Space Complexity: O(N), where N is the number of nodes in the tree. In the worst case (a completely unbalanced tree), the recursion stack may store up to N function calls.

Class Definition

	class BinaryTree {
	  constructor(value) {
	    this.value = value;
	    this.left = null;
	    this.right = null;
	  }
	}
 
Attributes:

	value: The integer value of the node.
	left: A pointer to the left child node.
	right: A pointer to the right child node.
 
branchSums Function

	function branchSums(root) {
	  let sums = [];
	  calculateBranchSum(root, 0, sums);
	  return sums;
	}
 
Parameters:

root: The root node of the binary tree.

Returns: An array of integers representing the sums of all branches from the root to each leaf node.

Helper Function: calculateBranchSum

	function calculateBranchSum(node, branchSum, sums) {
	  if (node == null) return;
	
	  branchSum += node.value;
	
	  if (node.left == null && node.right == null) {
	    sums.push(branchSum);
	    return;
	  }
	
	  calculateBranchSum(node.left, branchSum, sums);
	  calculateBranchSum(node.right, branchSum, sums);
	}
 
Parameters:

node: The current node being processed.

branchSum: The accumulated sum of the current branch.

sums: The array holding the sums of each branch.

Example Usage

	
	const root = new BinaryTree(1);
	root.left = new BinaryTree(2);
	root.right = new BinaryTree(3);
	root.left.left = new BinaryTree(4);
	root.left.right = new BinaryTree(5);
	root.right.left = new BinaryTree(6);
	root.right.right = new BinaryTree(7);
	
	const result = branchSums(root);
	console.log(result);  // Output: [7, 8, 10, 11]
 
Explanation:

For the tree:

	
	       1
	     /   \
	    2     3
	   / \   / \
	  4   5 6   7
	 
The branch sums are:

	1 -> 2 -> 4 = 7
	1 -> 2 -> 5 = 8
	1 -> 3 -> 6 = 10
	1 -> 3 -> 7 = 11
 

Contributing: 
Feel free to submit issues or pull requests for improvements and optimizations. All contributions are welcome!

License: 
This project is licensed under the MIT License.
