# react-express-mongo-starter

# notes: 

This repo is currently undergoing surgery so some of the server side functionality will be broken.

# the repo:

added a few mods to the insanely awesome [react-starter](https://github.com/substack/react-starter) repo.  

bare-bones [react](https://facebook.github.io/react/) starter
using [reactify](https://npmjs.com/package/reactify) for jsx
under [browserify](http://browserify.org)/[watchify](https://npmjs.com/package/watchify)
with [npm run scripts](http://substack.net/task_automation_with_npm_run).
also includes:

[express](http://expressjs.com/)

[mongoDB](https://www.mongodb.org/)

[socket.io](http://socket.io/)

[es2015](https://babeljs.io/docs/learn-es2015/)

[view the starter demo](http://substack.neocities.org/react_starter.html)


# quick start

```
$ npm install -g nodemon
$ npm install
$ npm run watch &
$ npm start
```

# env.json
navigate to the following directory `./app/config` and add your env.json

```
{
  "development": {
    "db" : "mongodb://localhost:27017/[DB-NAME-HERE]"
  },
  "production": {
    "db" : ""
  }
}
```

# commands

* `npm run build` - build for production
* `npm run watch` - automatically recompile during development
* `npm start` - start nodemon and monitor server.js

# folder/file structure (es2015)

``` 
app
  config
    config.js
    env.json
    routes.js
  controllers
    visitorsControllers.js
  models
    Visitor.js
public
  components
    parts
      app.js
  Counter.js
  bundle.js
  index.html
server.js
    
```
# express api
added api routing functionality to handle POST and GET requests. UPDATE and DELETE will be coming soon.

# socket.io
using socket.io to emits events to/from server to client.

# es2015
newest version of the ecmascript standard.

# react-router
routing functionality all set to go


# contributing

If you like what you see, but want to add something more, fork this repo and add
your additional feature to the name of the fork. Try to be specific with the
name of your fork, listing the technologies used plus what features the fork
adds.

# contributor notes

i'm open to any suggestions with regards to a better faster setup.  feel free to open up an issue.


# variations

Check out the [list of forks](https://github.com/substack/react-starter/network/members)
to see how other people have customized this starter repo.

# license

This software is released into the public domain.
