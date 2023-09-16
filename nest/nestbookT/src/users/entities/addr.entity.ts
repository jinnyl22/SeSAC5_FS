import { Column, Entity, ManyToOne } from 'typeorm';
import { SuperEntity } from './super.entity';
import { User } from './user.entity';

@Entity({ name: 'Addr' })
export class Addr extends SuperEntity<Addr> {
  // 이부분도 SuperEntity에 id를 다 만들어놔서 안만들어도됨
  //   @PrimaryGeneratedColumn()
  //   id: number;

  @Column({ length: 64 })
  street: string;

  @Column({ length: 30 })
  detail: string;

  // User 테이블의 addr이랑 관계
  // 주소가 여러개일 수 있기 때문에 다(주소) : 일(유저)
  @ManyToOne(() => User, (user) => user.addrs)
  user: User;
}
