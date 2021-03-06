// Cheat Sheet link definitions object
const cheats = [
  {
    id: 'chromeos',
    name: 'Chrome OS',
    links: [
      {
        name: 'CrOS Updates Serving',
        href: 'https://cros-updates-serving.appspot.com/',
        desc: 'Table detailing version rollout'
      }
    ]
  },
  {
    id: 'css',
    name: 'CSS/SaSS',
    links: [
      {
        name: 'Flexbox',
        href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/',
        desc: 'Quick reference guide'
      },
      {
        name: 'Koala',
        href: 'http://koala-app.com/',
        desc: 'GUI app for Less/SaSS compilation'
      },
      {
        name: 'Media Queries',
        href:
          'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries',
        desc: 'MDN documentation'
      },
      {
        name: 'SaSS',
        href: 'https://sass-lang.com/',
        desc: 'CSS pre-compiler'
      }
    ]
  },
  {
    id: 'data',
    name: 'Data',
    links: [
      {
        name: 'DynamoDB',
        href: 'https://aws.amazon.com/dynamodb/',
        desc: 'AWS hosted NoSQL database'
      },
      {
        name: 'Firebase',
        href: 'https://firebase.google.com/',
        desc: 'Google cloud based data storage'
      }
    ]
  },
  {
    id: 'deploy',
    name: 'Deploy',
    links: [
      {
        name: 'Babel',
        href: 'https://babeljs.io/docs/en/',
        desc: 'Javascript compiler, transpile ES6/7 to ES5'
      },
      {
        name: 'Docker',
        href: 'https://www.docker.com/',
        desc: 'Deploy, run, and scale applications using containers'
      },
      {
        name: 'Gulp',
        href: 'https://gulpjs.com/',
        desc: 'JS task runner'
      },
      {
        name: 'Kubernetes',
        href: 'https://kubernetes.io/',
        desc:
          'Open-source system for automating deployment, scaling, and management of containerized applications'
      },
      {
        name: 'Netlify',
        href: 'https://www.netlify.com/',
        desc: 'All-in-one platform for hosting modern web projects'
      },
      {
        name: 'Webpack',
        href: 'https://webpack.js.org/concepts/',
        desc: 'Module bundler'
      },
      {
        name: 'Zeit Now',
        href: 'https://zeit.co/now',
        desc: 'Hosting / serverless deployment'
      }
    ]
  },
  {
    id: 'design',
    name: 'Design',
    links: [
      {
        name: 'Bootswatch',
        href: 'https://bootswatch.com/',
        desc: 'Free themes for Bootstrap'
      },
      {
        name: 'Cleave.js',
        href: 'https://nosir.github.io/cleave.js/',
        desc: 'Input formatting library'
      },
      {
        name: 'Font Awesome',
        href: 'https://fontawesome.com/',
        desc: 'Icons to replace Bootstrap 3 glyphicons'
      },
      {
        name: 'Materialize',
        href: 'https://materializecss.com/',
        desc: 'A modern responsive front-end framework based on Material Design'
      },
      {
        name: 'Popmotion',
        href: 'https://popmotion.io/pure/',
        desc: 'Animation library'
      },
      {
        name: 'Skeleton',
        href: 'http://getskeleton.com/',
        desc: 'A dead simple, responsive boilerplate'
      },
      {
        name: 'Sweet Alert',
        href: 'https://sweetalert2.github.io/',
        desc:
          "A beautiful, responsive, customizable, accessible (wai-aria) replacement for javascript's popup boxes"
      },
      {
        name: 'Typed.js',
        href: 'https://mattboldt.com/demos/typed-js/',
        desc: 'Text typing animation'
      },
      {
        name: 'Unsplash',
        href: 'https://source.unsplash.com/',
        desc: 'Simple embedding of free random images of any size'
      }
    ]
  },
  {
    id: 'js',
    name: 'Javascript',
    links: [
      {
        name: 'Javascript MDN',
        sub: 'Docs',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        desc: 'Mozilla Developer Network docs'
      },
      {
        name: 'javascript.info',
        sub: 'Docs',
        href: 'http://javascript.info/',
        desc: 'Examples and tutorials'
      },
      {
        name: 'Service Workers',
        sub: 'Docs',
        href:
          'https://developers.google.com/web/fundamentals/primers/service-workers/',
        desc:
          'Offline availability for the web (<a href="https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API">more</a>'
      },
      {
        name: 'Axios',
        sub: 'Libraries',
        href: 'https://www.npmjs.com/package/axios',
        desc: 'Promise based HTTP client for the browser and node.js'
      },
      {
        name: 'Brain.js',
        sub: 'Libraries',
        href: 'https://github.com/BrainJS',
        desc: 'Machine learning'
      },
      {
        name: 'D3: Data Driven Documents',
        sub: 'Libraries',
        href: 'https://d3js.org/',
        desc:
          'D3.js is a JavaScript library for manipulating documents based on data'
      },
      {
        name: 'Electron',
        sub: 'Libraries',
        href: 'https://electronjs.org/',
        desc:
          'A framework for creating native applications with web technologies like JavaScript, HTML, and CSS'
      },
      {
        name: 'GraphQL',
        sub: 'Libraries',
        href: 'https://graphql.org/',
        desc:
          'A query language for your API (also see <a href="https://www.apollographql.com/">Apollo</a>'
      },
      {
        name: 'TensorFlow.js',
        sub: 'Libraries',
        href: 'https://js.tensorflow.org/',
        desc:
          'JS library for training and deploying ML models in the browser and on Node.js'
      },
      {
        name: 'TypeScript',
        sub: 'Libraries',
        href: 'https://www.typescriptlang.org/',
        desc:
          'TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces'
      },
      {
        name: 'Underscore.js',
        sub: 'Libraries',
        href: 'https://underscorejs.org/',
        desc:
          'Underscore.js is a utility-belt library for JavaScript that provides support for the usual functional suspects (each, map, reduce, filter...) without extending any core JavaScript objects'
      }
    ]
  },
  {
    id: 'react',
    name: 'React',
    links: [
      {
        name: 'React Dev Tools',
        sub: 'Chrome Extensions',
        href:
          'https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en',
        desc: 'Adds React debugging tools to the Chrome Developer Tools'
      },
      {
        name: 'Chrome Redux Dev Tools',
        sub: 'Chrome Extensions',
        href:
          'https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en',
        desc: "Redux DevTools for debugging application's state changes"
      },
      {
        name: 'JSX',
        sub: 'Docs',
        href: 'https://reactjs.org/docs/jsx-in-depth.html',
        desc: 'JSX Overview with examples'
      },
      {
        name: 'Formik',
        sub: 'Docs',
        href: 'https://jaredpalmer.com/formik/',
        desc: 'Build forms in React, without tears'
      },
      {
        name: 'React',
        sub: 'Docs',
        href: 'https://reactjs.org/docs/getting-started.html',
        desc: 'main docs'
      },
      {
        name: 'classnames',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/classnames',
        desc:
          'A simple JavaScript utility for conditionally joining classNames together'
      },
      {
        name: 'create-react-app',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/create-react-app',
        desc: 'Set up a modern web app by running one command'
      },
      {
        name: 'firebase',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/firebase',
        desc: 'Firebase JavaScript library for web and Node.js'
      },
      {
        name: 'firebaseui-web-react',
        sub: 'NPM',
        href: 'https://github.com/firebase/firebaseui-web-react',
        desc: 'React Wrapper for firebaseUI Web'
      },
      {
        name: 'react-router-dom',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/react-router-dom',
        desc:
          'DOM bindings for <a href="https://reacttraining.com/react-router/">React Router</a>'
      }
    ]
  },
  {
    id: 'redux',
    name: 'Redux',
    links: [
      {
        name: 'redux',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/redux',
        desc: 'A predictable state container for JavaScript apps'
      },
      {
        name: 'redux-auth-wrapper',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/redux-auth-wrapper',
        desc:
          'Auth library for React+Redux, for firebase auth see the react-redux-firebase <a href="https://github.com/prescottprue/react-redux-firebase/blob/master/docs/recipes/routing.md">Routing Recipies</a>'
      },
      {
        name: 'react-redux',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/react-redux',
        desc: 'Official React bindings for Redux'
      },
      {
        name: 'react-redux-firebase',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/react-redux-firebase',
        desc: 'Redux bindings for Firebase'
      },
      {
        name: 'redux-firestore',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/redux-firestore',
        desc:
          'Redux bindings for Firestore, provides low-level API used in other libraries such as react-redux-firebase'
      },
      {
        name: 'redux-thunk',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/redux-thunk',
        desc: 'Thunk middleware for Redux'
      }
    ]
  },
  {
    id: 'ruby',
    name: 'Ruby/Rails',
    links: [
      {
        name: 'Ruby 2.3.3',
        sub: 'Docs',
        href: 'https://ruby-doc.org/stdlib-2.3.3/',
        desc: 'Ruby Standard Library Documentation collection'
      },
      {
        name: 'Ruby on Rails Guides v4.2',
        sub: 'Docs',
        href: 'https://guides.rubyonrails.org/v4.2/',
        desc:
          'These guides are designed to make you immediately productive with Rails, and to help you understand how all of the pieces fit together'
      },
      {
        name: 'apartment',
        sub: 'Gems',
        href: 'https://github.com/influitive/apartment',
        desc: 'Database multi-tenancy for Rack (and Rails) applications'
      },
      {
        name: 'Haml',
        sub: 'Gems',
        href: 'http://haml.info/',
        desc: 'Beautifully DRY, well-indented, clear markup: templating haiku.'
      },
      {
        name: 'makara',
        sub: 'Gems',
        href: 'https://github.com/taskrabbit/makara',
        desc:
          'A Read-Write Proxy for Connections; Also provides an ActiveRecord adapter. <a href="http://tech.taskrabbit.com/">http://tech.taskrabbit.com/</a>'
      },
      {
        name: 'paper_trail',
        sub: 'Gems',
        href: 'https://github.com/paper-trail-gem/paper_trail',
        desc: 'Track changes to your rails models'
      },
      {
        name: 'rspec-rails',
        sub: 'Gems',
        href: 'https://github.com/rspec/rspec-rails',
        desc:
          'RSpec for Rails-3+ <a href="http://relishapp.com/rspec/rspec-rails">http://relishapp.com/rspec/rspec-rails</a>'
      },
      {
        name: 'sidekiq',
        sub: 'Gems',
        href: 'https://github.com/mperham/sidekiq',
        desc:
          'Simple, efficient background processing for Ruby <a href="http://sidekiq.org">http://sidekiq.org</a>'
      },
      {
        name: 'squeel',
        sub: 'Gems',
        href: 'https://github.com/activerecord-hackery/squeel',
        desc: 'Active Record, improved. Live again :)'
      }
    ]
  },
  {
    id: 'test',
    name: 'Testing',
    links: [
      {
        name: 'deepFreeze',
        href: 'https://github.com/substack/deep-freeze',
        desc: 'recursively Object.freeze() on objects and functions'
      },
      {
        name: 'Jasmine',
        href: 'https://jasmine.github.io/',
        desc: 'Behavior-driven development framework'
      },
      {
        name: 'Jest',
        href: 'https://jestjs.io/',
        desc:
          'A delightful JavaScript Testing Framework with a focus on simplicity'
      },
      {
        name: 'JSONPlaceholder',
        href: 'https://jsonplaceholder.typicode.com/',
        desc:
          'Online REST API for Testing and Prototyping, or mock your own with a local JSON file using: npm install json-server'
      },
      {
        name: 'Karma',
        href: 'https://karma-runner.github.io',
        desc: 'JavaScript testing in real browsers'
      },
      {
        name: 'Protractor',
        href: 'https://www.protractortest.org/',
        desc: 'End to end testing for Angular'
      }
    ]
  },
  {
    id: 'vscode',
    name: 'VS Code',
    links: [
      {
        name: 'Emmet',
        sub: 'Docs',
        href: 'https://docs.emmet.io/',
        desc: 'Plugins and snippets for high-speed coding'
      },
      {
        name: 'Bracket Pair Colorizer',
        sub: 'Extensions',
        href:
          'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer',
        desc: 'A customizable extension for colorizing matching brackets'
      },
      {
        name: 'ES7 React/Redux/GraphQL/React-Native snippets',
        sub: 'Extensions',
        href:
          'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets',
        desc:
          'Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax'
      },
      {
        name: 'JavaScript (ES6) code snippets',
        sub: 'Extensions',
        href:
          'https://marketplace.visualstudio.com/items?itemName=xabikos.javascriptsnippets',
        desc: 'Code snippets for JavaScript in ES6 syntax'
      },
      {
        name: 'StandardJS - JavaScript Standard Style',
        sub: 'Extensions',
        href:
          'https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs',
        desc: 'Integrates JavaScript Standard Style into VS Code'
      },
      {
        name: 'Live Server',
        sub: 'Extensions',
        href:
          'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
        desc:
          'Launch a development local Server with live reload feature for static & dynamic pages'
      },
      {
        name: 'Prettier - Code formatter',
        sub: 'Extensions',
        href:
          'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
        desc: 'VS Code plugin for prettier/prettier'
      }
    ]
  },
  {
    id: 'vue',
    name: 'Vue.js',
    links: [
      {
        name: 'Vue.js devtools',
        href:
          'https://chrome.google.com/webstore/detail/vuejs-devtools/nhdogjmejiglipccpnnnanhbledajbpd?hl=en',
        desc: 'Chrome devtools extension for debugging Vue.js applications.'
      },
      {
        name: 'Vue.js Guide',
        href: 'https://vuejs.org/v2/guide/',
        desc: 'Main Docs entry point'
      },
      {
        name: 'Vuter',
        href:
          'https://marketplace.visualstudio.com/items?itemName=octref.vetur',
        desc: 'VS Code extension with snippets, syntax-highlighting, etc'
      }
    ]
  }
];

