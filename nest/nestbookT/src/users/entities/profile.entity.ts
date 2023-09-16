import { Column, Entity, OneToOne } from 'typeorm';
import { SuperEntity } from '../../db/super.entity';
import { User } from './user.entity';

@Entity({ name: 'Profile' })
export class Profile extends SuperEntity<Profile> {
  //   @PrimaryGeneratedColumn()
  //   id: number;

  // 프로필 사진은 null 허용
  @Column({ nullable: true })
  photo: string;

  // 회원 등급 나눔
  @Column()
  role: number;

  // JS로 컴파일 되면 User는 없어지기 때문에 테이블에 미리 User를 등록해주는 것임!
  @OneToOne(() => User, { onDelete: 'CASCADE' })
  users: User;

  // super.entity파일에서 상속 받아서 사용하게 만들 것임
  //   constructor(profile: Partial<Profile>) {
  //     Object.assign(this, profile);
  //   }
}
