# Raízes do Amanhã — Projeto acadêmico de Front-End

Site fictício de uma ONG criado para a primeira entrega da disciplina de Desenvolvimento Front-End para Web. **Não é uma ONG real.** Não há doações, pagamento, login, armazenamento ou envio de cadastros.

## Como executar

1. Extraia a pasta do arquivo ZIP.
2. Abra `index.html` no navegador ou abra a pasta no VS Code com a extensão Live Server.
3. Navegue pelos links **Início**, **Projetos** e **Participe**.
4. Em `projetos.html`, teste o filtro por categoria. Em `cadastro.html`, teste a validação e as máscaras de CPF, telefone e CEP.

## Organização de arquivos

- `index.html`: página inicial, apresentação, missão, visão, valores e contato ilustrativo.
- `projetos.html`: projetos sociais, voluntariado e explicação sobre doações.
- `cadastro.html`: formulário HTML5, com rótulos, `fieldset`, campos obrigatórios e validação nativa.
- `css/style.css`: estilos, responsividade e foco visível para navegação por teclado.
- `js/script.js`: máscaras, filtro de projetos e confirmação simulada do formulário.
- `imagens/`: ilustrações locais em WebP, PNG e SVG (logo). Os HTML usam WebP com alternativa em PNG.

## Limites do projeto

- A validação de CPF verifica **apenas o formato**, não os dígitos verificadores nem a existência do documento.
- A confirmação do formulário é uma simulação local no navegador: nenhum dado é enviado a servidor ou salvo no dispositivo pelo código do projeto.
- Não há integração com sistemas de doação. Textos e iniciativas são exemplos fictícios.
- O arquivo HTML inclui descrição, idioma, estrutura semântica e imagens com texto alternativo.
- O layout se adapta a diferentes tamanhos de tela.

## Antes de entregar

1. Validar cada página em https://validator.w3.org/ (`index.html`, `projetos.html`, `cadastro.html`).
2. Enviar **toda a pasta do projeto** ao repositório público do GitHub, mantendo os caminhos relativos dos arquivos.
3. Abrir o link do repositório em uma janela anônima para garantir que está **público**.
4. Se desejar publicar o site, usar GitHub Pages, que fornece conexão HTTPS. Não confundir o link do site com o link público do código exigido para a entrega.
5. Todos os integrantes do grupo devem fazer a entrega no Blackboard, como solicitado pelo professor.

**Observação:** esta primeira entrega prioriza HTML5, elementos semânticos, formulários e imagens. Os recursos de gerenciamento completo de uma ONG, autenticação, banco de dados e pagamentos dependeriam de etapas e infraestrutura posteriores.
