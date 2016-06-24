angular.module('devTool', ['treeControl'])
    .factory('portalModel', function($q) {
        var service = {
            getFormatedPageTree: getFormatedPageTree
        };

        return service;

        /////////

        function getPageModelXml () {
            return $q(function(resolve, reject) {
                chrome.devtools.inspectedWindow.eval('b$.portal.portalModel.toXML()', function(result, isException) {
                    if (isException) {
                        reject(result)
                    } else {
                        resolve(result);
                    }
                });
            });
        }

        function getFormatedPageTree() {
            return getPageModelXml()
                .then(convertToJSON)
                .then(formatPageTree);
        }

        function convertToJSON(xml) {
            return xmlToJSON.parseString(xml);
        }

        function formatPageTree(pageTree) {
            return pageTree;
        }
    })
    .controller('ElementsCtrl', function ($scope, portalModel) {
        portalModel.getFormatedPageTree().then(function(pageTree) {
            console.log('pageTree', pageTree);
        });

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
        $scope.dataForTheTree =
            [
                {
                    "name": "Joe",
                    "age": "21",
                    "children": [
                        {
                            "name": "Smith",
                            "age": "42",
                            "children": []
                        },
                        {
                        "name": "Gary", "age": "21", "children": [
                        {
                            "name": "Jenifer", "age": "23", "children": [
                            {"name": "Dani", "age": "32", "children": []},
                            {"name": "Max", "age": "34", "children": []}
                        ]
                        }
                    ]
                    }
                ]
                },
                {"name": "Albert", "age": "33", "children": []},
                {"name": "Ron", "age": "29", "children": []}
            ];
    });
