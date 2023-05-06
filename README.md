# Comps


learning intensifies!!!!

## creating a new component steps

```bash
ng g m <Module name>
ng g c <Module name>/<Component name>
```

export it to the other modules u'd need to add it to the app module

1. export the component from the <module name>.module.ts

```js
...
,
  exports: [
    ElementsHomeComponent
  ]
```

in the imports section in the appmodule u import the module housing the component u want

```js
imports: [
    ...,
    ElementsModule
]

```



## data communication between parents and children and vice versa

### child to parent

```js
  @Output() close = new EventEmitter();
  // this will send an event up to the parent

  // !emitted like this
  
  OnCloseClick(){
    this.close.emit();
  }
```

in the template of the parent:

```html
<div  (click)="OnCloseClick()" class="ui dimmer visible active">
```


### parent to child

```ts
 @Input() data : Array<any> = [];
```

from the parent template

```html
<app-accordion [data]="toDisplayOnAccordion"></app-accordion>
```

## adding a class depending on a thing

```html
< [ngClass]="{active: i === openedItemIndex}>  </>"
```


## Lazy loading of modules

in `app-routing.module.ts` :

add the module to the `Route` array thus:

```ts
const routes: Routes = [
  { 
    path: 'elements', // th path -> localhost/elements 
    loadChildren: () => import('./elements/elements.module').then( m => m.ElementsModule)
  },
  // handles the home path
  {path:"", component: HomeComponent },
  // wild card to handle all unspecified routes
 {path: "**", component: NotFoundComponent}
];


```

## routes inside of the parent route ?? /mods/whatever goes here

basically do the same in the module Routing file what u did in the app-routing :


```ts
const routes: Routes = [
  {
    path: '', // -> localhoist/collections/
    component: CollectionHomeComponent,
    children : [
      {
        path: '',
        component: BiographyComponent
      },
      {
        // -> localhoist/collections/companies
        path: 'companies',
        component: CompaniesComponent
      },
      {
        path: 'partners',
        component: PartnersComponent
      }
    ]
  }
];

```

and handle it in the template like a this:

> exact true: so the path isn't allways evaluating to :true

```html
 <a [routerLinkActiveOptions]="{exact:true}" class="item" routerLinkActive="active" [routerLink]="['./']"> Biography</a>
  <a class="item" routerLinkActive="active" [routerLink]="['./','companies']"> Companies</a>
  <a class="item" routerLinkActive="active" [routerLink]="['./','partners']"> Partners</a>
    
```

> `[routerLink]="['./','companies']"` 
- `./` is the base route of the module so: localhost/collections
- `companies` is what u wanna add it it: `collections/companies` 

