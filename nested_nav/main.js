const $mobileNav = document.querySelector('#mobile-nav-menu');
const $mobileNavClose = document.querySelector('#close-mobile-menu');
const $body = document.querySelector('body');
$mobileNavClose.addEventListener('click', e => {
  $body.className = '';
  $mobileNav.className = 'mobile-nav-hidden d-md-none';
});

const $mobileNavOpen = document.querySelector('#open-mobile-menu');
$mobileNavOpen.addEventListener('click', e => {
  $body.className = 'overflow-hidden';
  $mobileNav.className = 'mobile-nav-pop-out d-md-none';
});

function toggleMenu(element, submenu) {
  const data = element.getAttribute('data-show');
  if (data === 'false') {
    element.children[0].className = 'fs-3 fa-solid fa-caret-down pointer';
    submenu.className = 'row pe-0 ms-1 my-2 show-submenu';
    element.setAttribute('data-show', 'true');
  } else {
    element.children[0].className = 'fs-3 fa-solid fa-caret-right pointer';
    element.setAttribute('data-show', 'false');
    submenu.className = 'hide-submenu';
  }
}

function createMenuItems(menuObj, submenu, screentype) {
  submenu.innerHTML = '';
  for (let i = 0; i < menuObj.length; i++) {
    const $listItem = createLinkItem(menuObj[i], screentype);
    submenu.append($listItem);
  }
}

function createLinkItem(item, screentype) {
  const $parentLi = document.createElement('li');
  $parentLi.setAttribute('id', item.name);
  const $a = document.createElement('a');
  $a.textContent = item.name;
  $a.setAttribute('href', item.href);
  const $linkContainer = document.createElement('div');
  const $dropdownContainer = document.createElement('div');
  const $dropdown = document.createElement('i');
  const $submenuUl = document.createElement('ul');
  const name = item.name.split(' ')[0];

  const mobile = screentype === 'mobile';
  mobile ? $parentLi.className = 'row pe-1' : $parentLi.className = 'row position-relative submenu-items';
  mobile ? $linkContainer.className = 'col-10 submenu-items' : $linkContainer.className = 'col-10';
  mobile ? $a.className = 'py-2 disable-link-style' : $a.className = 'disable-link-style';
  $linkContainer.append($a);
  $parentLi.append($linkContainer);
  if (item.submenu.length > 0) {
    mobile ? $dropdownContainer.className = 'col-2 pe-0 text-end' : $dropdownContainer.className = 'col-2';
    mobile ? $dropdown.className = 'fs-4 fa-solid fa-caret-right pointer' : $dropdown.className = 'fa-solid fa-caret-right';
    mobile ? $submenuUl.className = 'hide-submenu' : $submenuUl.className = 'd-none';
    mobile ? $submenuUl.setAttribute('id', `${item.name}-submenu`) : $submenuUl.setAttribute('id', `nested-${name}-desktop-submenu`);
    $dropdownContainer.append($dropdown);
    $parentLi.append($dropdownContainer);
    if (mobile) {
      $dropdownContainer.setAttribute('data-show', 'false');
      $dropdownContainer.addEventListener('click', e => {
        createMenuItems(item.submenu, $submenuUl, 'mobile');
        toggleMenu($dropdownContainer, $submenuUl);
      });
    } else {
      $parentLi.addEventListener('mouseenter', e => {
        hoverMenu($parentLi, `nested-${name}-desktop-submenu`, item.submenu);
      });
    }
  }
  $parentLi.append($submenuUl);
  return $parentLi;
}

function hoverMenu(parent, submenu, obj) {
  submenu = document.querySelector(`#${submenu}`);
  submenu.id.split('-')[0] === 'parent'
    ? submenu.className = 'desktop-submenu'
    : submenu.className = 'desktop-nested-submenu';
  createMenuItems(obj, submenu, 'desktop');
  parent.addEventListener('mouseleave', e => {
    submenu.className = 'd-none';
    submenu.innerHTML = '';
  });
}

const documentObj = {
  mobile: {
    categories: ['categories-dropdown', 'categories-submenu'],
    groups: ['groups-dropdown', 'groups-submenu'],
    watch: ['watch-dropdown', 'watch-submenu'],
    listen: ['listen-dropdown', 'listen-submenu']
  },
  desktop: {
    categories: ['desktop-categories', 'parent-categories-desktop'],
    groups: ['desktop-groups', 'parent-groups-desktop'],
    watch: ['desktop-watch', 'parent-watch-desktop'],
    listen: ['desktop-listen', 'parent-listen-desktop']
  }
};

