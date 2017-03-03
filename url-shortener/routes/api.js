module.exports = function(express) {
    var router = express.Router();

    router.post('/v1/url', function(req, res){
        //Store stuff
        var preUrl = "newURLShortener";
        //Store URL Input
        var urlBreak = req.params.url;
        function returnStringGen(strLength){
            // random
            var strSource ='ABCDEFGHIJKLMNOPQRSTUVWXZYabcdefghijklmnopqrstuvwxyz1234567890';
            var strReturn = '';
            for(var i=0; i<strLength; i++){
                var rand = Math.round(Math.random() * (strSource.length - 1));
                strReturn += strSource.charAt(rand);

            }
            //stringGen
            return strReturn;
        }
        var stringGen = returnStringGen;
        var output = stringGen(10);
       //create new url
        var newURL = preUrl+"/"+output;
        //New URL output
        res.json({v1: {url: newURL}});
    });

    return router
}
