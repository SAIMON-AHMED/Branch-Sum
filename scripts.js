// This is the class of the input root.

class BinaryTree {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

// Time Complexity -> O(N) | Space Complexity -> O(N)

function branchSums(root) {
  // Write your code here.
  let sums = [];
  calculateBranchSum(root, 0, sums);
  return sums;
}

function calculateBranchSum(node, branchSum, sums) {
  if (node == null) {
    return;
  }
  branchSum += node.value;
  if (node.left == null && node.right == null) {
    sums.push(branchSum);
    return;
  }
  calculateBranchSum(node.left, branchSum, sums);
  calculateBranchSum(node.right, branchSum, sums);
}
