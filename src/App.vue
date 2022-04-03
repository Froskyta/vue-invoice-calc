<template>
  <div id="app">
    <TheHeader />
    <TheTableInvoices />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import TheTableInvoices from '@/components/TheTableInvoices.vue';
import TheFooter from '@/components/TheFooter.vue';
import TheHeader from '@/components/TheHeader.vue';

export default Vue.extend({
  name: 'App',
  components: {
    TheTableInvoices,
    TheFooter,
    TheHeader,
  },
  created() {
    this.$invoiceService.getInvoicesFromBrowserStorage();
  },
});
</script>

<style lang="scss">
#app {
  font-family: 'Roboto Slab', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
