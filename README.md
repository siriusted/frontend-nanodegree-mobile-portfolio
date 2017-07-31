## Installation and Setup

You can find an online version of the optimization project [here](https://siriusted.github.io/frontend-nanodegree-mobile-portfolio/dist/) and [here](https://siriusted.github.io/frontend-nanodegree-mobile-portfolio/dist/views/pizza.html)

To set up locally on your machine. There are a few dependencies you need to download and install. Follow installation instructions on the pages linked below to set up both NodeJS and Gulp

* [NodeJS](https://nodejs.org/en/download/)
* [Gulp](https://gulpjs.com/)

Once you're done with the steps above, clone this repository and proceed with setup as illustrated below.

```bash
$> cd /path/to/the-project-folder
$> npm install
$> gulp
```
 All good.

## Optimizations made

### Part 1: Optimizing index.html

Firstly, I did the following

* Added media attributes in links to css files.
* Incorporated Google Web Font Loader script.
* Marked all script tags with async.

Subsequently, with gulp tasks, I :

* minified HTML, CSS and JavaScript tasks
* optimized images with lossy compression
* inlined the CSS in html files

### Part 2: Optimizing frames per second in views/pizza.html

I did the following

##### For scroll animations

* Refactored updatePositions() in **main.js** by eliminating repetitive computations, precomputing constant values to be used, and performing attribute reads before updating styles.
* Promoted `.mover` class DOM Elements to their own layers with `will-change: transform`
* Debounced scroll input event handler 
* Reduced the number of `#movingPizzas` added on DOMContentLoaded


##### For resizing pizzas

* Refactored resizePizzas() in **main.js** by eliminating multiple DOM queries and rather complicated helper functions used for calculating new sizes.
* Refactored changePizzaSizes() to handle the change in sizes more intuitively by `switch`-ing between percentage 
widths and cleaning up the for loop that sets the width on each pizza.

In general, I also replaced DOM queries using `document.querySelector` with `document.getElementById` and `document.getElementsByClassName`


## Resources used and more information

1. [Gulp plugin search](https://gulpjs.com/plugins/)
2. [How to automate all the things with Gulp](https://hackernoon.com/how-to-automate-all-the-things-with-gulp-b21a3fc96885)
3. [Case Study – Analyzing Web Font Performance](https://www.keycdn.com/blog/web-font-performance/)
4. [Web Fundamentals | Performance](https://developers.google.com/web/fundamentals/performance/)


## Website Performance Optimization portfolio project

Your challenge, if you wish to accept it (and we sure hope you will), is to optimize this online portfolio for speed! In particular, optimize the critical rendering path and make this page render as quickly as possible by applying the techniques you've picked up in the [Critical Rendering Path course](https://www.udacity.com/course/ud884).

To get started, check out the repository and inspect the code.

### Getting started

#### Part 1: Optimize PageSpeed Insights score for index.html

Some useful tips to help you get started:

1. Check out the repository
1. To inspect the site on your phone, you can run a local server

  ```bash
  $> cd /path/to/your-project-folder
  $> python -m SimpleHTTPServer 8080
  ```

1. Open a browser and visit localhost:8080
1. Download and install [ngrok](https://ngrok.com/) to the top-level of your project directory to make your local server accessible remotely.

  ``` bash
  $> cd /path/to/your-project-folder
  $> ./ngrok http 8080
  ```

1. Copy the public URL ngrok gives you and try running it through PageSpeed Insights! Optional: [More on integrating ngrok, Grunt and PageSpeed.](http://www.jamescryer.com/2014/06/12/grunt-pagespeed-and-ngrok-locally-testing/)

Profile, optimize, measure... and then lather, rinse, and repeat. Good luck!

#### Part 2: Optimize Frames per Second in pizza.html

To optimize views/pizza.html, you will need to modify views/js/main.js until your frames per second rate is 60 fps or higher. You will find instructive comments in main.js. 

You might find the FPS Counter/HUD Display useful in Chrome developer tools described here: [Chrome Dev Tools tips-and-tricks](https://developer.chrome.com/devtools/docs/tips-and-tricks).

### Optimization Tips and Tricks
* [Optimizing Performance](https://developers.google.com/web/fundamentals/performance/ "web performance")
* [Analyzing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/analyzing-crp.html "analyzing crp")
* [Optimizing the Critical Rendering Path](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/optimizing-critical-rendering-path.html "optimize the crp!")
* [Avoiding Rendering Blocking CSS](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/render-blocking-css.html "render blocking css")
* [Optimizing JavaScript](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/adding-interactivity-with-javascript.html "javascript")
* [Measuring with Navigation Timing](https://developers.google.com/web/fundamentals/performance/critical-rendering-path/measure-crp.html "nav timing api"). We didn't cover the Navigation Timing API in the first two lessons but it's an incredibly useful tool for automated page profiling. I highly recommend reading.
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/eliminate-downloads.html">The fewer the downloads, the better</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/optimize-encoding-and-transfer.html">Reduce the size of text</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/image-optimization.html">Optimize images</a>
* <a href="https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching.html">HTTP caching</a>

### Customization with Bootstrap
The portfolio was built on Twitter's <a href="http://getbootstrap.com/">Bootstrap</a> framework. All custom styles are in `dist/css/portfolio.css` in the portfolio repo.

* <a href="http://getbootstrap.com/css/">Bootstrap's CSS Classes</a>
* <a href="http://getbootstrap.com/components/">Bootstrap's Components</a>
