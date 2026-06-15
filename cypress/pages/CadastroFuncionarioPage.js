class CadastroFuncionarioPage {

    acessarCadastro() {
        cy.contains('button', '+ Adicionar Funcionário').click();
    }

    ativarFuncionario() {
        cy.get('button[role="switch"]').click();
    }

    preencherNome(nome) {
        cy.get('input[name="name"]').type(nome);
    }

    preencherCpf(cpf) {
        cy.get('input[name="cpf"]').type(cpf);
    }

    preencherRg(rg) {
        cy.get('input[name="rg"]').type(rg);
    }

    preencherDataNascimento(dataNascimento) {
        cy.get('input[name="birthDay"]')
            .invoke('removeAttr')
            .type(dataNascimento);
    }

    selecionarCargo() {
        cy.get('span.ant-select-selection-item[title="Cargo 01"]').click();
        cy.contains('.ant-select-item-option-content', 'Cargo 02').click();
    }

    selecionarAtividade() {
        cy.get('.ant-select-selection-item[title="Ativid 01"]').click();
        cy.contains('.ant-select-item-option-content', 'Ativid 02').click();
    }

    selecionarEpi() {
        cy.get('span.ant-select-selection-item[title="Capacete de segurança"]').click();
        cy.contains('.ant-select-item-option-content', 'Óculos de proteção').click();
    }

    preencherCA(ca) {
        cy.get('input[name="caNumber"]').type(ca);
    }

    anexarAtestado() {
        cy.get('input[type="file"]')
            .attachFile('atestado-medico.jpg');
    }

    salvar() {
        cy.get('form').submit();
    }

    clicarSalvar() {
    cy.contains('button', 'Salvar').click();
}

validarCampoObrigatorio(campo) {
    cy.get(campo)
        .then(($input) => {
            expect($input[0].validationMessage)
                .to.eq('Preencha este campo.');
        });
}
}

export default new CadastroFuncionarioPage();