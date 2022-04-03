<template>
  <div class="table">
    <div class="header table-cascade">
      <div v-for="field in fieldsInvoices" :key="field.key + '-header'">
        {{ field.title }}
      </div>
    </div>
    <div class="record table-cascade" v-for="invoice in invoices" :key="invoice.id + '-record'">
      <div v-for="field in fieldsInvoices" :key="invoice.id + field.key + '-field'">
        <template v-if="field.key === 'checked'">
          <label for="selected">
            <input type="checkbox"
                   id="selected"
                   @change="setSelected($event, invoice.id)"
                   :checked="invoice.checked" />
          </label>
        </template>
        <template v-if="field.key === 'productName'">
          {{ invoice.productName }}
        </template>
        <template v-if="field.key === 'price'">
          ${{ invoice.price }}
        </template>
        <template v-if="field.key === 'quantity'">
          {{ invoice.quantity }}
        </template>
        <template v-if="field.key === 'sum'">
          ${{ invoice.sum }}
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';

export default Vue.extend({
  name: 'TheTableInvoices',
  computed: {
    ...mapState(['invoices']),
    fieldsInvoices() {
      return [
        {
          title: 'Checked',
          key: 'checked',
        },
        {
          title: 'Product Name',
          key: 'productName',
        },
        {
          title: 'Price',
          key: 'price',
        },
        {
          title: 'Qta',
          key: 'quantity',
        },
        {
          title: 'Sum',
          key: 'sum',
        },
      ];
    },
  },
  methods: {
    setSelected(element:{ target: HTMLInputElement }, id:number):void {
      this.$invoiceService.selectedInvoice(id, element.target.checked);
    },
  },
});
</script>

<style scoped lang="scss">
$border-color: #00000012;

.table {
  border: 1px solid $border-color;

  & > * {
    & > * {
      padding: 10px;
    }

    & > *:not(:last-child) {
      border-right: 1px solid $border-color;
    }
  }

  .record {
    border-top: 1px solid $border-color;
    transition: .2s;

    &:hover {
      background: #00000012;
    }
  }

  .header {
    font-weight: bold;
  }
}
</style>
