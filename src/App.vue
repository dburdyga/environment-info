<template>
  <div id="app">
    <div class="view">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from 'vue';

  export default Vue.extend({
    name: 'App'
  });
</script>

<style lang="scss" scoped>
  // For sticky footer
  #app {
    display: flex;
    min-height: 100vh;
    flex-direction: column;
  }

  .view {
    // Sticky footer
    flex: 1;
  }

</style>
