exports.indexPage = function (req, res) {
  res.render('index', { title: 'Express' });
};

exports.statusPage = function (req, res) {
  res.render('status');
};

exports.statusEmptyAddPage = function (req, res) {
  res.render('status-empty-add');
};

exports.statusEmptyCalendarPage = function (req, res) {
  res.render('status-empty-calendar');
};

exports.statusOnePage = function (req, res) {
  res.render('status-one');
};

exports.statusOneCalendarPage = function (req, res) {
  res.render('status-one-calendar');
};
