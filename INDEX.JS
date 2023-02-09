<script>
  const form = document.querySelector("form");
  const tarefaInput = document.querySelector("#tarefa-input");
  const listaTarefas = document.querySelector("#lista-tarefas");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const tarefa = tarefaInput.value;
    tarefaInput.value = "";

    const tarefaLi = document.createElement("li");
    tarefaLi.textContent = tarefa;
    listaTarefas.appendChild(tarefaLi);
  });
</script>