var mergeTwoLists = function (list1, list2) {
  let l1 = list1;
  let l2 = list2;
  let head = null;
  if (list1 === null && list2 === null) return list1;
  if (list2 === null || (list1 !== null && list1.val <= list2.val)) {
    l1 = list1;
    list1 = list1.next;
    l1.next = head;
    head = l1;
  } else if (list1 === null || (list2 !== null && list1.val > list2.val)) {
    l2 = list2;
    list2 = list2.next;
    l2.next = head;
    head = l2;
  }

  let nextSort = head;
  while (list1 !== null || list2 !== null) {
    if (list2 === null || (list1 !== null && list1.val <= list2.val)) {
      l1 = list1;
      list1 = list1.next;
      l1.next = nextSort.next;
      nextSort.next = l1;
      nextSort = nextSort.next;
    } else if (list1 === null || (list2 !== null && list1.val > list2.val)) {
      l2 = list2;
      list2 = list2.next;
      l2.next = nextSort.next;
      nextSort.next = l2;
      nextSort = nextSort.next;
    }
  }
  return head;
};
console.log(mergeTwoLists([4, 5], [1, 2]));
