class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }
  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  put(key, value) {
    const index = this._hash(key);
    this.table[index] = [key, value];
    this.size++;
  }

  get(key) {
    const index = this._hash(key);
    return this.table[index];
  }

  delete(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else return false;
  }

  clear() {
    this.table = [];
    this.size = 0;
  }
}

const meusContatos = new HashTable();
meusContatos.put('Hilário', '999023521');
meusContatos.put('Patrícia', '998032500');
meusContatos.put('Gabriel', '99999-1111');
meusContatos.put('Pedro Henrique', '11111-9999');

console.table(meusContatos.table);

console.log(meusContatos.get('Pedro Henrique'));
