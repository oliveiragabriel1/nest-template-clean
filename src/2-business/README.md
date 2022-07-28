# Business

## Business is not a layer of clean architecture, normally, accordingly to the classic literature, this layer is just a part of the domain layer, but in my opinion we must have a layer with the implementation of the business rules.

&nbsp;

This layer can be considered as the extension of the domain layer, here you give meaning and life to the entities. The business layer is responsible for implementing all the use cases of the application.

## Folders

### `errors`

Folder to store the error classes related to its respective entities

### `repositories`

Folder to store the types, interfaces and abstract classes of the repositories. This will be used later in the repositories implementation.

### `services`

Folder to store service classes to be used in the usecases. Services are like adapters that allow the integration of external packages/libraries in our application.
Eg.: HasherService, MailService, CacheService

### `types`

Folder to store DTOs and Enums

### `usecases`

Folder to store the usecases of the application separated by entity/module

# Business

## Business não é uma camada de arquitetura limpa, normalmente, de acordo com a literatura clássica, essa camada é apenas uma parte da camada de domínio, mas na minha opinião devemos ter uma camada com a implementação das regras de negócio.

&nbsp;

Esta camada pode ser considerada como a extensão da camada de domínio, aqui você dá sentido e vida às entidades. A camada de negócios é responsável por implementar todos os casos de uso da aplicação.

## Pastas

### `errors`

Pasta para armazenar as classes de erro relacionadas às suas respectivas entidades.

### `repositories`

Pasta para armazenar os tipos, interfaces e classes abstratas dos repositórios. Isso será usado posteriormente na implementação dos repositórios.

### `services`

Pasta para armazenar classes de serviço a serem utilizadas nos casos de uso. Os serviços são como adaptadores que permitem a integração de pacotes/bibliotecas externos em nossa aplicação.
Ex.: HasherService, MailService, CacheService e TokenService

### `types`

Pasta para armazenar DTOs e Enums

### `usecases`

Pasta para armazenar os casos de uso da aplicação separados por entidade/módulo
