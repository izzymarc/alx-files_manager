// // utils/redis.js
// import { createClient } from 'redis';

// class RedisClient {
//     constructor() {
//         this.client = createClient();
        
//         // Log errors to the console
//         this.client.on('error', (err) => {
//             console.error('Redis Client Error', err);
//         });

//         // Connect to the Redis server
//         this.client.connect().catch(console.error);
//     }

//     // Check if the Redis client is alive
//     isAlive() {
//         return this.client.isOpen;
//     }

//     // Asynchronously get a value by key
//     async get(key) {
//         try {
//             const value = await this.client.get(key);
//             return value;
//         } catch (err) {
//             console.error(`Error getting key ${key}:`, err);
//             return null;
//         }
//     }

//     // Asynchronously set a value with an expiration
//     async set(key, value, duration) {
//         try {
//             await this.client.set(key, value, {
//                 EX: duration, // Set expiration time in seconds
//             });
//         } catch (err) {
//             console.error(`Error setting key ${key}:`, err);
//         }
//     }

//     // Asynchronously delete a key
//     async del(key) {
//         try {
//             await this.client.del(key);
//         } catch (err) {
//             console.error(`Error deleting key ${key}:`, err);
//         }
//     }
// }

// // Create an instance of RedisClient
// const redisClient = new RedisClient();
// export default redisClient;


// utils/redis.js
import { createClient } from 'redis';

class RedisClient {
    constructor() {
        this.client = createClient();

        // Log errors to the console
        this.client.on('error', (err) => {
            console.error('Redis Client Error', err);
        });

        // Connect to the Redis server
        this.client.connect().catch(console.error);
    }

    // Check if the Redis client is alive
    isAlive() {
        return this.client.isOpen;
    }

    // Asynchronously get a value by key
    async get(key) {
        try {
            const value = await this.client.get(key);
            return value;
        } catch (err) {
            console.error(`Error getting key ${key}:`, err);
            return null;
        }
    }

    // Asynchronously set a value with an expiration
    async set(key, value, duration) {
        try {
            await this.client.set(key, value, {
                EX: duration, // Set expiration time in seconds
            });
        } catch (err) {
            console.error(`Error setting key ${key}:`, err);
        }
    }

    // Asynchronously delete a key
    async del(key) {
        try {
            await this.client.del(key);
        } catch (err) {
            console.error(`Error deleting key ${key}:`, err);
        }
    }
}

// Create an instance of RedisClient
const redisClient = new RedisClient();
export default redisClient;

