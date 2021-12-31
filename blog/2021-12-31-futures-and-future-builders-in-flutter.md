---
slug: demystifying-future-and-future-builder-in-flutter
title: Demystifying Future and FutureBuilder in Flutter
# author: Damodar Lohani
# author_title: Web and Mobile Developer
# author_url: https://github.com/lohanidamodar
# author_image_url: https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4
tags: [flutter, dart]
---

Futures are very popular in Dart and Flutter. If you have previously written code in Dart, you must have already seen Future. If you don't completely understand what Future is and how to use it in Dart and Flutter then this article is for you. Even if you know what it is and are using it already this article might be beneficial for you to get deeper understanding. Futures are one of the ways to deal with asynchronous computation in Dart and Flutter. Flutter also provides FutureBuilder that allows to get data from a Future and present it easily in the Widget tree. Before talking anymore about Future and FutureBuilder, let's step back and look at whah asynchronous programming is and why we do need Future.

<!-- truncate -->

## What is Asynchronous Programming?

Usually, a program's code runs straight along, with only one operation happening at a time. However, if a function requires a result from another function, it must wait for the other function to complete and return. When this happens, it feels like the program is stuck as it waits for some other operation to complete, and the program becomes unresponsive. *Asynchronous programming* is a concept introduced to overcome this problem. Asynchronous programming allows us to start a long-running operation like reading data from a database then move on to execute other things or handling other user inputs. Finally, when the asynchronous operation is complete (i.e., data is read from the database), we can also choose to run other operations on that event.

Something like this is crucial for mobile applications because we do operations like fetching data from API over a network which might take an unprecedented amount of time. During that, we do not want to block other operations so that users can still find the app responsive and execute other operations. Some examples of asynchronous operations are

    - Fetching data over a network
    - Database operations
    - File I/O operations

This is where Future and FutureBuilder come in Flutter and Dart. Now that we know what asynchronous programming is, we will look at what Future is and how it helps run asynchronous operations in Dart and Flutter.

## What is Future?

Future is one way to work with asynchronous operations in Dart and Flutter. While waiting for all the operations to complete, asynchronous operations immediately return a Future that will complete eventually and return the result. Dart provides us with different ways to work with Futures. Let us look at them.

### Async and Await with Future

We use the async function to perform asynchronous operations, which always produces Future. We can wait for other asynchronous operations to complete inside such functions using the `await` keyword. That way, the actual program is not blocked as we are waiting for asynchronous operations inside another asynchronous program.

Let's look at an example code that searches whether a string is inside a file or not.

```dart
import "dart:io";
Future<bool> fileContains(String path, String needle) async {
    var haystack = await File(path).readAsString();
    return haystack.contains(needle);
}
```

Reading a file is an asynchronous operation. We needed to await it. For that, we had to make our function `async.` And async function always returns Future, so our function's return type should be `Future<bool>` where `bool` is the type of value Future returns upon completion. This way, in Flutter, if we want to get whether the file contains a string, we will be able to get it without freezing the UI using a stateful widget that changes the state when the information is available or using a Future builder that we will learn next.

A Future can also complete with an error. In that case whenever we await a Future, it will throw an error. So, we should handle the error with a try catch block. In the above function if path is of a non existent file then we get an error and we could handle it as the following.

```dart
import "dart:io";
Future<bool> fileContains(String path, String needle) async {
    try {
        var haystack = await File(path).readAsString();
        return haystack.contains(needle);
    } on FileSystemException catch (exception, stack) {
        debugPrint(exception);
        return false;
    }
}
```

### Future Callbacks

Future also provides a low-level API in Dart that allows us to work with Future similarly to async and await. Async-await language feature is built on top of these low-level APIs. We should know about these as sometimes it makes sense to use these over async-await. With a Future, we can manually assign callbacks to handle value or error once it is available. For example

```dart
Future<bool> containsDart = fileContains("/home/user/abc.txt", "dart");
containsDart
    .then((value) => handleValue(value))
    .catchError((error) => handleError(error));
```

