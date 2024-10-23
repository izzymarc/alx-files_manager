// // main.js
// import redisClient from './utils/redis';

// (async () => {
//     console.log(redisClient.isAlive());
//     console.log(await redisClient.get('myKey'));
//     await redisClient.set('myKey', 12, 5);
//     console.log(await redisClient.get('myKey'));

//     setTimeout(async () => {
//         console.log(await redisClient.get('myKey'));
//     }, 1000 * 10);
// })();

// main.js
import { isAlive, get, set } from './utils/redis.js';

(async () => {
  console.log(isAlive());
  console.log(await get('myKey'));
  await set('myKey', 12, 5);
  console.log(await get('myKey'));

  setTimeout(async () => {
    console.log(await get('myKey'));
  }, 1000 * 10);
})();
