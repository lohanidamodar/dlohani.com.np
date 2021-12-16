---
slug: decoding-flutter-build-context
title: Understanding BuildContext in Flutter
# author: Damodar Lohani
# author_title: Web and Mobile Developer
# author_url: https://github.com/lohanidamodar
# author_image_url: https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4
tags: [flutter]
---

If you have been learning Flutter, you have seen BuildContext everywhere. BuildContext is an important concept in Flutter most developers find hard to understand. Many of even seasoned developers don't fully understand what BuildContext is and what it does. Yet it's basic and must know for every Flutter developers. Today in this article we will try to understand what BuildContext is and why it is important. Before we understand BuildContext, we must understand widget and widget tree. So let's dive into that.

<!-- truncate -->

## Widget Tree

In Flutter everything is a widget. Container, text, button, providers everything is virtually a widget. Also, a parent widgets can have one or more child widgets. Flutter applications consists of stack of widgets popularly known as the **widget tree**. In the widget tree we connect parent and child widgets to show their relationship.

If you have previously worked with frameworks like ReactJS, ViewJS or other component based frameworks, this is very similar. On frontend frameworks we have components, root component from where other components are sacked upon and each component is responsible for a unit of UI. So a ReactJS or ViewJS applications are a tree of components. In Flutter the components are rather called widgets but follows the similar principle. We have a root widget which is responsible for housing other widgets. So there is a parent-child relationship between widgets.

A widget that renders another widget is a **parent widget** and the widget that is rendered by the parent widget is called the **child widget**. So if we have a root widget called `MyApp` which is the default in Flutter projects (but you can change it) it becomes the root in our widget tree.

For example a tree could look like the following.

```
            MyApp
              |
          MaterialApp
              |
           Scaffold
              |
        --------------
        |            |
      AppBar        Row
                     |
            ------------------
            |                |
          Text             TextButton
```

Here, we have `MyApp` as the root widget that is parent to all the widgets in the tree. This renders `MaterialApp` which renders `Scaffold` that renders `AppBar` and `Row`. And finally `Row` renders `Text` and `TextButton`. We can go deeper and look into text and text button widgets but you get the point. So here we can say that `MyApp` is parent of `MaterialApp` and `Scaffold` is parent of both `AppBar` and `Row` widgets. Before we move on to understanding build context, keep in mind that every widget in a widget tree are in their own place. They have their own position, siblings, parent and child information. However the widget itself doesn't hold any of those information and that is where the BuildContext comes in. So let's dive into BuildContext.

## BuildContext

From the [API docs](https://api.flutter.dev/flutter/widgets/BuildContext-class.html), BuildContext is a handle to the location of a widget in a widget tree. Every widget in a widget tree has their own unique BuildContext which they receive in their build method. This means that BuildContext of a widget is not same as the BuildContext of the widget returned by the widget from the build method. In our widget tree example above, the BuildContext of MyApp is different from that of MaterialApp and BuildContext of MaterialApp is not the same as the BuildContext of Scaffold. Each widget in the widget tree have their own unique BuildContext.

If we look into the source code of Flutter, for example into `StatelessWidget`, we can see a `createElement` method that creates an instance of `StatelessElement` passing `this` widget as parameter. 

```dart
// StatelessWidget
StatelessElement createElement() => StatelessElement(this);
```

And if we look into `StatelessElement`, it passes it's own instance to the widgets build method.

```dart
class StatelessElement extends ComponentElement {
  StatelessElement(StatelessWidget widget) : super(widget);

  @override
  Widget build() => widget.build(this);
}
```

If we keep exploring more, we can see that `ComponentElement` extends `Element` which implements `BuildContext` class. So we can see that the element instance is what comes as `BuildContext` to every widget's build method.

So from this, as every widget in widget tree is created by build method, and the build method receives this BuildContext. This helps the build method to find which widget it is going to draw and to locate the position of the widget to be drawn in the widget tree.

Also, note that the widgets are only visible to their own BuildContext or to the BuildContext of their parent. That is wy, we can locate the parent widget from a child widget using `findAncestorWidgetOfExactType` helper method from BuildContext. This method is used to locate a widget of particular type in the widget tree. Going up the widget tree from whichever widget it was called, this method will try to locate the first widget that matches the type passed to the method.

For example, we have a tree `MyApp-> Scaffold -> Row -> Container -> Row -> Text`. And we call the following method from the `Text` widget.
```
context.findAncestorWidgetOfExactType(Row)
```
This will traverse up the tree starting from `Text` widget and stopping when a widget of type `Row` is located. So, the Row between `Text` and `Container` will be returned. Next time you are using `Navigator.of(context)` or `Scaffold.of(context)` remember these are just helper method that use `context.findAncestorWidgetOfExactType` to find the nearest `NavigatorState` or `ScaffoldState` respectively.

One thing to be careful while using BuildContext is that we must always verify the context that we are using in the method is the same context that is needed. For example, using `Theme.of(context)` looks for nearest Theme. If a nearest widget **X** has a Theme in it's returned widget tree and it's calling Theme.of passing it's on context, then the Theme that is found will not be the Theme present in the build method but rather a Theme that was an ancestor to the widget **X**. That is why we could use a `Builder` widget and it's context as the context received there is the context of `Builder` hence we can get the Theme that is ancestor to Builder but is in the same widget **X**.


## Conclusion

With this I hope you understand what BuildContext is and how crucial it is in order to understand how Flutter works. This deepens our knowledge of the framework which helps us to build robust applications confidently. 

<!-- ## Ref

- https://www.educative.io/edpresso/what-is-buildcontext-in-flutter
- https://api.flutter.dev/flutter/widgets/BuildContext-class.html
- https://blog.mindorks.com/understanding-buildcontext-in-flutter
- https://flutterbyexample.com/lesson/build-context -->