<template>
  <footer class="table-cascade">
    <div>
      <button @click="$invoiceService.deleteInvoices()">
        Delete
      </button>
    </div>
    <div></div>
    <div></div>
    <div>Total: </div>
    <div>${{ totalSum }}</div>
  </footer>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { IInvoicePreview } from '../models/invoice';

export default Vue.extend({
  name: 'TheFooter',
  computed: {
    ...mapState(['invoices']),
    totalSum() {
      const list = this.invoices.map((invoice: IInvoicePreview) => invoice.sum);
      if (!list.length) return 0;
      return list.reduce((a:number, b:number) => a + b);
    },
  },
});
</script>

<style scoped lang="scss">
footer {
  margin-top: 30px;
}
</style>
