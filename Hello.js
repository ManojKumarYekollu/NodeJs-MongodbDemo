myCollection.insert({name: "doduck", description: "learn more than everyone"}, function(err, result) {
    if(err)
        throw err;
 
    console.log("entry saved");
});