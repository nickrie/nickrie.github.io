const cheats = [
  {
    id: 'vscode',
    name: 'VS Code Extensions',
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
  },
  {
    id: 'design',
    name: 'Design',
    links: [
      {
        name: 'Font Awesome',
        href: 'https://fontawesome.com/',
        desc: 'Icons to replace Bootstrap 3 glyphicons'
      },
      {
        name: 'Bootswatch',
        href: 'https://bootswatch.com/',
        desc: 'Free themes for Bootstrap'
      },
      {
        name: 'Unsplash',
        href: 'https://source.unsplash.com/',
        desc: 'Simple embedding of free random images of any size'
      },
      {
        name: 'Materialize',
        href: 'https://materializecss.com/',
        desc: 'A modern responsive front-end framework based on Material Design'
      },
      {
        name: 'Sweet Alert',
        href: 'https://sweetalert2.github.io/',
        desc: 'A beautiful, responsive, customizable, accessible (wai-aria) replacement for javascript\'s popup boxes'
      }
    ]
  }
];

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

let isFirstGroup = true;

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
    'list-group-item list-group-item-action' + (isFirstGroup ? ' active' : '');
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
  elList.classList = 'tab-pane fade show' + (isFirstGroup ? ' active' : '');
  elList.id = `list-${group.id}`;
  elList.role = 'tabpanel';
  elList.setAttribute('aria-labelledby', `list-${group.id}-list`);

  const elDl = document.createElement('dl');

  group.links.forEach(link => {
    // <dt>

    elDt = document.createElement('dt');

    const aLink = document.createElement('a');
    aLink.href = link.href;
    aLink.text = link.name;

    elDt.appendChild(aLink);

    // <dd>

    elDd = document.createElement('dd');

    elDdText = document.createTextNode(link.desc);
    elDd.appendChild(elDdText);

    elDl.appendChild(elDt);
    elDl.appendChild(elDd);
  });

  elList.appendChild(elDl);
  elLinks.appendChild(elList);

  isFirstGroup = false;
});