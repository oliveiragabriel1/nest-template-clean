# Framework

## Framework is the last layer of the application. This layer is resposible for integrating the core of the application with the external packages/libraries. In this layer you will find web-frameworks, databases, ORMs, etc.

&nbsp;

# Folder 4-framework

This folder will be the adapters to communicate through REST, gRPC, among others. We will also have the implementation of services and repositories defined in the 2-business folder. In addition, we will have the composition of the elements made in the folder of the other layers.

That said, let's see the main folders that exist inside this folder:

### adapters

Here are the communication adapters for gRPC or REST, for example.

### common

This folder will contain files that can be used to share between other folders within the 4-framework folder. Also, you can place files for the purpose of reducing some code that will repeat. For example, inside this folder there is a folder called dependency-injection, it is used to reuse code snippets in dependency injection.

### nestjs

Here will be files with elements from the NestJs framework. In this sense, a folder that has inside it is the module. And it contains files that are used to integrate dependency injections.

### repositories

This is where the implementations of the repositories will be, understand this as something that will do an action on a database.

### services

Here will be the implementation of all the services that were defined in the 2-business folder.

### typeorm

Here will be elements related to the TypeOrm, which is used to manage actions in a given database.

# Framework

## Famework é a última camada da aplicação. Esta camada é responsável por integrar o núcleo da aplicação com os pacotes/bibliotecas externos. Nesta camada você encontrará web-frameworks, bancos de dados, ORMs, etc.

&nbsp;

# Pasta 4-framework

Essa pasta, vai ficar os adaptadores para se comunicar através de REST, gRPC, entre outros. Também vamos ter a implementação de serviços e repositórios definidos na pasta 2-business. Ademais, vamos ter composição dos elementos feitos na pasta das outras camadas.

Isso exposto, vamos as principais pastas que existem dentro dessa pasta:

### adapters

Aqui fica os adaptadores de comunicação seja para gRPC ou REST, por exemplo.

### common

Essa pasta, vai ficar arquivos que podem ser usados para compartilhar entre as demais pastas dentro da pasta 4-framework. Ademais, você pode colocar arquivos para um próposito de reduzir algum código que venha a repetir. Por exemplo, dentro dessa pasta tem uma pasta chamada dependency-injection, ela é empregada para reaproveitar treichos de código na injeção de dependência.

### nestjs

Aqui vai ficar arquivos com elementos provenientes do framework NestJs. Nesse sentido, uma pasta que tem dentro dela é a module. E nela contém arquivos que servem para fazer integração das injeçoes de dependências.

### repositories

Aqui é onde vai ficar as implementações dos repositórios, entenda isso como algo que fará uma ação em uma base de dados.

### services

Aqui vai ficar a implementação de todos os serviços que foram definidos na pasta 2-business.

### typeorm

Aqui vai ficar elementos relacionados ao TypeOrm, o qual, é usado para gerenciar ações em determinado banco de dados.
