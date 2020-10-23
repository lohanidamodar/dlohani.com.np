---
slug: flutter-url-preview
title: Flutter URL Preview
author: Damodar Lohani
author_title: Web and Mobile Developer
author_url: https://github.com/lohanidamodar
author_image_url: https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4
tags: [flutter, android, automation]
---

So, what is URL preview if you remember whenever you share some url in facebook or twitter or any other social network the app automatically generates the preview for that url with the title image description this seems like a simple feature but this can add a lot of value to few types of applications like chat applications social network applications and any other applications where users are allowed to share data with one another so if they share any link having the preview of the url adds a lot of value.

<!--truncate-->

If you would rather watch a video

<center>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/8c-EIwbNchw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
</center>

In flutter I found few different plugins to help display URL preview. However the one I liked "flutter_link_preview" provided the most customization possible. One thing to note that, I was unable to get preview of youtube URLs from any of the available plugins. However most of them worked fine with other URLs. So in this tutorial we will learn to use "flutter_link_preview" plugin to display the preview of URL in our Flutter application.
The final source code for this tutorial can be found at my [Github repository](https://github.com/lohanidamodar/flutter_plugin_tuts/tree/link-preview).

## Add Dependency
To start, add flutter_link_preview: &lt;latest version> to the pubspec.yaml file under dependencies.

```yaml
dependencies:
  flutter_link_preview: ^1.4.2
```

## Import flutter_link_preview
Then in your widget where you want to use the preview widget, import the "flutter_link_preview"

```dart
import 'package:flutter_link_preview/flutter_link_preview.dart';
```

## Get the preview
Next, to get the preview of any url, use the following code, it gives the default preview with title, fav icon etc.

```dart
FlutterLinkPreview(url: "your url")
```

## Text Styling
Easy as that. Now, if we want to style the title and body text, we can pass in `titleStyle` and `bodyStyle` parameters.

```dart
FlutterLinkPreview(
    url: "your url",
    bodyStyle: TextStyle(
        fontSize: 18.0,
    ),
    titleStyle: TextStyle(
        fontSize: 20.0,
        fontWeight: FontWeight.bold,
    ),
)
```
Default preview for URL "https://medium.com/@LohaniDamodar/flutter-recipes-2-firebase-firestore-recipes-2f09e58a7298" looked like

<center>
    <img src="../img/blog/up2.png" height="480px" />
</center>

## Complete customization
Finally, if we want to completely customize how our preview looks, we can use the `builder` parameter, that gives us the information returned after parsing the url we provided and we build our own preview widget using the information provided.

```dart
FlutterLinkPreview(
    url: article,
    bodyStyle: TextStyle(
        fontSize: 18.0,
    ),
    titleStyle: TextStyle(
        fontSize: 20.0,
        fontWeight: FontWeight.bold,
    ),
    builder: (info) {
        if (info is WebInfo) {
        return SizedBox(
            height: 350,
            child: Card(
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20.0)),
            clipBehavior: Clip.antiAlias,
            child: Column(
                crossAxisAlignment: CrossAxisAlignment.start,
                children: [
                if (info.image != null)
                    Expanded(
                        child: Image.network(
                    info.image,
                    width: double.maxFinite,
                    fit: BoxFit.cover,
                    )),
                Padding(
                    padding:
                        const EdgeInsets.fromLTRB(16.0, 16.0, 16.0, 0),
                    child: Text(
                    info.title,
                    style: TextStyle(
                        fontSize: 20.0,
                        fontWeight: FontWeight.bold,
                    ),
                    ),
                ),
                if (info.description != null)
                    Padding(
                    padding: const EdgeInsets.all(16.0),
                    child: Text(info.description),
                    ),
                ],
            ),
            ),
        );
        }
        if (info is WebImageInfo) {
        return SizedBox(
            height: 350,
            child: Card(
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20.0)),
            clipBehavior: Clip.antiAlias,
            child: Image.network(
                info.image,
                fit: BoxFit.cover,
                width: double.maxFinite,
            ),
            ),
        );
        } else if (info is WebVideoInfo) {
        return SizedBox(
            height: 350,
            child: Card(
            shape: RoundedRectangleBorder(
                borderRadius: BorderRadius.circular(20.0)),
            clipBehavior: Clip.antiAlias,
            child: Image.network(
                info.image,
                fit: BoxFit.cover,
                width: double.maxFinite,
            ),
            ),
        );
        }
    },
    )
```

Custom preview for URL "https://medium.com/@LohaniDamodar/flutter-recipes-2-firebase-firestore-recipes-2f09e58a7298" looked like

<center>
    <img src="../img/blog/up2.png" height="480px" />
</center>


As we can see from the code above, the information returned after parsing the URL can be of three different types `WebInfo` for normal web URLs, `WebImageInfo` for URLs of images and `WebVideoInfo` for the URLs of videos. We can us the type of information returned to display different preview and actions in our application.

## Want to connect with me
- Facebook: https://fb.me/lohanidamodar
- GitHub: https://github.com/lohanidamodar
- YouTube: https://youtube.com/c/reactbits
- Twitter: https://twitter.com/LohaniDamodar
- Linked In: https://www.linkedin.com/in/lohanidamodar/
