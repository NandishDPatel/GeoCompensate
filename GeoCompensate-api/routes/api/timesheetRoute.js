var express = require('express');
// const isAuthenticated = require('../../middleware/authMiddleware');
const TimesheetController = require('../../controllers/timesheet/timesheetController');
var router = express.Router();

router.post('/check', TimesheetController.checkTodayClockIn);
router.post('/clockIn', TimesheetController.clockIn);
router.post('/clockOut', TimesheetController.clockOut);
router.get('/hr/:empId',TimesheetController.fetchEmpTimesheet);

module.exports = router;