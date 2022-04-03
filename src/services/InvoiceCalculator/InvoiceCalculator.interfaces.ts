import { IInvoiceCreate } from '@/models/invoice';

export interface IInvoiceCalculatorService {
  addInvoice(model: IInvoiceCreate): void | Error
  deleteInvoice(id: number): void | Error
  deleteInvoices(): void | Error
  selectedInvoice(id: number, status?: boolean): void | Error
  getInvoicesFromBrowserStorage(): void | Error
}
