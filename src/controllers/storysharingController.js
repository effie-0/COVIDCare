// const json_data = require('../data/storydata.json'); //(with path)
import * as storyDetail_1 from '../../data/storyDetail_1.json';
import * as storyDetail_2 from '../../data/storyDetail_2.json';

class storysharingController {
  static async allStories(req, res) {
    const lol = storyDetail_1;
    return res.status(200).json({
      code: 1,
      message: 'success',
      data: lol,
    });
  }

  static async storyDetails(req, res) {
    const lol = json_data;
    return res.status(200).json({
      code: 1,
      message: 'success',
      data: lol,
    });
  }

  static async addstoryDetails(req, res) {
    const tmp = {
      comments: req.body.comment,
    };
    storyDetail_1[0].comments.push(req.body.comment);

    return res.status(200).json({
      code: 1,
      message: 'success',
      data: tmp,
    });
  }
}

module.exports = storysharingController;
