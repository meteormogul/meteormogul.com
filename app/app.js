var require = meteorInstall({"client":{"ui":{"contents":{"articles":{"bazaar.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/bazaar.js                                                               //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleBazaar: function () {
    return mmArticleBazaar;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/bazaar.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
var mmArticleBazaar = new mmArticle('bazaar', 'Bazaar', mdText);
MMDEBUG && console.log("mmArticleBazaar defined in bazaar.js:", mmArticleBazaar);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bestiary.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/bestiary.js                                                             //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleBestiary: function () {
    return mmArticleBestiary;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/bestiary.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
var mmArticleBestiary = new mmArticle('bestiary', 'Bestiary', mdText);
MMDEBUG && console.log("mmArticleBestiary defined in bestiary.js:", mmArticleBestiary);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formulary.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/formulary.js                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleFormulary: function () {
    return mmArticleFormulary;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/formulary.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
var mmArticleFormulary = new mmArticle('formulary', 'Formulary', mdText);
MMDEBUG && console.log("mmArticleFormulary defined in formulary.js:", mmArticleFormulary);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"forum.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/forum.js                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleForum: function () {
    return mmArticleForum;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/forum.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
var mmArticleForum = new mmArticle('forum', 'Forum', mdText);
MMDEBUG && console.log("mmArticleForum defined in forum.js:", mmArticleForum);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"menagerie.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/menagerie.js                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleMenagerie: function () {
    return mmArticleMenagerie;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/menagerie.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
var mmArticleMenagerie = new mmArticle('menagerie', 'Menagerie', mdText);
MMDEBUG && console.log("mmArticleMenagerie defined in menagerie.js:", mmArticleMenagerie);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"observatory.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/observatory.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleObservatory: function () {
    return mmArticleObservatory;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/observatory.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
var mmArticleObservatory = new mmArticle('observatory', 'Observatory', mdText);
MMDEBUG && console.log("mmArticleObservatory defined in observatory.js:", mmArticleObservatory);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"orientation.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/orientation.js                                                          //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleOrientation: function () {
    return mmArticleOrientation;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/orientation.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
//MMDEBUG = true;
var mmArticleOrientation = new mmArticle('orientation', 'Orientation', mdText);
MMDEBUG && console.log("mmArticleOrientation defined in orientation.js:", mmArticleOrientation);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"survivalguide.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/survivalguide.js                                                        //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleSurvivalGuide: function () {
    return mmArticleSurvivalGuide;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/survivalguide.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
var mmArticleSurvivalGuide = new mmArticle('survivalguide', 'Survival Guide', mdText);
MMDEBUG && console.log("mmArticleSurvivalGuide defined in survivalguide.js:", mmArticleSurvivalGuide);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolkit.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/articles/toolkit.js                                                              //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticleToolKit: function () {
    return mmArticleToolKit;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var mmArticle;
module.watch(require("../article.js"), {
  mmArticle: function (v) {
    mmArticle = v;
  }
}, 1);
var mdText;
module.watch(require("../../../data/articles/toolkit.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 2);
var mmArticleToolKit = new mmArticle('toolkit', 'Toolkit', mdText);
MMDEBUG && console.log("mmArticleToolKit defined in toolkit.js:", mmArticleToolKit);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"notices":{"credits.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/notices/credits.js                                                               //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmCredits: function () {
    return mmCredits;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin, markedMixin;
module.watch(require("../../../mixins.js"), {
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
module.watch(require("../../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("../heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mdText;
module.watch(require("../../../data/notices/credits.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 4);
//MMDEBUG = true;
var mmCredits = {
  name: 'mm-content-credits',
  template: '#mm-content-notice-template',
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  },
  data: function () {
    return {
      title: 'Credits and Kudos',
      mdText: mdText
    };
  },
  mixins: [drawerMixin, samecaseMixin, markedMixin]
};
MMDEBUG && console.log("mmCredits defined in credits.js:", mmCredits);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"donations.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/notices/donations.js                                                             //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmDonations: function () {
    return mmDonations;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin, markedMixin;
module.watch(require("../../../mixins.js"), {
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
module.watch(require("../../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("../heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mdText;
module.watch(require("../../../data/notices/donations.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 4);
//MMDEBUG = true;
var mmDonations = {
  name: 'mm-content-donations',
  template: '#mm-content-notice-template',
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  },
  data: function () {
    return {
      title: 'Donations',
      mdText: mdText
    };
  },
  mixins: [drawerMixin, samecaseMixin, markedMixin]
};
MMDEBUG && console.log("mmDonations defined in donations.js:", mmDonations);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"help.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/notices/help.js                                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmHelp: function () {
    return mmHelp;
  }
});
var MMDEBUG;
module.watch(require("../../../imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var drawerMixin, samecaseMixin, markedMixin;
module.watch(require("../../../mixins.js"), {
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
module.watch(require("../../quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 2);
var mmContentHeading;
module.watch(require("../heading.js"), {
  mmContentHeading: function (v) {
    mmContentHeading = v;
  }
}, 3);
var mdText;
module.watch(require("../../../data/notices/help.md.js"), {
  mdText: function (v) {
    mdText = v;
  }
}, 4);
//MMDEBUG = true;
var mmHelp = {
  name: 'mm-content-help',
  template: '#mm-content-notice-template',
  components: {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  },
  data: function () {
    return {
      title: 'Help Wanted',
      mdText: mdText
    };
  },
  mixins: [drawerMixin, samecaseMixin, markedMixin]
};
MMDEBUG && console.log("mmHelp defined in help.js:", mmHelp);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"article.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/contents/article.js                                                                       //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmArticle: function () {
    return mmArticle;
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
var mmListArticles;
module.watch(require("../../data/lists/articles.js"), {
  mmListArticles: function (v) {
    mmListArticles = v;
  }
}, 4);
var mmLister;
module.watch(require("../../api/lister.js"), {
  mmLister: function (v) {
    mmLister = v;
  }
}, 5);
//MMDEBUG = true;
var mmListerArticles = new mmLister(mmListArticles);

var mmArticleLink = function (article, direction) {
  MMDEBUG && console.log('mmArticleLink()', article, direction);
  var which = null;

  if (direction == 'prev') {
    which = mmListerArticles.before(article);
  }

  if (direction == 'next') {
    which = mmListerArticles.after(article);
  }

  if (which) {
    return '/' + which + '.html';
  } else {
    return which;
  }
}; // Constructor for articles.
// A vue component that uses the mm-content-article-template


function mmArticle(article, title, mdText) {
  this.name = 'mm-content-' + article;
  this.template = '#mm-content-article-template';
  this.components = {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  };

  this.data = function () {
    return {
      title: title,
      mdText: mdText,
      prevLink: mmArticleLink(article, 'prev'),
      nextLink: mmArticleLink(article, 'next')
    };
  };

  this.mixins = [drawerMixin, samecaseMixin, markedMixin];
}

MMDEBUG && console.log("mmArticle defined in article.js:", mmArticle);
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
var mmObjDocs, mmListDocs;
module.watch(require("../../data/lists/docs.js"), {
  mmObjDocs: function (v) {
    mmObjDocs = v;
  },
  mmListDocs: function (v) {
    mmListDocs = v;
  }
}, 3);
var mmContentHome = {
  name: 'mm-content-home',
  template: '#mm-content-home-template',
  path: '/index.html',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart
  },
  data: function () {
    return {
      rows: [{
        name: 'first',
        row: [mmObjDocs['orientation'], mmObjDocs['survivalguide'], mmObjDocs['toolkit']]
      }, {
        name: 'second',
        row: [mmObjDocs['formulary'], mmObjDocs['bestiary'], {
          title: "Menagerie",
          tooltip: "Demo Sites",
          href: "/menagerie.html"
        }]
      }, {
        name: 'third',
        row: [mmObjDocs['bazaar'], mmObjDocs['forum'], mmObjDocs['observatory']]
      }]
    };
  }
};
MMDEBUG && console.log("mmContentHome defined in home.js:", mmContentHome);
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
module.watch(require("../../data/lists/repos.js"), {
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
module.watch(require("../../data/lists/docs.js"), {
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
module.watch(require("../../data/lists/demos.js"), {
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
var drawerMixin, samecaseMixin, mmQuickStart;
module.watch(require("./imports.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  },
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 0);
var mmContent = {
  name: 'mm-content',
  template: '#mm-content-template',
  mixins: [drawerMixin, samecaseMixin],
  components: {
    'mm-quickstart': mmQuickStart
  },
  data: function () {
    return {
      breadcrumbs: 'Home / Breadcrumbs go here...'
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
  mixins: [drawerMixin]
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imports.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/ui/imports.js                                                                                //
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
  mmQuickStart: function () {
    return mmQuickStart;
  }
});
var drawerMixin, samecaseMixin;
module.watch(require("../mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 0);
var mmQuickStart;
module.watch(require("./quickstart.js"), {
  mmQuickStart: function (v) {
    mmQuickStart = v;
  }
}, 1);
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
module.watch(require("../data/lists/docs.js"), {
  mmListDocs: function (v) {
    mmListDocs = v;
  }
}, 3);
var mmListDemos;
module.watch(require("../data/lists/demos.js"), {
  mmListDemos: function (v) {
    mmListDemos = v;
  }
}, 4);
var mmListRepos;
module.watch(require("../data/lists/repos.js"), {
  mmListRepos: function (v) {
    mmListRepos = v;
  }
}, 5);
var mmNavdrawer = {
  name: 'mm-navdrawer',
  template: '#mm-navdrawer-template',
  mixins: [drawerMixin],
  components: {
    'mm-quickstart': mmQuickStart
  },
  data: function () {
    return {
      docs: mmListDocs,
      demos: mmListDemos,
      repos: mmListRepos
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
  }
};
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"data":{"articles":{"bazaar.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/bazaar.md.js                                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nHere are services and vendors I use for my coding needs.  I'm not getting paid to link to them... yet.\n\nLast updated: March 21, 2018\n\n- [namecheap](https://www.namecheap.com/) - domain names\n- [GitHub](https://github.com/meteor-mogul) - repository for public code\n- [GitLab](https://about.gitlab.com/) - repository for private code\n- [netlify](https://www.netlify.com/) - deployment for static sites\n- [heroku](https://www.heroku.com/) - deployment for dynamic sites\n- [mLab](https://mlab.com/) - mongodb service\n- [mailgun](https://www.mailgun.com/) - for transactional emails\n- [mailchimp](https://mailchimp.com/) - for marketing emails\n- [jemjem](https://www.jemjem.com/) - source for used Macs\n- [amazon](https://www.amazon.com/) - I'm not just an owner, I also shop there\n- [codecademy](https://www.codecademy.com/catalog/subject/web-development) - a lot more affordable than my degree from Swarthmore\n- [unsplash](https://unsplash.com/) - free (as in free beer) pix\n- [xfinity](https://www.xfinity.com/) - not that I have a choice... it's great when it's working...\n\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"bestiary.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/bestiary.md.js                                                                 //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\n# Bugs in meteormogul.dev and Where to Find Them\n\nFor all the gory details about bugs and other nasties, see the [GitHub Issue tracker](https://github.com/meteor-mogul/meteormogul.dev/issues).\n\nFilter by `label:bug` for all bugs.\n\n## Particularly Pestiferous, Pestilential and Pernicious Pests\n\nLast update: March 18, 2018\n\nFilter by `label:P5` for particularly pestiferous, pestilential and pernicious pests.\n\n### Development Mode versus Production\n\nI don't understand Meteor's build system well enough to figure out how to convince it to produce a static single-page application, so I've hacked around it with `wget`.\n\nI just run a development version of my meteor app, copy the files that are necessary to make it work, and delete files that are not.\n\nWe'll see if I can get away with this approach, or whether I need to do a deep dive into the internals of Meteor's build mechanisms to produce a static SPA bundle that will actually work.\n\n### Circular Import Dependencies\n\nYou need to be careful with import statements in `.js` files.  If you get into a circular import situation, the import will silently fail and no error is thrown.\n\nOne way to check is to `console.log` the variable immediately after you import it.  If Meteor reports it as `undefined` then look for circular imports.\n\nFor example, the following mixin was a bad idea because I actually want to import components in `routes.js`.  If the mixin imports from `routes.js` and the component imports from `mixins.js` and then `routes.js` imports the component, we're in a circular dependency and things will fail silently.\n\n```js\n// Define data and methods in one place, used by multiple Vue components\nvar drawerMixin =\n{\n\n  data:\n  function() {\n    return {\n      visibleDrawer: false\n    };\n  },\n\n  meteor:\n  {\n    visibleDrawer: {\n      update () {\n        return Session.get('visibleDrawer');\n      }\n    }\n  },\n\n  methods:\n  {\n    toggleDrawer: function () {\n      Session.set('visibleDrawer', !Session.get('visibleDrawer'));\n    },\n    showDrawer: function () {\n      Session.set('visibleDrawer', true);\n    },\n    hideDrawer: function () {\n      Session.set('visibleDrawer', false);\n    }\n  },\n\n  // Do NOT do this!  It will lead to circular imports and symbols will\n  // not be available when you expect them.\n  router:\n  mmRouter\n\n}\n```\n\n### camelCase vs. kebab-case\n\nThe Vue.js docs explain the [camelCase vs. kebab-case issue](https://vuejs.org/v2/guide/components.html#camelCase-vs-kebab-case).\n\nBasically, use camelCase in your `.js` and `{{ interpolations }}` and kebab-case in naming your `.html` attributes for child component props.\n\nThis will NOT work:\n\n```html\n<script type=\"text/x-template\" id=\"mm-content-heading-template\">\n  <h1>{{ content-title }}</h1>\n</script>\n```\n\nVue will try to subtract the `title` prop from the `content` prop for the interpolation.\n\nBut this will:\n\n```html\n<script type=\"text/x-template\" id=\"mm-content-heading-template\">\n  <h1>{{ contentTitle }}</h1>\n</script>\n```\n\nIf the above is in a child component, you should not call it like this because HTML attributes are case-insensitive:\n\n```html\n<child-component contentTitle=\"Content Title Text\"></child-component>\n```\n\nBut you can call it like so:\n\n```html\n<child-component content-title=\"Content Title Text\"></child-component>\n```\n\nVue.js automatically translates between camelCase and kebab-case for you.\n\n### Serving a Text-Only Version of the Website\n\nResponsive design is wonderful for graphic displays, but site is completely useless for blind users since text-only rendering is empty.\n\nHow to get Meteor to serve up a version that works with text-only browsers?\n\nDo any text-only browsers support JavaScript?\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"formulary.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/formulary.md.js                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nOnce I learn how to do more things with Meteor Mogul, I'll put the recipes in this formulary.\n\n## Debugging\n\nFirst, get [Vue.js devtools](https://github.com/vuejs/vue-devtools).\n\nI find Chrome to be the most dependable browser to use for development; there is a Vue.js devtools extension for Chrome.  Once you add it, you'll see it at the very right of the developer tools tabs (Elements, Console, Sources, ..., Vue).\n\nIn addition to all the help you get from this and all the regular JavaScript debugging built into Chrome, I still find it is helpful to add console logging from time to time.\n\nSo I set `MMDEBUG` in `client/debug.js`.  The `imports.js` file imports this symbol from `debug.js` and re-exports it, so all other code can just import the symbol from `imports.js`.  When `true`, `MMDEBUG` turns on the console logging debug statements I've sprinkled through the code in places that have caused me heartache.  E.g.,\n\n```js\nMMDEBUG && console.log(\"mmContentHome defined in home.js:\", mmContentHome);\n```\n\n## Vue Components\n\nEach Vue instance and component is defined by one `.html` file that contains its template, inside `<script type=\"text/x-template\" id=\"name\">`, and one `.js` file that contains its code.\n\nSome Vue components also have a `.md.js` file that contains markdown text.\n\nThe main Vue app is defined in `client/main.js`.\n\nRather than registering components globablly with `Vue.component()`, I use local registration by giving each instance and component a `components` attribute.\n\nFor example, here is the definition of the main Vue instance, locally registering components for navigation drawer, toolbar, content and footer:\n\n```js\n// Create the Vue instance\nvar mmVue = new Vue({\n\n    template:\n    '#mm-app-template',\n\n    components:\n    {\n      'mm-navdrawer': mmNavdrawer,\n      'mm-toolbar': mmToolbar,\n      'mm-content': mmContent,\n      'mm-footer': mmFooter\n    },\n\n    // Get common data and methods\n    mixins:\n    [\n      drawerMixin\n    ]\n\n  // We're getting fancy with the $mount API.\n  // See https://vuejs.org/v2/api/#vm-mount\n}).$mount('#app');\n```\n\n### Mixins\n\nCommon code that multiple vue components need is defined as [mixins](https://vuejs.org/v2/guide/mixins.html).\n\nFor example, to allow multiple components to show or hide the navigation drawer, here is the drawerMixin from `mixins.js`:\n\n```js\n// Define data and methods in one place, used by multiple Vue components\nvar drawerMixin =\n{\n\n  data:\n  function() {\n    return {\n      visibleDrawer: false\n    };\n  },\n\n  meteor:\n  {\n    visibleDrawer: {\n      update () {\n        return Session.get('visibleDrawer');\n      }\n    }\n  },\n\n  methods:\n  {\n    toggleDrawer: function () {\n      Session.set('visibleDrawer', !Session.get('visibleDrawer'));\n    },\n    showDrawer: function () {\n      Session.set('visibleDrawer', true);\n    },\n    hideDrawer: function () {\n      Session.set('visibleDrawer', false);\n    }\n  },\n\n}\n```\n\nNOTE: While it is tempting to use that mixin to also inject the router, so every component that gets the drawerMixin can also do routing, this leads to circular imports and a P5 Bug.  See \"Circular Import Dependencies\" in the [Bestiary](/#/bestiary.html).\n\n### Markdown\n\nIt gets tedious to write in HTML.  So I'm using the Meteor `markdown` package, which exports `Showdown`, a JavaScript version of Markdown, so my app can parse markdown strings.\n\nI've added a `markedMixin` which provides a `marked` method.  Pass a string with markdown text to this method and it will return raw HTML.  Use `v-html` in a Vue component to display the markdown text.  E.g.,\n\nPut this in the HTML template:\n```html\n<v-card-text v-html=\"marked(mdText)\"></v-card-text>\n```\n\nAnd this in the JS code for the component:\n\n```js\nimport { markedMixin } from '../../mixins.js';\nimport { Showdown } from 'meteor/markdown';\n// markdown text for orientation\nimport { mdText } from './orientation.md.js';\n\nconst converter = new Showdown.converter();\n\nvar mmContentOrientation =\n{\n  name:\n  'mm-content-orientation',\n\n  template:\n  '#mm-content-orientation-template',\n\n  data:\n  function () {\n    return {\n      mdText\n    };\n  },\n\n  mixins:\n  [\n    markedMixin\n  ],\n\n};\n```\n\nI split out the markdown text into a separate file with a `.md.js` extension.  The `.js` allows this file to be imported.  You can tell Atom to syntax highlight these files as `GitHub Markdown`.\n\n## Routing\n\nRouting is done with [hash mode](https://router.vuejs.org/en/essentials/history-mode.html) because I haven't figured out how to get `phantomjs` abd `wget` to follow routes when the app is in `history mode`.\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"forum.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/forum.md.js                                                                    //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nThere is no forum specifically for Meteor Mogul, but here are some places where you can ask questions and get answers about things related to Meteor Mogul:\n\n- [stack overflow](https://stackoverflow.com/) - use keyword search\n- [Meteor Forum: VueJS category](https://forums.meteor.com/c/vue)\n- [VueJS Forum: Get Help](https://forum.vuejs.org/c/help)\n- [Vuetify Issues](https://github.com/vuetifyjs/vuetify/issues)\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"menagerie.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/menagerie.md.js                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nHere's a menagerie of Meteor Mogul demos running on heroku. More to come!\n\n- [Hello, world!](https://meteor-mogul-hello-world.herokuapp.com/) - Start here.\n- [Meteor Mogul Vue Intro](https://meteor-mogul-vue-intro.herokuapp.com/) - Just showing the VueJS code examples running in a Meteor app.\n- [Playground](https://meteor-mogul-playground.herokuapp.com/) - Who knows what will be going on here!\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"observatory.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/observatory.md.js                                                              //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\n# Meteor Mogul References and Resources\n\nLast updated: March 17, 2018\n\nThis observatory is where I'll keep an eye on what's happening in the open source and web development universes.\n\n## Full-stack JavaScript Framework\n\n### Meteor\n\n- [Meteor](https://www.meteor.com/)\n- [vue-meteor-tracker](https://github.com/meteor-vue/vue-meteor-tracker)\n- [Atmosphere](https://atmospherejs.com/meteormogul)\n\n### VueJS\n\n- [VueJS](https://vuejs.org/) - View Framework\n- [Vue Router](https://router.vuejs.org/en/) - Router\n- [Vuetify](https://vuetifyjs.com/en/) - Component Framework\n- [Material Design Icons](https://material.io/icons/) - Icon Font\n\n### Node.js\n\n- [Node.js](https://nodejs.org/en/)\n- [npm](https://www.npmjs.com/)\n\n### Databases and Query Languages\n\n- [MongoDB](https://www.mongodb.com/)\n- [GraphQL](https://graphql.org/)\n- [Apollo](https://www.apollographql.com/)\n\n## Resources and Tools\n\n### Toolkit\n\n- [Google Chrome](https://www.google.com/chrome/)\n- [git](https://git-scm.com/)\n- [Atom](https://atom.io/)\n- [GitHub Desktop](https://desktop.github.com/)\n\n### Headless Browsers and Testing\n\n- [PhantomJS](http://phantomjs.org/)\n- [Puppeteer](https://developers.google.com/web/tools/puppeteer/)\n- [Selenium WebDriver](https://www.seleniumhq.org/projects/webdriver/)\n\n### Hosts\n\n- [GitHub](https://github.com/meteor-mogul)\n- [Heroku](http://www.heroku.com/)\n- [Netlify](https://www.netlify.com/)\n- [jsDelivr](https://www.jsdelivr.com/)\n- [unpkg](https://unpkg.com/#/)\n\n### Code Play Pens\n\n- [JSFiddle](https://jsfiddle.net/)\n- [CodePen](https://codepen.io/)\n- [jsbin](https://jsbin.com/?html,output)\n- [Code Sandbox](https://codesandbox.io/s/vue)\n- [GitHubGist](https://gist.github.com/)\n\n### Miscellaneous Meteor Mogul Materiel\n\n- [Unsplash](https://unsplash.com/) - images\n- [Favicon Generator](https://realfavicongenerator.net/) - favicon\n- [wget](https://www.gnu.org/software/wget/) - web mirroring\n\n# Resources and References Outside of Meteor Mogul's Orbit\n\n## Development Environment\n\n### Browsers\n- [Mozilla Firefox](https://www.mozilla.org/en-US/firefox/new/)\n- [Apple Safari](https://www.apple.com/safari/)\n- [Micosoft Edge](https://www.microsoft.com/en-us/windows/microsoft-edge)\n\n### Programming Editors\n- [Visual Studio Community](https://www.visualstudio.com/vs/community/)\n- [Xcode](https://developer.apple.com/xcode/)\n\n### Bundlers\n- [Webpack](https://webpack.github.io/)\n\n## JavaScript Frameworks\n\n### Application Frameworks\n\n- [Ember](https://www.emberjs.com/)\n- [VulcanJS](http://vulcanjs.org/)\n\n### View Frameworks\n\n- [Blaze](http://blazejs.org/)\n- [React](https://reactjs.org/)\n- [Angular](https://angularjs.org/)\n\n### Component Frameworks\n\n- [Bootstrap](https://getbootstrap.com/)\n- [Foundation](https://foundation.zurb.com/)\n- [Materialize](http://materializecss.com/)\n- [Material-UI](http://www.material-ui.com/#/)\n- [Element](http://element.eleme.io/#/en-US)\n- [Quasar](http://quasar-framework.org/)\n\n## Non-JavaScript Frameworks\n\n- [Ruby on Rails](http://rubyonrails.org/)\n- [Laravel](https://laravel.com/)\n\n## Static Site Generators\n\n- [jekyll](https://jekyllrb.com/)\n- [hexo](https://hexo.io/)\n- [hugo](https://gohugo.io/)\n\n## Query Languages and Databases\n\n- [SQL](https://modern-sql.com/)\n- [SQLite](https://www.sqlite.org/index.html)\n- [MySQL](https://www.mysql.com/)\n- [PostGreSQL](https://www.postgresql.org/)\n\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"orientation.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/orientation.md.js                                                              //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nMeteor Mogul is a hobby project for learning [Meteor][meteor], [VueJS][vue] and [Vuetify](https://vuetifyjs.com/en/) to create personal apps for friends and family and demo apps for potential employers and investors.\n\nThe Meteor Mogul project is a collection of [heavily-commented Meteor apps with public GitHub repos](https://github.com/meteor-mogul/) that you can study.  I can't promise that any of the apps is doing anything the \"right\" way, but I do try to make sure each app at least runs (or explain why it doesn't).  Read each repo's README.md!\n\nI'm [dogfooding](https://en.wikipedia.org/wiki/Eating_your_own_dog_food) with the website you're currently reading, which starts life as [meteormogul.dev](https://github.com/meteor-mogul/meteormogul.dev), then gets processed by [Meteor Mogul static site generator](https://github.com/meteor-mogul/mogul-ssg), and finally is published on [netlify](https://www.netlify.com/).\n\n## Getting Started\n\n### Quick Start\n\n```\n$ git clone https://github.com/meteor-mogul/mogul-helloworld.git/\n $ cd mogul-helloworld\n $ meteor npm install\n $ meteor\n```\n\n### Slow Start\n\nTo start playing with Meteor Mogul, you'll need:\n\n1. A computer connected to the Internet.\n2. An [evergreen web browser][evergreen].\n3. A programming editor.\n4. [`meteor`][meteor]\n5. [`git`][git]\n\nFor my recommendations on your development environment, see [Toolkit](/#/toolkit.html).\n\nOnce you have your tools, practice a little bit to know how to use them.  Then the following instructions will make sense.\n\nTo run Meteor Mogul apps on your own local development machine:\n\n```\n$ git clone https://github.com/meteor-mogul/<repo>.git <target-dir>\n $ cd <target-dir>\n $ meteor npm install\n $ meteor\n```\n\nHere's what each command does:\n\n- `git clone` checks out and downloads a local copy of my code.\n- `cd <target-dir>` changes directory so you can use the Meteor app.\n- `meteor npm install` downloads a local copy of all the [npm packages][npm] the app requires.\n- `meteor` builds and runs the app, which will start listening for HTTP requests on localhost port 3000 (http://localhost:3000/).\n\nOnce you've done all the above, then you have all the code dependencies downloaded locally and built for your platform.  After that, you don't have to worry if your Internet connection goes down; you have everything you need to keep playing with the code locally.\n\n#### Notes\n\n1.  The `$` notation means to run the commands in a shell.\n2.  The `<>` convention means replace that tag with your own string.\n\nFor example, to get the Meteor Mogul [Hello, world!](https://github.com/meteor-mogul/mogul-helloworld) app up and running (that's good one to start with, since it's the simplest and designed to just make sure you have your development environment set up correctly), in a shell you could do:\n\n```\n$ git clone https://github.com/meteor-mogul/mogul-helloworld.git awesome-sauce\n $ cd awesome-sauce\n $ meteor npm install\n $ meteor\n```\n\nIf you forget the `meteor npm install` you'll probably see error messages letting you know that you need to install the [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) node package.  The `meteor npm install` just has to happen once, but it's okay to run it multiple times.\n\nMeteor includes its own version of `npm`, a [package manager for JavaScript][npm]: `meteor npm` works just the same as `npm`.  So by installing Meteor you get convenient access to the entire `npm` library of JavaScript code.\n\nIf you can't clone my code and at least get it to run, try reading the GitHub and Meteor documentation and get their examples working first.  Then come back to Meteor Mogul.\n\n## About Meteor Mogul\n\nThe first thing you should know is that Meteor Mogul builds on more robust projects that are integrating VueJS with Meteor.  In particular, take a look at [vue+meteor](https://github.com/meteor-vue/vue-meteor).\n\nMeteor Mogul is one of my many hobbies; I often have to step away from coding for months at a time.  To help my future self pick up where I left off, I'm commenting the heck out of my code and writing prolific documentation to solidify what I'm learning.\n\n### Documentation\n\n- Orientation: Getting Started\n- [Survival Guide](/#/survivalguide.html): Concepts and Strategies\n- [Toolkit](/#/toolkit.html): Development Environment\n- [Formulary](/#/formulary.html): How to Do Stuff\n- [Bestiary](/#/bestiary.html): Bugs and Where to Find Them\n\n### Demos\n\nI deploy demonstrations to [heroku](https://www.heroku.com/), and keep a list of them in the [Menagerie](/#/menagerie.html).\n\nFor example,\n\n- [Hello, world!](https://meteor-mogul-hello-world.herokuapp.com/)\n- [Meteor Mogul Vue Intro](https://meteor-mogul-vue-intro.herokuapp.com/)\n\n### Code Repos\n\nCheck out GitHub for a [list of Meteor Mogul code repos](https://github.com/meteor-mogul).\n\n### Ecosystem\n\n- [Bazaar](/#/bazaar.html): Shameless Commerce Division\n- [Forum](/#/forum.html): Where to Ask Questions and Share Answers\n- [Observatory](/#/observatory.html): Related Projects and Resources\n\n### Meteor Mogul Roadmap\n\nOnce I have wrapped my mind around how other people are integrating VueJS with Meteor, and have some reasonable hope that I'm on the right track, I'll bump the status to beta, post an announcement somewhere, and invite random strangers to give me feedback and ideas.\n\n### Forking Meteor Mogul\n\nIf you're interested in developing your own apps, you'll want to set up your own [GitHub](https://github.com/) account, then fork my repos.  Then you can do whatever you want with them.  All of my Meteor Mogul code is MIT licensed, which means that you can have it but you can't sue me if it doesn't work for you.  It's free, with no strings (and no promises or warranties) attached.\n\nI hope Meteor Mogul saves you some time if you're interested in seeing what it's like to develop apps with VueJS and Meteor together.\n\nNow, [go get some Meteor Mogul code](https://github.com/meteor-mogul)!\n\nHave fun!\n\n*-Fred*\n\nP.S. Why the name \"Meteor Mogul\"?   What I had in mind was getting over the bumps (in [downhill skiing](https://en.wikipedia.org/wiki/Mogul_skiing), \"moguls\" are bumps in the snow) that challenge new developers, and also reaching the goal of becoming a better Meteor developer (in the sense of a \"[mogul](https://www.google.com/search?q=Dictionary#dobs=mogul)\" as a powerful person).\n\n[vue]: https://vuejs.org/\n[meteor]: https://www.meteor.com/\n[evergreen]: https://www.techopedia.com/definition/31094/evergreen-browser\n[npm]: https://www.npmjs.com/\n[git]: https://git-scm.com/\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"survivalguide.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/survivalguide.md.js                                                            //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nI'm writing this survival guide to share what I wish somebody had told me when I started playing around with Meteor.\n\n# Meteor Mogul Core Concepts\n\n Since Meteor Mogul is a hobby project, which means I often have to step away for months at a time, here are my design guidelines:\n\n1. Comment code clearly and profusely.\n2. Write prolific documentation.\n3. Keep it simple; remove any unnecessary pieces or dependencies.\n4. Write old-fashioned JavaScript; avoid syntactic sugar that confuses me.\n\n## Other Projects Integrating Meteor and VueJS\n\n[Other projects like vue+meteor](https://github.com/meteor-vue/vue-meteor) aim for a robust \"first-class\" integration of VueJS with Meteor.\n\nThe ambition of Meteor Mogul is more modest: it's here just to help you quickly get writing apps that use VueJS for the front-end and things that Meteor provides like MongoDB on the back end.\n\n## Why Meteor Mogul?\n\nMeteor Mogul is a platform that makes it easier to write personal and demo web apps that work on modern [evergreen browsers][evergreen].  My goal is to write as many practical example apps as I can.  If this helps other people write their own apps, that would be great.  The more of us sharing ideas and code, the better!\n\nMeteor is a full-stack JavaScript framework that provides build scripts, a packaging system that helps you leverage a huge amount of code written by other people, and a super-simple persistence layer so your apps can save data without you having to worry about configuring a database.\n\nOne of the parts of a full-stack framework is the view framework for your user interface.  You can use any JavaScript view framework with Meteor, but the four major ones are\n\n1. [Blaze](http://blazejs.org/)\n2. [React](https://reactjs.org/)\n3. [Angular](https://angular.io/)\n4. [VueJS][vue]\n\nVueJS is easy to learn and has momentum going for it -- the perfect match for Meteor.  VueJS enhances the Meteor developer experience with a view layer that is extremely intuitive and easy to use, while also being cleverly designed to allow you to tackle more sophisticated projects as your skill grows.\n\nThe final piece to building web apps is a component framework.  This provides user interface widgets and styles that work within the view framework.  Vuetify is a component framework for Vue that has a great set of features for people learning to develop web apps.\n\nBy the way, if you'd like to learn about other full-stack JavaScript frameworks, view frameworks, component frameworks, and constellations of related open source software, see the [Observatory](/#/observatory.html).\n\n## Current Status of Meteor Mogul: Alpha\n\nThis is very much a work in progress as I figure out how Meteor, VueJS and Vuetify all work.\n\nFor example, I am in the middle of writing an account management system using Vue and Vuetify:\n\n- [Meteor Mogul Accounts](https://github.com/meteor-mogul/accounts-vuetify)\n\nBut I think I have enough experience (i.e., I've made enough bone-headed mistakes) that I'm publishing what I've learned in case it may get more people to start playing around with Meteor, VueJS and Vuetify.\n\n## Meteor Mogul Under the Hood\n\nThe main thing Meteor Mogul does is:\n\n- provides the full version (that can compile templates) of the VueJS distribution\n- as a Meteor package ([meteormogul:vue-dist](https://atmospherejs.com/meteormogul/vue-dist))\n- on [Atmosphere](https://atmospherejs.com/meteormogul) (which is the public directory of packages written for Meteor),\n- using the [static-html](https://atmospherejs.com/meteor/static-html) package to parse `.html` files, and\n- removes the Blaze package.\n\nSo then when you write your `.html` files, vue.js deals with them instead of Blaze trying to compile them into Blaze templates.\n\nAnother thing Meteor Mogul provide access to is the [vue-meteor-tracker](https://github.com/meteor-vue/vue-meteor-tracker) mixin for Vue so your Vue components can see [Tracker](https://docs.meteor.com/api/tracker.html) reactivity.  This comes in handy for writing Vue components that can use Meteor [Accounts](https://docs.meteor.com/api/accounts.html), [Collections](https://docs.meteor.com/api/collections.html) and [Session](https://docs.meteor.com/api/session.html).\n\nMeteor Mogul also provides access to a rich set of user interface widgets thanks to [Vuetify](https://github.com/meteor-mogul/mogul-vuetify-dist) and [Material Design icon fonts for Meteor](https://github.com/meteor-mogul/mogul-material-design-icons-fonts).\n\n## Using the NPM version of vue.js in Meteor\n\nYou can also use `meteor npm` to get the latest version of vue.js.\n\nIn the Meteor universe of code, there are two main package managers and distribution sites:\n\n1. Atmosphere: packages written specifically for Meteor.\n2. npm: all sorts of JavaScript packages (the name reflects its origins as a repository for Node.js packages).\n\nI decided to package up the VueJS distribution on Atmosphere for two reasons:\n\n1. I find Atmosphere's package system to be very convenient, and\n2. It was a good learning experience to dig into the Vue code to figure out how to provide `Vue` as an Atmosphere package.\n\nMuch as I like Atmosphere, the people running Meteor have warned that it may be going away and everyone should start using `npm` now.\n\nSo, if you want to follow that advice play around with the `npm` version of VueJS, here's how to get the full build that includes template compilation:\n\n```\n$ meteor npm install vue\n```\n\nThen in your `.js` files, `import Vue from 'vue/dist/vue.js';`.  If you just do `import Vue from 'vue';` you'll get the runtime version, which doesn't allow you to compile templates.\n\nAs for me, I'm going to keep packaging up VueJS for Atmosphere until they shut it down.\n\n# Meteor and Other Concepts\n\n## Single Page App\n\nThe first thing to understand is what Meteor is trying to do for you.  Basically, Meteor's goal in life is to produce a bundle of JavaScript code that runs a single page app.\n\nMeteor believes that its code will be running in two kinds of places:\n\n1.  On a server inside a Node.js instance.\n2.  On a browser inside a JavaScript engine.\n\nFor the browser code to work, Meteor will package up a single `.html` file, along with a bunch of JavaScript, CSS and other assets.  The server code will listen for connections and deliver this bundle to browser clients that request it.\n\nOnce the code is running on the browser, then it can open up a channel back to the server and send and receive messages using Meteor's Distributed Data Protocol (DDP).\n\nThis is a different view of the world than a traditional web server, which sticks to HTTP.  The HTTP model is for a browser to request a document and the server to send it.  Then a browser might request (GET) another document or send some information back as a POST that the server will mull over.\n\n## Routing\n\nThere are two ways to think about routing.  One is client side and the other is server side.\n\nClient-side routing is just setting the state of the client.  In response to a change in state, the client makes some change to its user interface.  By giving a particular state a route, you make it easy to put the client in that state and you can navigate through a set of states.\n\nServer-side routing is what a traditional web server does in response to a request from a client.  But instead of serving a static file that is stored on the server's filesystem, a Meteor app running in a Node.js instance on the server will decide what it wants to send to the client in response to each route requested.\n\nWith server-side routing, it can appear to the browser client that the Meteor app is just like any other server, sending different pages in response to requests.  But the Meteor app can also keep open a connection and send and receive responses via DDP.\n\nVue has two kinds of client-side routing: \"hash mode\" and \"history mode\".  Hash mode sticks a # in the URL, which means the browser knows not to do a page reload and simply moves to a different state on the page it already has.\n\nHistory mode uses history.pushState to avoid a page reload, but it's sort of a hybrid into server-side routing since the server needs to be prepared to handle URLs for different pages.\n\n[vue]: https://vuejs.org/\n[meteor]: https://www.meteor.com/\n[evergreen]: https://www.techopedia.com/definition/31094/evergreen-browser\n[npm]: https://www.npmjs.com/\n[git]: https://git-scm.com/\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"toolkit.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/articles/toolkit.md.js                                                                  //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nHere are my specific recommendations for your development environment.\n\n# MacOS or Linux\n\nYou will save lots of time and heartache developing on a MacOS or linux machine, and not trying to code on Microsoft Windows.\n\nMeteor builds a lot more slowly under Windows.  Plus you'll have all the fun of missing Unix utilities and CRLF line ending weirdness.\n\nIf you can't afford a Mac, get an old PC and put a version of linux on it.\n\n# Chrome Browser\n\n[Google Chrome](https://www.google.com/chrome/browser/) just works.\n\nI really tried hard to like [Mozilla Firefox](https://www.mozilla.org/).  But on both MacOS and Windows I have too many odd glitches with it.\n\nWhile I recommend developing with Chrome, I also recommend occasionally firing up Firefox and Safari on MacOS and Edge on Windows just to see how your app looks on those browsers.  And of course it's fun to look at your apps on your cell phone and a tablet to check responsiveness.\n\n# Programming Editor\n\nI recommend [Atom](https://atom.io/).\n\n# Source Control\n\nGet [GitHub Desktop](https://desktop.github.com/) to manage commits without having to remember `git` shell commands.\n\n# Meteor\n\nOnce you have the above, you're good to go to get [Meteor](https://www.meteor.com/) and start coding.\n\nOnce you're rockin' with `meteor`, you'll use it to keep everything updated, including all of the Atmosphere and npm packages you want to play with.\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"lists":{"articles.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/lists/articles.js                                                                       //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmListArticles: function () {
    return mmListArticles;
  }
});
// List of articles
var mmListArticles = ['orientation', 'survivalguide', 'toolkit', 'formulary', 'bestiary', 'menagerie', 'bazaar', 'forum', 'observatory'];
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"demos.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/lists/demos.js                                                                          //
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
// client/data/lists/docs.js                                                                           //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmObjDocs: function () {
    return mmObjDocs;
  },
  mmListDocs: function () {
    return mmListDocs;
  }
});
// List of documentation
// title: Name of document
// href: Route to document
var mmObjDocs = {
  orientation: {
    title: 'Orientation',
    tooltip: "Getting Started",
    href: '/orientation.html'
  },
  survivalguide: {
    title: 'Survival Guide',
    tooltip: "Concepts and Strategies",
    href: '/survivalguide.html'
  },
  toolkit: {
    title: 'Toolkit',
    tooltip: "Development Environment",
    href: '/toolkit.html'
  },
  formulary: {
    title: 'Formulary',
    tooltip: "How To Do Stuff",
    href: '/formulary.html'
  },
  bestiary: {
    title: 'Bestiary',
    tooltip: "Bugs and Where to Find Them",
    href: '/bestiary.html'
  },
  bazaar: {
    title: 'Bazaar',
    tooltip: "Shameless Commerce Division",
    href: '/bazaar.html'
  },
  forum: {
    title: 'Forum',
    tooltip: "Where to Ask Questions and Share Answers",
    href: '/forum.html'
  },
  observatory: {
    title: 'Observatory',
    tooltip: "Related Projects and Resources",
    href: '/observatory.html'
  }
};
var mmListDocs = [mmObjDocs['orientation'], mmObjDocs['survivalguide'], mmObjDocs['toolkit'], mmObjDocs['formulary'], mmObjDocs['bestiary'], mmObjDocs['bazaar'], mmObjDocs['forum'], mmObjDocs['observatory']];
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"repos.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/lists/repos.js                                                                          //
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

}},"notices":{"credits.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/notices/credits.md.js                                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nLast update: March 22, 2018\n\nCredits and kudos to everyone behind the great projects and technologies that make Meteor Mogul possible.\n\n## Companies and Software\n\n- [Meteor](https://www.meteor.com/)\n- [VueJS](https://vuejs.org/)\n- [Vuetify](https://vuetifyjs.com/en/)\n- [Chrome](https://www.google.com/chrome/)\n- [Atom](https://atom.io/)\n- [GitHub](https://github.com/meteor-mogul)\n- [heroku](http://www.heroku.com/)\n- [Netlify](https://www.netlify.com/)\n\n## Code\n\n- [vue-meteor-tracker](https://github.com/meteor-vue/vue-meteor-tracker)\n\n## Foundations\n\n- [The Linux Foundation](http://www.linuxfoundation.org/)\n- [Free Software Foundation](https://www.fsf.org/)\n\nThanks!\n-Fred Horch, Brunswick, Maine\n\nP.S. This is just scratching the surface!  Working together to build and share free and open source software is one of the most amazing things humans have done so far.  May the source be with you!\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"donations.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/notices/donations.md.js                                                                 //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\n# Contributing to Meteor Mogul\n\nLast update: March 17, 2018\n\n## Contributing Code\n\nThis is a hobby project so no formal procedure for pulling code.\n\nI recommend that you create a [GitHub account](https://github.com/) for yourself so you can use their tools to manage your code contributions.\n\nI'm still learning GitHub's system myself, but I think this is the basic idea:\n\n1. Fork a [repo](https://github.com/meteor-mogul/meteormogul.dev) so you have your own private copy.\n2. Add whatever code you want.\n3. [Create a pull request](https://github.com/meteor-mogul/meteormogul.dev/pulls).\n\n## Contributing Money\n\nI should be so lucky!\n\nI'm not set up to accept money for Meteor Mogul, but if you find Meteor Mogul helpful, I encourage you to support Vue or Vuetify and tell them I sent you.\n\n- Donate to [support Vue](https://vuejs.org/support-vuejs/)\n- Donate to [support Vuetify](https://www.patreon.com/vuetify)\n\nThanks!\n-Fred Horch, Brunswick, Maine\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"help.md.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/data/notices/help.md.js                                                                      //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mdText: function () {
    return mdText;
  }
});
var mdText = "\nLast update: March 22, 2018\n\nI'd love some help figuring out the following:\n\n- breadcrumbs\n- how to convince Meteor to build a static site bundle of an app so we can build a useful static site generator in Meteor Mogul\n- sorting out the options for something like Simple Schema and Autoform to work with Vue\n- learning more about the process of going from a CSV upload to a nice set of charts, like Google Data Studio\n\nThanks!\n-Fred Horch, Brunswick, Maine\n";
/////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"api":{"lister.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/api/lister.js                                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmLister: function () {
    return mmLister;
  }
});

// Given an item, return previous or next item in list
// .before(item) and .after(item) return
//   false if item not in list
//   null if first or last item, respectively
//   otherwise, item before or after item in list
function mmLister(list) {
  this.list = list;

  this.before = function (item) {
    var position = this.list.indexOf(item);

    if (position < 0) {
      return false;
    }

    if (position == 0) {
      return null;
    }

    return this.list[position - 1];
  };

  this.after = function (item) {
    var position = this.list.indexOf(item);

    if (position < 0) {
      return false;
    }

    if (position == this.list.length - 1) {
      return null;
    }

    return this.list[position + 1];
  };
}

;
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

},"imports-mm.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/imports-mm.js                                                                                //
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
  mmRouter: function () {
    return mmRouter;
  }
});
var drawerMixin, samecaseMixin;
module.watch(require("./mixins.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  }
}, 0);
var mmRouter;
module.watch(require("./routes.js"), {
  mmRouter: function (v) {
    mmRouter = v;
  }
}, 1);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imports-ui.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/imports-ui.js                                                                                //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  mmNavdrawer: function () {
    return mmNavdrawer;
  },
  mmToolbar: function () {
    return mmToolbar;
  },
  mmContent: function () {
    return mmContent;
  },
  mmFooter: function () {
    return mmFooter;
  },
  mmContentHome: function () {
    return mmContentHome;
  },
  mmArticleOrientation: function () {
    return mmArticleOrientation;
  },
  mmArticleSurvivalGuide: function () {
    return mmArticleSurvivalGuide;
  },
  mmArticleToolKit: function () {
    return mmArticleToolKit;
  },
  mmArticleFormulary: function () {
    return mmArticleFormulary;
  },
  mmArticleBestiary: function () {
    return mmArticleBestiary;
  },
  mmArticleMenagerie: function () {
    return mmArticleMenagerie;
  },
  mmArticleBazaar: function () {
    return mmArticleBazaar;
  },
  mmArticleForum: function () {
    return mmArticleForum;
  },
  mmArticleObservatory: function () {
    return mmArticleObservatory;
  },
  mmDonations: function () {
    return mmDonations;
  },
  mmHelp: function () {
    return mmHelp;
  },
  mmCredits: function () {
    return mmCredits;
  }
});
var mmNavdrawer;
module.watch(require("./ui/navdrawer.js"), {
  mmNavdrawer: function (v) {
    mmNavdrawer = v;
  }
}, 0);
var mmToolbar;
module.watch(require("./ui/toolbar.js"), {
  mmToolbar: function (v) {
    mmToolbar = v;
  }
}, 1);
var mmContent;
module.watch(require("./ui/content.js"), {
  mmContent: function (v) {
    mmContent = v;
  }
}, 2);
var mmFooter;
module.watch(require("./ui/footer.js"), {
  mmFooter: function (v) {
    mmFooter = v;
  }
}, 3);
var mmContentHome;
module.watch(require("./ui/contents/home.js"), {
  mmContentHome: function (v) {
    mmContentHome = v;
  }
}, 4);
var mmArticleOrientation;
module.watch(require("./ui/contents/articles/orientation.js"), {
  mmArticleOrientation: function (v) {
    mmArticleOrientation = v;
  }
}, 5);
var mmArticleSurvivalGuide;
module.watch(require("./ui/contents/articles/survivalguide.js"), {
  mmArticleSurvivalGuide: function (v) {
    mmArticleSurvivalGuide = v;
  }
}, 6);
var mmArticleToolKit;
module.watch(require("./ui/contents/articles/toolkit.js"), {
  mmArticleToolKit: function (v) {
    mmArticleToolKit = v;
  }
}, 7);
var mmArticleFormulary;
module.watch(require("./ui/contents/articles/formulary.js"), {
  mmArticleFormulary: function (v) {
    mmArticleFormulary = v;
  }
}, 8);
var mmArticleBestiary;
module.watch(require("./ui/contents/articles/bestiary.js"), {
  mmArticleBestiary: function (v) {
    mmArticleBestiary = v;
  }
}, 9);
var mmArticleMenagerie;
module.watch(require("./ui/contents/articles/menagerie.js"), {
  mmArticleMenagerie: function (v) {
    mmArticleMenagerie = v;
  }
}, 10);
var mmArticleBazaar;
module.watch(require("./ui/contents/articles/bazaar.js"), {
  mmArticleBazaar: function (v) {
    mmArticleBazaar = v;
  }
}, 11);
var mmArticleForum;
module.watch(require("./ui/contents/articles/forum.js"), {
  mmArticleForum: function (v) {
    mmArticleForum = v;
  }
}, 12);
var mmArticleObservatory;
module.watch(require("./ui/contents/articles/observatory.js"), {
  mmArticleObservatory: function (v) {
    mmArticleObservatory = v;
  }
}, 13);
var mmDonations;
module.watch(require("./ui/contents/notices/donations.js"), {
  mmDonations: function (v) {
    mmDonations = v;
  }
}, 14);
var mmHelp;
module.watch(require("./ui/contents/notices/help.js"), {
  mmHelp: function (v) {
    mmHelp = v;
  }
}, 15);
var mmCredits;
module.watch(require("./ui/contents/notices/credits.js"), {
  mmCredits: function (v) {
    mmCredits = v;
  }
}, 16);
/////////////////////////////////////////////////////////////////////////////////////////////////////////

},"imports.js":function(require,exports,module){

/////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                     //
// client/imports.js                                                                                   //
//                                                                                                     //
/////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                       //
module.export({
  MMDEBUG: function () {
    return MMDEBUG;
  },
  Meteor: function () {
    return Meteor;
  },
  Session: function () {
    return Session;
  },
  Showdown: function () {
    return Showdown;
  },
  Vue: function () {
    return Vue;
  }
});
var MMDEBUG;
module.watch(require("./debug.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  }
}, 0);
var Meteor;
module.watch(require("meteor/meteor"), {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var Session;
module.watch(require("meteor/session"), {
  Session: function (v) {
    Session = v;
  }
}, 2);
var Showdown;
module.watch(require("meteor/markdown"), {
  Showdown: function (v) {
    Showdown = v;
  }
}, 3);
var Vue;
module.watch(require("meteor/meteormogul:vue-dist"), {
  Vue: function (v) {
    Vue = v;
  }
}, 4);
var Vuetify;
module.watch(require("meteor/meteormogul:vuetify-dist"), {
  Vuetify: function (v) {
    Vuetify = v;
  }
}, 5);
var VueRouter;
module.watch(require("meteor/meteormogul:vue-router-dist"), {
  VueRouter: function (v) {
    VueRouter = v;
  }
}, 6);
var VueMeteorTracker;
module.watch(require("vue-meteor-tracker"), {
  "default": function (v) {
    VueMeteorTracker = v;
  }
}, 7);
// Use Vue with packages
// Use VueMeteorTracker to give Vue access to Meteor reactivity
Vue.use(VueMeteorTracker); // Use Vuetify for style and UI widgets.

Vue.use(Vuetify); // Use Vue Router for routes.
// We're using client-side routes, which just changes state of app in browser.
// With client-side routes, server does not get involved.
// Server just delivers a Single Page App, then browser runs JavaScript to
// provide app functionality.

Vue.use(VueRouter);
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
var MMDEBUG, Session, Showdown;
module.watch(require("./imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  },
  Session: function (v) {
    Session = v;
  },
  Showdown: function (v) {
    Showdown = v;
  }
}, 0);
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
var mmContentHome, mmArticleOrientation, mmArticleSurvivalGuide, mmArticleToolKit, mmArticleFormulary, mmArticleBestiary, mmArticleMenagerie, mmArticleBazaar, mmArticleForum, mmArticleObservatory, mmDonations, mmHelp, mmCredits;
module.watch(require("./imports-ui.js"), {
  mmContentHome: function (v) {
    mmContentHome = v;
  },
  mmArticleOrientation: function (v) {
    mmArticleOrientation = v;
  },
  mmArticleSurvivalGuide: function (v) {
    mmArticleSurvivalGuide = v;
  },
  mmArticleToolKit: function (v) {
    mmArticleToolKit = v;
  },
  mmArticleFormulary: function (v) {
    mmArticleFormulary = v;
  },
  mmArticleBestiary: function (v) {
    mmArticleBestiary = v;
  },
  mmArticleMenagerie: function (v) {
    mmArticleMenagerie = v;
  },
  mmArticleBazaar: function (v) {
    mmArticleBazaar = v;
  },
  mmArticleForum: function (v) {
    mmArticleForum = v;
  },
  mmArticleObservatory: function (v) {
    mmArticleObservatory = v;
  },
  mmDonations: function (v) {
    mmDonations = v;
  },
  mmHelp: function (v) {
    mmHelp = v;
  },
  mmCredits: function (v) {
    mmCredits = v;
  }
}, 1);
MMDEBUG && console.log("mmContentHome:", mmContentHome); // Declare routes...

var routes = [{
  path: '/',
  component: mmContentHome
}, {
  path: mmContentHome.path,
  component: mmContentHome
}, {
  path: '/orientation.html',
  component: mmArticleOrientation
}, {
  path: '/survivalguide.html',
  component: mmArticleSurvivalGuide
}, {
  path: '/toolkit.html',
  component: mmArticleToolKit
}, {
  path: '/formulary.html',
  component: mmArticleFormulary
}, {
  path: '/bestiary.html',
  component: mmArticleBestiary
}, {
  path: '/menagerie.html',
  component: mmArticleMenagerie
}, {
  path: '/bazaar.html',
  component: mmArticleBazaar
}, {
  path: '/forum.html',
  component: mmArticleForum
}, {
  path: '/observatory.html',
  component: mmArticleObservatory
}, {
  path: '/donations.html',
  component: mmDonations
}, {
  path: '/help.html',
  component: mmHelp
}, {
  path: '/credits.html',
  component: mmCredits
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
var MMDEBUG, Meteor, Session, Vue;
module.watch(require("./imports.js"), {
  MMDEBUG: function (v) {
    MMDEBUG = v;
  },
  Meteor: function (v) {
    Meteor = v;
  },
  Session: function (v) {
    Session = v;
  },
  Vue: function (v) {
    Vue = v;
  }
}, 0);
var drawerMixin, samecaseMixin, mmRouter;
module.watch(require("./imports-mm.js"), {
  drawerMixin: function (v) {
    drawerMixin = v;
  },
  samecaseMixin: function (v) {
    samecaseMixin = v;
  },
  mmRouter: function (v) {
    mmRouter = v;
  }
}, 1);
var mmNavdrawer, mmToolbar, mmContent, mmFooter;
module.watch(require("./imports-ui.js"), {
  mmNavdrawer: function (v) {
    mmNavdrawer = v;
  },
  mmToolbar: function (v) {
    mmToolbar = v;
  },
  mmContent: function (v) {
    mmContent = v;
  },
  mmFooter: function (v) {
    mmFooter = v;
  }
}, 2);
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
require("/client/ui/contents/articles/bazaar.js");
require("/client/ui/contents/articles/bestiary.js");
require("/client/ui/contents/articles/formulary.js");
require("/client/ui/contents/articles/forum.js");
require("/client/ui/contents/articles/menagerie.js");
require("/client/ui/contents/articles/observatory.js");
require("/client/ui/contents/articles/orientation.js");
require("/client/ui/contents/articles/survivalguide.js");
require("/client/ui/contents/articles/toolkit.js");
require("/client/ui/contents/notices/credits.js");
require("/client/ui/contents/notices/donations.js");
require("/client/ui/contents/notices/help.js");
require("/client/data/articles/bazaar.md.js");
require("/client/data/articles/bestiary.md.js");
require("/client/data/articles/formulary.md.js");
require("/client/data/articles/forum.md.js");
require("/client/data/articles/menagerie.md.js");
require("/client/data/articles/observatory.md.js");
require("/client/data/articles/orientation.md.js");
require("/client/data/articles/survivalguide.md.js");
require("/client/data/articles/toolkit.md.js");
require("/client/data/lists/articles.js");
require("/client/data/lists/demos.js");
require("/client/data/lists/docs.js");
require("/client/data/lists/repos.js");
require("/client/data/notices/credits.md.js");
require("/client/data/notices/donations.md.js");
require("/client/data/notices/help.md.js");
require("/client/ui/contents/article.js");
require("/client/ui/contents/heading.js");
require("/client/ui/contents/home.js");
require("/client/ui/menus/create.js");
require("/client/ui/menus/learn.js");
require("/client/ui/menus/play.js");
require("/client/api/lister.js");
require("/client/ui/content.js");
require("/client/ui/footer.js");
require("/client/ui/imports.js");
require("/client/ui/navdrawer.js");
require("/client/ui/quickstart.js");
require("/client/ui/toolbar.js");
require("/client/debug.js");
require("/client/imports-mm.js");
require("/client/imports-ui.js");
require("/client/imports.js");
require("/client/mixins.js");
require("/client/routes.js");
require("/client/main.js");