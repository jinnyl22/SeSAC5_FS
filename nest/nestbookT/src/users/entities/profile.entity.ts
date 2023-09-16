import { Column, Entity } from 'typeorm';
import { SuperEntity } from './super.entity';

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

  // super.entity파일에서 상속 받아서 사용하게 만들 것임
  //   constructor(profile: Partial<Profile>) {
  //     Object.assign(this, profile);
  //   }
}
