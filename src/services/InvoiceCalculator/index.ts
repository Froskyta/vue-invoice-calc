import { IInvoiceCalculatorService } from '@/services/InvoiceCalculator/InvoiceCalculator.interfaces';
import { IBrowserStorageService } from '@/services/BrowserStorage/BrowserStorage.interfaces';
import { IGeneratorService } from '@/services/Generator/Generator.interfaces';
import { IInvoiceCreate, IInvoicePreview } from '@/models/invoice';
import { Store } from 'vuex';
import { StateT } from '@/store';

import GeneratorService from '@/services/Generator';
import BrowserStorageService from '@/services/BrowserStorage';

export default class InvoiceCalculatorService implements IInvoiceCalculatorService {
  private generator:IGeneratorService = new GeneratorService()

  private browserStorage: IBrowserStorageService = new BrowserStorageService()

  private defaultStatusCheckedInvoice = false

  private defaultNameStateInvoices = 'invoices'

  constructor(
    private $store: Store<StateT>,
  ) {}

  /**
   * Add invoice
   * @param model
   */
  addInvoice(model: IInvoiceCreate): void | Error {
    const { invoices } = this.$store.state;

    // Create invoice record
    const modelForRecord: IInvoicePreview = {
      id: this.generator.getIdFromExclusion(invoices.map(({ id }) => id)),
      checked: this.defaultStatusCheckedInvoice,
      ...model,
    };

    // Set record in store app
    this.$store.commit('addInvoice', modelForRecord);

    // Set record in browser storage
    this.browserStorage.setData<IInvoicePreview[]>(this.defaultNameStateInvoices, invoices);
  }

  /**
   * Delete selected invoice
   * @param id
   */
  deleteInvoice(id: number): void | Error {
    const { invoices } = this.$store.state;

    // Get index record by ID
    const indexInvoice = invoices.findIndex((invoice) => invoice.id === id);

    // Delete record from invoices list
    this.$store.commit('deleteInvoiceByIndex', indexInvoice);
  }

  /**
   * Deleted invoices
   */
  deleteInvoices(): void | Error {
    const { invoices } = this.$store.state;

    // Delete all record by status checked true
    this.$store.commit('setInvoices', invoices.filter((invoice) => invoice.checked));

    // Set invoices list in browser storage
    this.browserStorage.setData<IInvoicePreview[]>(
      this.defaultNameStateInvoices,
      this.$store.state.invoices,
    );
  }
}
