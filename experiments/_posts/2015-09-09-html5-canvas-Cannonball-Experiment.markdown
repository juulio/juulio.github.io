---
layout: post
title:  "HTML5 Canvas - Cannonball Experiment"
date:   2015-09-09 17:14
categories: post
---
<p>This is a code example taken from the <b>Supercharged JavaScript Graphics</b> book by Raffaelle Cecco.</p>
<p>This code shows how to use Vectors in a Cannonball Shooting simulation. Please click and move the mouse pointer to set the direction where the Cannonball will be thrown.</p>
<p>There is not a single image on this experiment. Everything is drawn using the HTML 5 Canvas API. The sky and the grass are HTML5 Canvas gradients ( context.createLinearGradient(x0,y0,x1,y1); ). Both gradients are transparent to help create the blur effect on the Cannonball.</p>

<canvas id = "canvas" width = "640" height = "480" style="border:1px solid"> No HTML5 Canvas detected!
</canvas>
<script src="/js/canvasExperiments/cannonball.js"></script>
