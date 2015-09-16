---
layout: post
title:  "Fractal Binary Tree - openframeworks"
date:   2015-09-16 16:23:14
categories: jekyll update
---
Back in 2014, I wrote a recursive program that draws a fractal binary tree. My initial goal was to draw something like this:

<img src="/img/2015set/beniceEquationFractalBinaryTree.png" alt="Benice Equation Fractal Tree" />

I had a hard time understanding how to create a recursive function that worked properly with openframeworks loops. The way to make it work was to use a frame rate of 1 frame per second ofSetFrameRate(1) on the setup function and add an int number that defines the amount of iterations as a limit.
Here are some interesting screenshots that are happening on the way.
{% highlight ruby %}
def print_hi(name)
  puts "Hi, #{name}"
end
print_hi('Tom')
#=> prints 'Hi, Tom' to STDOUT.
{% endhighlight %}

Check out the [Jekyll docs][jekyll] for more info on how to get the most out of Jekyll. File all bugs/feature requests at [Jekyll’s GitHub repo][jekyll-gh]. If you have questions, you can ask them on [Jekyll’s dedicated Help repository][jekyll-help].

[jekyll]:      http://jekyllrb.com
[jekyll-gh]:   https://github.com/jekyll/jekyll
[jekyll-help]: https://github.com/jekyll/jekyll-help
