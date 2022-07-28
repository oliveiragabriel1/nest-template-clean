# Folder erros

This folder will be defined the errors that happen in the system. These errors, which can be linked to operation errors in a repository that makes use of an entity, may also be linked to validations. And in certain cases we can employ it for some kind of service, imagine that there is an email service, and we want to have these errors for that service.

Now, regardless of what situation these errors are used for, they must follow a pattern, as you can see in the example below:

```javascript
export class UsersErrors extends IError {
  /**
   * Error when the user entity could not be created
   * @returns {IError}
   */
  public static entityCreationError(): IError {
    const userErrors = new UsersErrors({
      code: 400,
      body: {
        code: 'UE-001',
        message:
          'Error during creation of the user entity, please try again later',
        shortMessage: 'entityCreationFailed',
      },
    });
    return userErrors;
  }
}
```

What we can see from the example above, and that these errors are inside a class
and that they have one or more static methods.

In each of these methods, they return an instance of a class that inherits from IError.
This instance, in turn, receives an object passed by the constructor, which is shown below:

```javascript
    {
      code: 400,
      body: {
        code: 'UE-001',
        message:
          'Error during creation of the user entity, please try again later',
        shortMessage: 'entityCreationFailed',
      },
    }

```

In this object, we have the code, which is linked to the error status they have in REST. Already there in body, we have a code that is also an error code, only this is customized, usually it can be defined based on the name of the class. For example, in the exposed object we have there UE, and the class is called UserErros, there would be the beginning of User and the E of the beginning of Errors. Now 001 would be the error numbering, if this UserErros class had a second method then the code there would be UE-002.

There is still message there, which refers to a detailed error message, while shortMessage would be a short message.

# Pasta erros

Essa pasta vai ficar definido os erros que acontecem no sistema. Esses erros, podemos
estar ligados a erros de operação em um repositório que faz uso de uma entidade, também podem
estar ligados com validações. E em determinados casos podemos empregar para algum tipo de serviço,imagine que exista um serviço de e-mail, e queremos ter esses erros para esse serviço.

Agora independentemente, para qual situação esses erros sejam empregados, eles devem seguir um padrão, conforme você ver no exemplo abaixo:

```javascript
export class UsersErrors extends IError {
  /**
   * Error when the user entity could not be created
   * @returns {IError}
   */
  public static entityCreationError(): IError {
    const userErrors = new UsersErrors({
      code: 400,
      body: {
        code: 'UE-001',
        message:
          'Error during creation of the user entity, please try again later',
        shortMessage: 'entityCreationFailed',
      },
    });
    return userErrors;
  }
}
```

O que podemos observar pelo exemplo acima, e que esses erros ficam dentro de uma classe
e que essa possuem um ou mais métodos estáticos.

Em cada um desses métodos, eles retornam uma instância de uma classe que herda de IError.
Essa instância, por sua vez recebe um objeto passado pelo construtor, que está evidenciado logo abaixo:

```javascript
    {
      code: 400,
      body: {
        code: 'UE-001',
        message:
          'Error during creation of the user entity, please try again later',
        shortMessage: 'entityCreationFailed',
      },
    }

```

Nesse objeto, temos o code, que está atrelado aos stutus de erro que têm no REST. Já
ali em body, temos um code que também é código de erro, só que este é personalizado, geralmente ele pode ser definido com base no nome da classe. Por exemplo, no objeto exposto temos ali UE, e a classe se chama UserErros, ai seria o do incio de User e o E do inicio de Erros. Agora o 001, seria a numeração do error, se nessa classe UserErros tivesse um segundo método então o code ali seria UE-002.

Ainda existi ali o message, que se refere a uma mensagem detalhada do erro, enquanto que shortMessage, seria uma mensagem curta.
