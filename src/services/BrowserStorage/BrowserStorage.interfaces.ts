export interface IBrowserStorageService {
  getData<dataModel>(name: string): dataModel | null
  setData<dataModel>(name: string, data: dataModel): void
}
