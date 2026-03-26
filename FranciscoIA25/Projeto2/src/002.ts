class Triangulo {
    constructor(public lado1: number, public lado2: number,public lado3:number) {}
    if () {
        
    }
    get tipo():string {
        if (this.lado1 === this.lado2 && this.lado2 === this.lado3) {
            return "Equilátero"
        }
        if ()
    }

    get area():number {
        const p: number = (this.lado1+this.lado2+this.lado3) / 2
        return Math.sqrt(p*(p-this.lado1)*(p-this.lado2)*(p-this.lado3))
    }
}
const equilatero = new Triangulo(5,5,5);
const isoceles = new Triangulo(6,6,4)
const escaleno = new Triangulo(3,4,5)

console.log(`Área do triângulo ${equilatero.tipo}: ${equilatero.area}`);
console.log(`Área do triângulo ${equilatero.tipo}: ${isoceles.area}`);
console.log(`Área do triângulo ${equilatero.tipo}: ${escaleno.area}`);
