import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import { SuperEntity } from '../../db/super.entity';
import { User } from './user.entity';

@Entity({ name: 'Addr' })
export class Addr extends SuperEntity<Addr> {
  // 이부분도 SuperEntity에 id를 다 만들어놔서 안만들어도됨
  //   @PrimaryGeneratedColumn()
  //   id: number;

  @Column()
  street: string;

  @Column({ length: 128 })
  detail: string;

  // User 테이블의 addr이랑 관계
  // 주소가 여러개일 수 있기 때문에 다(주소) : 일(유저)
  @ManyToOne(() => User, (user) => user.addrs, {
    // user가 삭제되면 addr도 같이 삭제
    onDelete: 'CASCADE',
    // user가 업데이트 되면 addr도 같이 업데이트
    onUpdate: 'CASCADE',
    orphanedRowAction: 'soft-delete', // 'delete'
  })
  // Addr 테이블에 컬럼이 하나 더 생긴다
  @JoinColumn() // 여기서 따로 컬럼 이름을 지정해주지 않으면 밑의 엔티티타입에 Id가 붙는다
  user: User; // userId

  @DeleteDateColumn()
  deletedAt: Date;
}
