# TypeScript - Estudo

Este repositório tem o objetivo de estudar a linguagem TypeScript.

### O que é Typescript

**TypeScript** é uma linguagem de programação de código aberto desenvolvida pela **Microsoft**. É um superconjunto sintático estrito de **JavaScript** e adiciona tipagem estática opcional à linguagem.

Ou seja, é um superset para Javascript, trazendo novas funcionalidades e melhorando as já existentes.

A funcionalidade mais utilizada é a tipagem, que proporciona ao desenvolvedor um controle muito maior sobre as variáveis, evitando que o motor de compilação dos navegadores interpretem os tipos das variáveis por intuição.

Pode ser utilizada com frameworks/libs, como **Express** e **React**.

Como é uma linguagem que tem a sua base no JavaScript, ela não é executada, é compilada em JavaScript e só então executada.

### Por que Typescript

* Adiciona *confiabilidade* ao programa com a tipagem de dados;
* Provê novas funcionalidades a JS, como *interfaces*;
* Com TS é possível *verificar erros* antes da execução do código;
* Deixa o JavaScript *mais expllícito*, diminuindo a quantidade de bugs;

### Instalando TypeScript

Para instalar o TypeScript é preciso ter instalado previamente o NodeJS:

* [Download NodeJS](https://nodejs.org/en)

Após insttalar o NodeJS abra um terminal e digite o seguinte comando para instalar o TypeScript globalmente, ou seja, em qualquer projeto o TS poderá ser executado via terminal:

```
npm i -g typescript
```

Verifique se foi instalado corretamente com o comando:

```
tsc -v
```

### Projeto com TypeScript

Pastas:

* **dist** - Deploy;
* **src** - Código.

Todo projeto de TypeScript precisa de um arquivo de configuração para estabelecer mudanças necessárias e dizer que é um projeto TypeScript.
Para gerar esse arquivo de configuração execute o comando:

```
tsc --init
```

Neste arquivo é possível configurar a versão da compilação JavaScript, o caminho do arquivo em JS gerado pela compilação do TS, etc.

#### Alterações no aruivo de configuração

Diretório de desenvolvimento colocado no root do arquivo:

```
"rootDir": "./src",
```

Diretório de saída/deploy, onde será gerado o arquivo JS:

```
"outDir": "./dist/js/",
```

#### Compilação

Para compilar um projeto TypeScript e gerar em JS execute o seguinte comando no terminal:

```
tsc
```