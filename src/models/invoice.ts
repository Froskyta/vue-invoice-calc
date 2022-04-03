export interface IInvoice {
  id: number
  productName: string
  price: number
  quantity: number
}

export type IInvoiceCreate = Omit<IInvoice, 'id'>

export interface IInvoicePreview extends IInvoice {
  checked: boolean
  sum: number
}
