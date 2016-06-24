angular.module('devTool', ['treeControl'])
    .factory('portalModel', function($q) {
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

        var service = {
            getPageTree: getPageTree
        };

        return service;

        /////////

        function getPageTree() {
            return $q(function(resolve, reject) {
                chrome.devtools.inspectedWindow.eval(GET_PAGE_TREE_EXPRESSION, function(result, isException) {
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

        portalModel.getPageTree().then(function(pageTree) {
            $scope.pageTree = pageTree;
        });

        $scope.setCurrentItem = function(item) {
            $scope.currentItem = item;
        };

        $scope.selectElement = function(item) {
            chrome.devtools.inspectedWindow.eval("inspect(document.querySelector('[data-pid=\""+item.name+"\"]'))")
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
    });
