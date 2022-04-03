import { IBrowserStorageService } from '@/services/BrowserStorage/BrowserStorage.interfaces';

export default class BrowserStorageService implements IBrowserStorageService {
  /**
   * Get data from browser storage
   * @param name
   */
  getData<dataModel>(name: string): dataModel | null {
    // Get data
    const response = localStorage.getItem(name);

    // Stop if there is no data
    if (!response) return null;

    // Parse data
    return JSON.parse(response);
  }

  /**
   * Set data in browser storage
   * @param name
   * @param data
   */
  setData<dataModel>(name: string, data: dataModel): void {
    // Set data
    localStorage.setItem(name, JSON.stringify(data));
  }
}
