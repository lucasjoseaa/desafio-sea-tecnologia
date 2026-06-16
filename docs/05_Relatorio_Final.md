# 05 - Relatório Final de Testes

## Desafio Técnico – SEA Tecnologia

### Autor : Lucas José Alves de Araújo - Analisa de Testes
---

# 1. Resumo do Processo de Teste

O processo de testes foi realizado com base nos protótipos disponibilizados e na versão funcional da aplicação web fornecida para avaliação.

Inicialmente foi conduzida uma análise dos requisitos funcionais e não-funcionais identificados nos protótipos, seguida da elaboração do Plano de Testes e da criação dos Casos de Teste necessários para validar as principais funcionalidades da aplicação.

Ao todo, foram criados 35 casos de teste contemplando os módulos de Cadastro de Funcionários, Listagem, Navegação, Edição, Exclusão, Conformidade Visual e Compatibilidade entre navegadores.

Durante a execução dos testes foram identificados defeitos funcionais, problemas de validação de dados e divergências visuais em relação ao protótipo. Os defeitos encontrados foram documentados individualmente com evidências e rastreados através dos respectivos casos de teste.

Além da execução manual, foram desenvolvidos testes automatizados utilizando Cypress e o padrão Page Object Model (POM), com foco nos fluxos mais relevantes da aplicação.

## Testes realizados

* Testes Funcionais
* Testes de Validação de Dados
* Testes de Interface (UI)
* Testes de Usabilidade
* Testes de Compatibilidade
* Testes Automatizados

## Ferramentas Utilizadas

| Ferramenta         | Finalidade                     |
| ------------------ | ------------------------------ |
| Google Chrome v149.0.7827.54 64 bits      | Execução dos testes            |
| Microsoft Edge v149.0.4022.62 64 bits    | Testes de compatibilidade      |
| Mozilla Firefox v149.0.4022.62 64 bits    | Testes de compatibilidade      |
| Cypress            | Automação dos testes           |
| Visual Studio Code | Desenvolvimento e documentação |
| Git                | Controle de versão             |
| GitHub             | Hospedagem do projeto          |
| Microsoft Excel    | Casos de teste                 |


---

# 2. Resultados da Execução dos Testes

## Resumo Geral

| Indicador                 | Resultado |
| ------------------------- | --------- |
| Casos de Teste Planejados | 35        |
| Casos de Teste Executados | 28        |
| Casos de Teste Bloqueados | 7         |
| Casos Aprovados           | 16        |
| Casos Falhados            | 12        |
| Bugs Identificados        | 25        |
| Casos Automatizados       | 2         |

## Distribuição dos Resultados

* Aprovados: 45,7 %
* Falhados: 34,3 %
* Bloqueados: 20,0 %

Os testes bloqueados ocorreram devido a defeitos que impediram a continuidade da validação de determinadas funcionalidades, principalmente relacionadas ao menu de ações dos funcionários.

---

# 3. Principais Descobertas e Bugs Reportados

Durante a execução dos testes foram identificados 25 defeitos distribuídos entre validações de dados, funcionalidades e interface.

## Validação de Dados

Foram identificadas falhas importantes relacionadas à integridade dos dados cadastrados:

* CPF aceita letras e caracteres especiais.
* CPF inválido pode ser salvo no sistema.
* RG aceita letras e caracteres especiais.
* RG inválido pode ser salvo no sistema.
* Nº do CA aceita letras e caracteres especiais.
* Nº do CA inválido pode ser salvo no sistema.
* Data de nascimento permite datas futuras.

Esses problemas podem comprometer a qualidade dos dados armazenados e gerar inconsistências operacionais.

## Funcionalidades

Foram encontrados defeitos que impactam diretamente a utilização da aplicação:

* Sistema permite apenas uma atividade por funcionário.
* Botão "Adicionar EPI" não executa ação.
* Menu de ações ("...") não funciona.
* Botões do menu lateral não executam navegação.
* Botão "Próximo Passo" não funciona.

Esses problemas impedem ou limitam fluxos importantes da aplicação.

## Interface e Experiência do Usuário

Foram identificadas diversas divergências em relação ao protótipo:

* Componentes desalinhados.
* Elementos visuais ausentes.
* Cores divergentes.
* Problemas de tipografia.
* Inconsistências em ícones e botões.
* Problemas de posicionamento e espaçamento.

Embora não impeçam o uso da aplicação, esses defeitos impactam a experiência do usuário e a aderência ao design proposto.

## Compatibilidade entre navegadores

