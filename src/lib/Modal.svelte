<script>
  import { modalOpen } from "./store"
  
  export let title
  export let content
  
  function closeModal() {
    modalOpen.set(false);
  }
</script>

<div id="backdrop">
</div>
<div id="modal">
  <h1>{title}</h1>
  <p>{content}</p>
  <button class="btn btn-outline btn-info" on:click={closeModal}>Chiudi</button>
</div>


<style>
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  
  #backdrop {
    top: 0;
    left: 0;
    opacity: 0.8;
    color: black;
    position: fixed;
    height: 100%;
    width: 100%;
  }
  
  #modal {
    padding: 10px;
    display: flex;
    flex-flow: column;
    justify-content: center;
    align-items: center;
    top: 20%;
    left: 20%;
    right: 20%;
    opacity: 1;
    position: fixed;
    z-index: 1000;
    margin: auto;
    border-radius: 4px;
    border: 1px solid black;
    background-color: white;
  }
</style>