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