// Build the Cheat Sheet layout using the above object

/*
  {
    id: '',
    name: '',
    links: [
      {
        name: '',
        href: '',
        desc: ''
      },
    ]
  }
*/

let defaultGroupId = 'js';

cheats.forEach(group => {
  const elGroups = document.getElementById('cheat-list-groups');
  const elLinks = document.getElementById('cheat-list-links');

  // /////////
  // Column 1
  // /////////
  /*
    <a class="list-group-item list-group-item-action" id="list-js-list" data-toggle="list" href="#list-js" role="tab" aria-controls="profile">Javascript</a>
  */

  const aGroup = document.createElement('a');
  aGroup.classList =
    'list-group-item list-group-item-action list-group-item-light' +
    (defaultGroupId == group.id ? ' active' : '');
  aGroup.id = `list-${group.id}-list`;
  aGroup.setAttribute('data-toggle', 'list');
  aGroup.href = `#list-${group.id}`;
  aGroup.role = 'tab';
  aGroup.setAttribute('area-controls', 'profile');
  aGroup.text = group.name;
  elGroups.appendChild(aGroup);

  // /////////
  // Column 2
  // /////////
  /*
        
            <div class="tab-pane fade show active" id="list-vscode" role="tabpanel" aria-labelledby="list-vscode-list">
              <dl>
                <dt>
                  <a href="https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer">
                    <i class="fas fa-palette"></i>
                    Bracket Pair Colorizer
                  </a>
                </dt>
                <dd>A customizable extension for colorizing matching brackets</dd>
              </dl>
            </div>
  */

  const elList = document.createElement('div');
  elList.classList =
    'tab-pane fade show' + (defaultGroupId == group.id ? ' active' : '');
  elList.id = `list-${group.id}`;
  elList.role = 'tabpanel';
  elList.setAttribute('aria-labelledby', `list-${group.id}-list`);

  const elDl = document.createElement('dl');
  let lastSub = null;

  group.links.forEach(link => {
    // <dt>

    let sub = null;
    if (typeof link.sub !== 'undefined') {
      sub = link.sub;
    }

    if (sub != lastSub) {
      const elSub = document.createElement('h4');
      elSub.innerHTML = sub;
      elDl.appendChild(elSub);
    }

    elDt = document.createElement('dt');

    const aLink = document.createElement('a');
    aLink.href = link.href;
    aLink.text = link.name;

    elDt.appendChild(aLink);

    elDl.appendChild(elDt);

    // <dd>

    if (typeof link.desc !== 'undefined') {
      elDd = document.createElement('dd');
      elDd.innerHTML = link.desc;
      elDl.appendChild(elDd);
    }

    lastSub = sub;
  });

  elList.appendChild(elDl);
  elLinks.appendChild(elList);
});