It is best always to handle both the value and error case as Future at any time may fail with an error. This is all about the Future and working with Future in Dart. Next, we will look at what FutureBuilder is and how to use it in a Flutter application.

## What is FutureBuilder

We already saw above the two ways to work with Futures in Dart. Those methods are also supported in Flutter. However, Flutter being a widget-based framework, Flutter also provides a FutureBuilder widget to deal with futures from widgets quickly. FutureBuilder is a widget that requires a future to work with and builds itself based on the latest result of the provided future. If we look at the source code of FutureBuilder, we can see that it is a simple stateful widget that handles the future and rebuilds the widget if the future is completed. Look at the `_subscribe` method inside `FutureBuilder` to know more. Let us look at an example of using FutureBuilder.

```dart
import 'package:flutter/material.dart';

class MyWidget extends StatelessWidget {
    final Future<bool> _containsDart = fileContains("/home/user/abc.txt", "dart");

    @override
    Widget build(BuildContext context) {
        return FutureBuilder<bool>(
            future: _containsDart,
            builder: (BuildContext context, AsyncSnapshot<bool> snapshot) {
                if (snapshot.hasData) {
                    return Center(
                        child: Text(snapshot.data ? "File contains Dart" : "File doesn't contain dart"),
                    );
                } else if (snapshot.hasError) {
                    return Center(child: Text('Error: ${snapshot.error}'))
                } 
                return Center(child: CircularProgressIndicator());
            },
        );
    }
}
```

So here, we are using FutureBuilder, passing a future. FutureBuilder provides us with a builder callback with [build context](https://dlohani.com.np/blog/decoding-flutter-build-context) the async snapshot that has a different state based on what is going on with the future. The snapshot again provides checks to handle errors and incomplete cases. So, `snapshot.hasData` will be true when the future is completed with a value. Whenever the future completes with an error, `snapshot.hasError` is true. However, if both cases are false, then the future has not been completed yet, and hence we show the circular progress indicator in that case.

Also, note that we are not directly passing the Future to the FutureBuilder. We rather obtain the Future before and pass the previously obtained Future to the FutureBuilder. For example, we are not doing it as below.

```dart
FutureBuilder<bool>(
    future: fileContains("path-tofile.txt', 'Dart')
    //....
)
```

The above code though syntactically correct will cause a performance issue. Whenever a parent widget containing this FutureBuilder rebuilds, the FutureBuilder also rebuilds but, doing this also restarts the future operation again. However, in the code we have above, as Future is obtained in the parent class during initialization, it will not restart the future operation again. So while using FutureBuilder, you should never obtain the Future directly inside the `StatelessWidget.build` to `StatefulWidget.build` method. It should happen before the build method may be in the initialization of class or state.

### When to use FutureBuilder?

We can use FutureBuilder to deal with asynchronous operations and update the UI based on the result of the asynchronous operations. The same effect we can obtain using a stateful widget ourselves as well. So when to use FutureBuilder. I use FutureBuilder because it is easy to handle futures. We do not have to create a stateful widget and handle all the cases ourselves. FutureBuilder deals with low-level handling of Future and provides us with nice callbacks to build our widget, so we should use it to deal with simple future values. However, suppose you are dealing with multiple futures dependent on one another. In that case, it is best to use a stateful widget or other state management solution instead of relying on multiple nested FutureBuilder as it makes code complex and less performant as well.

## Conclusion

So in today's article, we learned about Future and FutureBuilder as it is a straightforward and widely used concept in Flutter. It is best to understand it thoroughly. I hope this article helped make that happen. If there are any suggestions, feedback, or queries, you can always [reach out to me](https://dlohani.com.np/contact) via various mediums.

## Resources

Below are some resources and references for a deeper understanding of Future and FutureBuilders.

- [Future API Reference](https://api.flutter.dev/flutter/dart-async/Future-class.html)
- [FutureBuilder Api Reference](https://api.flutter.dev/flutter/widgets/FutureBuilder-class.html)
- [Future codelabs](https://dart.dev/codelabs/async-await)
