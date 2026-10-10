(function () {
'use strict';
/* Funções simples para a atividade: filtro de projetos e máscaras do formulário. */

// Atualiza automaticamente o ano nos rodapés.
document.querySelectorAll('[data-ano]').forEach(function (elemento) {
  elemento.textContent = new Date().getFullYear();
});

// O filtro funciona apenas na página de projetos.
const filtro = document.querySelector('#filtro-projetos');
if (filtro) {
  const cartoes = document.querySelectorAll('[data-categoria]');
  const resultado = document.querySelector('#resultado-filtro');

  filtro.addEventListener('change', function () {
    let visiveis = 0;
    cartoes.forEach(function (cartao) {
      const exibir = filtro.value === 'todos' || cartao.dataset.categoria === filtro.value;
      cartao.hidden = !exibir;
      if (exibir) visiveis++;
    });
    resultado.textContent = visiveis === 1 ? '1 projeto encontrado.' : visiveis + ' projetos encontrados.';
  });
}

// As máscaras removem letras e pontuação digitadas, exibindo apenas o formato.
function somenteNumeros(valor, limite) {
  return valor.replace(/\D/g, '').slice(0, limite);
}

function mascaraCPF(valor) {
  return somenteNumeros(valor, 11)
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})$/, '$1-$2');
}

function mascaraTelefone(valor) {
  const numeros = somenteNumeros(valor, 11);
  if (numeros.length <= 2) return numeros;
  const ddd = numeros.slice(0, 2);
  const restante = numeros.slice(2);
  const quantidadeInicial = numeros.length > 10 ? 5 : 4;
  const inicio = restante.slice(0, quantidadeInicial);
  const final = restante.slice(quantidadeInicial);
  return '(' + ddd + ') ' + inicio + (final ? '-' + final : '');
}

function mascaraCEP(valor) {
  return somenteNumeros(valor, 8).replace(/(\d{5})(\d)/, '$1-$2');
}

const cpf = document.querySelector('#cpf');
const telefone = document.querySelector('#telefone');
const cep = document.querySelector('#cep');

if (cpf) cpf.addEventListener('input', function () { cpf.value = mascaraCPF(cpf.value); });
if (telefone) telefone.addEventListener('input', function () { telefone.value = mascaraTelefone(telefone.value); });
if (cep) cep.addEventListener('input', function () { cep.value = mascaraCEP(cep.value); });

const formulario = document.querySelector('#formulario-cadastro');
if (formulario) {
  // Impede que uma data futura seja escolhida como data de nascimento.
  const nascimento = document.querySelector('#nascimento');
  const hoje = new Date();
  const ano = hoje.getFullYear();
  const mes = String(hoje.getMonth() + 1).padStart(2, '0');
  const dia = String(hoje.getDate()).padStart(2, '0');
  nascimento.max = ano + '-' + mes + '-' + dia;

  // Links da página de projetos podem indicar o tipo de participação.
  const interesse = new URLSearchParams(window.location.search).get('interesse');
  if (interesse === 'voluntariado' || interesse === 'doacao') {
    document.querySelector('#interesse').value = interesse;
  }

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault(); // Demonstração: nenhum dado vai para um servidor.
    if (!formulario.checkValidity()) {
      formulario.reportValidity();
      return;
    }

    const primeiroNome = document.querySelector('#nome').value.trim().split(/\s+/)[0];
    const mensagem = document.querySelector('#resposta-formulario');
    mensagem.textContent = 'Obrigado, ' + primeiroNome + '! Formulário de exemplo preenchido com sucesso. Seus dados não foram enviados nem armazenados.';
    mensagem.hidden = false;
    mensagem.focus();
  });
}

})();
