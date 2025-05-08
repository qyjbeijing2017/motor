# Quetzalcoatlus

**Quetzalcoatlus** is an open-source solution that enables dynamic program contexts to be preserved, transferred, and distributed, giving a **running** program the ability to **move**.

## Language

- [简体中文](doc/README_zh_CN.md)

## 1. Why Develop Quetzalcoatlus?

In everyday frontend development, it's common to preserve the user's state—such as the current page or pre-filled form data. In games, this could include the UI stack, health, position, or the type of companion. However, such information is often not important enough to be stored in a backend database or even on local disk.

Imagine this: you're planning a trip using a travel app and need to ask your friend for some details, so you switch to a messaging app. Meanwhile, the system terminates the travel app due to memory constraints. When you return, all your progress is lost. If the app had **mobility**, it could pause and serialize its full context to disk, and later resume right where you left off—without wasting system resources.

Cross-platform gaming is now mainstream. Titles like *Genshin Impact* let you play on both PC and mobile. But when switching devices, you might lose buffs, pets, or skill configurations. If the game had **mobility**, it could preserve all of that across platforms—down to an unfinished animation.

Looking ahead to AI, imagine a digital assistant that can chat with you, turn on your car's AC, close your windows, and monitor stocks. Today, such assistants need to upload state to the cloud and relaunch on another device. But with **mobility**, they could transfer themselves peer-to-peer over a local network, continuing seamlessly without relying on the cloud.

**Quetzalcoatlus** aims to let a program run **independently**, unrestricted by **time or device**. You can pause it at any moment and resume it later without rebooting or manually restoring state. This saves development time and preserves a program’s complete **memory**.

---

## 2. Why JavaScript/TypeScript?

As a long-time web engineer, I'm very familiar with JavaScript/TypeScript. This allows for rapid development without the overhead of learning a new language. JS/TS is widely used across frontend, backend, and even game development, and it excels at building user-facing software.

In the future, if Quetzalcoatlus gains widespread use, I plan to port it to more performance-oriented languages like C++ or Rust.

---

## 3. How Does Quetzalcoatlus Implement Mobility?

Quetzalcoatlus executes assembly-like instructions within a fixed memory region. In theory, it can be interrupted at any point. Once paused, the contents of this memory block can be serialized and saved to disk or sent over the network—making the program movable and resumable.

---

## 4. Join This Groundbreaking Project

If you're interested in participating, please reach out to **qyjbeijing@gmail.com**. I welcome all passionate computer engineers to contribute to the project.

---

## 5. Contact

For any project-related inquiries, contact me at **qyjbeijing@gmail.com**.
