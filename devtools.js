console.log('devtools.js');

chrome.devtools.panels.create('Backbase', 'backbase.png', 'panel.html', function(panel) {
    panel.onHidden.addListener(function() {
        chrome.devtools.inspectedWindow.eval(`
                document.body.removeChild(document.getElementById('ivo-bobul'));
            `)
    });
});

chrome.devtools.panels.elements.createSidebarPane('Backbase Item Model', function(sidebar) {
    var GET_ITEM_MODEL_EXPRESSION = `
        (function() {
            function getComponentsTree(node) {
                return {
                    name: node.name,
                    type: node.tagName,
                    parent: node.parentItemName,
                    contextItemName: node.contextItemName,
                    extendedItemName: node.extendedItemName,
                    preferences: node.preferences.array.map(formatItemPreference),
                    tags: node.tags.map(formatItemTag)
                };
            }

            function formatItemPreference(preference) {
                return {
                    name: preference.name,
                    label: preference.label,
                    value: preference.value,
                    viewHint: preference.viewHint
                }
            }

            function formatItemTag(tag) {
                return {
                    name: tag.value,
                    type: tag.type
                }
            }

            var bbItemNode = $0.closest("[data-pid]");
            if (bbItemNode) {
                return getComponentsTree(b$.portal.portalModel.all[bbItemNode.attributes['data-pid'].value]);
            } else {
                return {
                    message: "This element doesn't have associated Backbase Item"
                };
            }
        }());
    `;

    function update() {
        sidebar.setExpression(GET_ITEM_MODEL_EXPRESSION);
    }
    update();

    chrome.devtools.panels.elements.onSelectionChanged.addListener(update);

});
