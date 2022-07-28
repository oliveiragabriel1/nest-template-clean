import { createClient, RedisClientType } from 'redis';

class RedisClient {
  private static clientRedis: RedisClientType;
  /**
   * Aqui usa o padrão Singleton para obter uma instância do client Redis
   * @returns {RedisClientType}
   */
  public static async getInstance() {
    if (!this.clientRedis) {
      const url = process.env.URL_REDIS;
      const port = process.env.PORT_REDIS;
      this.clientRedis = createClient({
        url: `redis://${url}:${port}`,
      });
      await this.clientRedis.connect();
    }
    return this.clientRedis;
  }
}

export default RedisClient;
