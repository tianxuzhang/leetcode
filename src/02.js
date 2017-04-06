
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 简单的单链表：追加，转换字符串，反序
function List(){
	this.head = null;
	this.length = 0;
	this.insert = insert;
	this.reverse = reverse; 
	this.toString = toString;
	this.append = append;
}

// 插入：构造新节点，查找插入点节点，交换next
function insert(newVal, item){
	var newNode = new ListNode(newVal);
	var currNode = this.find(item);
	if(!currNode){
		this.head = newNode;
	}else{
		newNode.next = currNode.next;
		currNode.next = newNode;
	}
	this.length++;
}

// 追加：找到最好一个元素往后加
function append(newVal, item){
	var newNode = new ListNode(newVal);
	if(!this.head){
		this.head = newNode;
	}else{
		var currNode = this.head;
		while(currNode.next){
			currNode = currNode.next;
		}
		currNode.next = newNode;
	}
	this.length++;
}

// 查找：从头往后找
function find(item){
	var currNode = this.head;
	while(currNode.val != item && currNode.next != null){
		currNode = currNode.next;
	}
	return currNode;
}

// 输出：循环输出链表的值
function toString(L){
	var currNode = L.head;
	var str = currNode.val;
	while(currNode.next){
		currNode = currNode.next;
		str += "->"+currNode.val;
	}
	return str;
}

// 反序：将当前节点的后继节点和第一个节点交换。第一个节点到当前节点这段子链断开。
function reverse(L){
	var curr = L.head;
	var next = null;
	while(curr.next!=null){
		next = curr.next;
		var post = next.next;
		// 断链交换
		next.next = L.head.next;
		L.head.next = next;
		curr.next = post;
	}
	return L;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
*/
var addTwoNumbers = function(l1, l2) {
    
};