---
layout: page
title: Research Pictures
permalink: /research_pictures/
description: A collection of cool pictures from my research projects.
nav: true
nav_order: 2
horizontal: false
sections:
  - title: Liquid Crystals
    images:
      - path: assets/img/bplc1.png
        alt: Blue Phase Liquid Crystal Droplets
        caption: Blue Phase Liquid Crystal (BPLC) droplets mostly in BPI
      - path: assets/img/bplc2.png
        alt: Blue Phase Liquid Crystal Droplets
        caption: BPLC droplets mostly in BPII
      - path: assets/img/bplc3.png
        alt: Blue Phase Liquid Crystal Droplets
        caption: BPLC droplets in the isotropic phase
      - path: assets/img/bplc_droplets.png
        alt: Blue Phase Liquid Crystal Droplets
        caption: Collection of BPLC droplets in all phases
  - title: Batteries
    images:
      - path: assets/img/battery1.jpg
        alt: Battery
        caption: Image of a coin cell battery in an acoustic emission monitoring setup features in <a href="https://news.mit.edu/2025/decoding-sounds-battery-formation-degradation-0916">MIT News</a>.
      - path: assets/img/battery2.jpeg
        alt: Battery
        caption: Coin cell batteries in the acoustic emission monitoring setup.
      - path: assets/img/battery3.jpeg
        alt: Battery
        caption: Coin cell batteries in the acoustic emission monitoring setup.
  - title: Biophysics
    images:
      - path: assets/img/publication_preview/hello_worm.gif
        alt: Worm
        caption: Hello worm.
---

<div class="container">
{% if page.sections and page.sections.size > 0 %}
  {% for section in page.sections %}
    <h2 class="mt-4 mb-3">{{ section.title }}</h2>
    <div class="row">
      {% for img in section.images %}
        <div class="col-sm-6 col-md-4 mb-4">
          {% include figure.liquid
            path=img.path
            alt=img.alt
            caption=img.caption
            zoomable=true
            class="z-depth-1 rounded"
            sizes="(min-width: 992px) 33vw, (min-width: 576px) 50vw, 95vw"
          %}
        </div>
      {% endfor %}
    </div>
  {% endfor %}
{% else %}
  <p>Add sections and images to the page front matter to populate this gallery.</p>
{% endif %}
</div>