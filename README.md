
# Motivação

O padrão Front Controller tem como objetivo centralizar todas as requisições em um sistema web com o objetivo de executa funcionalidades comuns a todas as rotas.

Dentre as funcionalidades que geralmente desejamos aplicar a varias rotas temos:

Validação
Autenticação
Rate Limit
Log
Injeção de Dependencias
Parsing de Body
Middlewares
Guards

# Quando Implementar

Utilizado principalmente na arquitetura MVC, geralmente não é necessario que implementemos esse padrão manualmente, pois os frameworks webs já os implementam.

# Implementação

Esse repositorio contem uma pequena implementação onde a classe FrontController é responsavel por armazenar as rotas, receber as solicitações, encontrar a rota que lide com aquele path, validar e encaminhar o request para o handler da rota.

## Outros exemplos de implementação

A aplicação do padrão Front Controller pode ser necessaria em situações em que lidamos com linguagens/runtimes que não 
permitem/existem soluções prontas.

### Http Server Godot

No link abaixo segue um exemplo da implementação de um servidor http para a linguagem GDScript, utilizada na engine de jogos Godot

O GDScript não fornece em sua stdlib um servidor http server, devido a isso foi necessario a implementação de um servidor http sobre um servidor tcp fornecido na stdlib.

https://github.com/deep-entertainment/godottpd

### Http Bun

O Front Controller tambem pode ser implementado diretamente pelo servidor http, como por exemplo no caso do bunjs, onde o servidor http tem nativamente capacidade de lidar com roteamento.

https://bun.sh/docs/api/http
