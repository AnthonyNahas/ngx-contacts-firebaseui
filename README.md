<p align="center">
  <img height="256px" width="256px" style="text-align: center;" src="https://cdn.rawgit.com/anthonynahas/ngx-contacts-firebaseui/master/demo/src/assets/logo.svg">
</p>

# ngx-contacts-firebaseui - Angular library to manage contacts with firebase

[![npm version](https://badge.fury.io/js/ngx-contacts-firebaseui.svg)](https://badge.fury.io/js/ngx-contacts-firebaseui),
[![Build Status](https://travis-ci.org/anthonynahas/ngx-contacts-firebaseui.svg?branch=master)](https://travis-ci.org/anthonynahas/ngx-contacts-firebaseui)
[![Coverage Status](https://coveralls.io/repos/github/anthonynahas/ngx-contacts-firebaseui/badge.svg?branch=master)](https://coveralls.io/github/anthonynahas/ngx-contacts-firebaseui?branch=master)
[![dependency Status](https://david-dm.org/anthonynahas/ngx-contacts-firebaseui/status.svg)](https://david-dm.org/anthonynahas/ngx-contacts-firebaseui)
[![devDependency Status](https://david-dm.org/anthonynahas/ngx-contacts-firebaseui/dev-status.svg?branch=master)](https://david-dm.org/anthonynahas/ngx-contacts-firebaseui#info=devDependencies)
[![Greenkeeper Badge](https://badges.greenkeeper.io/anthonynahas/ngx-contacts-firebaseui.svg)](https://greenkeeper.io/)

## Demo

View all the directives in action at https://anthonynahas.github.io/ngx-contacts-firebaseui

## Dependencies
* [Angular](https://angular.io) (*requires* Angular 2 or higher, tested with 2.0.0)

## Installation
Install above dependencies via *npm*. 

Now install `ngx-contacts-firebaseui` via:
```shell
npm install --save ngx-contacts-firebaseui
```

---
##### SystemJS
>**Note**:If you are using `SystemJS`, you should adjust your configuration to point to the UMD bundle.
In your systemjs config file, `map` needs to tell the System loader where to look for `ngx-contacts-firebaseui`:
```js
map: {
  'ngx-contacts-firebaseui': 'node_modules/ngx-contacts-firebaseui/bundles/ngx-contacts-firebaseui.umd.js',
}
```
---

Once installed you need to import the main module:
```js
import { LibModule } from 'ngx-contacts-firebaseui';
```
The only remaining part is to list the imported module in your application module. The exact method will be slightly
different for the root (top-level) module for which you should end up with the code similar to (notice ` LibModule .forRoot()`):
```js
import { LibModule } from 'ngx-contacts-firebaseui';

@NgModule({
  declarations: [AppComponent, ...],
  imports: [LibModule.forRoot(), ...],  
  bootstrap: [AppComponent]
})
export class AppModule {
}
```

Other modules in your application can simply import ` LibModule `:

```js
import { LibModule } from 'ngx-contacts-firebaseui';

@NgModule({
  declarations: [OtherComponent, ...],
  imports: [LibModule, ...], 
})
export class OtherModule {
}
```

## Usage



## License

Copyright (c) 2018 anthonynahas. Licensed under the MIT License (MIT)

