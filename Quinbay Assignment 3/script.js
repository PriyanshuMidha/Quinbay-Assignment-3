document.addEventListener("DOMContentLoaded", () => {
  const todoText = document.getElementById("todo-text");
  const addTodoButton = document.getElementById("add-todo");
  const todoList = document.getElementById("todo-list");
  const completedCountSpan = document.getElementById("completed-count");
  const totalCountSpan = document.getElementById("total-count");

  let completedCount = 0;
  let totalCount = 0;

  const updateCounts = () => {
    completedCountSpan.textContent = completedCount;
    totalCountSpan.textContent = totalCount;
  };

  const addTodo = () => {
    const todoValue = todoText.value.trim();
    if (todoValue === "") {
      alert("Please enter a valid todo item!");
      return;
    }

    // Create a new todo card
    const todoCard = document.createElement("div");
    todoCard.classList.add("todo-card");

    const todoTextSpan = document.createElement("span");
    todoTextSpan.textContent = todoValue;

    const todoActions = document.createElement("div");
    todoActions.classList.add("todo-actions");

    const completeButton = document.createElement("button");
    completeButton.classList.add("complete-btn");
    completeButton.textContent = "✔";

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("delete-btn");
    deleteButton.textContent = "✖";

    // Event listeners for complete and delete actions
    completeButton.addEventListener("click", () => {
      if (!todoCard.classList.contains("completed")) {
        todoCard.classList.add("completed");
        completedCount++;
      } else {
        todoCard.classList.remove("completed");
        completedCount--;
      }
      updateCounts();
    });

    deleteButton.addEventListener("click", () => {
      if (todoCard.classList.contains("completed")) {
        completedCount--;
      }
      totalCount--;
      todoList.removeChild(todoCard);
      updateCounts();
    });

    todoActions.appendChild(completeButton);
    todoActions.appendChild(deleteButton);
    todoCard.appendChild(todoTextSpan);
    todoCard.appendChild(todoActions);
    todoList.appendChild(todoCard);

    // Update counters
    totalCount++;
    updateCounts();

    // Clear input field
    todoText.value = "";
  };

  addTodoButton.addEventListener("click", addTodo);

  todoText.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
      addTodo();
    }
  });
});
