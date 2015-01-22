// *  beta version. Not fully operational yet.
// ** developing. Does not work yet.

var clone = require('clone');

// to check if a child is an object or not.
isObject = function (param) {
    if(param.and){
        return true;
    } 
    else if (param.or) {
        return true;
    }
    return false
}

// get the name of the model
getName = function (model) {
    return model._context.adapter.collection;
}

// *get the criteria in the model after applying where clause
getCriteria = function (model) {
    var crit = model._criteria.where;
    return crit;
}

getJson = function(json, model) {
    // because we don't know we will encounter json.and or json.or
    // so that we will set crit will be equal to one of them
    // that will be easier to use later
    if(json.and)
        var crit = json.and;
    else if(json.or)
        var crit = json.or;

    // loop through each child in the object
    for(var i = 0; i < crit.length; i++) {
        if(isObject(crit[i])){
            // if this child is an object (which is "or" or "and" object)
            // then getJson of this child
            getJson(crit[i], model);
        }
        else {
            // if this child is not object
            // and this child is in an "and" object
            // then manually apply each criteria in json to where clause
            if(json.and)
                model.where(crit[i]);
        }
    }
    if(json.or)
        // if this is in an "or" object
        // then we only need to apply criteria in json using the built in way of sails
        model.where(crit);
}

/**
 * [find description]
 * this function will get a list of criteria to find objects in a model.
 * then, it will display a list of objects including message and status.
 * 
 * @param  {type: json} json    input json
 * @param  {type: model} model   the model to select
 * @param  {type: res} res     the res object from controller (workaround)
 * @param  {type: array} options there are 2 options :
 * res: 
 *      true: return res.json the result including message and status
 *      **false: suppose to return the result to the controller 
 * log:
 *      true: write to the console the log
 *      false: not writing any log
 */
exports.find = function(json, model, res, options) {
    // apply where clause to model
    getJson(json, model);

    // [begin set defaut parameters]
    var dfRes = true;
    var dfLog = false;
    var modelName = ''+getName(model);
    var result = {status: 1, message: 'success'};

    if(typeof options == 'undefined') {
        options = {
            res: dfRes, 
            log: dfLog
        };
    }
    else {
        if(typeof options.res == 'undefined')
            options.res = dfRes;
        if(typeof options.log == 'undefined')
            options.log = dfLog;
    }
    // [end set defaut parameters]

    //execute the finding function for model
    model.exec(function (err, found) {
        // Check if there is any error
        if(err) {
            result['message'] = 'error';
            if(options.log)
                console.log(err);
        }

        //check if there is any found
        if(!found || !found.length) {
            result['message'] = 'can not find any ' + modelName;
            if(options.log)
                console.log(getCriteria(model));
        }

        if(result['message'] == 'success') {
            // if finding success
            // then assign result['model name'] = found
            result[getName(model)] = found;
        }
        else {
            // if finding not success
            // set status to 0
            result['status'] = 0;
        }

        if(options.log)
            //write log to the console
            console.log(result['message']);

        if(options.res)
            // if options.res is enable then res.json the result
            return res.json(result);
        else 
            return result;
    });
}