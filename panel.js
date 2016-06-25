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
        $scope.expandedNodes = [];


        function getExpanded(node, result) {
            if (node.children && node.children.length > 0) {
                result.push(node);
                node.children.forEach(function(child) {
                    getExpanded(child, result);
                })
            }
            return result;
        }

        portalModel.getPageTree().then(function (pageTree) {
            $scope.pageTree = pageTree;
            $scope.expandedNodes = getExpanded(pageTree[0], []);
        });

        $scope.setCurrentItem = function (item) {
            $scope.currentItem = item;
            $scope.highlightElement(item);
        };

        $scope.selectElement = function (item) {
            chrome.devtools.inspectedWindow.eval("inspect(document.querySelector('[data-pid=\"" + item.name + "\"]'))")
        };

        $scope.scrollToElement = function (item, $event) {
            if (item === $scope.currentItem) {
                $event.stopPropagation();
            }
            chrome.devtools.inspectedWindow.eval(`
                (function() {
                    var elementPostion = document.querySelector('[data-pid="${item.name}"]').getBoundingClientRect();
                    var startPosition = document.body.scrollTop;
                    var endPosition = Math.min(document.body.scrollHeight, Math.max(elementPostion.top + document.body.scrollTop, 0));
                    if (startPosition === endPosition) return;
                    var difference = (endPosition - startPosition) / 10;

                    (function onAnimationFrame() {
                        if (document.body.scrollTop === 0 && difference < 0) return;
                        if (document.body.scrollTop === document.body.scrollHeight && difference > 0) return;

                        if (Math.abs(difference) > 3) {
                            difference = difference * 0.95;
                        } else {
                            difference = Math.sign(difference) * 3;
                        }
                        if (Math.sign(difference) * (endPosition - document.body.scrollTop + difference) < Math.abs(difference)) {
                            document.body.scrollTop = endPosition;
                        } else {
                            document.body.scrollTop = document.body.scrollTop + difference;
                            requestAnimationFrame(onAnimationFrame);
                        }
                    }());
                }());
            `);
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
