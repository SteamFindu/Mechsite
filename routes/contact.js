var express = require('express');
var router = express.Router();

/* GET products page. */
router.get('/', function(req, res, next) {
    res.render('contact', { title: 'Contact' });
});

app.post('/', function (req, res) {
    res.send('POST request to homepage')
})

module.exports = router;