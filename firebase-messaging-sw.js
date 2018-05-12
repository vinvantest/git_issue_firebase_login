// Give the service worker access to Firebase Messaging.
// Note that you can only use Firebase Messaging here, other Firebase libraries
// are not available in the service worker.
importScripts('/bower_components/firebase/firebase-app.js');
importScripts('/bower_components/firebase/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in the
// messagingSenderId.
var configFirebase = {
messagingSenderId: "<messagingSenderId>",
};

firebase.initializeApp(configFirebase);

var messaging = firebase.messaging();

// If you would like to customize notifications that are received in the
// background (Web app is closed or not in browser focus) then you should
// implement this optional method.
// [START background_handler]
messaging.setBackgroundMessageHandler(function(payload) {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
    // Customize notification here
    var notificationTitle = payload.notification.title;
    var notificationOptions = {
      body: payload.notification.body,
      icon: '../images/fresh/android/android-launchericon-24-24.png'
    };
    return self.registration.showNotification(notificationTitle,
        notificationOptions);
  });

// [END background_handler]
