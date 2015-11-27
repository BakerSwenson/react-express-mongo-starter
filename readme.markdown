# react-starter-with-express-api-mongoDB-es2015

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

# starter code (es2015)

``` 
import React from 'react'

import Router from 'react-router'

let { Route, DefaultRoute, NotFoundRoute } = Router

var App = React.createClass({

    getInitialState: function () { 
        return { number: 0 } 
        
    },
    render() {
        return(
            <div>
              <h1>clicked {this.state.number} times!</h1>
              <button onClick={this.handleClick}>click me!</button>
            </div>
        )
    },
    handleClick: function () {
        this.setState({ number: this.state.number + 1 })
    }
})
React.render(<App />, document.querySelector('#content'))
```
# express api
added api routing functionality to handle POST and GET requests. UPDATE and DELETE will be coming soon.

# socket.io
using socket.io to emits events to/from server to client.

# es2015
newest version of the ecmascript standard.


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
