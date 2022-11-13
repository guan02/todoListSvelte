import {writable} from "svelte/store"

export const tododb = writable([{

  content: "ciao a tutti",
  done: false
}])

export const modalOpen = writable(false)