const navMenuObj = {
  categories: [{
    name: 'For Your Home',
    href: 'https://example.com',
    submenu: []
  }, {
    name: 'Yard',
    href: 'https://example.com',
    submenu: [
      {
        name: 'Grass',
        href: 'https://example.com',
        submenu: [
          {
            name: 'Lawn Care',
            href: 'https://example.com',
            submenu: []
          },
          {
            name: 'Flowers',
            href: 'https://example.com',
            submenu: []
          },
          {
            name: 'Garden',
            href: 'https://example.com',
            submenu: []
          }
        ]
      },
      {
        name: 'Pool',
        href: 'https://example.com',
        submenu: [
          {
            name: 'Pool Vacuum',
            href: 'https://example.com',
            submenu: []
          },
          {
            name: 'Chlorine',
            href: 'https://example.com',
            submenu: []
          },
          {
            name: 'Floats',
            href: 'https://example.com',
            submenu: []
          }
        ]
      },
      {
        name: 'Painting',
        href: 'https://example.com',
        submenu: [
          {
            name: 'Interior',
            href: 'https://example.com',
            submenu: []
          },
          {
            name: 'Exterior',
            href: 'https://example.com',
            submenu: [
              {
                name: 'Glossy',
                href: 'https://example.com',
                submenu: []
              },
              {
                name: 'Matte',
                href: 'https://example.com',
                submenu: []
              }]
          }
        ]

      }
    ]
  },
  {
    name: 'Music',
    href: 'https://example.com',
    submenu: [
      {
        name: 'Electronic',
        href: 'https://example.com',
        submenu: []
      },
      {
        name: 'Brass',
        href: 'https://example.com',
        submenu: [{
          name: 'Trumpet',
          href: 'https://example.com',
          submenu: []
        },
        {
          name: 'Cymbals',
          href: 'https://example.com',
          submenu: []
        },
        {
          name: 'Trombone',
          href: 'https://example.com',
          submenu: []
        }]
      }
    ]
  },
  {
    name: 'Interior',
    href: 'https://example.com',
    submenu: [
      {
        name: 'Fireplace',
        href: 'https://example.com',
        submenu: []
      },
      {
        name: 'Furniture & Accessories',
        href: 'https://example.com',
        submenu: []
      },
      {
        name: 'Interior Doors',
        href: 'https://example.com',
        submenu: []
      },
      {
        name: 'Interior House Cleaning',
        href: 'https://example.com',
        submenu: []
      },
      {
        name: 'Interior Lighting',
        href: 'https://example.com',
        submenu: []
      },
      {
        name: 'Interior Painting & Finishing',
        href: 'https://example.com',
        submenu: []

      },
      {
        name: 'Molding',
        href: 'https://example.com',
        submenu: []
      },
      {
        name: 'Stairs',
        href: 'https://example.com',
        submenu: []
      }
    ]
  },
  {
    name: 'Best New Products',
    href: 'https://example.com',
    submenu: []
  },
  {
    name: 'Simple Solutions',
    href: 'https://example.com',
    submenu: []
  },
  {
    name: 'How To',
    href: 'https://example.com',
    submenu: [{
      name: 'How-To Videos',
      href: 'https://example.com',
      submenu: []
    }]
  },
  {
    name: 'Reviews',
    href: 'https://example.com',
    submenu: []
  }
  ],
  groups: [{
    name: 'Surfing',
    href: 'https://example.com',
    submenu: []
  },
  {
    name: 'Business',
    href: 'https://example.com',
    submenu: []
  }],
  watch: [{
    name: 'Watch Full Episodes',
    href: 'https://example.com',
    submenu: []
  }],
  listen: [{
    name: 'Podcast',
    href: 'https://example.com',
    submenu: []
  }
  ]
};

const desktop = documentObj.desktop;
for (const key in desktop) {
  const navObjSubItems = navMenuObj[key];
  const $parent = document.querySelector(`#${desktop[key][0]}`);
  const submenu = desktop[key][1];
  $parent.addEventListener('mouseenter', e => {
    hoverMenu($parent, submenu, navObjSubItems);
  });
}

const mobile = documentObj.mobile;
for (const key in mobile) {
  const navObjSubItems = navMenuObj[key];
  const $dropdown = document.querySelector(`#${mobile[key][0]}`);
  const $submenu = document.querySelector(`#${mobile[key][1]}`);
  $dropdown.addEventListener('click', e => {
    createMenuItems(navObjSubItems, $submenu, 'mobile');
    toggleMenu($dropdown, $submenu);
  });
}
