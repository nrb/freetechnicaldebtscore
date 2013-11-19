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

    $scope.score = 0;

    $scope.checkLanguage = function () {
        return $scope.score += $scope.languageUsed.score;
    };
}
