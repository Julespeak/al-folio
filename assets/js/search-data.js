// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "about",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-blog",
          title: "blog",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/blog/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "forever in pursuit of &quot;the way&quot;",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-publications",
          title: "publications",
          description: "here is a list of publications from my career so far",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-curriculum-vitae",
          title: "curriculum vitae",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "dropdown-repositories",
              title: "repositories",
              description: "",
              section: "Dropdown",
              handler: () => {
                window.location.href = "/repositories/";
              },
            },{id: "post-visit-to-boston",
        
          title: "visit to boston",
        
        description: "it happened on newbury street",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/visit-to-boston/";
          
        },
      },{id: "post-about-the-furby",
        
          title: "about the furby",
        
        description: "what could go wrong?",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2025/about-the-furby/";
          
        },
      },{id: "post-hello-world",
        
          title: "hello, world",
        
        description: "testing, testing...one, two, three",
        section: "Posts",
        handler: () => {
          
            window.location.href = "/blog/2023/hello-world/";
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-my-website-goes-online",
          title: 'My website goes online! 🎉',
          description: "",
          section: "News",},{id: "news-started-a-new-job-at-ionq-and-moved-to-washington-d-c-️",
          title: 'Started a new job at IonQ and moved to Washington, D.C. ✈️',
          description: "",
          section: "News",},{id: "projects-i-39-m-on-a-software-defined-radio-part-1",
          title: 'i&amp;#39;m on a software defined radio - part 1',
          description: "whoa, radio",
          section: "Projects",handler: () => {
              window.location.href = "/projects/sdr_project/";
            },},{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/Julespeak", "_blank");
        },
      },{
        id: 'social-lastfm',
        title: 'Last FM',
        section: 'Socials',
        handler: () => {
          window.open("https://www.last.fm/user/Julespeak", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/jules-stuart-036b0a188", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=AhJpUpgAAAAJ", "_blank");
        },
      },{
        id: 'social-spotify',
        title: 'Spotify',
        section: 'Socials',
        handler: () => {
          window.open("https://open.spotify.com/user/julespeak", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/JeezJules", "_blank");
        },
      },{
        id: 'social-youtube',
        title: 'YouTube',
        section: 'Socials',
        handler: () => {
          window.open("https://youtube.com/@RenegadeScience", "_blank");
        },
      },{
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
