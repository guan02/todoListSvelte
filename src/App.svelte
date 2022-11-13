<script>
import TodoCounter from "./lib/TodoCounter.svelte"
import TodoView from "./lib/TodoView.svelte"
import AddTodoForm from "./lib/AddTodoForm.svelte"
import RemoveTodoForm from "./lib/RemoveTodoForm.svelte"
import {tododb} from "./lib/store"  

  
</script>

<main>
  <h1> Todo List</h1>
<TodoCounter />
  <AddTodoForm />
  <div>
    <!--ciclo di list -->
    {#each $tododb as todo, index}
    <TodoView todo={todo} pos={index} />
    {/each}
  </div>
  <RemoveTodoForm />
  
</main>

<style>
  
</style>
