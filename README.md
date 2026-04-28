# Garatujas Francisco - IA25

---

## [HTML]

HTML é o rascunho da coisa toda.
É uma linguagem de marcação que organiza o conteúdo da página, como se fosse o esqueleto de um corpo.

Ele define onde cada coisa vai ficar e a ordem que tudo será lido — títulos, textos, imagens, listas… Sem HTML, basicamente não existe página, só um monte de nada.

* Ele usa **tags** (tipo `<p>`, `<h1>`, `<img>`) pra marcar o que cada coisa é
  
---

## [CSS]

CSS é a parte estética.
Ele não cria conteúdo, só pega o que o HTML já montou e deixa visualmente agradável.

Se o HTML é a casa pronta, o CSS é a pintura, os móveis e a decoração. É ele que define cores, tamanhos, espaçamentos e até onde cada coisa fica na tela.

Além de deixar bonito, o CSS também ajuda muito na organização visual. Hoje em dia, ele é essencial pra fazer sites funcionarem bem em celular, tablet e computador.

Alguns pontos importantes:

* Você pode estilizar vários elementos de uma vez
* Dá pra criar layouts modernos com **Flexbox** e **Grid**
* Responsividade é fundamental (site que funciona em qualquer tela)

---

## [JavaScript]

JavaScript é o que dá vida à página.
Sem ele, o site é parado. Com ele, o site reage ao que o usuário faz.

Por exemplo: quando você clica em um botão e algo acontece, quando um formulário avisa que está errado, ou quando uma página atualiza sem recarregar — tudo isso geralmente envolve JavaScript.

Se for comparar:

* HTML → corpo
* CSS → aparência
* JavaScript → cérebro

Ele funciona lidando com ações (eventos) e manipulando o que está na tela.

Algumas ideias importantes:

* **variável** → uma caixinha que guarda um valor
* **função** → um bloco de código que executa uma tarefa
* **objeto** → um conjunto de dados e comportamentos
* **classe** → um molde pra criar objetos

Também vale conhecer:

* **DOM** → é como o JavaScript “enxerga” o HTML
* **Eventos** → coisas que acontecem (clique, digitação…)
* **Assíncrono** → quando algo demora (tipo buscar dados da internet)

---

## [JavaScript X TypeScript X Java]

Apesar dos nomes parecidos, essas coisas não são iguais.

JavaScript e TypeScript são usados principalmente na web. Já Java é outra linguagem, usada em sistemas maiores, back-end e aplicativos.

Ou seja:

* JavaScript → web
* TypeScript → JavaScript melhorado
* Java → outra parada

---

## [TypeScript]

TypeScript é como se fosse um JavaScript só que mais organizado.

Ele adiciona regras ao código, principalmente dizendo qual tipo de dado você está usando (texto, número, etc.). Isso ajuda a evitar erros antes mesmo do código rodar.

No fim das contas, o TypeScript vira JavaScript, mas durante o desenvolvimento ele ajuda bastante a manter tudo sob controle — principalmente em projetos maiores.

Exemplo:

```ts
let nome: string = "Francisco";
let idade: number = 16;
```

- Classes: 
É como um molde (com atributos, métodos...) usado para criar objetos.

- Objetos: 
O objeto é literalmente um objeto que é criado com base em um molde (classe).

- Atributos VS Variáveis:
O atributo é como uma característica de uma classe, ou seja, todo objeto que for criado naquela classe terá esse atributo. Já a variável pode ser usada para qualquer outro tipo de coisa. Ambas são usadas para guardar um valor.

- Métodos VS Funções:
Segue a mesma linha dos atributos e variáveis. O método é uma função que só pode ser chamada por um objeto daquela classe que possui o determinado método. Já a função é simplesmente uma sequência de comandos que pode ser chamada a qualquer momento.

- Construtores:
É a função que recebe os parâmetros na criação de um objeto e dá esses valores aos atributos.

- Getters e Setters:
São métodos especiais para acessar e modificar atributos em métodos de uma forma mais limpa, permitindo chamar um método como se fosse um atributo.

- Encapsulamento:
É usado para evitar que certos atributos sejam chamados ou modificados onde não deveriam.
public: É o padrão, onde o atributo pode ser acessado em qualquer lugar.
private: Permite que o atributo seja acessado somente na própria classe.
protected: Parecido com o private, porém o atributo pode ser acessado por subclasses.

- Métodos e Atributos estáticos (static):
Não sei sobre isso👍

- Herança:
Herança é pelo fato da subclasse possuir os mesmos atributos que a sua classe principal.

- this e super:
this é usado dentro da classe para se referir ao atributo específico do objeto a qual está sendo referido.
super é usado para chamar funções da classe pai, geralmente usado para chamar o contructor.

---
