/* eslint-disable import/no-named-default */
import { default as healthRecords } from '../../public/data/healthRecords.json';

export default class HealthController {
  static getAllRecords() {
    return healthRecords;
  }

  static getRecord(time) {
    let result;
    healthRecords.forEach((record) => {
      if (record.time === time) {
        result = record;
      }
    });
    return result;
  }
}
