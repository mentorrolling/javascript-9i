class Cuenta {
  constructor(titular, saldo = 0) {
    this.titular = titular;
    this.saldo = saldo;
  }
  //Propiedad computada es una propiedad que parar acceder a su valor ejecuto una función
  set ingresar(valor) {
    if (valor <= 0) {
      console.error("Ingresar un valor mayor que 0");
      return;
    }
    this.saldo += valor;

    //this.saldo=this.saldo + valor
    this.informar;
  }

  set extraer(valor) {
    if (valor > this.saldo) {
      console.warn(`Solo puede extraer hasta $${this.saldo}`);
      return;
    }
    this.saldo -= valor;
    this.informar;
    //this.saldo=this.saldo - valor
  }

  get informar() {
    console.log("====Detalle de la cuenta====");
    console.log(`Titular: ${this.titular}`);
    console.log(`Saldo: ${this.saldo}`);
    console.log("============================");
  }
}

let cuenta1 = new Cuenta("Alex");
