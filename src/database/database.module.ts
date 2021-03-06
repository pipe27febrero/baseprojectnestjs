import { Module } from '@nestjs/common';
import { User } from '../user/entities/user.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({   
    imports : [TypeOrmModule.forRoot({
        type: 'mysql',
        host: 'digitalaccount.store',
        port: 15000,
        username : 'root',
        password : 'pipiton27',
        database: 'test',
        entities: [User],
        synchronize: true,
      })]
})
export class DatabaseModule {}
