import Redis from 'ioredis';
import { REDIS_URI } from '$env/static/private';

export const redis = new Redis(REDIS_URI )
export default REDIS_URI ? new Redis(REDIS_URI) : new Redis();
