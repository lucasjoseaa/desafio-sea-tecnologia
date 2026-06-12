# 02 - Plano de Testes

## Objetivo

Definir a estratégia de testes para validação da aplicação disponibilizada pela Sea Tecnologia, garantindo a verificação dos requisitos funcionais, não funcionais e critérios de qualidade descritos no desafio técnico.

---

## Escopo dos Testes

Serão avaliadas as funcionalidades e comportamentos definidos no enunciado do desafio e no protótipo disponibilizado.

### Cadastro e Edição de Funcionários

* Cadastro de funcionário;
* Edição de funcionário;
* Definição de status (Ativo/Inativo);
* Preenchimento dos dados cadastrais;
* Inclusão de atividades;
* Inclusão de EPIs;
* Upload de atestado de saúde;
* Salvamento dos dados.

### Listagem de Funcionários

* Visualização de funcionários cadastrados;
* Exibição de CPF;
* Exibição de cargo;
* Exibição de status;
* Filtro de funcionários ativos;
* Limpeza de filtros;
* Exclusão de funcionários.

### Navegação

* Navegação entre etapas;
* Navegação através dos menus laterais;
* Verificação dos links disponíveis;
* Redirecionamento para o componente "Em breve".

### Conformidade Visual

* Comparação da interface com o protótipo;
* Verificação de fontes;
* Verificação de cores;
* Verificação dos componentes visuais.

---

## Tipos de Teste

### Testes Funcionais

Validação das funcionalidades da aplicação de acordo com os requisitos identificados.

### Testes de Interface (UI)

Validação da conformidade visual da aplicação em relação ao protótipo disponibilizado.

### Testes de Validação

Validação dos campos do formulário, regras de preenchimento e mensagens apresentadas ao usuário.

### Testes de Persistência

Validação do armazenamento e recuperação das informações cadastradas.

### Testes de Navegação

Validação dos menus, botões, links e fluxo de navegação da aplicação.

### Testes de Compatibilidade

Validação do funcionamento da aplicação nos principais navegadores web.

### Testes Automatizados

Automação dos principais fluxos da aplicação utilizando Cypress com padrão POM (Page Object Model).

---

## Estratégia de Testes

Os testes serão executados seguindo o fluxo abaixo:

1. Análise dos requisitos;
2. Elaboração do plano de testes;
3. Criação dos casos de teste;
4. Execução dos testes manuais;
5. Registro e documentação dos defeitos encontrados;
6. Desenvolvimento da automação dos cenários selecionados;
7. Elaboração do relatório final;
8. Revisão e entrega do projeto.

---

## Critérios de Priorização

### Prioridade Alta

Funcionalidades críticas para o funcionamento da aplicação:

* Cadastro de funcionário;
* Edição de funcionário;
* Exclusão de funcionário;
* Persistência dos dados;
* Recuperação dos dados;
* Validação de CPF;
* Validação de Data.

### Prioridade Média

Funcionalidades complementares:

* Inclusão de EPIs;
* Inclusão de atividades;
* Upload de documentos;
* Filtro de funcionários ativos;
* Limpeza de filtros.

### Prioridade Baixa

Funcionalidades secundárias:

* Navegação para páginas "Em breve";
* Compatibilidade entre navegadores;
* Ajustes visuais e conformidade com o protótipo.

---

## Ferramentas Utilizadas

| Ferramenta         | Finalidade                     |
| ------------------ | ------------------------------ |
| Google Chrome      | Execução dos testes            |
| Microsoft Edge     | Testes de compatibilidade      |
| Mozilla Firefox    | Testes de compatibilidade      |
| Cypress            | Automação dos testes           |
| Visual Studio Code | Desenvolvimento e documentação |
| Git                | Controle de versão             |
| GitHub             | Hospedagem do projeto          |
| Microsoft Excel    | Casos de teste                 |

---

## Estratégia de Automação

Serão automatizados os seguintes cenários:

### AT-001 – Cadastro de Funcionário

Objetivo:

Validar o cadastro de um novo funcionário utilizando dados válidos.

### AT-002 – Edição de Funcionário

Objetivo:

Validar a edição de um funcionário previamente cadastrado.

A automação será desenvolvida utilizando Cypress com padrão POM (Page Object Model).

---

## Cronograma e Estimativa

### Estimativa das Atividades

| Atividade                                  | Responsável | Esforço Estimado |
| ------------------------------------------ | ----------- | ---------------- |
| Análise dos Requisitos                     | QA Engineer | 2 horas          |
| Elaboração do Plano de Testes              | QA Engineer | 2 horas          |
| Criação dos Casos de Teste                 | QA Engineer | 4 horas          |
| Execução dos Testes Manuais                | QA Engineer | 6 horas          |
| Registro e Documentação de Bugs            | QA Engineer | 3 horas          |
| Desenvolvimento da Automação Cypress (POM) | QA Engineer | 5 horas          |
| Elaboração do Relatório Final              | QA Engineer | 2 horas          |
| Organização do README e Revisão Final      | QA Engineer | 1 hora           |

**Esforço Total Estimado:** 25 horas

### Cronograma de Execução (7 Dias)

| Atividade                   | Dia 1 | Dia 2 | Dia 3 | Dia 4 | Dia 5 | Dia 6 | Dia 7 |
| --------------------------- | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| Análise dos Requisitos      |   ✓   |       |       |       |       |       |       |
| Plano de Testes             |   ✓   |       |       |       |       |       |       |
| Criação dos Casos de Teste  |       |   ✓   |   ✓   |       |       |       |       |
| Execução dos Testes Manuais |       |       |   ✓   |   ✓   |       |       |       |
| Registro dos Bugs           |       |       |   ✓   |   ✓   |   ✓   |       |       |
| Automação Cypress (POM)     |       |       |       |       |   ✓   |   ✓   |       |
| Relatório Final             |       |       |       |       |       |   ✓   |       |
| Revisão Geral e README      |       |       |       |       |       |       |   ✓   |

---

## Documentos Gerados

### Antes da Execução dos Testes

* Documento de Análise dos Requisitos;
* Plano de Testes;
* Casos de Teste.

### Durante a Execução dos Testes

* Registro da execução dos casos de teste;
* Evidências dos bugs encontrados;
* Relatório de defeitos.

### Após a Execução dos Testes

* Automação Cypress utilizando POM;
* Relatório Final;
* README do projeto;
* Repositório GitHub contendo toda a documentação do desafio.

---

## Critérios de Entrada

Os testes poderão ser iniciados quando:

* A aplicação estiver disponível para acesso;
* O protótipo estiver disponível para consulta;
* O ambiente de testes estiver funcional;
* Os requisitos estiverem analisados e documentados.

---

## Critérios de Saída

Os testes serão considerados concluídos quando:

* Todos os casos de teste planejados forem executados;
* Os defeitos encontrados forem documentados;
* As evidências forem registradas;
* Os cenários automatizados forem implementados;
* O relatório final for concluído;
* O repositório GitHub estiver atualizado para entrega.

---

## Considerações Finais

Este plano de testes define a estratégia de validação da aplicação disponibilizada para o desafio técnico da Sea Tecnologia. As atividades descritas servirão como base para a criação dos casos de teste, execução dos testes manuais, automação dos cenários selecionados e elaboração do relatório final do projeto.
