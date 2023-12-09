var extensionSettings

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
        dashboardLinks: true
    },
    (items) => {
        extensionSettings = items;
    });


const observer = new MutationObserver(() => {
    if(!extensionSettings.dashboardLinks)
        return;
        
    document.querySelectorAll(".block_myoverview .dashboard-card-deck .dashboard-card").forEach(card => {
        let id = card.dataset.courseId;
        let courseNav = document.createElement("div");
        card.querySelector(".card-body").append(courseNav);
        courseNav.style.display = "flex";
        courseNav.style.gap = "20px";

        if (extensionSettings.assignments)
            createNavButton(courseNav, id, "Assignments", "https://moodle.jamk.fi/mod/assign/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/assign/1701777894/monologo?filtericon=1");
        if (extensionSettings.resources)
            createNavButton(courseNav, id, "Resources", "https://moodle.jamk.fi/course/resources.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/mod_page/1701777894/monologo");
        if (extensionSettings.interactiveContent)
            createNavButton(courseNav, id, "Interactive Content", "https://moodle.jamk.fi/mod/hvp/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/hvp/1701777894/monologo");
        if (extensionSettings.groupSelfSelections)
            createNavButton(courseNav, id, "Group Self-Selections", "https://moodle.jamk.fi/mod/groupselect/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/groupselect/1701777894/monologo");
        if (extensionSettings.groupChoices)
            createNavButton(courseNav, id, "Group Choices", "https://moodle.jamk.fi/mod/choicegroup/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/choicegroup/1701777894/monologo");
        if (extensionSettings.forums)
            createNavButton(courseNav, id, "Forums", "https://moodle.jamk.fi/mod/forum/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/forum/1701777894/monologo");
        if (extensionSettings.blog)
            createNavIcon(courseNav, id, "Blog", "https://moodle.jamk.fi/blog/index.php?courseid=", "fa-rss");
        if (extensionSettings.feedbackActivities)
            createNavButton(courseNav, id, "Feedback Activities", "https://moodle.jamk.fi/mod/feedback/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/feedback/1701777894/monologo");
        if (extensionSettings.choices)
            createNavButton(courseNav, id, "Choices", "https://moodle.jamk.fi/mod/choice/index.php?id=", "https://moodle.jamk.fi/theme/image.php/maisteriboost/choice/1701777894/monologo");

        observer.disconnect();
    })
    observer.observe(document.querySelector(".block_myoverview"), config);
});

const config = { childList: true, subtree:true };


observer.observe(document.querySelector(".block_myoverview"), config);


function createNavButton(courseNav, id, title, link, imgSrc) {

    let el = document.createElement("a");
    let elIcon = document.createElement("img");

    elIcon.src = imgSrc;
    elIcon.title = title;
    elIcon.width = 25;
    elIcon.height = 25;
    el.append(elIcon);

    el.style.display = "flex";
    el.style.alignItems = "center";
    el.href = link + id;

    courseNav.append(el);
}

function createNavIcon(courseNav, id, title, link, icon) {
    let el = document.createElement("a");
    let elIcon = document.createElement("i");

    elIcon.className = "icon fa fa-fw " + icon;
    elIcon.style.fontSize = "25px";
    elIcon.style.width = "25px";
    elIcon.style.height = "25px";
    elIcon.style.margin = "0";
    elIcon.style.color = "black";
    elIcon.title = title;

    el.append(elIcon);

    el.style.display = "flex";
    el.style.alignItems = "center";
    el.href = link + id;

    courseNav.append(el);
}