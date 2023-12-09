// Saves options to chrome.storage
const saveOptions = () => {
    
    let assignments = document.getElementById('assignments').checked;
    let resources = document.getElementById('resources').checked;
    let interactiveContent = document.getElementById('interactiveContent').checked;
    let groupSelfSelections = document.getElementById('groupSelfSelections').checked;
    let groupChoices = document.getElementById('groupChoices').checked;
    let forums = document.getElementById('forums').checked;
    let blog = document.getElementById('blog').checked;
    let feedbackActivities = document.getElementById('feedbackActivities').checked;
    let choices = document.getElementById('choices').checked;
    let dashboardLinks = document.getElementById('dashboardLinks').checked;
  
    chrome.storage.sync.set(
        { 
            assignments: assignments,
            resources: resources,
            interactiveContent: interactiveContent,
            groupSelfSelections: groupSelfSelections,
            groupChoices: groupChoices,
            forums: forums,
            blog: blog,
            feedbackActivities: feedbackActivities,
            choices: choices,
            dashboardLinks: dashboardLinks,
        },
      () => {
        // Update status to let user know options were saved.
        const status = document.getElementById('status');
        status.textContent = 'Options saved.';
        setTimeout(() => {
          status.textContent = '';
        }, 750);
      }
    );
  };
  
  // Restores select box and checkbox state using the preferences
  // stored in chrome.storage.
  const restoreOptions = () => {
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
        dashboardLinks: true,
    },
      (items) => {
        document.getElementById('assignments').checked = items.assignments;
        document.getElementById('resources').checked = items.resources;
        document.getElementById('interactiveContent').checked = items.interactiveContent;
        document.getElementById('groupSelfSelections').checked = items.groupSelfSelections;
        document.getElementById('groupChoices').checked = items.groupChoices;
        document.getElementById('forums').checked = items.forums;
        document.getElementById('blog').checked = items.blog;
        document.getElementById('feedbackActivities').checked = items.feedbackActivities;
        document.getElementById('choices').checked = items.choices;
        document.getElementById('dashboardLinks').checked = items.dashboardLinks;
      }
    );
  };
  
  document.addEventListener('DOMContentLoaded', restoreOptions);
  document.getElementById('save').addEventListener('click', saveOptions);