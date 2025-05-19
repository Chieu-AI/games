# 🍉 Quit Slicer: A Fruit Ninja–Style Quit Smoking App

**Quit Slicer** is a fast-paced mobile game designed to help people quit smoking by replacing cravings with satisfying, swipe-based gameplay. Inspired by **Fruit Ninja**, users slice harmful smoking-related objects to resist cravings and track their progress.

---

## 🎯 Goal

Provide a healthy, engaging distraction during nicotine cravings through an addictive game loop and visual progress tracking.

---

## 🕹️ Gameplay Features

- Swipe to **slice harmful objects** (cigarettes, lighters, ashtrays)
- Bonus points for slicing **healthy items** (fruits, water, lungs)
- Avoid slicing "good" objects or missing harmful ones—doing so ends the round
- Dynamic speed and challenge increase as the streak continues

---

## 📱 App Features

### Home Screen
- "Play" button to start the slicing game
- Display of **Days Smoke-Free**

### Stats Screen
- Total **cravings avoided**
- Number of harmful objects sliced
- Smoke-free streak counter

### Messages Screen
- Rotating **motivational messages**
- Share or favorite uplifting quotes

---

## 🔧 Tech Stack

- **Unity (C#)** or **Flutter (Dart)** with the **Flame game engine**
- **Firebase** or **SQLite** for data storage
- Optional: **OneSignal** for push notifications

---

## 🗂️ Project Structure

```plaintext
/quit-slicer
  ├── /assets
  ├── /game
  │     ├── object_spawner.dart
  │     ├── slice_logic.dart
  │     ├── scoring_system.dart
  ├── /screens
  │     ├── home_screen.dart
  │     ├── stats_screen.dart
  │     ├── messages_screen.dart
  ├── /data
  │     ├── storage_service.dart
  │     ├── notification_service.dart
  ├── main.dart
