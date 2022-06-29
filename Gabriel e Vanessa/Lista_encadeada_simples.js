class No {
  constructor(elemento) {
    this.elemento = elemento;
    this.proximo = undefined;
  }
}

class ListaEncadeada {
  constructor() {
    this.head = undefined;
  }

  insertFirst(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      novo.proximo = atual;
      this.head = novo;
    }

    return elemento;
  }

  insertLast(elemento) {
    const novo = new No(elemento);
    let atual;

    if (!this.head) {
      this.head = novo;
    } else {
      atual = this.head;
      while (atual.proximo) {
        atual = atual.proximo;
      }
      atual.proximo = novo;
    }

    return elemento;
  }
}

const trem = new ListaEncadeada();

console.log(trem.insertFirst('Locomotiva'));
console.log(trem.insertLast('Vagão_1'));
console.log(trem.insertLast('Vagão_2'));
