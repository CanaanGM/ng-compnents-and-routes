# Comps


learning intensifies!!!!

steps:

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