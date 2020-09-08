# [FreeYourText](https://freeyourtext.netlify.app)

A simple way to extract text from images.

## Technologies used in this project

- **React** is my go-to UI library.
- I decided for this project to give [**tailwindcss**](https://tailwindcss.com) a try, and I gotta say that it's just an amazing addition to my css skill set.

## How I added tailwind to my React workflow without ejecting

I thought it might me useful to mention briefly how I did it.

1- Installing `postcss-cli` to be able to use postcss in package.json **script**. Otherwise, it would give you an error.

```bash
npm i -D postcss-cli
```

2- After installing and initializing tailwindcss using

```bash
npm i tailwindcss
npx tailwindcss init
```

You create a basic css file `css/tailwind.css` which will be filled with all the css at build time by tailwind.

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

3- I added a couple of scripts in `package.json` to help me with the process of compiling the css and running react. I used `npm-run-all` for running these processes in one line.<br>Please refer to `package.json` file for all the scripts.

```bash
npm i -D npm-run-all
```

4- Before running any of the postcss-related script, you have to configure your `postcss.config.js` file.

```js
module.exports = {
  plugins: [require("tailwindcss")],
};
```

This is the basic setup with tailwindcss only.

> Please refer to tailwindcss Docs for complete instructions on how to get started. <br>
> The videos created by **Adam Wathan** -the creator of tailwind- are really amazing. Check them out.

5- After running the `build:tailwind` script, you'll get a css file -I named `tailwind.output.css`- that's the file you'll need to import in your components.<br>
I decided to put it in the `App` component to be available for all the other child components.
But where you import it is totally up to you.

## Future plans

I'm planning on working on this project and add couple of functionalities to it that'll make it more appealing and useful.

## Credits

- You can find the icons at [Heroicons.dev](Heroicons.dev) and [simpleicons](https://simpleicons.org/).
- Netlify for hosting, of course.
- The amazing developer community.
  ![thank you](https://media.giphy.com/media/3otPoOxyDTXjzpMbIY/giphy.gif)
