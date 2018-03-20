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
var mdText = "\nGreat, we can write the orientation in markdown!\n\nWe're just going to have to set some styles to make this all work.\n\n1. One\n2. Two\n3. Three\n\nUnordered lists?\n\n- Here\n- Otherwise\n- random\n\n[Google](http://www.google.com/)\n\n*Wowie!*\n";
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
var mmContentSurvivalGuide = {
  name: 'mm-content-survivalguide',
  template: '#mm-content-survivalguide-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  }
};
MMDEBUG && console.log("mmContentSurvivalGuide defined in survivalguide.js:", mmContentSurvivalGuide);
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