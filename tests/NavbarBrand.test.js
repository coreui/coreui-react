import expect from 'expect';
import React from 'react';
import { renderToStaticMarkup as render } from 'react-dom/server';

import logo from '../demo/src/assets/img/brand/logo.svg'
import sygnet from '../demo/src/assets/img/brand/sygnet.svg'

import AppNavbarBrand from 'src/NavbarBrand';

describe('AppNavbarBrand', () => {
  it('renders anchor with class="navbar-brand"', () => {
    expect(render(<AppNavbarBrand
      brand={{ src: logo, width: 89, height: 25, alt: 'CoreUI Brand' }}
      full={{ src: logo, width: 89, height: 25, alt: 'CoreUI Full' }}
      minimized={{ src: sygnet, width: 30, height: 30, alt: 'CoreUI Minimized' }}
    />)).toContain('class="navbar-brand"');
  });
  it('renders anchor with class="navbar-brand"', () => {
    expect(render(<AppNavbarBrand
      brand={{ }}
    />)).toContain('class="navbar-brand"');
  });
  it('renders anchor with class="navbar-brand"', () => {
    expect(render(<AppNavbarBrand />)).toContain('class="navbar-brand"');
  });

});
