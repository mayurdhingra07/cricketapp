app.factory("playerFactory", function ($http, $q) {
    var object = {};
    var key = "Z3lh0wDfcNVy6KQxCHuk4hwKvdB2"; // Free key used via cricapi.com
    object.callServer = function (Playername) {
        var defered = $q.defer();
        var url = "https://cricapi.com/api/playerStats?pid=" + Playername + "&&apikey=" + key;
        $http.get(url).then(success, fail);

        function success(data) {
            defered.resolve(data);
        }

        function fail(error) {
            defered.reject(error);
        }
        return defered.promise;
    }
    return object;
});
