import Vue from 'vue';
import Vuex from 'vuex';
import { IInvoicePreview } from '@/models/invoice';

Vue.use(Vuex);

const stateModel = () => ({
  invoices: [] as IInvoicePreview[],
});

export type StateT = ReturnType<typeof stateModel>

export default new Vuex.Store({
  state: stateModel(),
  getters: {
  },
  mutations: {
    addInvoice(state: StateT, model: IInvoicePreview): void {
      state.invoices.push(model);
    },
    deleteInvoiceByIndex(state: StateT, index: number): void {
      state.invoices.splice(index, 1);
    },
    setInvoices(state: StateT, invoices: IInvoicePreview[]): void {
      Vue.set(state, 'invoices', invoices);
    },
    setStatusSelected(state: StateT, data: { index: number, status?: boolean }): void {
      state.invoices[data.index].checked = data.status !== undefined
        ? data.status
        : !state.invoices[data.index].checked;
    },
  },
  actions: {
  },
  modules: {
  },
});
