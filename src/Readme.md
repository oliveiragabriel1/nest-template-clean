# Folder src

Inside this folder, we can have several folders used in the system. In this sense, the main ones are:

### 1-domain

Here is the folder where essentially the entities of this architecture will be.

### 2-business

Here in this folder will be the definitions of use cases, DTO files, errors, repository and services;

### 3-presentation

Here in this folder will be the controllers, the input files called serializers;

### 4-framework

Here will be the actual implementations of services, repositories. In addition, as far as the framework is concerned,
in the system.

### shared

Here it refers to the files that will be shared between the 1-domain, 2-business, 3-presentation and 4-framework folders;

# File main

This is an extremely important file, as much of what is configured in a NestJs project is defined in it.
Among the items that can be defined are some consumer configuration of a particular service, be it gRPC, RabbitMQ, among others.
In addition to being able to define, that there is a global validation or define the port used by the system.

## Implementation details

The issues touched on in this section are pertinent to implementation details and therefore it is worth consulting the NestJs documentation to see if there was any update to the framework. But considering that you will use the same libs used in this template. Then you can use this guide as a base.

### Server Settings

Many of the configurations we do here go from gRPC, whether to RabbitMQ or Apache Kafka. These are server settings. And I mean here as a server the consumer, that is, the one who receives a message. Having said that, we can configure the project so that it consumes only a certain technology or both.

In this sense, consider the examples below.

- gRCP example:

```javascript
const app =
  (await NestFactory.createMicroservice) <
  GrpcOptions >
  (AppModule,
  {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:3333',
      protoPath: join(__dirname, '4-framework/grpc/__proto/user.proto'),
      package: 'users',
    },
  });
await app.listen();
```

- RabbitMQ example:

```javascript
const app =
  (await NestFactory.createMicroservice) <
  MicroserviceOptions >
  (AppModule,
  {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cats_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
```

These two configuration forms have in common that they were made to meet a single communication technology. The first being for the gRPC client and the second for a RabbitMQ client.
It is worth mentioning, if you want to know a little more about RabbitMQ and how to implement access to [link.](https://github.com/alanbruno1994/RabbitMQ_Persist)

Now imagine the scenario, in which the microservice, it needs to serve more than one communication technology, so we would need to have a code similar to this one:

```javascript
const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe());
await app.connectMicroservice({
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5555',
    protoPath: join(__dirname, '4-framework/grpc/__proto/user.proto'),
    package: 'users',
  },
});
await app.startAllMicroservices();

await app.listen(3000);
```

As explained above, it is possible in the same project to carry out communications via gRPC, via port 5555, and via port 3000 using REST.

# Pasta src

Dentro dessa pasta, podemos ter diversas pastas empregadas no sistema. Nesse sentido, as principais são:

### 1-domain

Aqui é pasta onde vai ficar essencialmente as entidades dessa arquitetura.

### 2-business

Aqui nessa pasta vai ficar as definições de casos de uso, arquivos DTO, erros, repósitório e serviços;

### 3-presentation

Aqui nessa pasta vai ficar os controladores, os arquivos de entrada chamados de serializers;

### 4-framework

Aqui vai ficar as implementações de fato de serviços, repósitórios. Além de tudo, que se refere ao framework, empregado
no sistema.

### shared

Aqui se refere aos arquivos que vão ser compartilhados entre as pastas 1-domain, 2-business,3-presentation e 4-framework;

# Arquivo main

Esse é um arquivo extramente importante, pois muito do que se configura em projeto NestJs, fica definido nele.
Dentre os itens que pode se definir estão alguma configuração de consumidor de um determinado serviço, seja o gRPC, RabbitMQ, entre outros.
Além de poder definir, que exista uma validação global ou definir a porta usada pelo sistema.

## Detalhes de implementação

Os assuntos tocados nesta seção são pertinentes a detalhes de implementação e por tanto cabe consutar a documentação do NestJs, para olhar se não aconteceu alguma atualização, no framework. Mas considerando , que você venha usar as mesmas libs empregadas neste template. Então você pode usar esse guia como base.

### Definições de Servidor

Muito de configurações que fazemos aqui desde para gRPC, seje para RabbitMQ ou Apache Kafka. São configurações de servidor. E estou querendo dizer aqui como servidor o consumidor, ou seja, aquele que recebe uma mensagem. Isso exposto, nós podemos configurar o projeto para que ele seja consumidor de apenas uma determinada tecnlogia ou de ambas.

Nesse sentido, considere os exemplo abaixo

- Exemplo gRCP:

```javascript
const app =
  (await NestFactory.createMicroservice) <
  GrpcOptions >
  (AppModule,
  {
    transport: Transport.GRPC,
    options: {
      url: '0.0.0.0:3333',
      protoPath: join(__dirname, '4-framework/grpc/__proto/user.proto'),
      package: 'users',
    },
  });
await app.listen();
```

- Exemplo RabbitMQ:

```javascript
const app =
  (await NestFactory.createMicroservice) <
  MicroserviceOptions >
  (AppModule,
  {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://localhost:5672'],
      queue: 'cats_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
```

Essas duas formas de configuração elas tem em comun que elas foram feitas para atender uma única tecnlogia de comunicação. Sendo a primeira para o cliente de gRPC e a segunda para um cliente de RabbitMQ.
Vale destacar, se você quiser saber um pouco mais sobre RabbitMQ e como implementar acesso o [link.](https://github.com/alanbruno1994/RabbitMQ_Persist)

Agora imagine o cenário, em que o micro serviço, ele precisa atender mais de uma tecnlogia de comunicação, então precisariamos ter um código parecido com este aqui:

```javascript
const app = await NestFactory.create(AppModule);
app.useGlobalPipes(new ValidationPipe());
await app.connectMicroservice({
  transport: Transport.GRPC,
  options: {
    url: '0.0.0.0:5555',
    protoPath: join(__dirname, '4-framework/grpc/__proto/user.proto'),
    package: 'users',
  },
});
await app.startAllMicroservices();

await app.listen(3000);
```

Do jeito que está exposto acima, é possível no mesmo projeto realizar as comunicações via gRPC, pela por porta 5555, e pela porta 3000 usando REST.
