<template>
  <div id="app">
    Clicked: {{$store.state.count}} times.it is {{evenOrOdd}}
    <br>
    <button @click="increment">+</button>
    <!-- <button @click="asyncDecrement">async+</button> -->
    <button @click="decrement">-</button>
    <!-- <button @click="asyncDecrement">async-</button> -->
  </div>
</template>
<script>
import { mapActions,mapGetters } from "vuex";
export default {
  computed: mapGetters([
    'evenOrOdd'
  ]),
  methods: mapActions(["increment", "decrement"]),
};
</script>
<style></style>