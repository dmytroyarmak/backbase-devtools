console.log('devtools.js');

chrome.devtools.panels.create('Backbase', 'backbase.png', 'panel.html', function(panel) {
    console.log('Panel created', panel);
});

chrome.devtools.panels.elements.createSidebarPane('Backbase Item Model', function(sidebar) {
    sidebar.setObject({
        lorem: 'ipsum'
    });
});
