const CONSTANTS = {
  CURRENT_CITY: "Bouncing between L.A. and Seattle",
  QUICK_BIO_A:
    "Hi there! My name is Ren, and I'm a Fullstack Web Developer. I am currently working on ",
  QUICK_BIO_B:
    " --an education application where students can complete their High School education and earn a diploma! I love working on projects with some sort of positive impact on everyday people. I finished a Software Developer Certificate program at the Flatiron School in downtown Seattle. I write web apps, scripts and programs. I'd consider myself a developer who enjoys problem solving and friendly collaboration on my path to a solution. Also I was happy to have one of my articles featured on ",
  ABOUT_ME:
    "Hey again! In case you’re curious about my background, I worked at Boeing in Everett as a Composite Repair Technician for a little over 6 years before taking a voluntary layoff. I’d already been taking evening coding classes and was planning for a career transition-- my layoff became the perfect excuse to begin this new chapter of my life! In my free time I enjoy playing casual DnD with friends. I also can sometimes be spotted at the various barcades and board-game cafes throughout the city. I love traveling abroad especially to countries where I can practice my Spanish speaking skills. Love, honest communication and mutual respect y'all, thats what it's all about! Cheers!",
  EMAIL: "renardburnett@gmail.com",
  LINKED_IN_URL: "https://www.linkedin.com/in/renard-burnett-ii/",
  GITHUB_URL: "https://www.github.com/renburnett",
  MEDIUM_URL: "https://www.medium.com/@renxburnett",
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
