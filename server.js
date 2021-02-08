const path = require("path");
const express = require("express");
const session = require("express-session");
const exphbs = require("express-handlebars");

const routes = require("./controllers");
const sequelize = require("./config/connection");
const helpers = require("./utils/helpers");

const hbs = exphbs.create({
  helpers
});

const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require("connect-session-sequelize")(session.Store);

const sess = {
  secret: process.env.SESSION_SECRET || "this is a fake secret",
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
};

app.use(session(sess));

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, "public")));

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({
  force: false
}).then(() => {
  app.listen(PORT, () => console.log(`App listening to PORT ${PORT}`));
});