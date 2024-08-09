var linkContainer = document.createElement("li");

linkContainer.className = "nav-item";

var link = document.createElement("a");
link.role = "menuitem";
link.className = "nav-link";
link.innerHTML = "Blog"
link.href = "https://moodle.jamk.fi/blog/index.php";

linkContainer.append(link);

document.querySelector(".primary-navigation > nav > ul").append(linkContainer)