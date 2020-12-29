//controller for rendering home page

module.exports.home=function(req,res){
    return res.render('home',{
        title : "Web Test 1"
    });
}

//module.exports.actionName= function(req,res){}