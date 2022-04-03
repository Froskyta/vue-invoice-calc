// Services
import InvoiceService from '@/services/InvoiceCalculator';
import GeneratorService from '@/services/Generator';
import BrowserStorageService from '@/services/BrowserStorage';

// Interface Services
import { IInvoiceCalculatorService } from '@/services/InvoiceCalculator/InvoiceCalculator.interfaces';
import { IGeneratorService } from '@/services/Generator/Generator.interfaces';
import { IBrowserStorageService } from '@/services/BrowserStorage/BrowserStorage.interfaces';

import VueApp from 'vue';
import App from './App.vue';
import store from './store';

// Styles
import '@/assets/styles/main.scss';

declare module 'vue/types/vue' {
  interface Vue {
    $invoiceService: IInvoiceCalculatorService
    $generatorService: IGeneratorService
    $browserStorage: IBrowserStorageService
  }
}

VueApp.config.productionTip = false;
VueApp.prototype.$invoiceService = new InvoiceService(store);
VueApp.prototype.$generatorService = new GeneratorService();
VueApp.prototype.$browserStorage = new BrowserStorageService();

new VueApp({
  store,
  render: (h) => h(App),
}).$mount('#app');
