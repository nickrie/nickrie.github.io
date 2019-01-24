// Cheat Sheet link definitions object
const cheats = [
  {
    id: 'courses',
    name: 'Courses',
    links: [
      {
        name: 'Bootstrap 4 From Scratch',
        href: 'https://www.udemy.com/bootstrap-4-from-scratch-with-5-projects/',
        desc: 'In Progress...'
      },
      {
        name: 'Modern JavaScript From The Beginning',
        href: 'https://www.udemy.com/modern-javascript-from-the-beginning/',
        desc:
          '<a href="https://www.udemy.com/certificate/UC-6K4LFQ48/"><i class="fas fa-trophy"></i></a> Completed!',
        descHref: ''
      },
      {
        name: 'React Front to Back',
        href: 'https://www.udemy.com/react-front-to-back/',
        desc: 'In Progress...'
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
        desc: 'All-in-one platform for automating modern web projects'
      },
      {
        name: 'Webpack',
        href: 'https://webpack.js.org/concepts/',
        desc: 'Module bundler'
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
        name: 'Axios',
        href: 'https://www.npmjs.com/package/axios',
        desc: 'Promise based HTTP client for the browser and node.js'
      },
      {
        name: 'Electron',
        href: 'https://electronjs.org/',
        desc:
          'A framework for creating native applications with web technologies like JavaScript, HTML, and CSS'
      },
      {
        name: 'TypeScript',
        sub: '',
        href: 'https://www.typescriptlang.org/',
        desc:
          'TypeScript is a superset of JavaScript which primarily provides optional static typing, classes and interfaces.'
      }
    ]
  },
  {
    id: 'refs',
    name: 'Quick Refs',
    links: [
      {
        name: 'Angular',
        href: 'https://angular.io/docs'
      },
      {
        name: 'Bootstrap 4',
        href: 'https://getbootstrap.com/docs/4.2/getting-started/introduction/'
      },
      {
        name: 'Emmet',
        href: 'https://docs.emmet.io/'
      },
      {
        name: 'Flexbox',
        href: 'https://css-tricks.com/snippets/css/a-guide-to-flexbox/'
      },
      {
        name: 'Javascript MDN',
        href: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript'
      },
      {
        name: 'javascript.info',
        href: 'http://javascript.info/'
      },
      {
        name: 'Media Queries',
        href:
          'https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries'
      },
      {
        name: 'Node',
        href: 'https://nodejs.org/en/docs/'
      },
      {
        name: 'React',
        href: 'https://reactjs.org/docs/getting-started.html'
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
        name: 'react-router-dom',
        sub: 'NPM',
        href: 'https://www.npmjs.com/package/react-router-dom',
        desc:
          'DOM bindings for <a href="https://reacttraining.com/react-router/">React Router</a>'
      },
      {
        name: 'JSX',
        sub: 'References',
        href: 'https://reactjs.org/docs/jsx-in-depth.html',
        desc: 'JSX Overview with examples'
      }
    ]
  },
  {
    id: 'test',
    name: 'Testing',
    links: [
      {
        name: 'Jasmine',
        href: 'https://jasmine.github.io/',
        desc: 'Behavior-driven development framework'
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
        name: 'Bracket Pair Colorizer',
        href:
          'https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer',
        desc: 'A customizable extension for colorizing matching brackets'
      },
      {
        name: 'ES7 React/Redux/GraphQL/React-Native snippets',
        href:
          'https://marketplace.visualstudio.com/items?itemName=dsznajder.es7-react-js-snippets',
        desc:
          'Simple extensions for React, Redux and Graphql in JS/TS with ES7 syntax'
      },
      {
        name: 'JavaScript (ES6) code snippets',
        href:
          'https://marketplace.visualstudio.com/items?itemName=xabikos.javascriptsnippets',
        desc: 'Code snippets for JavaScript in ES6 syntax'
      },
      {
        name: 'StandardJS - JavaScript Standard Style',
        href:
          'https://marketplace.visualstudio.com/items?itemName=chenxsan.vscode-standardjs',
        desc: 'Integrates JavaScript Standard Style into VS Code'
      },
      {
        name: 'Live Server',
        href:
          'https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer',
        desc:
          'Launch a development local Server with live reload feature for static & dynamic pages'
      },
      {
        name: 'Prettier - Code formatter',
        href:
          'https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode',
        desc: 'VS Code plugin for prettier/prettier'
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

let defaultGroupId = 'design';

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
