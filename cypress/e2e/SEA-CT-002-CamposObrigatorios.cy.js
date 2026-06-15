import CadastroFuncionarioPage from '../pages/CadastroFuncionarioPage';

describe('SEA-CT-002 - Campos Obrigatórios', () => {

    beforeEach(() => {
        cy.viewport(1920, 1080);
        cy.visit('https://analista-teste.seatecnologia.com.br/');
    });

    it('Deve validar obrigatoriedade dos campos do cadastro', () => {

        CadastroFuncionarioPage.acessarCadastro();

        // Nome
        CadastroFuncionarioPage.clicarSalvar();
        CadastroFuncionarioPage.validarCampoObrigatorio(
            'input[name="name"]'
        );

        CadastroFuncionarioPage.preencherNome('Lucas Jose');

        // CPF
        CadastroFuncionarioPage.clicarSalvar();
        CadastroFuncionarioPage.validarCampoObrigatorio(
            'input[name="cpf"]'
        );

        CadastroFuncionarioPage.preencherCpf('12345678901');

        // RG
        CadastroFuncionarioPage.clicarSalvar();
        CadastroFuncionarioPage.validarCampoObrigatorio(
            'input[name="rg"]'
        );

        CadastroFuncionarioPage.preencherRg('0123456789');

        // Data de nascimento
        CadastroFuncionarioPage.clicarSalvar();
        CadastroFuncionarioPage.validarCampoObrigatorio(
            'input[name="birthDay"]'
        );

        CadastroFuncionarioPage.preencherDataNascimento(
            '2000-01-01'
        );

        // Número do CA
        CadastroFuncionarioPage.clicarSalvar();
        CadastroFuncionarioPage.validarCampoObrigatorio(
            'input[name="caNumber"]'
        );

        CadastroFuncionarioPage.preencherCA('3535');

    });

});