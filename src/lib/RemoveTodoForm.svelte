<script>
  import {tododb, modalOpen} from "./store"
  import Modal from "./Modal.svelte"

  let nuovoNumber
  
  function removeTodo() {
    
    if(nuovoNumber>=0 && nuovoNumber < $tododb.length){
      tododb.update(oldValue => {
        // sostituisce( o cancellazione) elemento di list
        oldValue.splice(nuovoNumber,1)
        return oldValue
      })
    }
    else {
      modalOpen.set(true);
    }
  }
</script>
{#if $modalOpen}
  <Modal title="Errore" content="Input invalido"></Modal>}
{/if}
<input bind:value={nuovoNumber} type="number" placeholder="inserisci il numero  da cancellare " class="input input-bordered w-full max-w-xs"/>
<button on:click={removeTodo} class="btn btn-outline"> Remove</button>