// const json_data = require('../data/storydata.json'); //(with path)
import * as storyDetail_1 from "../../data/storyDetail_1.json"
import * as storyDetail_2 from "../../data/storyDetail_2.json"


class storysharingController {


    static async allStories(req, res) {
        var lol= storyDetail_1
        return res.status(200).json({
            code: 1,
            message: "success",
            data: lol
        });   
     }
    static async storyDetails(req, res) {
        var lol= json_data
       return res.status(200).json({
            code: 1,
            message: "success",
            data: lol
        });
    }

}

module.exports = storysharingController;