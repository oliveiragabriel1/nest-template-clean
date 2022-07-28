# Folder TypeOrm

This folder will be everything related to TypeOrm. In this sense, within it, there may be the following folders:

- migrations: here will be the migrations files;
- models: here will be the entities used by TypeOrm;
- seeds: here will be the files to populate the database.

# Database Standard

When working with databases, it is ideal to follow a certain pattern. In this sense, the names of tables and columns must be lowercase and the words must be separated by an underscore, following the snake case pattern. And all terms must be in English, except some terms that there is no proper English translation. Always prefer descriptive names, avoiding contractions as much as possible.

Examples:

```
 - users
 - posts
 - roles
 - room_categories
```

Now talking about the columns, it can be said that the column names must be singular.

Examples:

```
 - cpf
 - name
 - age
```

Regarding foreign keys, these must also follow a certain pattern, which should be something like:

```
table_name_on_singular_id
```

In the tables, you must define two columns to place the timestamps: created_at and updated_at. The created_at column automatically receives the timestamp of the moment the record is created. The updated_at column automatically receives the timestamp of the moment the record is changed.

# Pasta TypeOrm

Essa pasta vai ficar tudo relacionado ao TypeOrm. Nesse sentido, dentro dela, podem existir as seguintes pastas:

- migrations: aqui vai ficar os arquivos de migrations;
- models: aqui vai ficar as entidades usadas pelo TypeOrm;
- seeds: aqui vai ficar os arquivos para povoar o banco de dados.

# Padrão de Banco de Dados

Quando trabalhamos com banco de dados é ideial seguir um certo padrão. Nesse sentido, os nomes das tabelas e colunas
devem estar minúsculas e as palavras devem ser separadas por underscore, seguindo o padrão snake case. E todos os
termos devem estar em inglês, exceto alguns termos que não há tradução apropriada para o inglês. Sempre prefira
nomes descritivos, evitando ao máximo contrações.

Exemplos:

```
 - users
 - posts
 - roles
 - room_categories
```

Agora falando sobre as colunas, pode-se dizer que os nomes das colunas devem estar no singular.

Exemplos:

```
 - cpf
 - name
 - age
```

Com relação as chaves estrangeiras, essas também devem devem seguir um certo padrão, que deve ser algo como:

```
nome_da_tabela_no_singular_id
```

Nas tabelas, deve-se definir duas colunas para colocar os timestamps: created_at e updated_at. A coluna created_at
recebe automaticamente o timestamp do momento que o registro for criado. A coluna updated_at recebe automaticamente
o timestamp do momento que o registro for alterado.
