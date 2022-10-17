# Frontend Mentor - Social media dashboard with theme switcher

![Design preview for the Social media dashboard with theme switcher coding challenge](./design/desktop-preview.jpg)

This is a solution to the [Social media dashboard with theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/social-media-dashboard-with-theme-switcher-6oY8ozp_H). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Toggle color theme to their preference

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This is actually the first time I've used Sass, and I loveeeedddd being able to organize all of my css. I think I'm hooked. 

This means it was also the first time I've used any kind of mixin. I didn't get too crazy with it, but it did use one for setting styles for differemt screen sizes, which came in handy quite a bit:

```css
@mixin breakpoint($size) {
    @media (min-width: map-get($breakpoints-up, $size)) {
        @content;
    }
}

@mixin breakpoint-down($size) {
    @media (max-width: map-get($breakpoints-down, $size)) {
        @content;
    }
}

```



### Continued development

I really enjoyed this project, so I will definitely be doing more from Frontend Mentor. I want to do more CSS-heavy projects so I can continue getting familiar with Sass and all of its capabilities. 

### Useful resources

- Coder Coder's Youtube - This helped me through the rough parts during the initial SCSS setup, and she does a really great job of explaining why things are done a certain way and how to research topics you don't know effectively.


## Author
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/youcanjewett)
