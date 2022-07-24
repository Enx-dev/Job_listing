# Frontend Mentor - Job listings with filtering solution

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users are able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Filter job listings based on the categories

### Screenshot

![Preview](</public//images//download%20(1).png>)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Tailwind](https://tailwindcss.com/) - For styles

### What I learned

```js
useEffect(() => {
  const filted = data.filter((item) => {
    const newArr = Object.values(item);
    const flat = newArr.flatMap((item) => item);
    return filter.every((r) => flat.includes(r));
  });
  console.log(filted);
  setNewData(filted);
}, [filter]);
```

### Continued development

Expantion of the database

## Author

- Website - [ENX_DEV](https://portfollio-one.vercel.app/)
- Frontend Mentor - [@ENX_DEV](https://www.frontendmentor.io/profile/Enx-dev)
- LinkedIn - [@Adejori Eniola](https://www.linkedin.com/in/eniola-adejori-0a3091204/)
