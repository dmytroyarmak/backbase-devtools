angular.module('devTool', ['treeControl'])
    .factory('portalModel', function ($q) {
        var GET_PAGE_TREE_EXPRESSION = `
            function getComponentsTree(node) {
                return {
                    name: node.name,
                    type: node.tagName,
                    parent: node.parentItemName ,
                    contextItemName: node.contextItemName,
                    extendedItemName: node.extendedItemName,
                    preferences: node.preferences.array.map(formatItemPreference),
                    tags: node.tags.map(formatItemTag),
                    children: node.childNodes.map(getComponentsTree)
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

            [getComponentsTree(b$.portal.portalModel.firstChild.firstChild.firstChild)];
        `;

        return {
            getPageTree: getPageTree
        };

        /////////

        function getPageTree() {
            return $q(function (resolve, reject) {
                chrome.devtools.inspectedWindow.eval(GET_PAGE_TREE_EXPRESSION, function (result, isException) {
                    if (isException) {
                        reject(result)
                    } else {
                        resolve(result);
                    }
                });
            });
        }
    })
    .controller('ElementsCtrl', function ($scope, portalModel) {
        $scope.currentItem = null;
        $scope.pageTree = [];

        portalModel.getPageTree().then(function (pageTree) {
            $scope.pageTree = pageTree;
        });

        $scope.setCurrentItem = function (item) {
            $scope.currentItem = item;
            $scope.highlightElement(item);
        };

        $scope.selectElement = function (item) {
            chrome.devtools.inspectedWindow.eval("inspect(document.querySelector('[data-pid=\"" + item.name + "\"]'))")
        };

        $scope.highlightElement = function (item) {
            chrome.devtools.inspectedWindow.eval(`
                var elementPostion = document.querySelector('[data-pid="${item.name}"]').getBoundingClientRect()
                var newEl = document.getElementById('ivo-bobul') || document.createElement('div');
                newEl.id = 'ivo-bobul';
                for (item in elementPostion) {
                    if (item === 'top') {
                        newEl.style[item] = document.body.scrollTop + elementPostion[item] + 'px';
                    } else {
                        newEl.style[item] = elementPostion[item] + 'px';
                    }
                }
                newEl.style['z-index'] = 100500;
                newEl.style['position'] = 'absolute';
                newEl.style['background'] = 'red';
                newEl.style['opacity'] = '0.3';
                document.body.appendChild(newEl);
            `)
        };

        $scope.treeOptions = {
            nodeChildren: "children",
            dirSelectable: true,
            injectClasses: {
                ul: "a1",
                li: "a2",
                liSelected: "a7",
                iExpanded: "a3",
                iCollapsed: "a4",
                iLeaf: "a5",
                label: "a6",
                labelSelected: "a8"
            }
        };

        $scope.expanded = {
            details: true,
            preferences: false,
            tags: false
        };
    });
