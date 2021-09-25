---
slug: flutter-recipes-1-listview-recipes
title: Flutter Recipes 1 - ListView recipes
# author: Damodar Lohani
# author_title: Web and Mobile Developer
# author_url: https://github.com/lohanidamodar
# author_image_url: https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4
tags: [flutter]
---


Lists are an integral part of mobile applications. Being able to present a list of items is therefore an undeniably important thing to know as a mobile developer. In this article, I will provide various code recipes for implementing ListView in your Flutter applications. Let's get started.

<!--truncate-->

## 1. A very simple scrollable ListView
Can be used to display list of any number of items using any widgets.
```dart
class SimpleListView extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        ListTile(
          title: Text("List item 1"),
        ),
        ListTile(
          title: Text("List item 2"),
        ),
        ListTile(
          title: Text("List item 3"),
        ),
        ListTile(
          title: Text("List item 4"),
        ),
        ListTile(
          title: Text("List item 5"),
        ),
      ],
    );
  }
}
```

## 2. Displaying predefined list of information two different ways

### 1. Using the spreading operator
Can be used when you have a predefined list of data that you want to display as well as render some widgets before the list of items and/or after the list of items is displayed.
```dart
class SimpleListSpread extends StatelessWidget {
  final List<String> items = [
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "List item 5",
  ];
  @override
  Widget build(BuildContext context) {
    return ListView(
      children: <Widget>[
        ListTile(
          title: Text("List item 0"),
        ),
        ...items.map(
          (item) => ListTile(
            title: Text("List item 1"),
          ),
        ),
        ListTile(
          title: Text("List item 6"),
        ),
      ],
    );
  }
}
```
### 2. Using builder
This is particularly useful if you have a list of data and just want to display those in a list
```dart
class SimpleListBuilder extends StatelessWidget {
  final List<String> items = [
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "List item 5",
  ];
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemCount: items.length,
      itemBuilder: (context, index) => ListTile(
        title: Text(items[index]),
      ),
    );
  }
}
```

## 3. Creating infinite list using builder
This creates an infinite list of items in the screen as user scrolls the list
```dart
class SimpleInfiniteList extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return ListView.builder(
      itemBuilder: (context, index) => ListTile(
        title: Text("List item $index"),
      ),
    );
  }
}
```

## 4. Separated list
This creates a list, where you can specify a divider widget to render between list items

```dart
class SimpleSeparatedList extends StatelessWidget {
  final List<String> items = [
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "List item 5",
  ];
  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      itemCount: items.length,
      itemBuilder: (context, index) => ListTile(
        title: Text(items[index]),
      ),
      separatorBuilder: (context,index)=>Divider(),
    );
  }
}
```

## 5. Prevent ListView from expanding to fill the area
You can do this by providing the shrinkwrap property to true. Once the shrinkWrap is set to true, the ListView only takes the space required by it to layout all the children.
```dart
class SimpleSeparatedList extends StatelessWidget {
  final List<String> items = [
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "List item 5",
  ];
  @override
  Widget build(BuildContext context) {
    return ListView.separated(
      shrinkWrap: true,
      itemCount: items.length,
      itemBuilder: (context, index) => ListTile(
        title: Text(items[index]),
      ),
      separatorBuilder: (context,index)=>Divider(),
    );
  }
}
```

## 6. ListView with fixed header and footer
Many times we would like to display a ListView with a fixed header and/or footer. For this we can wrap expanded `ListView` by a `Column` widget and add header and footer as we require as follows.
```dart
class ListWithHeaderFooter extends StatelessWidget {
  final List<String> items = [
    "List item 1",
    "List item 2",
    "List item 3",
    "List item 4",
    "List item 5",
  ];
  @override
  Widget build(BuildContext context) {
    return Column(
      children: <Widget>[
        Container(
          child: Text("This is header"),
        ),
        Expanded(
          child: ListView.builder(
            itemCount: items.length,
            itemBuilder: (context, index) => ListTile(
              title: Text(items[index]),
            ),
          ),
        ),
        Container(
          child: Text("This is Footer"),
        ),
      ],
    );
  }
}
```

More over,
1. You can set `scrollDirection` property to `Axis.horizontal` to make a horizontal list view
2. You can set `reverse` property to `true` to change the scroll behavior, in opposite direction (end of the list to the begining)