generateScore = function () {
    return ~~(Math.random() * 10000);
};

function ScoreCtrl($scope) {

    $scope.languages = [
        {name: 'PHP', score: generateScore()},
        {name: 'Python', score: generateScore()},
        {name: 'Ruby', score: generateScore()},
        {name: 'Erlang', score: generateScore()},
        {name: 'JavaScript', score: generateScore()},
        {name: 'Clojure', score: generateScore()},
        {name: 'Haskell', score: generateScore()},
        {name: 'Scala', score: generateScore()},
        {name: 'Java', score: generateScore()},
        {name: 'COBOL', score: generateScore()},
        {name: 'C', score: generateScore()},
        {name: 'Objective-C', score: generateScore()},
        {name: 'C++', score: generateScore()},
        {name: 'Go', score: generateScore()},
        {name: 'Perl', score: generateScore()},
        {name: 'FORTRAN', score: generateScore()},
        {name: 'Lisp', score: generateScore()},
        {name: 'Rust', score: generateScore()}
    ];

    // Start with blank data.
    $scope.languageUsed = {name:'', score:0};
    $scope.testCount = null;
    $scope.langCount = null;

    $scope.calcUnitTestValue = function () {
        var score = 0;
        if ($scope.testCount === null) {
            return score;
        }
        return ($scope.testCount > 0) ? $scope.testCount * 10 : 10000 * generateScore();
    };

    $scope.calcLangCountValue = function () {
        if ($scope.langCount === null) {
            return 0;
        }
        if ($scope.languageUsed.name === 'JavaScript' && $scope.langCount === 1) {
            // Probably node, big hit.
            console.log('GOT A NODE BADASS HERE');
            return generateScore() * 50;
        }
        return $scope.langCount * 50;
    };

    $scope.score = function () {
        var score = ($scope.languageUsed.score +
                     $scope.calcUnitTestValue() +
                     $scope.calcLangCountValue())
        return score;
    };

    $scope.checkLanguage = function () {
        return $scope.score += $scope.languageUsed.score;
    };
}
