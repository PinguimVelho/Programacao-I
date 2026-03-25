class Triangulo {
    base: number;
    altura: number;

    calcularArea(): number {
        return (this.base * this.altura) / 2;
    }
    constructor(pBase: number, pAltura: number){
        this.base = pBase
        this.altura = pAltura
    }
}

const tri1 = new Triangulo( 10, 5);

console.log(tri1.calcularArea());
