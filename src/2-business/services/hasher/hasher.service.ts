export interface IHasherService {
  /**
   * Aqui transforma uma string em hash
   * @param s
   */
  create(s: string): Promise<string>;
  /**
   * Aqui compara uma string com um hash
   * @param value
   * @param hashed
   */
  compare(value: string, hashed: string): Promise<boolean>;
}
