import CadastroFuncionarioPage from '../pages/CadastroFuncionarioPage';

describe('SEA-CT-001 - Cadastro de Funcionário', () => {

    beforeEach(() => {

        cy.viewport(1920, 1080);

        cy.visit('https://analista-teste.seatecnologia.com.br/');

    });

    it('Deve cadastrar um funcionário com dados válidos', () => {

        cy.fixture('funcionario').then((funcionario) => {

            CadastroFuncionarioPage.acessarCadastro();

            CadastroFuncionarioPage.ativarFuncionario();

            CadastroFuncionarioPage.preencherNome(
                funcionario.nome
            );

            CadastroFuncionarioPage.preencherCpf(
                funcionario.cpf
            );

            CadastroFuncionarioPage.preencherRg(
                funcionario.rg
            );

            CadastroFuncionarioPage.preencherDataNascimento(
                funcionario.dataNascimento
            );

            CadastroFuncionarioPage.selecionarCargo();

            CadastroFuncionarioPage.selecionarAtividade();

            CadastroFuncionarioPage.selecionarEpi();

            CadastroFuncionarioPage.preencherCA(
                funcionario.ca
            );

            CadastroFuncionarioPage.anexarAtestado();

            CadastroFuncionarioPage.salvar();

            cy.reload();

        });

    });

});
