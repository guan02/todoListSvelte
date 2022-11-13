<script>
  import {tododb} from "./store"
  let nuovoTodo
  function addTodo() {
    //tododb.set(value) non conviene
    //aggiorna automatico
    tododb.update(oldValue => {
      oldValue.push({
        content:nuovoTodo,
        done: false
      })
      return oldValue
    })
  }
  
</script>
<!-- bind serve associare un variabile -->
<input bind:value={nuovoTodo} type="text" placeholder="inserisci la cosa da fare " class="input input-bordered w-full max-w-xs"/>
<button on:click={addTodo} class="btn btn-info"> Add</button> 
