import { Module } from '@nestjs/common';
import { ChatsController } from './chats.controller';
import { ChatsService } from './chats.service';
import { RedisModule } from 'src/redis/redis.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ChatRoom } from './entities/chatRoom.entity';
import { PersonaModule } from 'src/persona/persona.module';
import { UsersModule } from 'src/users/users.module';
import { WebsocketClientModule } from 'src/websocket-client/websocket-client.module';

@Module({
	imports: [RedisModule, WebsocketClientModule, PersonaModule, UsersModule, TypeOrmModule.forFeature([ChatRoom])],
	controllers: [ChatsController],
	providers: [ChatsService],
})
export class ChatsModule {}