import { SuperEntity } from 'src/db/super.entity';
import { Column } from 'typeorm';

export class Auth extends SuperEntity<Auth> {
  @Column()
  authname: string;
}
