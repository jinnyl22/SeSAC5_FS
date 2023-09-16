import { Injectable, NotFoundException } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
// import { v1 } from 'uuid';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { EmailService } from '../email/email.service';
import { DataSource, EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Profile } from './entities/profile.entity';
import { Addr } from './entities/addr.entity';
import { Auth } from './entities/auth.entity';

@Injectable()
export class UsersService {
  private tokenMap = new Map<string, string>();

  constructor(
    private readonly config: ConfigService,
    private readonly emailService: EmailService,
    private readonly entityManager: EntityManager,
    private readonly dataSource: DataSource,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {
    // console.log(
    //   '🚀  TTT:',
    //   config.get('TTT'),
    //   config.get('PPP'),
    //   config.get('PRO'),
    //   config.get('emailOptions'),
    //   this.config.get('Port'),
    // );
  }
  // create(createUserDto: CreateUserDto) {
  //   // console.log('🚀  createUserDto:', createUserDto);
  //   const token = v1();
  //   this.tokenMap.set(createUserDto.email, token);
  //   // this.emailService.sendMail(createUserDto.email, token);
  //   return createUserDto;
  // }

  create(createUserDto: CreateUserDto) {
    // const user = new User(createUserDto);
    // const user = new User();
    // 이렇게 되면 뭐가 추가 될 때 마다 수정을 해주어야함
    // user.name = createUserDto.name;
    // user.email = createUserDto.email;
    // user.passwd = createUserDto.passwd;
    // return createUserDto;

    // const profile = new Profile();
    const profile = new Profile({ ...createUserDto.profile, role: 0 });
    // 주소는 아예 없어도 되게 해놨기때문에 ?을 붙여주는 것임
    const addrs = createUserDto.addrs?.map(
      (createAddrDto) => new Addr(createAddrDto),
    );

    // const auths = createUserDto.auths?.map(
    //   (createAddrDto) => new Auth(createAddrDto),
    // );
    // const allAuths = await this.entityManager.find(Auth);
    // const auths = createUserDto.auths?.map((adto) =>
    //   allAuths.find((a) => a.id === adto.id),
    // );

    const user = new User({ ...createUserDto, profile, addrs });

    return this.entityManager.save(user);
  }

  verifyToken(email: string, token: string) {
    console.log('🚀  token:', token, this.tokenMap.get(email));
    return token === this.tokenMap.get(email);
  }

  // get<T>(key) {
  //   return map.get(key) as T;
  // }

  findAll() {
    // const pro = this.config.get<number>('PRO');
    // const ttt = this.config.get<string>('TTT');
    // this.t(pro, ttt);
    // return `This action returns all users`;
    //--------------------------------------------
    // return this.userRepository.find(User);
    return this.entityManager.find(User);
    // return this.dataSource.getRepository(User).find();
  }

  private t(p: number, t: string) {
    console.log(p, t);
  }

  findOne(id: number) {
    // return `This action returns a #${id} user`;

    // 여기서는 new Promise를 하는 거여서
    //return될 때는 상관이 없지만, 해당 함수를 사용할 때는 비동기로 걸어줘야함
    return this.userRepository.findOne({
      where: { id },
      // profile을 찾아서 같이 달라고 한 것임
      relations: { profile: true },
    });
    // return this.entityManager.findOne(User, { where: { id } });
    // return this.entityManager.findOneBy(User, { id });
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    // return `This action updates a #${id} user`;

    // userRepository의 findOne은 Promise를 반환함 그래서 async/await 사용해주어야함
    // const user = await this.userRepository.findOne({ where: { id } });
    const user = await this.findOne(id);

    // 유저가 없으면 404
    if (!user) throw new NotFoundException('There id no user');

    user.name = updateUserDto.name;

    if (updateUserDto.passwd) user.passwd = updateUserDto.passwd;

    // 프로필이 있을 때만 업데이트
    // if (updateUserDto.profile) {
    user.profile = new Profile(updateUserDto.profile);
    // }

    user.addrs = updateUserDto.addrs?.map(
      (createAddrDto) => new Addr(createAddrDto),
    );

    return this.userRepository.save(user);
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
