var deleteDuplicates = function (head) {
  if (head === null) return head;
  let slow = head;
  let fast = head.next;
  while (fast !== null) {
    if (fast.val !== slow.val) {
      slow.next = fast;
      slow = fast;
    }
    fast = fast.next;
  }
  slow.next = fast;

  return head;
};
