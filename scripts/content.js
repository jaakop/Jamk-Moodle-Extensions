const searchParams = new URLSearchParams(window.location.search)
const courseId = searchParams.get('id') ?? searchParams.get('courseid');

let navContainer = document.querySelector("#usernavigation");

let courseNav = document.createElement("div");
navContainer.insertBefore(courseNav, navContainer.firstChild)
courseNav.style.display = "flex";
courseNav.style.gap = "20px";

chrome.storage.sync.get(
  {
    assignments: true,
    resources: true,
    interactiveContent: true,
    groupSelfSelections: true,
    groupChoices: true,
    forums: true,
    blog: true,
    feedbackActivities: true,
    choices: true,
  },
  (items) => {
    if (items.assignments)
      createNavButton("Assignments", "https://moodle.jamk.fi/mod/assign/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/assign/1701777894/monologo?filtericon=1");
    if (items.resources)
      createNavButton("Resources", "https://moodle.jamk.fi/course/resources.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/mod_page/1701777894/monologo");
    if (items.interactiveContent)
      createNavButton("Interactive Content", "https://moodle.jamk.fi/mod/hvp/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/hvp/1701777894/monologo");
    if (items.groupSelfSelections)
      createNavButton("Group Self-Selections", "https://moodle.jamk.fi/mod/groupselect/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/groupselect/1701777894/monologo");
    if (items.groupChoices)
      createNavButton("Group Choices", "https://moodle.jamk.fi/mod/choicegroup/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/choicegroup/1701777894/monologo");
    if (items.forums)
      createNavButton("Forums", "https://moodle.jamk.fi/mod/forum/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/forum/1701777894/monologo");
    if (items.blog)
      createNavIcon("Blog", "https://moodle.jamk.fi/blog/index.php?courseid=", "fa-rss");
    if (items.feedbackActivities)
      createNavButton("Feedback Activities", "https://moodle.jamk.fi/mod/feedback/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/feedback/1701777894/monologo");
    if (items.choices)
      createNavButton("Choices", "https://moodle.jamk.fi/mod/choice/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/choice/1701777894/monologo");
  });


function createNavButton(title, link, imgSrc) {

  let el = document.createElement("a");
  let elIcon = document.createElement("img");

  elIcon.src = imgSrc;
  elIcon.style.filter = "invert(1)"
  elIcon.title = title;
  elIcon.width = 25;
  elIcon.height = 25;
  el.append(elIcon);

  el.style.display = "flex";
  el.style.alignItems = "center";
  el.href = link + courseId;

  courseNav.append(el);
}

function createNavIcon(title, link, icon) {
  let el = document.createElement("a");
  let elIcon = document.createElement("i");

  elIcon.className = "icon fa fa-fw " + icon;
  elIcon.style.color = "white";
  elIcon.style.fontSize = "25px";
  elIcon.style.width = "25px";
  elIcon.style.height = "25px";
  elIcon.style.margin = "0";
  elIcon.title = title;
  
  el.append(elIcon);

  el.style.display = "flex";
  el.style.alignItems = "center";
  el.href = link + courseId;

  courseNav.append(el);
}