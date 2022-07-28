import { CacheErrors } from '@/2-business/errors/cache.erros';
import { ICacheService } from '@/2-business/services/cache/cache.service';
import RedisClient from '@/4-framework/factory/redis-cliente.factory';
import { IError } from '@/shared/error';

export class CacheExampleService implements ICacheService<{ message: string }> {
  /**
   * Aqui ler os valores de uma ou mais chaves
   * @param {string[]} key
   */
  public async readValues(
    key: string[],
  ): Promise<IError | { message: string }[]> {
    try {
      const instance = await RedisClient.getInstance();
      return await Promise.all(
        key.map(async (value) => {
          return JSON.parse((await instance.get(value)) as unknown as string);
        }),
      );
    } catch (error) {
      return this.captureError(error);
    }
  }
  /**
   * Aqui traz todas as chaves
   */
  public async getKeys(): Promise<string[] | IError> {
    try {
      const instance = await RedisClient.getInstance();
      const keys = await instance.keys('*');
      return keys;
    } catch (error) {
      return this.captureError(error);
    }
  }
  /**
   * Aqui adiciona um valor
   * @param key -isso é uma chave
   * @param value -isso é valor armazendo
   * @param expire -em segundos o tempo que expira
   */
  public async addValue(
    key: string,
    value: { message: string },
    expire?: number | undefined,
  ): Promise<void | IError> {
    try {
      const instance = await RedisClient.getInstance();
      await instance.set(key, JSON.stringify(value));
      if (expire) {
        await instance.expire(key, expire);
      }
    } catch (error) {
      return await this.captureError(error);
    }
  }
  /**
   * Aqui deleta valores através de uma ou mais chaves
   * @param {string[]} key -aqui são as chaves
   */
  public async deleteValues(key: string[]): Promise<void | IError> {
    try {
      const instance = await RedisClient.getInstance();
      if (key.length > 1) await instance.del(key);
    } catch (error) {
      return await this.captureError(error);
    }
  }
  /**
   * Aqui se acontecer o problema de ficar desconectado tenta reconectar
   */
  private async retryConnect() {
    try {
      const instance = await RedisClient.getInstance();
      instance.connect();
    } catch (error) {}
  }
  /**
   * Aqui captura os erros que aconterem e faz alguns tratamentos
   * @param error
   * @returns {IError}
   */
  private async captureError(error: any) {
    if (error?.message === 'The client is closed') {
      await this.retryConnect();
      return CacheErrors.notConnected();
    }
    return CacheErrors.internalServerError();
  }
}
