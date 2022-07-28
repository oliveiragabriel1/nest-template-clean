# IError

In that folder, there is the file called index.ts. This file, has the IError class, this class in the business layer, will be used
so that custom errors inherit from it. Also, it serves as a guideline for how an error should be defined.

In this sense, this class has the following constructor:

```javascript
  constructor({ code, body }: { code: number; body: IErrorBody }) {
    this.code = code;
    this.body = body;
  }
```

And that constructor in turn makes use of this interface:

```javascript
interface IErrorBody {
  code: string;
  message: unknown;
  shortMessage: string;
}
```

The above interface like you it is used in body in the constructor. That said, let's analyze each of the items that appear in the code:

- code: we have two code elements which are not part of the IErrorBody interface, it is closely linked to the error code that is used in REST. Now what's in the interface is custom error code. See this [material](https://github.com/lubysoftware/nest-ms-template/tree/main/src/2-business/errors#folder-erros) to see how you can use it.
- message: this element is inside the IErrorBody interface this is used to describe a long error message;
- shortMessage: this element is located in the IErrorBody interface and serves to put a short message to the error.

# IError

Nessa pasta, existe o arquivo chamado index.ts. Esse arquivo, tem a classe IError, esta classe na camada de business, vai ser empregada
para que erros personalizados herdem dela.Além disso, ela serve como uma diretriz de como um erro deve ser definido.

Nesse sentido essa classe possuem o seguinte construtor:

```javascript
  constructor({ code, body }: { code: number; body: IErrorBody }) {
    this.code = code;
    this.body = body;
  }
```

E esse construtor por sua vez faz uso dessa interface:

```javascript
interface IErrorBody {
  code: string;
  message: unknown;
  shortMessage: string;
}
```

A interface acima como você ela é usada em body no construtor. Dito isso, vamos analisar cada um dos itens que aparecem no código:

- code: temos dois elementos code o que não faz parte da interface IErrorBody, está muito atrelado com código de erro que usado é no REST. Agora o que está na interface ele é código personalizado de erro. Consulte este [material](https://github.com/lubysoftware/nest-ms-template/tree/main/src/2-business/errors#pasta-erros) para ver como você pode usar o mesmo.
- message: esse elemento fica dentro da interface IErrorBody isso é usado para descrever uma mensagem de erro longa;
- shortMessage: esse elemento finca na interface IErrorBody e serve para colocar uma mensagem curta ao erro.
