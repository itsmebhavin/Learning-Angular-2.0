### Class-7 Two way data binding

- in this chapter, we will learn
  - how to do two-way data binding for contact form
  - discussion about basic form setup
  - and some final minor updates for styles and etc.

### Some information about angular2 data binding
- Angular2 framework support for two-way data binding, change tracking, validation, and error handling etc. for forms.
- Syntax wise
```
one-way from Component to View
{{expression}}
[target] = "expression"
bind-target = "expression"

onw-way from View to Component
(target) = "statement"
on-target = "statement"

two-way
[(target)] = "expression"
bindon-target = "expression"
```
- General binding types are like - Property, Event, Two-way, Attribute, Class, Style etc.

### Component configuration
- ng.core.Component extends
- ng.core.Directive, so the ng.core.Directive configuration applies to components as well
- Array of dependency injection providers scoped to this component's view.
```
viewProviders: [MyService, ng.core.provide(...)]
```
- Inline template / external template URL of the component's view.
```
template: 'Hello {{name}}'
templateUrl: 'my-component.html'
```
- List of inline CSS styles / external stylesheet URLs for styling component’s view.
```
styles: ['.primary {color: red}']
styleUrls: ['my-component.css']
```
- List of directives used in the the component’s template.
```
directives: [MyDirective, MyComponent]
```
- List of pipes used in the component's template.
```
pipes: [MyPipe, OtherPipe]
```
- Array of dependency injection providers for this directive and its children.
```
providers: [MyService, ng.core.provide(...)]
```
