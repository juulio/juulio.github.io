---
layout: page
title: Experiments
permalink: /experiments/
---
<ul>
{% for experiment in site.experiments %}
      <li>
        Experiment Title: {{ experiment.title }}
        <br />
        <a href="{{ experiment.url }}">{{ experiment.title }}</a>
        <p>{{ experiment.description }}</p>
      </li>
{% endfor %}
</li>