Durante a execução dos testes, os cenários foram validados nos navegadores Google Chrome, Mozilla Firefox e Microsoft Edge. Os defeitos identificados apresentaram comportamento consistente em todos os navegadores testados, não sendo observadas divergências relacionadas à compatibilidade ou renderização específica de navegador.

Dessa forma, conclui-se que os problemas reportados estão associados à implementação da aplicação e às regras de negócio, e não a limitações ou incompatibilidades entre navegadores. Os resultados obtidos demonstram que a aplicação apresenta comportamento funcional semelhante nos ambientes avaliados.



---

# 4. Testes Automatizados Desenvolvidos

A automação foi desenvolvida utilizando:

* Cypress
* JavaScript
* Page Object Model (POM)
* Fixtures para gerenciamento de dados de teste

## SEA-CT-001 – Cadastro de Funcionário

Objetivo:

Validar o cadastro completo de um funcionário utilizando dados válidos.

Fluxo automatizado:

* Acesso à aplicação;
* Abertura da tela de cadastro;
* Preenchimento dos campos obrigatórios;
* Seleção de cargo;
* Seleção de atividade;
* Seleção de EPI;
* Upload de atestado médico;
* Salvamento do cadastro;
* Recarregamento da página.

Resultado:

✔ Executado com sucesso.

---

## SEA-CT-002 – Validação de Campos Obrigatórios

Objetivo:

Validar a obrigatoriedade dos campos necessários para o cadastro de funcionários.

Fluxo automatizado:

* Acesso ao formulário;
* Tentativa de salvamento sem preenchimento;
* Validação progressiva dos campos obrigatórios:

  * Nome;
  * CPF;
  * RG;
  * Data de Nascimento;
  * Número do CA.

Resultado:

✔ Executado com sucesso.

---

# 5. Análise Geral da Qualidade da Aplicação

A aplicação apresenta uma proposta simples e objetiva, com um fluxo principal de cadastro intuitivo e de fácil utilização.

Entretanto, os resultados obtidos durante os testes demonstram que o produto ainda possui limitações importantes que afetam sua estabilidade funcional e sua aderência aos requisitos esperados.

Os problemas mais relevantes estão relacionados à ausência de validações adequadas para campos críticos, falhas em funcionalidades essenciais e inconsistências visuais quando comparadas ao protótipo disponibilizado.

A quantidade de defeitos encontrados e o percentual de casos de teste falhados indicam que a aplicação ainda necessita de uma etapa adicional de correção e validação antes de ser considerada pronta para utilização em ambiente produtivo.

Apesar disso, a estrutura geral da aplicação demonstra potencial de evolução, possuindo uma base funcional que pode ser aprimorada através da correção dos defeitos identificados.

---

# 6. Recomendações e Sugestões de Melhoria

## Qualidade

* Implementar validações de negócio para CPF, RG, Data de Nascimento e Número do CA.
* Garantir que todos os campos obrigatórios possuam validações consistentes.
* Corrigir funcionalidades críticas antes da inclusão de novas funcionalidades.
* Aumentar a cobertura de testes automatizados para fluxos de cadastro, edição e exclusão.

## Performance

* Revisar o comportamento de carregamento dos componentes da interface.
* Reduzir a dependência de atualizações manuais da página após operações de cadastro.
* Implementar feedback visual mais rápido para ações executadas pelo usuário.
* Realizar testes de desempenho em operações de listagem e cadastro.

## Segurança

* Implementar validações também no lado servidor para evitar dependência exclusiva do front-end.
* Restringir uploads a formatos e tamanhos permitidos.
* Sanitizar entradas de usuário antes do processamento.
* Implementar validações para evitar armazenamento de dados inconsistentes ou maliciosos.
* Adotar mecanismos de auditoria para operações de cadastro e alteração de registros.

## Experiência do Usuário

* Corrigir todos os problemas de navegação identificados.
* Alinhar completamente a interface ao protótipo fornecido.
* Melhorar a consistência visual dos componentes.
* Fornecer mensagens de erro mais claras e orientativas para o usuário.
* Melhorar a acessibilidade dos controles e elementos interativos.

---

# 7. Conclusão

A execução dos testes permitiu identificar oportunidades significativas de melhoria na aplicação, tanto em aspectos funcionais quanto  não-funcionais. Foram executados 35 casos de teste, identificados 25 defeitos e desenvolvidos testes automatizados para os principais fluxos do sistema.

Os resultados demonstram que a aplicação possui uma base funcional promissora, porém ainda requer correções e refinamentos para atingir um nível adequado de qualidade, confiabilidade e experiência do usuário.

A implementação das melhorias recomendadas contribuirá para a evolução do produto, reduzindo riscos operacionais e aumentando a satisfação dos usuários finais.
