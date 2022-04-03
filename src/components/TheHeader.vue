<template>
  <header>
    <h1>Vue Invoice Calc</h1>
    <form @submit.prevent="createRecord">
      <div class="table-cascade">
        <div>
          <label for="allSelect">
            <input type="checkbox"
                   id="allSelect"
                   v-model="allSelectModel"
            />
          </label>
        </div>
        <div>
          <label for="productName">
            <input type="text"
                   id="productName"
                   placeholder="Product Name"
                   v-model="modelRecord.productName"
                   required
            />
          </label>
        </div>
        <div>
          <label for="price">
            <input type="number"
                   id="price"
                   placeholder="Price"
                   v-model="modelRecord.price"
                   min="0"
                   required
            />
          </label>
        </div>
        <div>
          <label for="qta">
            <input type="number"
                   id="qta"
                   placeholder="Quality"
                   v-model="modelRecord.quantity"
                   min="0"
                   required
            />
          </label>
        </div>
        <div>
          <button type="submit">
            Add
          </button>
        </div>
      </div>
    </form>
  </header>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { IInvoiceCreate } from '../models/invoice';

export default Vue.extend({
  name: 'TheHeader',
  data() {
    return {
      modelRecord: {
        productName: '',
        price: '',
        quantity: '',
      } as IInvoiceCreate,
    };
  },
  computed: {
    ...mapState(['invoices']),
    allSelectModel: {
      get() {
        return !(this.invoices.some((invoice) => !invoice.checked));
      },
      set(value) {
        this.invoices.forEach((invoice) => {
          this.$invoiceService.selectedInvoice(invoice.id, value);
        });
      },
    },
  },
  methods: {
    createRecord() {
      const quantity = Number(this.modelRecord.quantity);
      const price = Number(this.modelRecord.price);
      this.$invoiceService.addInvoice({
        ...this.modelRecord,
        quantity,
        price,
      });
    },
  },
});
</script>

<style scoped lang="scss">
header {
  margin-bottom: 20px;

  input {
    width: -webkit-fill-available;
  }

  .table-cascade {
    & > * {
      padding: 10px;
    }
  }
}
</style>
