import { Column, Entity, JoinColumn, OneToMany, OneToOne } from 'typeorm';
import { Profile } from './profile.entity';
// import { CreateUserDto } from '../dto/create-user.dto';
import { SuperEntity } from './super.entity';
import { Addr } from './addr.entity';

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

  @Column({ length: 256 })
  passwd: string;

  @OneToOne(() => Profile, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn()
  //{name: 이름} => 하면 조인 될 때 기본 이름이 아닌 해당 이름으로 설정됨
  //아닐 경우 원래 컬럼+ID로 이름이 설정
  profile: Profile;

  // 컬럼이 왜.. 없어도된다고?
  @OneToMany(() => Addr, (addr) => addr.user, { cascade: true })
  addrs: Addr[];

  //   // userService의 create 에서 User 인스턴스를 생성할 때 CreateUserDto를 넣어주면
  //   // 아래의 생성자를 타고 들어와서 할당됨
  //   constructor(dto: CreateUserDto) {
  //     Object.assign(this, dto);
  //   }
}
