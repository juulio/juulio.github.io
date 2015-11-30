---
layout: page
title: Experiments
permalink: /experiments/
---

{% for experiment in site.experiments limit:3 %}
      <li>
        Experiment Title: {{ experiment.title }}
        <a href="{{ experiment.url }}">{{ experiment.title }}</a>
        <p>{{ experiment.short-description }}</p>
      </li>
{% endfor %}

Experiments page
Julio Del Valle.<br />
Software & Graphics.<br />
Costa Rica.
