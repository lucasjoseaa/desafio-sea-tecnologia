# 04 - Reporte de Bug's

## Objetivo

Documentação dos Bug's encontrados no desafio técnico da SEA tecnologia.

---

# SEA-BUG-001 — Campo CPF permite caracteres inválidos e salvamento do cadastro

## Resumo

O sistema permite inserir letras e caracteres especiais no campo CPF e concluir o cadastro do funcionário sem exibir qualquer validação.

## Caso de Teste Relacionado

SEA-CT-003 — Validar formato do CPF

## Passos para Reproduzir

1. Clicar em "+ Adicionar Funcionário".
2. Preencher os demais campos obrigatórios do formulário.
3. Informar letras ou caracteres especiais no campo CPF.
4. Clicar em "Salvar".

## Resultado Atual

O sistema aceita letras e caracteres especiais no campo CPF e permite salvar o cadastro do funcionário.

## Resultado Esperado

O sistema deve aceitar apenas valores numéricos válidos para o CPF e impedir o salvamento do cadastro quando o campo contiver caracteres inválidos.

## Severidade

Alta

## Prioridade

Alta

## Evidência

![SEA-BUG-001](../evidencias/SEA-BUG-001.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Implementar validação de CPF tanto no front-end quanto no back-end, restringindo a entrada apenas a caracteres numéricos e validando o formato e a quantidade de dígitos antes de permitir o salvamento do cadastro.

---

# SEA-BUG-002 — Sistema permite cadastro com data de nascimento futura

## Resumo

O sistema permite informar uma data futura no campo "Data de Nascimento" e concluir o cadastro do funcionário sem exibir qualquer validação.

## Caso de Teste Relacionado

SEA-CT-004 — Validar formato da data de nascimento

## Passos para Reproduzir

1. Clicar em "+ Adicionar Funcionário".
2. Preencher os demais campos obrigatórios do formulário.
3. Informar uma data futura no campo "Data de Nascimento".
4. Clicar em "Salvar".

## Resultado Atual

O sistema aceita uma data futura no campo "Data de Nascimento" e permite salvar o cadastro do funcionário.

## Resultado Esperado

O sistema deve validar a data informada e impedir o salvamento do cadastro quando a data de nascimento for posterior à data atual.

## Severidade

Alta

## Prioridade

Alta

## Evidência

![SEA-BUG-002](../evidencias/SEA-BUG-002.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Adicionar validação de data para impedir o cadastro de datas posteriores à data atual. A validação deve ocorrer tanto na interface quanto no servidor para evitar contornos por requisições manipuladas.

---

# SEA-BUG-003 — Campo RG permite caracteres inválidos e salvamento do cadastro

## Resumo

O sistema permite inserir letras e caracteres especiais no campo RG e concluir o cadastro do funcionário sem exibir qualquer validação.

## Caso de Teste Relacionado

SEA-CT-008 — Validar preenchimento do campo RG

## Passos para Reproduzir

1. Clicar em "+ Adicionar Funcionário".
2. Preencher os demais campos obrigatórios do formulário.
3. Informar letras e/ou caracteres especiais no campo RG.
4. Clicar em "Salvar".

## Resultado Atual

O sistema aceita letras e caracteres especiais no campo RG e permite salvar o cadastro do funcionário.

## Resultado Esperado

O sistema deve validar o conteúdo informado no campo RG e impedir o salvamento do cadastro quando forem utilizados caracteres incompatíveis com o formato esperado.

## Severidade

Média

## Prioridade

Alta

## Evidência

![SEA-BUG-003](../evidencias/SEA-BUG-003.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Implementar validação do campo RG, restringindo caracteres incompatíveis com o formato esperado e validando o conteúdo antes do armazenamento.

---

# SEA-BUG-004 — Sistema não permite adicionar múltiplas atividades ao funcionário

## Resumo

O sistema permite adicionar apenas uma atividade ao cadastro do funcionário, impedindo a inclusão de múltiplas atividades conforme previsto na interface através do botão "Adicionar outra atividade".

## Caso de Teste Relacionado

SEA-CT-010 — Validar inclusão de múltiplas atividades

## Passos para Reproduzir

1. Clicar em "+ Adicionar Funcionário".
2. Selecionar uma atividade.
3. Clicar em "Adicionar outra atividade".
4. Tentar adicionar uma segunda atividade ao cadastro.
5. Salvar o cadastro.

## Resultado Atual

O sistema permite manter apenas uma atividade associada ao funcionário, não possibilitando a inclusão de múltiplas atividades.

## Resultado Esperado

O sistema deve permitir adicionar e manter múltiplas atividades vinculadas ao mesmo funcionário, conforme sugerido pela funcionalidade "Adicionar outra atividade".

## Severidade

Média

## Prioridade

Média

## Evidência

![SEA-BUG-004](../evidencias/SEA-BUG-004.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Revisar a lógica do componente responsável pelo gerenciamento de atividades para permitir a inclusão e persistência de múltiplas atividades associadas ao mesmo funcionário.

---

# SEA-BUG-005 — Botão "Adicionar EPI" não executa a ação esperada

## Resumo

O botão "Adicionar EPI" não executa nenhuma ação ao ser acionado, impedindo a associação do EPI ao cadastro do funcionário.

## Caso de Teste Relacionado

SEA-CT-011 — Validar inclusão de EPIs e número do CA

## Passos para Reproduzir

1. Clicar em "+ Adicionar Funcionário".
2. Selecionar uma atividade.
3. Selecionar um EPI.
4. Informar um número de CA.
5. Clicar no botão "Adicionar EPI".

## Resultado Atual

Nenhuma ação é executada após clicar no botão "Adicionar EPI" e o EPI não é adicionado ao cadastro.

## Resultado Esperado

O sistema deve adicionar o EPI selecionado ao cadastro do funcionário após o acionamento do botão.

## Severidade

Alta

## Prioridade

Alta

## Evidência

![SEA-BUG-005](../evidencias/SEA-BUG-005.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Verificar a implementação do evento de clique do botão "Adicionar EPI" e garantir que a ação adicione corretamente o EPI selecionado à estrutura de dados do cadastro.

---

# SEA-BUG-006 — Campo número do CA permite caracteres inválidos

## Resumo

O sistema permite inserir letras e caracteres especiais no campo destinado ao número do Certificado de Aprovação (CA), sem realizar validação do conteúdo informado.

## Caso de Teste Relacionado

SEA-CT-011 — Validar inclusão de EPIs e número do CA

## Passos para Reproduzir

1. Clicar em "+ Adicionar Funcionário".
2. Selecionar uma atividade.
3. Selecionar um EPI.
4. Informar letras e/ou caracteres especiais no campo "Número do CA".
5. Tentar adicionar o EPI ao cadastro.

## Resultado Atual

O sistema aceita letras e caracteres especiais no campo "Número do CA".

## Resultado Esperado

O sistema deve validar o conteúdo informado e permitir apenas valores compatíveis com o formato esperado para o número do CA.

## Severidade

Média

## Prioridade

Média

## Evidência

![SEA-BUG-006](../evidencias/SEA-BUG-006.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Implementar validação do campo "Número do CA", permitindo apenas valores compatíveis com o padrão utilizado para Certificados de Aprovação e impedindo caracteres inválidos.

---

# SEA-BUG-007 — Menu de ações do funcionário não é exibido ao clicar no botão "..."

## Resumo

O botão de ações representado por reticências ("...") não responde à interação do usuário, impossibilitando o acesso às funcionalidades disponíveis para o registro do funcionário.

## Caso de Teste Relacionado

SEA-CT-020 — Validar acesso ao menu de ações do funcionário

## Passos para Reproduzir

1. Acessar a tela de listagem de funcionários.
2. Localizar um funcionário cadastrado.
3. Clicar no botão de ações representado por "...".

## Resultado Atual

Nenhum menu é exibido após o clique no botão de ações.

## Resultado Esperado

O sistema deve exibir o menu de ações do funcionário contendo as opções disponíveis para gerenciamento do registro.

## Severidade

Alta

## Prioridade

Alta

## Evidência

![SEA-BUG-007](../evidencias/SEA-BUG-007.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Revisar a implementação do botão de ações ("..."), verificando o acionamento do menu contextual, renderização dos componentes e possíveis erros de JavaScript que impeçam sua exibição.

---

# SEA-BUG-008 — Menus laterais não executam navegação ao serem acionados

## Resumo

Os itens do menu lateral não respondem à interação do usuário, impedindo a navegação para as telas correspondentes.

## Caso de Teste Relacionado

SEA-CT-026 — Validar navegação dos menus laterais

## Passos para Reproduzir

1. Acessar a aplicação.
2. Localizar os menus laterais disponíveis (Documento, Organograma, Notificações, Histórico e Usuário).
3. Clicar em qualquer um dos itens do menu lateral.

## Resultado Atual

Nenhuma navegação é realizada após o clique nos itens do menu lateral.

## Resultado Esperado

Sistema deve direcionar para a tela "Em breve".

## Severidade

Alta

## Prioridade

Alta

## Evidência

![SEA-BUG-008](../evidencias/SEA-BUG-008.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Verificar o roteamento e os eventos associados aos menus laterais, garantindo que cada item execute corretamente a navegação para a tela correspondente.

---

# SEA-BUG-009 — Botão "Próximo passo" não executa navegação

## Resumo

O botão "Próximo passo" não responde à interação do usuário, impedindo o avanço para a próxima etapa do fluxo da aplicação.

## Caso de Teste Relacionado

SEA-CT-027 — Validar navegação para o próximo passo

## Passos para Reproduzir

1. Acessar a aplicação.
2. Navegar até a tela que contém o botão "Próximo passo".
3. Clicar no botão "Próximo passo".

## Resultado Atual

Nenhuma ação é executada após o clique no botão e o usuário permanece na mesma tela.

## Resultado Esperado

O sistema deve direcionar o usuário para a próxima etapa do fluxo após o acionamento do botão.

## Severidade

Alta

## Prioridade

Alta

## Evidência

![SEA-BUG-009](../evidencias/SEA-BUG-009.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Revisar a implementação do botão "Próximo Passo", validando o fluxo de navegação e a associação correta da ação ao evento de clique.

---

# SEA-BUG-010 — Numeração das etapas não corresponde ao protótipo

## Resumo

O cabeçalho da aplicação exibe o texto "ITEM 1" em todas as etapas, não respeitando a numeração sequencial definida no protótipo.

## Caso de Teste Relacionado

SEA-CT-030 — Validar conformidade visual com o protótipo

## Passos para Reproduzir

1. Acessar a aplicação.
2. Navegar entre as etapas disponíveis.
3. Comparar a numeração exibida com a apresentada no protótipo.

## Resultado Atual

As etapas exibem a mesma numeração ("ITEM 1"), independentemente da etapa acessada.

## Resultado Esperado

Cada etapa deve apresentar sua numeração correta e sequencial, conforme definido no protótipo.

## Severidade

Baixa

## Prioridade

Média

## Evidência

![SEA-BUG-010](../evidencias/SEA-BUG-010.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Implementar controle dinâmico da numeração das etapas, garantindo que cada item exiba sua identificação correta conforme definido no fluxo do protótipo.

---

# SEA-BUG-011 — Indicador de etapa concluída diverge do protótipo

## Resumo

O texto "CONCLUIDO" é exibido sem acentuação, em cor azul e sem destaque visual adequado quando comparado ao protótipo.

## Caso de Teste Relacionado

SEA-CT-030 — Validar conformidade visual com o protótipo

## Passos para Reproduzir

1. Acessar uma etapa marcada como concluída.
2. Comparar a exibição do indicador com o protótipo.

## Resultado Atual

O texto é exibido como "CONCLUIDO", sem acentuação e com estilo visual diferente do protótipo.

## Resultado Esperado

O texto deve ser exibido como "CONCLUÍDO", com formatação visual idêntica à definida no protótipo.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-011](../evidencias/SEA-BUG-011.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Atualizar o texto para utilizar a grafia correta ("CONCLUÍDO") e ajustar estilos visuais, incluindo tipografia, peso da fonte e cores de acordo com o protótipo.

---

# SEA-BUG-012 — Linhas de conexão do cabeçalho estão desalinhadas em relação ao protótipo

## Resumo

As linhas pontilhadas que conectam os ícones do cabeçalho apresentam alinhamento e espessura diferentes dos definidos no protótipo.

## Caso de Teste Relacionado

SEA-CT-030 — Validar conformidade visual com o protótipo

## Passos para Reproduzir

1. Acessar a aplicação.
2. Comparar o cabeçalho com o protótipo fornecido.

## Resultado Atual

As linhas pontilhadas apresentam desalinhamento visual e espessura divergente.

## Resultado Esperado

As linhas devem seguir o mesmo alinhamento e espessura apresentados no protótipo.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-012](../evidencias/SEA-BUG-012.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Revisar as propriedades CSS responsáveis pelo alinhamento e espessura das linhas de conexão do cabeçalho para garantir aderência ao design especificado.

---

# SEA-BUG-013 — Cargo do funcionário não é exibido na listagem após retorno ao cadastro

## Resumo

Após retornar para a tela de funcionários, as tags de cargo são exibidas vazias na listagem.

## Caso de Teste Relacionado

SEA-CT-030 — Validar conformidade visual com o protótipo

## Passos para Reproduzir

1. Cadastrar um funcionário com cargo definido.
2. Salvar o cadastro.
3. Retornar para a tela de funcionários.
4. Verificar a coluna de cargo.

## Resultado Atual

A tag de cargo é exibida vazia.

## Resultado Esperado

O cargo selecionado deve ser exibido corretamente na listagem.

## Severidade

Média

## Prioridade

Alta

## Evidência

![SEA-BUG-013](../evidencias/SEA-BUG-013.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Verificar o mapeamento e a renderização dos dados de cargo na listagem, garantindo que a informação seja recuperada e exibida corretamente após o cadastro.

---

# SEA-BUG-014 — Controle Ativo/Inativo diverge visualmente do protótipo

## Resumo

O componente Ativo/Inativo apresenta cor de fundo incorreta e desalinhamento visual em comparação com o protótipo.

## Caso de Teste Relacionado

SEA-CT-031 — Validar presença dos componentes previstos no protótipo

## Passos para Reproduzir

1. Acessar a tela de cadastro de funcionário.
2. Comparar o controle Ativo/Inativo com o protótipo.

## Resultado Atual

O componente possui fundo branco, baixa diferenciação visual e desalinhamento do seletor.

## Resultado Esperado

O componente deve seguir o padrão visual definido no protótipo.

## Severidade

Baixa

## Prioridade

Média

## Evidência

![SEA-BUG-014](../evidencias/SEA-BUG-014.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Ajustar as propriedades visuais do componente Ativo/Inativo, incluindo cores, alinhamento e comportamento visual para garantir conformidade com o protótipo.

---

# SEA-BUG-015 — Avatar do usuário encontra-se desalinhado no componente de identificação

## Resumo

O avatar do usuário é exibido fora do alinhamento esperado e não acompanha corretamente o layout da caixa de identificação.

## Caso de Teste Relacionado

SEA-CT-031 — Validar presença dos componentes previstos no protótipo

## Passos para Reproduzir

1. Acessar o sistema.
2. Comparar o componente de identificação do usuário com o protótipo.

## Resultado Atual

O avatar encontra-se desalinhado em relação aos demais elementos.

## Resultado Esperado

O avatar deve respeitar o alinhamento definido no protótipo.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-015](../evidencias/SEA-BUG-015.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Revisar o posicionamento do avatar utilizando ajustes de layout e alinhamento para garantir consistência visual com os demais elementos do componente.

---

# SEA-BUG-016 — Campo de upload não apresenta ícone de anexo previsto no protótipo

## Resumo

O componente de upload não exibe o ícone de anexo (clipe), divergindo do design definido no protótipo.

## Caso de Teste Relacionado

SEA-CT-031 — Validar presença dos componentes previstos no protótipo

## Passos para Reproduzir

1. Acessar a seção de upload de documento.
2. Comparar o componente com o protótipo.

## Resultado Atual

O ícone de anexo não é exibido.

## Resultado Esperado

O campo deve exibir o ícone de anexo conforme o protótipo.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-016](../evidencias/SEA-BUG-016.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Adicionar o ícone de anexo previsto no protótipo ao componente de upload, garantindo consistência visual e melhor identificação da funcionalidade.

---

# SEA-BUG-017 — Componente de conclusão da etapa sobrepõe elementos da interface

## Resumo

O componente "A etapa está concluída? Sim/Não" sobrepõe outros elementos da interface, prejudicando a visualização e a interação do usuário.

## Caso de Teste Relacionado

SEA-CT-031 — Validar presença dos componentes previstos no protótipo

## Passos para Reproduzir

1. Acessar a tela de funcionários.
2. Observar a posição do componente "A etapa está concluída?".

## Resultado Atual

O componente invade a área de outros elementos da tela.

## Resultado Esperado

O componente deve respeitar o layout definido no protótipo sem sobrepor outros componentes.

## Severidade

Média

## Prioridade

Média

## Evidência

![SEA-BUG-017](../evidencias/SEA-BUG-017.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Revisar a estrutura de layout da página e os estilos CSS do componente para eliminar sobreposição de elementos e preservar a usabilidade da interface.

---

# SEA-BUG-018 — Estado visual do botão "Limpar Filtros" não corresponde ao comportamento esperado

## Resumo

O botão "Limpar Filtros" permanece visualmente ativo sem refletir corretamente o estado dos filtros aplicados.

## Caso de Teste Relacionado

SEA-CT-031 — Validar presença dos componentes previstos no protótipo

## Passos para Reproduzir

1. Aplicar filtros na tela de funcionários.
2. Acionar o botão "Limpar Filtros".
3. Observar o estado visual dos elementos relacionados.

## Resultado Atual

O estado visual apresentado não corresponde ao comportamento esperado dos filtros.

## Resultado Esperado

A interface deve refletir corretamente o estado dos filtros após sua limpeza.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-018](../evidencias/SEA-BUG-018.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Ajustar a lógica de estados visuais dos filtros para que a interface reflita corretamente a condição atual dos filtros após sua limpeza.

---

# SEA-BUG-019 — Botão "Adicionar EPI" não possui indicação visual adequada de interatividade

## Resumo

O botão "Adicionar EPI" não apresenta o contorno visual previsto no protótipo, dificultando sua identificação como elemento clicável.

## Caso de Teste Relacionado

SEA-CT-031 — Validar presença dos componentes previstos no protótipo

## Passos para Reproduzir

1. Acessar a tela de cadastro.
2. Localizar o botão "Adicionar EPI".
3. Comparar sua aparência com o protótipo.

## Resultado Atual

O botão não apresenta o contorno visual esperado.

## Resultado Esperado

O botão deve possuir o mesmo estilo visual definido no protótipo.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-019](../evidencias/SEA-BUG-019.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Aplicar os estilos visuais previstos para elementos interativos, incluindo borda, cor e comportamento visual do botão "Adicionar EPI", reforçando sua identificabilidade como ação clicável.

---

# SEA-BUG-020 — Ícones de expansão dos campos de seleção divergem do protótipo

## Resumo

As setas dos campos de seleção (dropdowns) apresentam espessura e aparência visual diferentes das definidas no protótipo.

## Caso de Teste Relacionado

SEA-CT-031 — Validar presença dos componentes previstos no protótipo

## Passos para Reproduzir

1. Acessar a tela de cadastro.
2. Comparar os campos de seleção com o protótipo.

## Resultado Atual

As setas dos dropdowns possuem aparência diferente da especificada.

## Resultado Esperado

Os ícones devem seguir o padrão visual definido no protótipo.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-020](../evidencias/SEA-BUG-020.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Atualizar os ícones dos componentes de seleção para utilizar o mesmo padrão visual definido no protótipo, incluindo espessura, tamanho e estilo gráfico.

---

# SEA-BUG-021 — Cor principal da interface diverge da especificada no protótipo

## Resumo

A cor azul utilizada nos elementos da interface é diferente da definida no protótipo, comprometendo a aderência visual da aplicação ao design especificado.

## Caso de Teste Relacionado

SEA-CT-032 — Validar cores utilizadas na interface

## Passos para Reproduzir

1. Acessar a aplicação.
2. Identificar os elementos que utilizam a cor principal da interface.
3. Comparar a cor utilizada no sistema com a cor definida no protótipo.

## Resultado Atual

O sistema utiliza a cor hexadecimal **#4FA1C1**.

## Resultado Esperado

O sistema deve utilizar a cor hexadecimal **#649FBF**, conforme especificado no protótipo.

## Severidade

Baixa

## Prioridade

Média

## Evidência

![SEA-BUG-021](../evidencias/SEA-BUG-021.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Padronizar a paleta de cores da aplicação utilizando os valores definidos no protótipo, centralizando as cores em variáveis ou tokens de design para garantir consistência visual.

---

# SEA-BUG-022 — Botões da tela de cadastro utilizam cor de texto incorreta

## Resumo

Os botões da tela de cadastro exibem o texto na cor preta, divergindo da identidade visual definida no protótipo.

## Caso de Teste Relacionado

SEA-CT-032 — Validar cores utilizadas na interface

## Passos para Reproduzir

1. Acessar a tela de cadastro de funcionário.
2. Localizar os botões disponíveis na interface.
3. Comparar a cor do texto dos botões com o protótipo.

## Resultado Atual

Os textos dos botões são exibidos na cor preta.

## Resultado Esperado

Os textos dos botões devem ser exibidos na cor azul definida pelo protótipo.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-022](../evidencias/SEA-BUG-022.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Atualizar os estilos dos botões da tela de cadastro para utilizar a cor de texto especificada no protótipo e manter consistência com a identidade visual da aplicação.

---

# SEA-BUG-023 — Estado visual dos menus laterais não segue o comportamento definido no protótipo

## Resumo

Os botões de navegação lateral não apresentam diferenciação visual adequada entre item selecionado e itens não selecionados.

## Caso de Teste Relacionado

SEA-CT-032 — Validar cores utilizadas na interface

## Passos para Reproduzir

1. Acessar a aplicação.
2. Observar os itens do menu lateral.
3. Comparar o comportamento visual dos itens com o protótipo.

## Resultado Atual

Os itens do menu lateral não seguem o padrão visual definido para estados selecionado e não selecionado.

## Resultado Esperado

Apenas o item correspondente à página atual deve possuir fundo branco, enquanto os demais devem permanecer com fundo transparente, conforme o protótipo.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-023](../evidencias/SEA-BUG-023.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Implementar diferenciação visual clara entre itens selecionados e não selecionados no menu lateral, seguindo exatamente os estados definidos no protótipo.

--- 

# SEA-BUG-024 — Texto da listagem de funcionários apresenta inconsistência de escrita

## Resumo

A descrição exibida na listagem de funcionários apresenta inconsistências de escrita e formatação, divergindo do padrão definido no protótipo.

## Caso de Teste Relacionado

SEA-CT-033 — Validar fonte utilizada na interface

## Passos para Reproduzir

1. Acessar a tela de funcionários.
2. Localizar um funcionário cadastrado na listagem.
3. Observar a descrição exibida abaixo do nome do funcionário.
4. Comparar o texto com o padrão definido no protótipo.

## Resultado Atual

A descrição é exibida em formato inconsistente, contendo textos como "CPF, Atividad 02 Cargo 02".

## Resultado Esperado

A descrição deve seguir o padrão de escrita definido no protótipo, apresentando os dados de forma clara, consistente e sem erros de formatação ou nomenclatura.

## Severidade

Baixa

## Prioridade

Baixa

## Evidência

![SEA-BUG-024](../evidencias/SEA-BUG-024.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Revisar a composição e formatação do texto exibido na listagem de funcionários, garantindo nomenclaturas corretas, organização das informações e aderência ao padrão visual definido.

---

# SEA-BUG-025 — Fonte da aplicação diverge da especificada no protótipo

## Resumo

A tipografia utilizada na aplicação é diferente da definida no protótipo, causando divergência visual em relação ao design especificado.

## Caso de Teste Relacionado

SEA-CT-033 — Validar fonte utilizada na interface

## Passos para Reproduzir

1. Acessar a aplicação.
2. Comparar os textos exibidos na interface com o protótipo fornecido.
3. Observar a tipografia utilizada nos títulos, campos, botões e demais elementos textuais.

## Resultado Atual

A aplicação utiliza uma fonte diferente da especificada no protótipo.

## Resultado Esperado

Toda a interface deve utilizar a mesma tipografia definida no protótipo, garantindo consistência visual e aderência ao design.

## Severidade

Baixa

## Prioridade

Média

## Evidência

![SEA-BUG-025](../evidencias/SEA-BUG-025.png)

## Ambiente

* Navegador: Chrome
* Sistema Operacional: Windows 11

## Sugestão de Correção

Atualizar a tipografia da aplicação para utilizar a mesma fonte especificada no protótipo e garantir consistência visual em todos os componentes da interface.

---
