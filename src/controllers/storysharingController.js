// const jsonData = require('../data/storydata.json'); //(with path)
import * as storyDetail from '../../data/storyDetail_1.json';

class storysharingController {
  static async allStories(req, res) {
    const lol = storyDetail;
    return res.status(200).json({
      code: 1,
      message: 'success',
      data: lol,
    });
  }

  static async storyDetails(req, res) {
    const storyData = storyDetail;
    return res.status(200).json({
      code: 1,
      message: 'success',
      data: storyData,
    });
  }

  static async addstoryDetails(req, res) {
    const tmp = {
      comments: req.body.comment,
    };
    storyDetail[0].comments.push(req.body.comment);

    return res.status(200).json({
      code: 1,
      message: 'success',
      data: tmp,
    });
  }
}

module.exports = storysharingController;
