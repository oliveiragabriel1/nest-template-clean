import { join } from 'path';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: process.env.TYPEORM_CONNECTION as 'postgres' | 'mariadb' | 'mysql',
  host: process.env.TYPEORM_HOST,
  port: parseInt(process.env.TYPEORM_PORT || '5432'),
  username: process.env.TYPEORM_USERNAME,
  password: process.env.TYPEORM_PASSWORD,
  database: process.env.TYPEORM_DATABASE,
  migrationsTableName: 'seeds',
  migrations: [join(__dirname, '4-framework/typeorm/seeds/*.{ts,js}')],
  entities: [join(__dirname, '4-framework/typeorm/models/*.{ts,js}')],
  synchronize: false,
});

export default AppDataSource;
