<template>
  <div id="app">
    Clicked: {{$store.state.count}} times.
    <br>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: mapActions(["increment", "decrement"]),
};
</script>
<style></style>