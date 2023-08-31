# Ordenador de Propriedades CSS

Este projeto foi desenvolvido como parte dos requisitos do módulo 4 da Formação Web Dev Fullstack - Resilia. Ele tem como objetivo aplicar os conhecimentos adquiridos nesse módulo, concentrando-se na criação de ferramentas práticas e úteis para o desenvolvimento web.

## Contexto do Projeto

No contexto do módulo 4, nossa atenção se volta para a criação de utilitários que sejam relevantes para o desenvolvimento web. Neste projeto específico, nosso foco é a construção de uma ferramenta de utilidade: um programa que permite a ordenação de propriedades de CSS. Essa ferramenta se mostra valiosa ao facilitar a identificação e modificação de estilos em páginas web, otimizando o processo de localização da propriedade a ser ajustada.

## Objetivos

- Colocar em prática os conceitos de manipulação de arrays em JavaScript.
- Criar uma interface de interação simples e eficaz com o usuário.
- Utilizar o ambiente Node.js para desenvolver uma aplicação de linha de comando.
- Demonstrar a capacidade de aplicar conceitos aprendidos no curso em um projeto real.

## Execução do Projeto

Para executar o projeto em sua própria máquina, siga as instruções no tópico "Como Usar" abaixo. Certifique-se de ter o Node.js instalado e siga os passos detalhados para interagir com a ferramenta de ordenação de propriedades de CSS.

## Como Usar

1. Certifique-se de ter o Node.js instalado em seu sistema.
- [NodeJS - Download](https://nodejs.org/pt-br/download)
   
2. Clone este repositório usando o comando:
```bash
  git clone https://github.com/DilnaeSantos/ordenando-propriedades-css-PJ-M4.git
 ```
3. Navegue até o diretório do projeto:
```bash
  cd ordenador-de-propriedades-css-PJ-M4
```

4. Instale as dependências usando o comando:
```bash
  npm install
```
5. Execute o programa com:
```bash
  node ordenador.js
```
6. Insira as propriedades de CSS que deseja ordenar (uma por vez). Digite "SAIR" quando quiser finalizar.
7. O programa imprimirá as propriedades ordenadas no console.


## Exemplo de Uso

```
<> node ordenador.js
- Digite uma propriedade de CSS (ou "SAIR" para finalizar): font-size
- Digite uma propriedade de CSS (ou "SAIR" para finalizar): color
- Digite uma propriedade de CSS (ou "SAIR" para finalizar): background-color
- Digite uma propriedade de CSS (ou "SAIR" para finalizar): SAIR
Propriedades ordenadas:
background-color
color
font-size
```

## Tratamento de Erros

#### Exemplo de Entrada Vazia:

Quando o programa solicitar a inserção de uma propriedade de CSS, simplesmente pressione "Enter" sem digitar nada ou durante a execução do programa, pressione "Ctrl+C" no terminal ou feche o terminal diretamente.

```
- Digite uma propriedade de CSS (ou "SAIR" para encerrar):

Entrada vazia. Por favor, insira uma propriedade válida ou digite "SAIR".

- Digite uma propriedade de CSS (ou "SAIR" para encerrar):   
```

Este exemplo ilustra como os erros tratados são ativados durante a execução do código.

#### Exemplo de Entrada Inválida (Número):

Quando o programa solicitar a inserção de uma propriedade de CSS, se você inserir um número, o programa irá informar que a entrada é inválida e solicitará uma propriedade válida.

```
- Digite uma propriedade de CSS (ou "SAIR" para encerrar): 123

Entrada inválida. Por favor, insira uma propriedade de CSS válida ou digite "SAIR".

- Digite uma propriedade de CSS (ou "SAIR" para encerrar): 
```

## Referências

  - [NodeJS - documentação](https://nodejs.org/en/docs)
  - [Readline-sync - documentação](https://www.npmjs.com/package/readline-sync)

Desenvolvido com dedicação durante a Formação Web Dev Fullstack - Resilia por Dilnae
