---
layout: page
title: Research Gallery
permalink: /research_gallery/
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
  - title: Biophysics
    images:
      - path: assets/video/worm_movie_compressed.mp4
        alt:  Worm
        caption: Controlling worm motion with neural activity.
        muted: true
        autoplay: true
        loop: true
        span: full
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
---

<div class="container">
{% if page.sections and page.sections.size > 0 %}
  {% for section in page.sections %}
    <h2 class="mt-4 mb-3">{{ section.title }}</h2>
    <div class="row">
      {% for img in section.images %}
        {% assign _ext = img.path | split: '.' | last %}
        {% if _ext == 'mp4' or _ext == 'webm' or _ext == 'ogg' %}
          {% if img.span == 'full' %}
            </div>
            <div class="row justify-content-center mb-4">
              <div class="col-12 text-center">
                {% include video.liquid
                  path=img.path
                  alt=img.alt
                  caption=img.caption
                  muted=img.muted
                  autoplay=img.autoplay
                  loop=img.loop
                  controls=true
                  class="z-depth-1 rounded"
                  width="100%"
                %}
              </div>
            </div>
            <div class="row">
          {% elsif img.span == 'half' %}
            <div class="col-sm-12 col-md-6 mb-4 text-center">
              {% include video.liquid
                path=img.path
                alt=img.alt
                caption=img.caption
                muted=img.muted
                autoplay=img.autoplay
                loop=img.loop
                controls=true
                class="z-depth-1 rounded"
                width="100%"
              %}
            </div>
          {% else %}
            <div class="col-sm-6 col-md-4 mb-4 text-center">
              {% include video.liquid
                path=img.path
                alt=img.alt
                caption=img.caption
                muted=img.muted
                autoplay=img.autoplay
                loop=img.loop
                controls=true
                class="z-depth-1 rounded"
                width="100%"
              %}
            </div>
          {% endif %}
        {% else %}
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
        {% endif %}
      {% endfor %}
    </div>
  {% endfor %}
{% else %}
  <p>Add sections and images to the page front matter to populate this gallery.</p>
{% endif %}
</div>