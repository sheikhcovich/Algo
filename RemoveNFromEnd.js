var removeNthFromEnd = function (head, n) {
  if (head === null) return head;
  let i = 0;
  let p1 = head;
  while (p1 !== null) {
    p1 = p1.next;
    i++;
  }
  let j = 0;
  let p2 = head;
  while (p2 !== null) {
    if (i - j === n && p2 === head) {
      head = head.next;
      return head;
    }
    if (i - j - 1 === n) {
      p2.next = p2.next.next;
      return head;
    }
    p2 = p2.next;
    j++;
  }
  return head;
};
