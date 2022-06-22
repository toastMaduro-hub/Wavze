const DUMMY_DATA = require('../DUMMY_DATA');

const ReportControllers = {};

ReportControllers.getReports = () => {
  console.log('ReportControllers.getReports');
  return new Promise((resolve, reject) => resolve(JSON.stringify(DUMMY_DATA)));
};

module.exports = ReportControllers;
