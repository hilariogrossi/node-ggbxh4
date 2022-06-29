class Pilha {
  constructor() {
    this.itens = [];
  }

  push(item) {
    this.itens.push(item);
  }

  pop() {
    this.itens.pop();
  }

  top() {
    return this.itens[this.itens.length - 1];
  }

  isEmpty() {
    return this.itens.length == 0;
  }

  isFull() {
    return this.itens.length != 0;
  }
}

const pilha = new Pilha();
pilha.push(10);
pilha.push(20);
pilha.push(30);
pilha.push(40);

pilha.pop();
pilha.pop();
pilha.pop();
pilha.pop();

console.table(pilha.top());
console.table(pilha.itens);
console.table(pilha.isEmpty());
console.table(pilha.isFull());
