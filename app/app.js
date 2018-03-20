var require = meteorInstall({"client":{"api":{"lists":{"demos.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/api/lists/demos.js                                                                           //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmListDemos: function () {
    return mmListDemos;
  }
});
// List of demonstrations
// title: Name of demonstration
// href: Route to demonstration
var mmListDemos = [{
  title: 'Hello, world!',
  href: 'https://meteor-mogul-hello-world.herokuapp.com/'
}, {
  title: 'Meteor Mogul Vue Intro',
  href: 'https://meteor-mogul-vue-intro.herokuapp.com/'
}];
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"docs.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/api/lists/docs.js                                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmListDocs: function () {
    return mmListDocs;
  }
});
// List of documentation
// title: Name of document
// href: Route to document
var mmListDocs = [{
  title: 'Orientation',
  href: '/orientation.html'
}, {
  title: 'Survival Guide',
  href: '/survivalguide.html'
}, {
  title: 'Toolkit',
  href: '/toolkit.html'
}, {
  title: 'Formulary',
  href: '/formulary.html'
}, {
  title: 'Bestiary',
  href: '/bestiary.html'
}, {
  title: 'Bazaar',
  href: '/bazaar.html'
}, {
  title: 'Forum',
  href: '/forum.html'
}, {
  title: 'Observatory',
  href: '/observatory.html'
}];
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"repos.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/api/lists/repos.js                                                                           //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmListRepos: function () {
    return mmListRepos;
  }
});
// List of repositories
// title: Name of repository
// href: Route to repository
var mmListRepos = [{
  title: 'Hello, world!',
  href: 'https://github.com/meteor-mogul/mogul-helloworld'
}, {
  title: 'Vue Intro',
  href: 'https://github.com/meteor-mogul/vue-intro'
}, {
  title: 'Web Site',
  href: 'https://github.com/meteor-mogul/meteormogul.dev'
}, {
  title: 'Playground',
  href: 'https://github.com/meteor-mogul/playground'
}, {
  title: 'Static Site Generator',
  href: 'https://github.com/meteor-mogul/mogul-ssg'
}, {
  title: 'Accounts',
  href: 'https://github.com/meteor-mogul/accounts-vuetify'
}, {
  title: 'To Do App',
  href: 'https://github.com/meteor-mogul/mogul-meteor-vue-todo'
}, {
  title: 'Button Example',
  href: 'https://github.com/meteor-mogul/mogul-button'
}];
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"ui":{"contents":{"bazaar.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/bazaar.js                                                                        //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentBazaar: function () {
    return mmContentBazaar;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mmContentBazaar = {
  name: 'mm-content-bazaar',
  template: '#mm-content-bazaar-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentBazaar defined in bazaar.js:", mmContentBazaar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bestiary.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/bestiary.js                                                                      //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentBestiary: function () {
    return mmContentBestiary;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mmContentBestiary = {
  name: 'mm-content-bestiary',
  template: '#mm-content-bestiary-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentBestiary defined in bestiary.js:", mmContentBestiary);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formulary.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/formulary.js                                                                     //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentFormulary: function () {
    return mmContentFormulary;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mmContentFormulary = {
  name: 'mm-content-formulary',
  template: '#mm-content-formulary-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentFormulary defined in formulary.js:", mmContentFormulary);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"forum.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/forum.js                                                                         //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentForum: function () {
    return mmContentForum;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mmContentForum = {
  name: 'mm-content-forum',
  template: '#mm-content-forum-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentForum defined in forum.js:", mmContentForum);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"heading.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/heading.js                                                                       //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentHeading: function () {
    return mmContentHeading;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmContentHeading = {
  name: 'mm-content-heading',
  template: '#mm-content-heading-template',
  props: ['contentTitle']
};
MMDEBUG && console.log("mmContentHeading defined in heading.js:", mmContentHeading);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"home.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/home.js                                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentHome: function () {
    return mmContentHome;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHome = {
  name: 'mm-content-home',
  template: '#mm-content-home-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart
  },
  data: function () {
    return {
      rows: [{
        name: 'first',
        row: [{
          title: "Orientation",
          tooltip: "Getting Started",
          href: "/orientation.html"
        }, {
          title: "Survival Guide",
          tooltip: "Concepts and Strategies",
          href: "/survivalguide.html"
        }, {
          title: "Toolkit",
          tooltip: "Your Development Environment",
          href: "/toolkit.html"
        }]
      }, {
        name: 'second',
        row: [{
          title: "Formulary",
          tooltip: "How To Do Stuff",
          href: "/formulary.html"
        }, {
          title: "Bestiary",
          tooltip: "Bugs and Where to Find Them",
          href: "/bestiary.html"
        }, {
          title: "Menagerie",
          tooltip: "Demo Sites",
          href: "/menagerie.html"
        }]
      }, {
        name: 'third',
        row: [{
          title: "Bazaar",
          tooltip: "Shameless Commerce Division",
          href: "/bazaar.html"
        }, {
          title: "Forum",
          tooltip: "Where to Ask Questions and Share Answers",
          href: "/forum.html"
        }, {
          title: "Observatory",
          tooltip: "Related Projects and Resources",
          href: "/observatory.html"
        }]
      }]
    };
  }
};
MMDEBUG && console.log("mmContentHome defined in home.js:", mmContentHome);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"menagerie.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/menagerie.js                                                                     //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentMenagerie: function () {
    return mmContentMenagerie;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mmContentMenagerie = {
  name: 'mm-content-menagerie',
  template: '#mm-content-menagerie-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentMenagerie defined in menagerie.js:", mmContentMenagerie);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"observatory.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/observatory.js                                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentObservatory: function () {
    return mmContentObservatory;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mmContentObservatory = {
  name: 'mm-content-observatory',
  template: '#mm-content-observatory-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentObservatory defined in observatory.js:", mmContentObservatory);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"orientation.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/orientation.js                                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentOrientation: function () {
    return mmContentOrientation;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin, markedMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  },
  markedMixin: function (v) {
    markedMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mdText;
module.watch(require("./orientation.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 4);
//MMDEBUG = true;
var mmContentOrientation = {
  name: 'mm-content-orientation',
  template: '#mm-content-orientation-template',
  data: function () {
    return {
      mdText: mdText
    };
  },
  mixins: [drawerMixin, samecaseMixin, markedMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentOrientation defined in orientation.js:", mmContentOrientation);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"orientation.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/orientation.md.js                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nMeteor Mogul is a hobby project for learning [Meteor][meteor], [VueJS][vue] and [Vuetify](https://vuetifyjs.com/en/) to create personal apps for friends and family and demo apps for potential employers and investors.\n\n## Quick Start\n\nIf you're in a hurry, just clone my code from GitHub and dive right in:\n\n```\n$ git clone https://github.com/meteor-mogul/mogul-helloworld.git/\n $ cd mogul-helloworld\n $ meteor npm install\n $ meteor\n```\n\nOf course, you'll need [`git`][git] and [`meteor`][meteor] installed for the above commands to work.\n\n## Why Meteor Mogul?\n\nMeteor Mogul is a platform that makes it easier to write personal and demo web apps that work on modern [evergreen browsers][evergreen].  My goal is to write as many practical example apps as I can.  If this helps other people write their own apps, that would be great.  The more of us sharing ideas and code, the better!\n\nMeteor is a full-stack JavaScript framework that provides build scripts, a packaging system that helps you leverage a huge amount of code written by other people, and a super-simple persistence layer so your apps can save data without you having to worry about configuring a database.\n\nOne of the parts of a full-stack framework is the view framework.  This allows you to code your user interface.  You can use any JavaScript view framework with Meteor, but the four major ones are\n\n1. [Blaze](http://blazejs.org/)\n2. [React](https://reactjs.org/)\n3. [Angular](https://angular.io/)\n4. [VueJS][vue]\n\nVueJS is easy to learn and has momentum going for it -- the perfect match for Meteor.  VueJS enhances the Meteor developer experience with a view layer that is extremely intuitive and easy to use, while also being cleverly designed to allow you to tackle more sophisticated projects as your skill grows.\n\nThe final piece to building web apps is a component framework.  This provides user interface widgets and styles that work within the view framework.  Vuetify is a component framework for Vue that has a great set of features for people learning to develop web apps.\n\nBy the way, if you'd like to read my take on other full-stack JavaScript frameworks, view frameworks, component frameworks, and constellations of related open source software, see the [Observatory](/#/observatory.html).\n\n## Current Status of Meteor Mogul: Alpha\n\nThis is very much a work in progress as I figure out how Meteor, VueJS and Vuetify all work.\n\nFor example, I am in the middle of writing an account management system using Vue and Vuetify:\n\n- [Meteor Mogul Accounts](https://github.com/meteor-mogul/accounts-vuetify)\n\nBut I think I have enough experience (i.e., I've made enough bone-headed mistakes) that I'm publishing what I've learned in case it may get more people to start playing around with Meteor, VueJS and Vuetify.\n\n## Getting Started\n\nTo start playing with Meteor Mogul, here's what I recommend:\n\n1. A development machine running either MacOS or linux (way better than trying to develop on Windows), connected to the Internet.\n2. An [evergreen web browser][evergreen]. I recommend [Google Chrome](https://www.google.com/chrome/browser/) (although I really tried hard to like [Mozilla Firefox](https://www.mozilla.org/)).\n3. A programming editor. I recommend [Atom](https://atom.io/).\n4. [`meteor`][meteor]\n5. [`git`][git]\n\nI also recommend that you try out [GitHub Desktop](https://desktop.github.com/). It helps me manage commits without having to remember `git` shell commands.\n\nOnce you have all the above, you'll need to practice a little bit to know how to use them.  Then the following instructions will make sense.\n\nHere's how to run Meteor Mogul apps on your own local development machine:\n\n```\n$ git clone https://github.com/meteor-mogul/<repo>.git <target-dir>\n $ cd <target-dir>\n $ meteor npm install\n $ meteor\n```\n\nOnce you've done the `git clone` you have a local copy of my code.  Once you've done the `meteor npm install` you've got a local copy of all the [npm packages][npm] you need.  Once you've done the `meteor` and see the app running, then you have all the code dependencies downloaded locally and built for your platform.  Then you don't have to worry if your Internet connection goes down; you have everything you need to keep playing with the code locally.\n\nIf you're interested in developing your own apps, you'll want to set up your own [GitHub](https://github.com/) account, then fork my repos.  Then you can do whatever you want with them.  All of my Meteor Mogul code is MIT licensed, which means that you can have it but you can't sue me if it doesn't work for you.  It's free, with no strings (and no promises or warranties) attached.\n\nIf the above doesn't make sense to you, try reading the GitHub and Meteor documentation and get their examples working first.  Then come back to Meteor Mogul.\n\nA couple notes:\n\n1.  The `$` notation means to run the commands in a shell.\n2.  The `<target-dir>` convention means replace that with your own string.\n\nFor example, to get the Meteor Mogul [Hello, world!](https://github.com/meteor-mogul/mogul-helloworld) app up and running (that's good one to start with, since it's the simplest and designed to just make sure you have your development environment set up correctly), in a shell you could do:\n\n```\n$ git clone https://github.com/meteor-mogul/mogul-helloworld.git awesome-sauce\n $ cd awesome-sauce\n $ meteor npm install\n $ meteor\n```\n\nIf you forget the `meteor npm install` you'll probably see error messages letting you know that you need to install the [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) node package.  The `meteor npm install` just has to happen once, but it's okay to run it multiple times.  That installs required `npm` packages in your local node_modules folder so Meteor can use them when it's building your app.  Meteor installs `npm`, a [package manager for JavaScript][npm], for you: `meteor npm` works just the same as `npm`.  So by installing Meteor you get convenient access to the entire `npm` library of JavaScript code.\n\nBy default, `meteor` (the final command above) will launch a web application server listening to port 3000. You can play with your sample app by pointing a browser at [http://localhost:3000](http://localhost:3000).\n\n## Meteor Mogul Under the Hood\n\nThe main thing Meteor Mogul does is:\n\n- provides the full version (that can compile templates) of the VueJS distribution\n- as a Meteor package ([meteormogul:vue-dist](https://atmospherejs.com/meteormogul/vue-dist))\n- on [Atmosphere](https://atmospherejs.com/meteormogul) (which is the public directory of packages written for Meteor),\n- using the [static-html](https://atmospherejs.com/meteor/static-html) package to parse `.html` files, and\n- removes the Blaze package.\n\nSo then when you write your `.html` files, vue.js deals with them instead of Blaze trying to compile them into Blaze templates.\n\nAnother thing Meteor Mogul provides is the [vue-meteor-tracker](https://github.com/meteor-vue/vue-meteor-tracker) mixin for Vue so your Vue components can see [Tracker](https://docs.meteor.com/api/tracker.html) reactivity.  This comes in handy for writing Vue components that can use Meteor [Accounts](https://docs.meteor.com/api/accounts.html), [Collections](https://docs.meteor.com/api/collections.html) and [Session](https://docs.meteor.com/api/session.html).\n\nMeteor Mogul also provides access to a rich set of user interface widgets thanks to [Vuetify](https://github.com/meteor-mogul/mogul-vuetify-dist) and [Material Design icon fonts for Meteor](https://github.com/meteor-mogul/mogul-material-design-icons-fonts).\n\n## Using the NPM version of vue.js in Meteor\n\nYou can also use `meteor npm` to get the latest version of vue.js.\n\nIn the Meteor universe of code, there are two main package managers and distribution sites:\n\n1. Atmosphere manages and distributes packages written specifically for Meteor.\n2. npm manages and distributes all sorts of JavaScript packages.  It started out as a repository for Node.js packages.\n\nI decided to package up the VueJS distribution on Atmosphere for two reasons: 1) I find Atmosphere's package system to be very convenient, and 2) it was a good learning experience to dig into the Vue code to figure out how to provide `Vue` as an Atmosphere package.\n\nMuch as I like Atmosphere, the people running Meteor have warned that it may be going away and everyone should prepare to use `npm`.\n\nSo, if you want to play around with the `npm` version of VueJS, here's how to get the full build that includes template compilation:\n\n```\n$ meteor npm install vue\n```\n\nThen in your `.js` files, `import Vue from 'vue/dist/vue.js';`.  If you just do `import Vue from 'vue';` you'll get the runtime version, which doesn't allow you to compile templates.\n\n## Other Projects Integrating Meteor and VueJS\n\nThere are [other projects](https://github.com/meteor-vue) which are aiming for a more robust integration of VueJS with Meteor.  Those other projects allow you to write both Blaze and VueJS templates.\n\nThe ambition of Meteor Mogul is more modest: it's here just to help you quickly get writing apps that use VueJS as the front-end and can use MongoDB and the other things on the back end that Meteor provides.  My design philosophy is to remove any unnecessary pieces or dependencies, which is why for Meteor Mogul apps I package up the vue.js distribution as an Atmosphere package and remove extra packages that aren't necessary.\n\n## Meteor Mogul Roadmap\n\nOnce I have wrapped my mind around how other people are integrating VueJS with Meteor, and have some reasonable hope that I'm on the right track, I'll bump the status to beta, post an announcement somewhere, and invite random strangers to give me feedback and ideas.\n\nI hope Meteor Mogul saves you some time if you're interested in seeing what it's like to develop apps with VueJS and Meteor together.\n\nNow, go [get the Meteor Mogul code](https://github.com/meteor-mogul)!\n\nHave fun!  \n\n*-Fred*\n\nP.S. Why the name \"Meteor Mogul\"?   What I had in mind was getting over the bumps (in [downhill skiing](https://en.wikipedia.org/wiki/Mogul_skiing), \"moguls\" are bumps in the snow) that challenge new developers, and also reaching the goal of becoming a better Meteor developer (in the sense of a \"[mogul](https://www.google.com/search?q=Dictionary#dobs=mogul)\" as a powerful person).\n\n[vue]: https://vuejs.org/\n[meteor]: https://www.meteor.com/\n[evergreen]: https://www.techopedia.com/definition/31094/evergreen-browser\n[npm]: https://www.npmjs.com/\n[git]: https://git-scm.com/\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"survivalguide.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/survivalguide.js                                                                 //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentSurvivalGuide: function () {
    return mmContentSurvivalGuide;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin, markedMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  },
  markedMixin: function (v) {
    markedMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mdText;
module.watch(require("./survivalguide.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 4);
var mmContentSurvivalGuide = {
  name: 'mm-content-survivalguide',
  template: '#mm-content-survivalguide-template',
  data: function () {
    return {
      mdText: mdText
    };
  },
  mixins: [drawerMixin, samecaseMixin, markedMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentSurvivalGuide defined in survivalguide.js:", mmContentSurvivalGuide);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"survivalguide.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/survivalguide.md.js                                                              //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nI'm writing this survival guide to share what I wish somebody had told me when I started playing around with Meteor.\n\n## Single Page App\n\nThe first thing to understand is what Meteor is trying to do for you.  Basically, Meteor's goal in life is to produce a bundle of JavaScript code that runs a single page app.\n\nMeteor believes that its code will be running in two kinds of places:\n\n1.  On a server inside a Node.js instance.\n2.  On a browser inside a JavaScript engine.\n\nFor the browser code to work, Meteor will package up a single `.html` file, along with a bunch of JavaScript, CSS and other assets.  The server code will listen for connections and deliver this bundle to browser clients that request it.\n\nOnce the code is running on the browser, then it can open up a channel back to the server and send and receive messages using Meteor's Distributed Data Protocol (DDP).\n\nThis is a different view of the world than a traditional web server, which sticks to HTTP.  The HTTP model is for a browser to request a document and the server to send it.  Then a browser might request (GET) another document or send some information back as a POST that the server will mull over.\n\n## Routing\n\nThere are two ways to think about routing.  One is client side and the other is server side.\n\nClient-side routing is just setting the state of the client.  In response to a change in state, the client makes some change to its user interface.  By giving a particular state a route, you make it easy to put the client in that state and you can navigate through a set of states.\n\nServer-side routing is what a traditional web server does in response to a request from a client.  But instead of serving a static file that is stored on the server's filesystem, a Meteor app running in a Node.js instance on the server will decide what it wants to send to the client in response to each route requested.\n\nWith server-side routing, it can appear to the browser client that the Meteor app is just like any other server, sending different pages in response to requests.  But the Meteor app can also keep open a connection and send and receive responses via DDP.\n\nVue has two kinds of client-side routing: \"hash mode\" and \"history mode\".  Hash mode sticks a # in the URL, which means the browser knows not to do a page reload and simply moves to a different state on the page it already has.\n\nHistory mode uses history.pushState to avoid a page reload, but it's sort of a hybrid into server-side routing since the server needs to be prepared to handle URLs for different pages.\n\n[vue]: https://vuejs.org/\n[meteor]: https://www.meteor.com/\n[evergreen]: https://www.techopedia.com/definition/31094/evergreen-browser\n[npm]: https://www.npmjs.com/\n[git]: https://git-scm.com/\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolkit.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/toolkit.js                                                                       //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContentToolKit: function () {
    return mmContentToolKit;
  }
});
var MMDEBUG;
module.watch(require("../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("./heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mmContentToolKit = {
  name: 'mm-content-toolkit',
  template: '#mm-content-toolkit-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentToolKit defined in toolkit.js:", mmContentToolKit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"menus":{"create.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/menus/create.js                                                                           //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmMenuCreate: function () {
    return mmMenuCreate;
  }
});
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 0);
var mmListRepos;
module.watch(require("../../api/lists/repos.js"), {
  mmListRepos: function (v) {
    mmListRepos = v;
  }
}, 1);
var mmMenuCreate = {
  name: 'mm-menu-create',
  template: '#mm-menu-create-template',
  mixins: [drawerMixin, samecaseMixin],
  data: function () {
    return {
      repos: mmListRepos
    };
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"learn.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/menus/learn.js                                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmMenuLearn: function () {
    return mmMenuLearn;
  }
});
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 0);
var mmListDocs;
module.watch(require("../../api/lists/docs.js"), {
  mmListDocs: function (v) {
    mmListDocs = v;
  }
}, 1);
var mmMenuLearn = {
  name: 'mm-menu-learn',
  template: '#mm-menu-learn-template',
  mixins: [drawerMixin, samecaseMixin],
  data: function () {
    return {
      docs: mmListDocs
    };
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"play.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/menus/play.js                                                                             //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmMenuPlay: function () {
    return mmMenuPlay;
  }
});
var drawerMixin, samecaseMixin;
module.watch(require("../../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 0);
var mmListDemos;
module.watch(require("../../api/lists/demos.js"), {
  mmListDemos: function (v) {
    mmListDemos = v;
  }
}, 1);
var mmMenuPlay = {
  name: 'mm-menu-play',
  template: '#mm-menu-play-template',
  mixins: [drawerMixin, samecaseMixin],
  data: function () {
    return {
      demos: mmListDemos
    };
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"content.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/content.js                                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmContent: function () {
    return mmContent;
  }
});
var drawerMixin;
module.watch(require("../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  }
}, 0);
var mmQuickStart;
module.watch(require("./quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 1);
var mmContent = {
  name: 'mm-content',
  template: '#mm-content-template',
  mixins: [drawerMixin],
  components: {
    'mm-quickstart': mmQuickStart
  },
  data: function () {
    return {
      breadcrumbs: 'Home / Breadcrumbs go here...',
      samecase: "text-transform: none !important;"
    };
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"footer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/footer.js                                                                                 //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmFooter: function () {
    return mmFooter;
  }
});
var drawerMixin;
module.watch(require("../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  }
}, 0);
var mmFooter = {
  name: 'mm-footer',
  template: '#mm-footer-template',
  mixins: [drawerMixin],
  data: function () {
    return {
      documentation: [{
        title: 'Orientation',
        href: '/orientation'
      }, {
        title: 'Survival Guide',
        href: '/survivalguide'
      }, {
        title: 'Toolkit',
        href: '/toolkit'
      }, {
        title: 'Formulary',
        href: '/formulary'
      }],
      demos: [{
        title: 'Hello, world!',
        href: 'https://meteor-mogul-hello-world.herokuapp.com/'
      }, {
        title: 'Meteor Mogul Vue Intro',
        href: 'https://meteor-mogul-vue-intro.herokuapp.com/'
      }],
      repos: [{
        title: 'Hello, world!',
        href: 'https://github.com/meteor-mogul/mogul-helloworld'
      }, {
        title: 'Meteor Mogul Vue Intro',
        href: 'https://github.com/meteor-mogul/vue-intro'
      }]
    };
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"navdrawer.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/navdrawer.js                                                                              //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmNavdrawer: function () {
    return mmNavdrawer;
  }
});
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 0);
var drawerMixin;
module.watch(require("../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  }
}, 1);
var mmQuickStart;
module.watch(require("./quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmListDocs;
module.watch(require("../api/lists/docs.js"), {
  mmListDocs: function (v) {
    mmListDocs = v;
  }
}, 3);
var mmNavdrawer = {
  name: 'mm-navdrawer',
  template: '#mm-navdrawer-template',
  mixins: [drawerMixin],
  components: {
    'mm-quickstart': mmQuickStart
  },
  data: function () {
    return {
      drawer: false,
      docs: mmListDocs,
      demos: [{
        title: 'Hello, world!',
        href: 'https://meteor-mogul-hello-world.herokuapp.com/'
      }, {
        title: 'Meteor Mogul Vue Intro',
        href: 'https://meteor-mogul-vue-intro.herokuapp.com/'
      }],
      repos: [{
        title: 'Hello, world!',
        href: 'https://github.com/meteor-mogul/mogul-helloworld'
      }, {
        title: 'Meteor Mogul Vue Intro',
        href: 'https://github.com/meteor-mogul/vue-intro'
      }]
    };
  },
  methods: {
    // Capture a true or false event on the navigation drawer itself,
    // set Session var so that other components know the state.
    recordDrawer: function (drawerValue) {
      // console.log("Input received.  drawerValue: " + drawerValue );
      Session.set('visibleDrawer', drawerValue);
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"quickstart.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/quickstart.js                                                                             //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmQuickStart: function () {
    return mmQuickStart;
  }
});
var drawerMixin;
module.watch(require("../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  }
}, 0);
var mmQuickStart = {
  name: 'mm-quickstart',
  template: '#mm-quickstart-template',
  mixins: [drawerMixin]
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolbar.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/toolbar.js                                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmToolbar: function () {
    return mmToolbar;
  }
});
var drawerMixin;
module.watch(require("../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  }
}, 0);
var mmMenuLearn;
module.watch(require("./menus/learn.js"), {
  mmMenuLearn: function (v) {
    mmMenuLearn = v;
  }
}, 1);
var mmMenuPlay;
module.watch(require("./menus/play.js"), {
  mmMenuPlay: function (v) {
    mmMenuPlay = v;
  }
}, 2);
var mmMenuCreate;
module.watch(require("./menus/create.js"), {
  mmMenuCreate: function (v) {
    mmMenuCreate = v;
  }
}, 3);
var mmToolbar = {
  name: 'mm-toolbar',
  template: '#mm-toolbar-template',
  mixins: [drawerMixin],
  components: {
    'mm-menu-learn': mmMenuLearn,
    'mm-menu-play': mmMenuPlay,
    'mm-menu-create': mmMenuCreate
  },
  data: function () {
    return {
      demos: [{
        title: 'Hello, world!',
        href: 'https://meteor-mogul-hello-world.herokuapp.com/'
      }, {
        title: 'Meteor Mogul Vue Intro',
        href: 'https://meteor-mogul-vue-intro.herokuapp.com/'
      }],
      repos: [{
        title: 'Hello, world!',
        href: 'https://github.com/meteor-mogul/mogul-helloworld'
      }, {
        title: 'Meteor Mogul Vue Intro',
        href: 'https://github.com/meteor-mogul/vue-intro'
      }]
    };
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"debug.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/debug.js                                                                                     //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  MMDEBUG: function () {
    return MMDEBUG;
  }
});
// Debugging flag.
// true: print debug messages to console
// false: do not
module.runSetters(MMDEBUG = false);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imports.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/imports.js                                                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  Vue: function () {
    return Vue;
  },
  MMDEBUG: function () {
    return MMDEBUG;
  }
});
var Vue;
module.watch(require("meteor/meteormogul:vue-dist"), {
  Vue: function (v) {
    Vue = v;
  }
}, 0);
var Vuetify;
module.watch(require("meteor/meteormogul:vuetify-dist"), {
  Vuetify: function (v) {
    Vuetify = v;
  }
}, 1);
var VueRouter;
module.watch(require("meteor/meteormogul:vue-router-dist"), {
  VueRouter: function (v) {
    VueRouter = v;
  }
}, 2);
var VueMeteorTracker;
module.watch(require("vue-meteor-tracker"), {
  "default": function (v) {
    VueMeteorTracker = v;
  }
}, 3);
var MMDEBUG;
module.watch(require("./debug.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 4);
// Use Vue with packages
// Use VueMeteorTracker to give Vue access to Meteor reactivity
Vue.use(VueMeteorTracker); // Use Vuetify for style and UI widgets.

Vue.use(Vuetify); // Use Vue Router for routes.
// We're using client-side routes, which just changes state of app in browser.
// With client-side routes, server does not get involved.
// Server just delivers a Single Page App, then browser runs JavaScript to
// provide app functionality.

Vue.use(VueRouter); // Debug flag
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"mixins.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/mixins.js                                                                                    //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  drawerMixin: function () {
    return drawerMixin;
  },
  samecaseMixin: function () {
    return samecaseMixin;
  },
  markedMixin: function () {
    return markedMixin;
  }
});
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 0);
var Showdown;
module.watch(require("meteor/markdown"), {
  Showdown: function (v) {
    Showdown = v;
  }
}, 1);
//MMDEBUG = true;
// Define data and methods in one place, used by multiple Vue components
var drawerMixin = {
  data: function () {
    return {
      visibleDrawer: false
    };
  },
  meteor: {
    visibleDrawer: {
      update: function () {
        return Session.get('visibleDrawer');
      }
    }
  },
  methods: {
    toggleDrawer: function () {
      Session.set('visibleDrawer', !Session.get('visibleDrawer'));
    },
    showDrawer: function () {
      Session.set('visibleDrawer', true);
    },
    hideDrawer: function () {
      Session.set('visibleDrawer', false);
    }
  }
}; // By default button text is all UPPERCASE in Vuetify, but I want to
// control the case of my button text.
// This mixin allows me to do :style="samecase" so the buttons will
// not have any text transforms applied to them.

var samecaseMixin = {
  data: function () {
    return {
      samecase: "text-transform: none !important;"
    };
  }
}; // Parse markdown

var converter = new Showdown.converter();
var markedMixin = {
  methods: {
    marked: function (text) {
      MMDEBUG && console.log("Text:", text);
      MMDEBUG && console.log("Showdown converter:", converter);
      MMDEBUG && console.log("Showdown converter.makeHtml:", converter.makeHtml);
      return converter.makeHtml(text);
    }
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"routes.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/routes.js                                                                                    //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmRouter: function () {
    return mmRouter;
  }
});
var MMDEBUG;
module.watch(require("./imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmContentHome;
module.watch(require("./ui/contents/home.js"), {
  mmContentHome: function (v) {
    mmContentHome = v;
  }
}, 1);
var mmContentOrientation;
module.watch(require("./ui/contents/orientation.js"), {
  mmContentOrientation: function (v) {
    mmContentOrientation = v;
  }
}, 2);
var mmContentSurvivalGuide;
module.watch(require("./ui/contents/survivalguide.js"), {
  mmContentSurvivalGuide: function (v) {
    mmContentSurvivalGuide = v;
  }
}, 3);
var mmContentToolKit;
module.watch(require("./ui/contents/toolkit.js"), {
  mmContentToolKit: function (v) {
    mmContentToolKit = v;
  }
}, 4);
var mmContentFormulary;
module.watch(require("./ui/contents/formulary.js"), {
  mmContentFormulary: function (v) {
    mmContentFormulary = v;
  }
}, 5);
var mmContentBestiary;
module.watch(require("./ui/contents/bestiary.js"), {
  mmContentBestiary: function (v) {
    mmContentBestiary = v;
  }
}, 6);
var mmContentMenagerie;
module.watch(require("./ui/contents/menagerie.js"), {
  mmContentMenagerie: function (v) {
    mmContentMenagerie = v;
  }
}, 7);
var mmContentBazaar;
module.watch(require("./ui/contents/bazaar.js"), {
  mmContentBazaar: function (v) {
    mmContentBazaar = v;
  }
}, 8);
var mmContentForum;
module.watch(require("./ui/contents/forum.js"), {
  mmContentForum: function (v) {
    mmContentForum = v;
  }
}, 9);
var mmContentObservatory;
module.watch(require("./ui/contents/observatory.js"), {
  mmContentObservatory: function (v) {
    mmContentObservatory = v;
  }
}, 10);
MMDEBUG && console.log("mmContentHome:", mmContentHome); // Templates must have one enclosing tag.
// const HomePage = { template: '<span><v-icon>mood</v-icon> Home Page</span>'};
// const Orientation = { template: '<span><v-icon>mood</v-icon> Orientation</span>'};
// const SurvivalGuide = { template: '<span><v-icon>mood_bad</v-icon> Survival Guide</span>'};
// const Toolkit = { template: '<span><v-icon>build</v-icon> Toolkit</span>'};
// const Formulary = { template: '<span><v-icon>palette</v-icon> Formulary</span>'};
// const Bestiary = { template: '<span><v-icon>bug_report</v-icon> Bestiary</span>'};
// const Menagerie = { template: '<span><v-icon>pets</v-icon> Menagerie</span>'};
// Declare Happy and Sad routes...

var routes = [{
  path: '/',
  component: mmContentHome
}, {
  path: '/index.html',
  component: mmContentHome
}, {
  path: '/orientation.html',
  component: mmContentOrientation
}, {
  path: '/survivalguide.html',
  component: mmContentSurvivalGuide
}, {
  path: '/toolkit.html',
  component: mmContentToolKit
}, {
  path: '/formulary.html',
  component: mmContentFormulary
}, {
  path: '/bestiary.html',
  component: mmContentBestiary
}, {
  path: '/menagerie.html',
  component: mmContentMenagerie
}, {
  path: '/bazaar.html',
  component: mmContentBazaar
}, {
  path: '/forum.html',
  component: mmContentForum
}, {
  path: '/observatory.html',
  component: mmContentObservatory
}]; // ... then add them to the router ...

var mmRouter = new VueRouter({
  routes: routes // short for `routes: routes`

});
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"main.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/main.js                                                                                      //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 0);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 1);
var Vue;
module.watch(require("./imports.js"), {
  Vue: function (v) {
    Vue = v;
  }
}, 2);
var drawerMixin, samecaseMixin;
module.watch(require("./mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 3);
var mmRouter;
module.watch(require("./routes.js"), {
  mmRouter: function (v) {
    mmRouter = v;
  }
}, 4);
var mmNavdrawer;
module.watch(require("./ui/navdrawer.js"), {
  mmNavdrawer: function (v) {
    mmNavdrawer = v;
  }
}, 5);
var mmToolbar;
module.watch(require("./ui/toolbar.js"), {
  mmToolbar: function (v) {
    mmToolbar = v;
  }
}, 6);
var mmContent;
module.watch(require("./ui/content.js"), {
  mmContent: function (v) {
    mmContent = v;
  }
}, 7);
var mmFooter;
module.watch(require("./ui/footer.js"), {
  mmFooter: function (v) {
    mmFooter = v;
  }
}, 8);
Meteor.startup(function () {
  // code to run on client at startup
  Session.set('visibleDrawer', false);
}); // Create the Vue instance

var mmVue = new Vue({
  template: '#mm-app-template',
  components: {
    'mm-navdrawer': mmNavdrawer,
    'mm-toolbar': mmToolbar,
    'mm-content': mmContent,
    'mm-footer': mmFooter
  },
  // Get common data and methods
  mixins: [drawerMixin, samecaseMixin],
  // Inject router
  router: mmRouter // We're getting fancy with the $mount API.
  // See https://vuejs.org/v2/api/#vm-mount

}).$mount('#app');
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});
require("/client/api/lists/demos.js");
require("/client/api/lists/docs.js");
require("/client/api/lists/repos.js");
require("/client/ui/contents/bazaar.js");
require("/client/ui/contents/bestiary.js");
require("/client/ui/contents/formulary.js");
require("/client/ui/contents/forum.js");
require("/client/ui/contents/heading.js");
require("/client/ui/contents/home.js");
require("/client/ui/contents/menagerie.js");
require("/client/ui/contents/observatory.js");
require("/client/ui/contents/orientation.js");
require("/client/ui/contents/orientation.md.js");
require("/client/ui/contents/survivalguide.js");
require("/client/ui/contents/survivalguide.md.js");
require("/client/ui/contents/toolkit.js");
require("/client/ui/menus/create.js");
require("/client/ui/menus/learn.js");
require("/client/ui/menus/play.js");
require("/client/ui/content.js");
require("/client/ui/footer.js");
require("/client/ui/navdrawer.js");
require("/client/ui/quickstart.js");
require("/client/ui/toolbar.js");
require("/client/debug.js");
require("/client/imports.js");
require("/client/mixins.js");
require("/client/routes.js");
require("/client/main.js");