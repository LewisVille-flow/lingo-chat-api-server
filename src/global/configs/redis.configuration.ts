import { registerAs } from '@nestjs/config';

export default registerAs('redisConfiguration', () => ({
	redis: {
		host: process.env.REDIS_HOST,
		port: process.env.REDIS_PORT,
		db: process.env.REDIS_DB,
	},
}));
