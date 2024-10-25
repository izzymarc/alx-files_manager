import RedisClient from '../utils/redis';
import DbClient from '../utils/db';

export default class AppController {
  static getStatus(req, res) {
    res.status(200).json({
      redis: RedisClient.isAlive(),
      db: DbClient.isAlive(),
    });
  }

  static getStats(req, res) {
    Promise.all([DbClient.nbUsers(), DbClient.nbFiles()])
      .then(([usersCount, filesCount]) => {
        res.status(200).json({ users: usersCount, files: filesCount });
      });
  }
}
