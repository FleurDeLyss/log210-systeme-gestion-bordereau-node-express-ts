"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var path = require('path');
var CourseRouter_1 = require("./routes/CourseRouter");
var ScheduleRouter_1 = require("./routes/ScheduleRouter");
var SemesterRouter_1 = require("./routes/SemesterRouter");
var StudentRouter_1 = require("./routes/StudentRouter");
var TeacherRouter_1 = require("./routes/TeacherRouter");
var HealtRouter_1 = require("./routes/HealtRouter");
var GradeRouter_1 = require("./routes/GradeRouter");
// Creates and configures an ExpressJS web server.
var App = /** @class */ (function () {
    //Run configuration methods on the Express instance.
    function App() {
        this.express = express();
        this.middleware();
        this.routes();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(logger('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
    };
    // Configure API endpoints.
    App.prototype.routes = function () {
        /* This function will change when we start to add more
         * API endpoints */
        var router = express.Router();
        /**
             * @api {get} /dcl
             * @apiGroup Documentation
             * @apiDescription  Afficher le diagramme de classe
             */
        router.get('/dcl2', function (req, res) {
            res.redirect('/docs/dcl.svg');
        });
        router.get('/', function (req, res) {
            res.redirect('docs/index.html');
        });
        this.express.use('/api/v3/healt', HealtRouter_1.healtRouter.router);
        this.express.use('/api/v3/course', CourseRouter_1.courseRouter.router);
        this.express.use('/api/v3/Schedule', ScheduleRouter_1.scheduleRouter.router);
        this.express.use('/api/v3/semester', SemesterRouter_1.semesterRouter.router);
        this.express.use('/api/v3/student', StudentRouter_1.studentRouter.router);
        this.express.use('/api/v3/teacher', TeacherRouter_1.teacherRouter.router);
        this.express.use('/api/v3/grade', GradeRouter_1.gradeRouter.router);
        this.express.use('/docs', express.static(path.join(__dirname, 'docs')));
        this.express.use('/dcl', express.static(path.join(__dirname, 'docs/dcl.svg')));
        this.express.use('/static', express.static(path.join(__dirname, 'public')));
        this.express.use('/', router); // routage de base
    };
    return App;
}());
exports["default"] = new App().express;
