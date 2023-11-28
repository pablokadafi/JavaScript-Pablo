function salvarFilme() {
  var nome = document.getElementById('nome').value;
  var descricao = document.getElementById('descricao').value;
  var data = document.getElementById('data').value;
  var diretor = document.getElementById('diretor').value;
  var categoria = document.getElementById('categoria').value;

  var table = document.getElementById('filmeTable');
  var row = table.insertRow(1); // Insere uma nova linha na tabela

  // Adiciona células à nova linha
  var cell1 = row.insertCell(0);
  var cell2 = row.insertCell(1);
  var cell3 = row.insertCell(2);
  var cell4 = row.insertCell(3);
  var cell5 = row.insertCell(4);

  // Preenche as células com os dados do filme
  cell1.innerHTML = nome;
  cell2.innerHTML = descricao;
  cell3.innerHTML = data;
  cell4.innerHTML = diretor;
  cell5.innerHTML = categoria;

  // Limpa os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('descricao').value = '';
  document.getElementById('data').value = '';
  document.getElementById('diretor').value = '';
  document.getElementById('categoria').value = '';
}
