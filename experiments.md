---
layout: default
title: Experiments
permalink: /experiments/
---


<div id="main" class="experiments">

<ul class="experiments">
  {% for experiment in site.experiments %}
        <li>
          <a href="{{ experiment.url }}">{{ experiment.title }}</a>
          <p>{{ experiment.description }}</p>
        </li>
  {% endfor %}
</ul>

</div>
