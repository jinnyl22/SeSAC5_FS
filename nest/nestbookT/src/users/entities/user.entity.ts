import {
  Column,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToOne,
  ManyToMany,
  OneToMany,
  OneToOne,
} from 'typeorm';
import { Profile } from './profile.entity';
// import { CreateUserDto } from '../dto/create-user.dto';
import { SuperEntity } from '../../db/super.entity';
import { Addr } from './addr.entity';
import { Auth } from './auth.entity';

@Entity({ name: 'User' })
// 기본 엔티티는 대문자로 생성된다
// export class User{
export class User extends SuperEntity<User> {
  //   @PrimaryGeneratedColumn()
  //   id: number;

  @Column({ length: 30 })
  name: string;

  @Column({ unique: true })
  email: string;

  // select: false 하면 응답 받을 때 passwd는 빼고 받을 수 있음!
  @Column({ length: 256, select: false })
  passwd: string;

  @OneToOne(() => Profile, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn()
  //{name: 이름} => 하면 조인 될 때 기본 이름이 아닌 해당 이름으로 설정됨
  //아닐 경우 원래 컬럼+ID로 이름이 설정
  profile: Profile;

  // where 조건으로 걸어서 user의 id로 Addr의 정보를 가져올 수 있어서 따로 @Column()을 안써주어도 됨
  @OneToMany(() => Addr, (addr) => addr.user, { cascade: true })
  addrs: Addr[];

  @ManyToMany(() => Auth, { cascade: true })
  // 매핑 테이블 이름을 UserAuth로 해줄게 라는 뜻
  @JoinTable({ name: 'UserAuth' }) // 매핑 테이블 생성해줌
  auths: Auth[];

  //   // userService의 create 에서 User 인스턴스를 생성할 때 CreateUserDto를 넣어주면
  //   // 아래의 생성자를 타고 들어와서 할당됨
  //   constructor(dto: CreateUserDto) {
  //     Object.assign(this, dto);
  //   }
}
