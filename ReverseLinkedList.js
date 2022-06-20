let ref = null;
var reverseList = function (head) {
  if (head === null) return head;
  if (head.next === null) {
    ref = head;
    return ref;
  }
  reverseList(head.next);
  let node = head.next;
  node.next = head;
  head.next = null;
  return ref;
};
reverseList();
