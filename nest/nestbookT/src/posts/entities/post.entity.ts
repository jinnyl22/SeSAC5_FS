import { SuperEntity } from 'src/db/super.entity';
import { Tag } from 'src/posts/entities/tag.entity';
import { User } from 'src/users/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity({ name: 'Post' })
export class Post extends SuperEntity<Post> {
  @Column()
  title: string;

  @Column({ length: 2048, nullable: true, default: '제목이 곧 내용임' })
  content: string;

  @ManyToOne(() => User, { cascade: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'writer' })
  writer: User;

  // eager 엔티티가 로드 될 때마다 자동으로 relation된 엔티티가 함께 로드
  // eager:true인 Eager의 entity도 함께 불러와진다
  // eager설정이 없을 때는 relations를 일일이 설정해주어야 한다
  @ManyToMany(() => Tag, { cascade: true, eager: true })
  @JoinTable({ name: 'PostTag' })
  tags: Tag[];
}
