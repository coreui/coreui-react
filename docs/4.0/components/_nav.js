const _nav = [
  {
    _component: 'CNavTitle',
    anchor: 'Title',
  },
  {
    _component: 'CNavItem',
    anchor: 'Link 8',
    href: '#',
  },
  {
    _component: 'CNavGroup',
    anchor: 'Group 3',
    items: [
      {
        _component: 'CNavItem',
        anchor: 'Link 9',
        href: '#',
      },
      {
        _component: 'CNavItem',
        anchor: 'Link 10',
        href: '#',
      },
      {
        _component: 'CNavGroup',
        anchor: 'Group 4',
        items: [
          {
            _component: 'CNavItem',
            anchor: 'Link 11',
            href: '#',
          },
          {
            _component: 'CNavItem',
            anchor: 'Link 12',
            href: '#',
            active: true,
          },
        ],
      },
      {
        _component: 'CNavGroup',
        anchor: 'Group 5',
        items: [
          {
            _component: 'CNavItem',
            anchor: 'Link 13',
            href: '#',
          },
          {
            _component: 'CNavItem',
            anchor: 'Link 14',
            href: '#',
          },
        ],
      },
    ],
  },
  {
    _component: 'CNavGroup',
    anchor: 'Group 6',
    items: [
      {
        _component: 'CNavItem',
        anchor: 'Link 15',
        href: '#',
      },
      {
        _component: 'CNavItem',
        anchor: 'Link 16',
        href: '#',
      },
    ],
  },
]

export default _nav
