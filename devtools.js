console.log('devtools.js');

chrome.devtools.panels.create('Backbase', 'backbase.png', 'panel.html', function(panel) {
    console.log('Panel created', panel);
});
