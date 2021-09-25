---
slug: getting-flutter-android-app-ready-to-publish
title: Getting your Flutter Android App ready to Publish to Play Store
# author: Damodar Lohani
# author_title: Web and Mobile Developer
# author_url: https://github.com/lohanidamodar
# author_image_url: https://avatars1.githubusercontent.com/u/6360216?s=460&u=ccf757cc3aece5b674460c4909b4a77e1d5b6a19&v=4
tags: [flutter, android, automation]
---

Now that you have coded your first Flutter app and you want to build a release version and publish it to Google play store. In this article we will learn how to prepare your flutter app to release to Google Play Store.


<!--truncate-->

At this point we assume that you have coded and tested your Flutter app successfully and are ready to release it to the world. To follow this tutorial you can use any of your app that's working or just create a brand new Flutter project.

Releasing android app to play store has few steps that we need to cover. Most important is that, we need to build a signed apk or appbundle. And to build signed app we need to generate a keystore and signing key. Then we need to configure our build.gradle to use that keystore and key to generate a signed apk or appbundle when we run `flutter build --release` command. Doing all that every time you create a new app is a tedious task. So in this tutorial we will learn how to do that the easiest way.

First of all, add `flutter_automation` package to your dev dependencies section in pubspec.yaml. If flutter packages get doesn't run automatically, run `flutter packages get` from terminal to get the newly added dependency. Now setting up a releasing config for Flutter Android app is as simple as running one command from terminal and answering the questions it asks.

So to setup android signing after adding flutter_automation package, from your terminal just run
```
flutter pub pub run flutter_automation --android-sign
```

Once you run the command you will be asked a series of questions that are required to generate your keystore and signing keys.

1. First is the key alias for your signing key, type key alias you desire and press enter.
2. The dname that is the details of your organization generating the signing key in the format `CN=<first and last name>, OU=<organizational_unit>, O=<Organization>, L=<city>, S=<state>, C=<country_code>`
3. The key password, the password to protect your signing key with. Must be at least 6 characters long
4. Finally the keystore password, the password to protect your keystore. Must be at least 6 characters long

After you enter all the information and press enter, the command will automatically generate the keystore file and save it in keys/keystore.jks. It will also generate key.properties file with the signing keystore and key details and finally add the required configurations in build.gradle file so that you are ready to run `flutter build  -- release` command to successfully generate a signed apk or appbundle which you can upload to the play store.