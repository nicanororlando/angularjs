# Routing with components:

When the application bootstraps, AngularJS creates an injector that will be used to find and inject all of the services that are required by your application. The injector itself doesn't know anything about what the $http or $route services do. In fact, the injector doesn't even know about the existence of these services, unless it is configured with proper module definitions.

The injector only carries out the following steps:

1. Load the module definition(s) that you specify in your application.
2. Register all Providers defined in these module definition(s).
3. When asked to do so, lazily instantiate services and their dependencies, via their Providers, as parameters to an injectable function.

# ng-srg

Aunque funciona muy parecido al 'src', esta directiva que usamos para las imagenes, sirve para asegurarnos de que el navegador no tome la expresion
{{expresion}} de Angularjs literalmente y no nos abra una url invalida.

# Css class

-The ng-enter class is applied to the element when a new phone is added to the list and rendered on the page.
-The ng-move class is applied to the element when a phone's relative position in the list changes.
-The ng-leave class is applied to the element when a phone is removed from the list.

The phone list items are added and removed based on the data passed to the ngRepeat directive. For example, if the filter data changes, the items will be animated in and out of the repeat list.

Something important to note is that, when an animation occurs, two sets of CSS classes are added to the element:

A "starting" class that represents the style at the beginning of the animation.
An "active" class that represents the style at the end of the animation.
