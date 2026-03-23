// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-research-gallery",
          title: "Research Gallery",
          description: "A collection of cool pictures from my research projects.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/research_gallery/";
          },
        },{id: "nav-blog",
          title: "Blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "nav-contact",
          title: "Contact",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/contact/";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-our-work-on-quantifying-indoor-airborne-disease-transmission-was-published-and-feature-in-the-top-5-most-influential-articles-and-is-listed-in-the-top-20-most-downloaded-articles-in-the-joural-flow",
          title: 'Our work on quantifying indoor airborne disease transmission was published and feature in...',
          description: "",
          section: "News",},{id: "news-i-presented-at-the-aps-march-meeting-2022-in-chicago-on-spectral-model-dynamics-of-animal-behavior",
          title: 'I presented at the APS March Meeting 2022 in Chicago on spectral model...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-to-the-battery-reading-group-of-the-machine-learning-research-team-at-toyota-research-institute-i-presented-on-scientific-machine-learning-with-applications-to-continuum-modeling-of-battery-materials",
          title: 'I gave an invited talk to the battery reading group of the machine...',
          description: "",
          section: "News",},{id: "news-i-presented-at-the-aps-march-meeting-2023-in-las-vegas-on-learning-and-controlling-phase-separation-in-complex-geometries-with-differentiable-physics",
          title: 'I presented at the APS March Meeting 2023 in Las Vegas on learning...',
          description: "",
          section: "News",},{id: "news-my-work-on-learning-physically-constrained-models-in-mode-space-for-biophysical-systems-was-published-in-physical-review-letters-and-covered-by-the-popular-science-magazine-new-scientist",
          title: 'My work on learning physically-constrained models in mode space for biophysical systems was...',
          description: "",
          section: "News",},{id: "news-i-presented-at-juliacon-2023-in-the-computational-biology-session-on-low-dimensional-mode-representataions-of-biological-systems",
          title: 'I presented at JuliaCon 2023 in the computational biology session on low-dimensional mode...',
          description: "",
          section: "News",},{id: "news-our-work-on-learning-physics-from-images-for-lithium-ion-battery-materials-was-published-in-nature-and-covered-in-mit-news-and-slac-news",
          title: 'Our work on learning physics from images for lithium ion battery materials was...',
          description: "",
          section: "News",},{id: "news-our-work-on-data-driven-control-of-airborne-infection-risk-and-energy-use-in-buildings-was-published-in-building-and-environment",
          title: 'Our work on Data-driven Control of Airborne Infection Risk and Energy Use in...',
          description: "",
          section: "News",},{id: "news-i-attended-the-international-institute-for-sustainability-with-knotted-chiral-meta-matter-winter-school-2024-and-presented-learning-models-for-undulatory-locomotion-in-animals",
          title: 'I attended the International Institute for Sustainability with Knotted Chiral Meta Matter Winter...',
          description: "",
          section: "News",},{id: "news-my-work-on-learning-low-dimensional-representations-and-probabilistic-models-for-c-elegans-neural-activity-locomotion-and-behavior-was-covered-in-mit-spectrum",
          title: 'My work on learning low dimensional representations and probabilistic models for C. elegans...',
          description: "",
          section: "News",},{id: "news-i-gave-a-presentation-at-the-mit-computational-science-and-engineering-seminar-on-predicting-and-controlling-nonlinear-locomotion-dynamics-using-neural-activity",
          title: 'I gave a presentation at the MIT Computational Science and Engineering seminar on...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-at-the-mit-computational-and-systems-biology-seminar-on-predicting-and-controlling-nonlinear-locomotion-dynamics-using-neural-activity",
          title: 'I gave an invited talk at the MIT Computational and Systems Biology seminar...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-at-the-simple-person-s-applied-math-seminar-spams-on-predicting-and-controlling-nonlinear-locomotion-dynamics-using-neural-activity",
          title: 'I gave an invited talk at the Simple Person’s Applied Math Seminar (SPAMS)...',
          description: "",
          section: "News",},{id: "news-i-gave-an-invited-talk-at-the-physics-of-living-systems-pls-short-talks-on-predicting-and-controlling-nonlinear-locomotion-dynamics-using-neural-activity",
          title: 'I gave an invited talk at the Physics of Living Systems (PLS) Short...',
          description: "",
          section: "News",},{id: "news-our-work-on-learning-nature-s-assembly-language-with-polymers-was-published-in-pnas",
          title: 'Our work on Learning Nature’s Assembly Language with Polymers was published in PNAS....',
          description: "",
          section: "News",},{id: "news-our-work-on-evoxels-a-differentiable-physics-framework-for-voxel-based-microstructure-simulations-was-published-in-joss",
          title: 'Our work on evoxels: A differentiable physics framework for voxel-based microstructure simulations was...',
          description: "",
          section: "News",},{id: "news-our-work-on-predicting-mosquito-flight-behavior-using-bayesian-dynamical-systems-learning-was-published-in-science-advances-and-covered-in-mit-news-and-the-conversation",
          title: 'Our work on Predicting Mosquito Flight Behavior using Bayesian Dynamical Systems Learning was...',
          description: "",
          section: "News",},{id: "news-our-work-on-electrochemically-resolved-acoustic-emissions-from-li-ion-batteries-was-published-in-joule-and-covered-in-mit-news",
          title: 'Our work on Electrochemically Resolved Acoustic Emissions from Li-ion Batteries was published in...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
