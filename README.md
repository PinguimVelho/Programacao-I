# Garatujas Francisco - IA25

---

## [HTML]

HTML é o rascunho da coisa toda.
É uma linguagem de marcação que organiza o conteúdo da página, como se fosse o esqueleto de um corpo.

Ele define onde cada coisa vai ficar e a ordem que tudo será lido — títulos, textos, imagens, listas… Sem HTML, basicamente não existe página, só um monte de nada.

* Ele usa **tags** (tipo `<p>`, `<h1>`, `<img>`) pra marcar o que cada coisa é
* Se deve usar tags com mais significado (semântico), como `<strong>` ao invés de `<b>` se não seremos humilhados pelo professor.
  
---

## [CSS]

CSS é a parte estética.
Ele não cria conteúdo, só pega o que o HTML já montou e deixa visualmente legal.

Além de deixar bonito, o CSS também ajuda muito na organização visual. Hoje em dia, ele é essencial pra fazer sites funcionarem bem em celular, tablet e computador.

Coisas importantes:

* Content (Height e Width), Padding, Border, Margin
* Flexbox e Grid

---

## [JavaScript]

JavaScript é o que dá vida à página.
Sem ele, o site só tem visual, praticamente não funciona e não reage ao usuário.

Por exemplo: quando você clica em um botão e algo acontece, quando um formulário avisa que está errado, ou quando uma página atualiza sem recarregar, tudo isso geralmente envolve JavaScript.
É tipo o cérebro da coisa

Ele funciona lidando com eventos funções, manipulando os dados e o que está na tela.

As funções e a parte da programação em si estão explicadas no tópico de TypeScript

---

## [JavaScript X TypeScript X Java]

JavaScript e TypeScript são usados principalmente na web. Já Java é outra linguagem, usada em sistemas maiores, back-end e aplicativos.

* JavaScript →  web
* TypeScript → JavaScript "melhorado"
* Java → outra linguagem nada a ver 

---

## [TypeScript]

TypeScript é como se fosse um JavaScript só que mais organizado.

Ele adiciona regras ao código, principalmente dizendo qual tipo de dado você está usando (texto, número, etc.). Isso ajuda a evitar erros antes mesmo do código rodar.

No fim das contas, o TypeScript vira JavaScript, mas durante o desenvolvimento ele ajuda bastante a manter tudo sob controle (principalmente em projetos maiores e se você for meio perdido).

Exemplo:

```js
let nome = "Francisco";
let idade = 16;
```

```ts
let nome: string = "Francisco";
let idade: number = 16;
```

### Principais Conceitos:

- **Classes:**
A classe é como um molde (com atributos, métodos...) usado para criar objetos.

```ts
class Pessoa {
    nome: string
    idade: number
    CPF: number
    ...
}
```

- **Objetos:**
Um objeto é um conjunto de propriedades (nomes e valores) usado para guardar dados e funções relacionadas em uma única estrutura.
Geralmente ele pertence a uma classe, onde ele se aplica a aquele molde.

- **Atributos VS Variáveis:**
  .Variável: Uma célula que armazena um único valor de um único tipo
  .Atributo: Semelhante a variável, porém pertencente a um objeto. É como se fosse uma característica

  Variáveis podem ser declaradas de 3 formas:

  `let`, `const` e `var`
  ```
  let A = 1
  const B = 2
  var C = 3 // Não é mais comumente usado
  ```


- **Métodos VS Funções:**
Segue a mesma linha dos atributos e variáveis.
  .Função: Uma sequência de ações separadas do código que só são executadas se forem chamadas
  .Método: Uma função pertencente a uma classe, ou seja, só pode ser chamada a partir de um objeto específico 

- **Construtores:**
É a função que recebe os parâmetros na criação de um objeto e dá esses valores aos atributos.

Detalhe: O constructor fica dentro da classe.
```ts
constructor(pNome: string, pIdade: number, pCPF: number) {
        this.nome = pNome
        this.idade = pIdade
        this.CPF = pCPF
    }
```

- **Getters e Setters:**
São métodos especiais para acessar e modificar atributos em métodos de uma forma mais limpa, permitindo chamar um método como se fosse um atributo.

- **Encapsulamento:**
É usado para evitar que certos atributos sejam chamados ou modificados onde não deveriam.
public: É o padrão, onde o atributo pode ser acessado em qualquer lugar.
private: Permite que o atributo seja acessado somente na própria classe.
protected: Parecido com o private, porém o atributo pode ser acessado por subclasses.

- **Herança:**
Herança é pelo fato da subclasse possuir os mesmos atributos que a sua classe principal.

- **this e super:**
this é usado dentro da classe para se referir ao atributo específico do objeto a qual está sendo referido.
super é usado para chamar funções da classe pai, geralmente usado para chamar o contructor.

---
