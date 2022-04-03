import { IGeneratorService } from '@/services/Generator/Generator.interfaces';

export default class GeneratorService implements IGeneratorService {
  /**
   * Generation of the next ID with exclusion of the ID from sent list
   * @param listNumbers
   */
  getIdFromExclusion(listNumbers: number[]): number {
    // Stop if there is empty list
    if (!listNumbers.length) return 1;

    // Get max number
    const maxId = Math.max(...listNumbers);

    // Return next number
    return maxId + 1;
  }
}
