var currentTab = null;
function showText(tabId) {
    var tabs = document.getElementById(tabId);
    if (currentTab !== null && currentTab !== tabs){
        currentTab.style.display = 'none';
        
    }
    if(tabs.style.display === 'none'){
        tabs.style.display = 'block';
        currentTab = tabs;
    }else{
        tabs.style.display = 'none';
        currentTab = null;
    }
}
document.addEventListener('DOMContentLoaded', () => {
    // Get reference to the summary button
    let summary = document.getElementById('summary');

    // Add click event listener to change background color
    summary.addEventListener('click', () => {
        // Change background color to white when clicked
        summary.style.backgroundColor = '#fff';
        
        // Reset background color of other buttons
        document.getElementById('theme').style.backgroundColor = '#bdbfc3';
        document.getElementById('qoutes').style.backgroundColor = '#bdbfc3';
    });

    // Get references to theme and qoutes buttons
    let theme = document.getElementById('theme');
    let qoutes = document.getElementById('qoutes');

    // Add click event listeners to theme and qoutes buttons
    theme.addEventListener('click', () => {
        // Change background color to white when clicked
        theme.style.backgroundColor = '#fff';
        
        // Reset background color of other buttons
        summary.style.backgroundColor = '#bdbfc3';
        qoutes.style.backgroundColor = '#bdbfc3';
    });

    qoutes.addEventListener('click', () => {
        // Change background color to white when clicked
        qoutes.style.backgroundColor = '#fff';
        
        // Reset background color of other buttons
        summary.style.backgroundColor = '#bdbfc3';
        theme.style.backgroundColor = '#bdbfc3';
    });
});