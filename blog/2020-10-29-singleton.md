---
slug: singleton-in-dart
title: Singleton Pattern in Dart
# author: Damodar Lohani
# author_title: Web and Mobile Developer
# author_url: https://github.com/lohanidamodar
# author_image_url: https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4
tags: [dart, singleton, design-pattern]
---
## Introduction
Singleton is a design pattern and is one of the simplest ones. It is useful in the cases when we want only a single instance of any object in our application. In this tutorial we will learn about the singleton pattern in Dart and how we can create a singletons in Dart. So let's get started

<!-- truncate -->

If you would rather watch a video

<div class="player">
    <iframe src="https://www.youtube.com/embed/f5bv8BVF1O8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</div>

## What is singleton?
- One of the simplest design pattern
- There can only be one instance of the Class
- Class itself is responsible to keep track of its sole instance
- The instance is globally accessible through static method
- Constructor is private so it cannot be instantiated

## When to use singleton?
- Mostly useful when multiple instantiation is costly in terms of configurations required
- Also useful when we want to access same object over and over across our app


## Some considerations
- Lazy construction
- Singleton class shouldn’t require any params
- Should be thread safe
Dart is a single threaded language


## Creating singleton class in dart
Create a class and then follow the steps to make it a singleton pattern.

### 1. Make constructor private
```dart
Singleton._internal() {}
```

### 2. Create instance variable
Create a private static instance variable, that keeps track of the sole instance.
```dart
static Singleton _instance;
```

### 3. Static getter
Finally, create a static getter method, that allows access of the instance globally. It is responsible to create the new instance if it's not previously created.
```dart
static Singleton get instance {
  if(_instance == null) {
    _instance = Singleton._internal();
  }
  return _instance;
}
```

### Final Code
```dart
class Singleton {
  String name;
  static Singleton _instance;
  
  Singleton._internal() {
    
    name="Singleton pattern";
  }
  
  static Singleton get instance {
    if(_instance == null) {
      _instance = Singleton._internal();
    }
    return _instance;
  }
}
```
