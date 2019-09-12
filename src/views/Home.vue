<template>
  <div class="home">
    <Environment/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import Environment from '@/components/Environment.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'home',
  components: {
    Environment
  }
});
</script>
