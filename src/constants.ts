const CONSTANTS: {
  CURRENT_CITY: string;
  CURRENT_WORK: string;
  QUICK_BIO_A: string;
  QUICK_BIO_B: string;
  ABOUT_ME: string;
  EMAIL: string;
  LINKED_IN_URL: string;
  GITHUB_URL: string;
  MEDIUM_URL: string;
  MEDIUM_BLOG: string;
  GITHUB_API_URL: string;
  REPOS_QUERY: string;
} = {
  CURRENT_CITY: "Bouncing between Los Angeles and Seattle",
  CURRENT_WORK: "https://mobyinc.com/",
  QUICK_BIO_A: "Hi there! My name is Ren, and I'm a Full Stack Developer. I am currently working for ",
  QUICK_BIO_B:
    " --a boutique tech company where we create/maintain websites, mobile applications and other technical solutions! During my time at Moby I've been lucky enough to jump around between several different projects and I've added numerous features to some of our main/legacy projects, a prominent one being the Pagliacci website. As a quick example, I've added an 'order status visualization' widget that polls the backend and updates the UI to let the user know when the order is either `received`, `en-route` or `picked-up/delivered.` The Pagliacci website is written in Angular and we use observables for monitoring most state-change throughout the app. All in all, I'd consider myself a developer who enjoys problem solving and friendly collaboration on my path to a solution! (And for my final 'humble-brag' 😂) I was lucky enough to have one of the articles I'd written featured on ",
  ABOUT_ME:
    "Hey again! In case you're curious about my background, I worked at Boeing in Everett as a Composite Repair Technician for a little over 6 years before taking a voluntary layoff. I'd already been taking evening coding classes and was planning for a career transition-- my layoff became the perfect excuse to begin this new chapter of my life! Since then I've completed a year-long apprenticeship at Microsoft, worked at C4L Academy and contributed to a non-profit food delivery app (Banana App) to help those who are food insecure. At C4L Academy I worked on an ed-tech app-- it consisted of an admin+student online portal both written in React/Typescript and a shared Ruby on Rails backend. Using the app students could complete their High School education and earn a bonafide diploma! In my free time I enjoy playing casual DnD and boardgames with friends, I can also be spotted at the various barcades and board-game cafes throughout the city. In the fall and wintertime you can catch me trying my best not to fall in my adult beginners hockey league! Okay.. last 'factoid' I swear; I love traveling abroad, especially to countries where I can practice my Spanish speaking skills. Anyway, at the end of the day love, open/honest communication and mutual respect y'all, thats what it's all about! Cheers!",
  EMAIL: "renardburnett@gmail.com",
  LINKED_IN_URL: "https://www.linkedin.com/in/renard-burnett-ii/",
  GITHUB_URL: "https://www.github.com/renburnett",
  MEDIUM_URL: "https://www.medium.com/@renxburnett",
  MEDIUM_BLOG: "https://levelup.gitconnected.com/implementing-a-bst-in-javascript-dc818ba50633",
  GITHUB_API_URL: "https://api.github.com/graphql",
  REPOS_QUERY: `
    query {
      user(login: "renburnett") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          edges {
            node {
              ... on Repository {
                name
                url
                homepageUrl
                description
                primaryLanguage {
                  name
                }
              }
            }
          }
        }
      }
    }
  `,
};

export default CONSTANTS;
