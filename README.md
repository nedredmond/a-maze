# a-maze

This is a simple maze generator I made to amuse my son. Maybe it will amuse you as well.

![Screenshot 2023-05-07 at 11-56-31 A Maze](https://user-images.githubusercontent.com/23404711/236688536-49abf224-93e9-4e25-a565-c7817396f6ee.png)

## Features

- Make a randomized maze (using [DFS](https://en.wikipedia.org/wiki/Depth-first_search)) with any dimensions between 5 cells and 75 cells.
  - Anything greater than 75×75 becomes sluggish to render and difficult to represent in most screen resolutions.
- [Text Maze](https://nedredmond.github.io/a-maze/?text=text%0Amaze): Click the [H] icon to generate a maze around letters.
  - So far, I've only mapped A-Z. When I have time, I may add numbers and some special characters.
- Print mode will hide the controls, maximize the maze size, and include a QR code that contains a link to the text maze page with the same text.
  - If not in text maze mode, will link just to the main site.
- Explore mode will allow you to traverse the maze as a cute little guy. 😃
  - Don't let the minotaur catch you on its patrol! 🐮
