# react-express-mongo-starter

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

[flux](https://facebook.github.io/react/docs/flux-overview.html)

[view the starter demo](https://react-express-mongo.herokuapp.com)


# quick start

```
$ npm install
$ npm run watch
$ npm start
```

# commands

* `npm run build` - build for production
* `npm run watch` - automatically recompile during development
* `npm start` - start nodemon and monitor server.js

# folder/file structure (es2015)

``` 
app
  config
    opbeat-config.js
    routes.js
  controllers
    visitorsControllers.js
  models
    Visitor.js
public
  actions
    AppActions.js
  components
    parts
      app.js
      Visitor.js
    About.js
    Contact.js
    Counter.js
    Error.js
    Index.js
    Visitors.js
  constants
    AppConstants.js
  dispatcher
    AppDispatcher.js
  stores
    AppStore.js
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


# deploy to heroku
make sure you have the [heroku toolbelt](https://toolbelt.heroku.com/) 

```
heroku create <app name>
git push heroku master
heroku config | grep MONOGOLAB_URI
heroku config:set MONOGOLAB_URI=mongodb://<username>:<password>.mongolab.com:57244/<db_name>
heroku config:set NODE_ENV=production
heroku ps:scale web=1
heroku open
heroku logs
```

what's happening up there ^? 

* `heroku create <app name>` - will create your application in heroku
* `git push heroku master` - push your application to heroku
* `heroku config | grep MONOGOLAB_URI` - search your config file for MONGOLAB_URI
* `heroku config:set MONOGOLAB_URI=mongodb://<username>:<password>.mongolab.com:57244/<db_name>` - set your MONGOLAB_URI to your production database (assuming you're using mongolab)
* `heroku config:set NODE_ENV=production` - set your NODE_ENV to production
* `heroku ps:scale web=1` - set your dynos
* `heroku open` - open your application in the browser for preview
* `heroku logs` - see logs from your application



# what's coming next?
- UPDATE and DELETE functionality from view


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
