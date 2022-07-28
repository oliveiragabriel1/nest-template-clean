# Nest Microservice Template

This repository contains an example project that can be used as a template to create your own microservice. Templates can be used to increase the productivity, by using this template, you get a complete microservice with clean architecture implemented and well-structured codebase.

&nbsp;

## Technologies

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [GRPC](https://grpc.io/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)

# General Orientation

This section describes the layers of the clean architecture, patterns to be employed in the naming of folders and more.

## Clean Architecture Layers

The image below shows a general idea of the layers:
![alt text](https://github.com/lubysoftware/nest-ms-template/blob/main/doc/images/layers.png)

### Layer Domain

This layer is used to define the entities!

### Layer Business

This layer is used to define the following items:

- Services
- Repositories
- Errors
- DTOs

Notes:

- In case of systems like gateway or bff, where a request is expected to be made through a technology such as Redis, gRPC, TCP, among others this will be defined within services.
- Still speaking of systems like gateway or bff, if authentication is in it, in situations where the database is consumed by an API, we will treat it as if it were in Repository, which is adapted in the framework layer. The reason for this is because if the API ceases to exist, most likely this API data could stay in the Repository employed by the system.
- For systems in general, if the database comes from an API, we will still consider it as a Repository, due to future changes that may cause that API to cease to exist.

Suggestion:

- In communication services it might be interesting as posisibly fundamental to consider as promise, the returns, not limited to details, like Observable returns, as this is characteristic of a certain technoliga like gRPC, for example.
- And very true, that the template is built on top of NestJs. But, as it proposes to use Clean Architeture. Some things, should be avoided, one of them is to avoid using guards, to protect routes. This can, be replaced, by an access level use case or a protect if not logged in use case, and this use case is going to be used in layer three in a controller for it to use inside run and so if it doesn't meet the route protection requirements this use case will prevent the rest of the run method from executing.

### Layer Presentation

This layer is called the controllers.
The controllers essentially make up the use cases. Furthermore, you can have validations in this layer.

### Layer Framework

In this layer, several elements are composed to form a controller. These elements are the use cases, services, repositories, among others.
Further in this layer, such elements are the implementation of the definitions made in the other layers.

This layer, it is closely linked with the framework, and here we can have adapters to deal with REST, gRPC, among other technical issues.

Suggestions:

- In general, in applications that make use of an API, you work with a token to do authentication, but where the token will be stored, and how to retrieve it would be better if these issues were left here in the framework layer. The possible places where this token could be stored would be in local storage, cookies or session storage. But the idea is that regardless of where it is stored this layer gets the token and passes it to the controller that comes from the presentation layer.

## Files and Folders Standard

### Folders

Folders must always have the name in lowercase and in English. In case the name is composite it must be separated by '-'. In this sense, take the following folder names as an example:

- rest
- dependency-injection

### Arquivos

The files must always have the name in lowercase and in English. In case the name is composite it must be separated by '-'. What differs the naming of files to folder, and
that after putting the name and before putting the extension (.ts or .js) you define the category of the file. This category is between a dot after a name and a dot before
of the extension.

Consider the following filenames for you to base yourself on:

- user.module.ts
- create-user-controller.inject.ts
- create-user.controller.ts

It is worth mentioning that in the case of index.ts or index.js files, the category does not apply.

That said, it is necessary to point out which are the possible categories used in this template:

- inject: refers to files used to inject into module category file;
- repository: refers to the definitions of a repository in the Business layer, but in the Framework layer, this refers to implementation;
- controller: refers to controllers defined in the Presentation layer;
- entity: refers to entities defined in the Domain layer;
- model: refers to the entities of a database, this is in the Framework layer;
- module: this is the NestJs module definition files, this is in the Framework layer;
- service: in the Business layer, this refers to the definition of a service, but in the Framework layer, it refers to the implementation of the service;
- d: this refers to definition files that are closely tied to an entity in the Domain layer, but this category can also be used in other layers, such as in Business, to employ definitions in a repository;
- usecase: refers to the use case files defined in the Business layer;
- errors: refers to the files used to define an error, this is in the Business layer;
- dto: refers to the files used in the input and output of use cases, this is in the Business layer, but it can also be used in the input and output of controllers;
- serializer: refers to input files that in certain implementations would be in the Presentation layer in the controllers, but in this case it was defined to be input already in the Framework layer;
- routes: refers to the routes to perform an operation in the framework, if using REST, for example, it would be the points where it serves through HTTP verbs;
- util: refers to files that have resources that will be reused and used in various parts of the code;
- md: refers to GitHub documentation files.
- yaml: refers to the docker-compose orchestration file;
- yml: refers to the docker-compose orchestration file;

# Modelo de Microsserviço Nest

Este repositório contém um projeto de exemplo que pode ser usado como modelo para criar seu próprio microsserviço. Os modelos podem ser usados para aumentar a produtividade, usando este modelo, você obtém um microsserviço completo com arquitetura limpa implementada e base de código bem estruturada.
&nbsp;

## Tecnologias

- [NestJS](https://nestjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [PostgreSQL](https://www.postgresql.org/)
- [TypeORM](https://typeorm.io/)
- [RabbitMQ](https://www.rabbitmq.com/)
- [GRPC](https://grpc.io/)
- [Docker](https://www.docker.com/)
- [Jest](https://jestjs.io/)

# Orientação Geral

Esta seção descreve as camadas da Arquitetura Limpa, padrões a serem empregados na nomeação de pastas e muito mais.

## Camadas da Arquitetura Limpa

A imagem abaixo mostra uma ideia geral das camadas:
![alt text](https://github.com/lubysoftware/nest-ms-template/blob/main/doc/images/layers.png)

### Camada Domain

Esta camada é usada para definir as entidades!

### Camada Business

Esta camada é usada para definir os seguintes itens:

- Serviços
- Repositórios
- Erros
- DTOs

Notas:

- No caso de sistemas como gateway ou bff, onde se espera que uma solicitação seja feita através de uma tecnologia como Redis, gRPC, TCP, entre outras, isso será definido dentro dos serviços.
- Ainda falando de sistemas como gateway ou bff, se houver autenticação nele, em situações em que o banco de dados for consumido por uma API, vamos tratá-lo como se estivesse no Repositório, que está adaptado na camada do framework. A razão para isso é porque se a API deixar de existir, muito provavelmente esses dados da API poderão ficar no Repositório empregado pelo sistema.
- Para sistemas em geral, se o banco de dados vier de uma API, ainda o consideraremos como um Repositório, devido a futuras alterações que podem fazer com que essa API deixe de existir.

Sugestão:

- Em serviços de comunicação pode ser interessante como possivelmente fundamental considerar como promise, os retornos, não se limitando a detalhes, como retorno Observable, pois isso é característico de uma determinada tecnologia como gRPC, por exemplo.
- E bem verdade, que o template é construído em cima de NestJs. Mas, como se propõe a usar a Arquitetura Limpa. Algumas coisas, devem ser evitadas, uma delas é evitar o uso de Guards,para proteger as rotas. Isso pode ser substituído por um caso de uso de nível de acesso ou de proteção se não estiver logado, e este caso de uso será usado na camada três em um controlador para usar dentro de execução e, portanto, se não atender aos requisitos de proteção de rota, este caso de uso impedirá a execução do restante do método run.

### Camada Presentation

Essa camada é chamada de controladores.

Os controladores fazem composição essencialmente os casos de uso. Além disso, você pode ter validações nesta camada.

### Camada Framework

Nesta camada, vários elementos são usados para compor um controlador. Esses elementos são os casos de uso, serviços, repositórios, entre outros.
Ainda nesta camada, tais elementos são a implementação das definições feitas nas outras camadas.

Essa camada, está intimamente ligada ao framework, e aqui podemos ter adaptadores para lidar com REST, gRPC, entre outras questões técnicas.

Sugestões:

- Em geral, nas aplicações que fazem uso de uma API, você trabalha com um token para fazer a autenticação, mas onde o token será armazenado e como recuperá-lo seria melhor se esses problemas fossem deixados aqui na camada do framework. Os possíveis locais onde esse token poderia ser armazenado seriam no local storage, cookies ou session storage. Mas a ideia é que independente de onde esteja armazenada essa camada pegue o token e passe para o controlador que vem da camada de apresentação.

## Padrão de Arquivos e Pastas

### Pastas

As pasta sempre devem ter o nome em minusculo e em inglês. No caso de nome ser composto ele deve ser separado por '-'. Nesse sentido, tome
como o exemplo os seguintes nomes de pastas:

- rest
- dependency-injection

### Arquivos

Os arquivos sempre devem ter o nome em minusculo e em inglês. No caso de nome ser composto ele deve ser separado por '-'. O que difere a nomenclatura de arquivos para pasta,e
que após colocar o nome e antes de colocar a extensão(.ts ou .js) você definir a categoria do arquivo. Essa categoria ela fica entre um ponto após um nome e um ponto antes
da extensão.

Considere os seguintes nomes de arquivo, para você se basear:

- user.module.ts
- create-user-controller.inject.ts
- create-user.controller.ts

Vale ressaltar que no caso de arquivos index.ts ou index.js, não se aplica a categoria.

Isso dito, é preciso salientar quais são as possíveis categorias empregadas neste template:

- inject: se refere arquivos usados para injetar em arquivo de categoria module;
- repository: se refere as definições de um repositório na camada de Business, mas na camada de Framework, isso se refere a implementação;
- controller: se refere aos controllers definidos na camada Presentation;
- entity: se refere as entidades definidas na camada Domain;
- model: se refere as entidades de um banco de dados, isso fica na camada Framework;
- module: trata-se dos arquivos de definição de módulo do NestJs, isso fica na camada Framework;
- service: na camada de Business, isso se refere a definição de um serviço, mas na camada Framework, se refere a implementação do serviço;
- d: isso se refere arquivos de definição que estão intimamente atrelados a uma entidade na camada Domain, mas também essa categoria pode usar em outras camadas, como na Business para empregar em definições de um repository;
- usecase: se refere aos arquivos de caso de uso definidos na camada Business;
- errors: se refere aos arquivos usados para definir um erro, isso fica na camada Business;
- dto: se refere os arquivos empregados na entrada e saída dos casos de uso, isso fica na camada Business, mas ele também pode ser empregado também na entrada e saída de controllers;
- serializer: se refere aquivos de entrada que em determinadas implementações isso ficaria na camada de Presentation nos controllers, mas nesse caso ficou definido para ser entrada já na camada de Framework;
- routes: se refere as rotas para fazer uma operação no framework, se tiver usando REST, por exemplo, seria os pontos onde atende através dos verbos HTTP;
- util: se refere a aquivos que possuem recursos que serão reaproveitadas e utilizadas em várias partes dos códigos;
- md: se refere a arquivos de documentação do GitHub.
- yaml: se refere ao arquivo de aqruivo de orquestração do docker-compose;
- yml: se refere ao arquivo de aqruivo de orquestração do docker-compose;
