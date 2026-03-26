class TrianguloEquilatero {
    ladosTriangulo: number;

    calcArea(): number {
        return this.ladosTriangulo ** 2 * Math.sqrt(3) / 4 
    }
    constructor(pLadoTriangulo: number){
        this.ladosTriangulo = pLadoTriangulo

    }
}
class TrianguloIsoceles {
    calcArea(): number {
        return  this.base * this.altura / 2
    }
    constructor(public base: number, public altura: number) {}
}

class TrianguloEscaleno {
    calcArea():number {
        let p: number = (this.lado1+this.lado2+this.lado3) / 2
        return Math.sqrt(p*(p-this.lado1)*(p-this.lado2)*(p-this.lado3))
    }
    constructor(public lado1:number, public lado2:number, public lado3: number) {}
}

const tri1 = new TrianguloEquilatero(10);
const tri2 = new TrianguloIsoceles(10, 5)
const tri3 = new TrianguloEscaleno(5, 6, 7)

console.log(`Área do triângulo Equilátero ${tri1.calcArea()}`);
console.log(`Área do triângulo Isóceles ${tri2.calcArea()}`);
console.log(`Área do triângulo Escaleno ${tri3.calcArea()}`);
