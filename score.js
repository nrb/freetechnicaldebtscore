generateScore = function () {
    return ~~(Math.random() * 10000);
};

function ScoreCtrl($scope) {

    $scope.languages = [
        {name: 'php', score: generateScore()},
        {name: 'python', score: generateScore()},
        {name: 'ruby', score: generateScore()},
        {name: 'erlang', score: generateScore()},
        {name: 'javascript', score: generateScore()},
        {name: 'clojure', score: generateScore()},
        {name: 'haskell', score: generateScore()},
        {name: 'scala', score: generateScore()},
        {name: 'java', score: generateScore()},
        {name: 'cobol', score: generateScore()},
        {name: 'c', score: generateScore()},
        {name: 'objective-c', score: generateScore()},
        {name: 'c++', score: generateScore()},
        {name: 'go', score: generateScore()},
        {name: 'perl', score: generateScore()}
    ];

    // Start with blank data.
    $scope.languageUsed = {name:'', score:0};
    $scope.testCount = 0;

    $scope.calcUnitTestValue = function () {
        return ($scope.testCount > 0) ? $scope.testCount * 10 : -10000 * generateScore();
    };

    $scope.score = function () {
        var score = ($scope.languageUsed.score +
                     $scope.calcUnitTestValue())
        return score;
    };

    $scope.checkLanguage = function () {
        return $scope.score += $scope.languageUsed.score;
    };
}
