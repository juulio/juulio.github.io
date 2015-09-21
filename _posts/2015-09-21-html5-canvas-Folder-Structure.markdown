---
layout: post
title:  "HTML5 Canvas - Folder Structure - Boilerplate"
date:   2015-09-21 8:00
categories: post
---
<p>Whenever I want to start a simple HTML5 Canvas experiment, I create the same folder structure. There are many ways to do this, I'm just showing the way that works for me.</p>
<p>Since the HTML5 Canvas element is where all the magic happens, the rest of the elements are not critically important. In my tiny, non-complex projects I have an <b>index.html</b> file, a <b>styles.css</b> file and a <b>main.js</b> file.</p>
<p>I usually create a <b>CSS</b> folder with one or two CSS files. One could be a <b>reset</b> file (taken from Eric Meyer's http://meyerweb.com/eric/tools/css/reset/) and a general <b>styles.css</b> file. If for any reason I use <b>SASS</b>, I would definitively create a different folder structure.</p>
<p>For the Javascript files, I create a <b>js</b> folder with a <b>libs</b> folder inside. If you are planning to use jQuery or any other framework, it should be included on the libs folder. The <b>main.js</b> file goes inside the <b>js</b> folder.</p>
<p>If you are planning to use image assets, I'd suggest you create an <b>img</b> folder.</p>

<p>So, here's how my folder structure usually looks. Remember there are many ways to do this and You should use the one that works better for you.</p>
