import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { DataSource } from 'typeorm';
import { Tag } from './posts/entities/tag.entity';

// 맨위가 우선
config({ path: '.local.env' });
// 그 다음
config({ path: '.env' });
const configService = new ConfigService();

export default new DataSource({
  type: 'mysql',
  host: configService.getOrThrow('DB_HOST'),
  port: configService.get('DB_PORT') || 3306,
  database: configService.get('DB_NAME') || 'mydb',
  username: configService.getOrThrow('DB_USER'),
  password: configService.getOrThrow('DB_PASSWD'),
  synchronize: false,
  migrations: ['migrations/**'],
  entities: [Tag], // ['src/*/entities/*.entity.ts']
});
