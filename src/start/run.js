const config = require("config");

const port = config.get('port');

const run = (app) => {
    app.listen(port, () => {
        console.log(port);
    });
};

module.exports = run;