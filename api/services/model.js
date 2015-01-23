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

// get the criteria in the model after applying where clause
getCriteria = function (model) {
    var crit = model._criteria.where;
    return crit;
}

// Apply where clause to the model.
getJson = function(json, model) {
    // because we don't know we will encounter json.and or json.or
    // so that we will set crit will be equal to one of them
    // that will be easier to use later
    if(json.and)
        var crit = json.and;
    else if(json.or)
        var crit = json.or;

    // if the json input only have on criteria, then crit.length will fail
    // so that we only need to use model.where(crit);
    try {
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
    catch(err) {
        model.where(crit);
    }
}

// If the criteria is true
// then write to console a message
checkThenLog = function(criteria, string) {
    if(criteria == true)
        console.log(string);
}

capitaliseFirstLetter = function(string)
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}

/**
 * this function is to get json of object which match the where clause 
 * the json of objects can be use in callback function
 * 
 * this function will have no use if there is no callback function
 * at least do the res.json(found)
 *
 * input is an array which contain these elements:
 *
 * from - Required. 
 * Type: string. Contain the model name
 * this is the model to find
 * 
 * where - Optional. 
 * Type: json. 
 * Default : if not provided then the function will find all
 * this is the json of the where clause, it can mix "and" and "or" phrase
 *
 * message - Optional.
 * Type: boolean.
 * Default : false
 * If this is set to true, then in the return object, it will contain status and message.
 * Otherwise it only contain an array of found objects
 *
 * log - Optional.
 * Type: boolean.
 * Default : false
 * If this is set to true, then this function will write the logs to the console
 *
 * action - Optional.
 * Type: string
 * Default: find
 * if this is set to find or not provide, then the function will only find the records
 * if this is set to destroy, then the function will destroy any found record from db
 * if this is set to update, then the function will quire the input "set" 
 *      in order to know which column to be set with what value
 *
 * set - required if action is 'update'
 * Type: json
 * Default: null.
 * if action is update and this json is provided
 * Then this function will update the found records with the column and value contains in this json
 */
exports.exec = function(params, callback) {

    // if the type of params is req
    // then assign the input like params.query.from . . .
    // else (which is input as array from controller)
    // then assign input directly as array to array
    if(params._readableState) {
        var input = {
            'from': params.param('from'),
            'message': params.param('message'),
            'log': params.param('log'),
            'action': params.param('action')
        };

        // if user provide the input where then parse it to json
        if(params.param('where')) {
            input.where = JSON.parse(params.param('where'));
        }

        // if user provide the input set then parse it to json
        if(params.param('set')) {
            input.where = JSON.parse(params.param('set'));
        }

    }
    else {
        var input = params;
    }

    // get the model name from the user input.from
    var modelName = capitaliseFirstLetter(input.from.toLowerCase());

    //default value for message, log, action
    var message = true;
    var log = false;
    var action = 'find';

    if(input.set) {
        var set = input.set;
    }

    //if user input message and it's true
    //then assign message = true
    if(input.message)
        if(input.message.toLowerCase() == 'false')
            message = false;

    //if user input log and it's true
    //then assign log = true
    if(input.log)
        if(input.log.toLowerCase() == 'true')
            log = true;

    //change the action to match the user input
    if(input.action) {
        if(input.action.toLowerCase() == 'destroy')
            action = 'destroy';
        else if (input.action.toLowerCase() == 'update')
            action = 'update';
    }

    // try to get the model name in "from" that the user provide
    try {
        // get the model. 
        // This is equal to Ingredient.find() or Store.find() ... depdends on the modelName
        if(action.toLowerCase() == 'destroy')
            var model = global[modelName].destroy();
        else
            var model = global[modelName].find();
    }
    catch(err) {
        return checkThenLog(log,'There is no such model name: ' + modelName);
    }

    if(!input.from)
    {
        checkThenLog(log,'Missing input: from');
        return ('Missing input: from');
    }

    //set default status and message
    var result = {status: 1, message: 'success'};

    // if the user have the input json.
    // if not then find all
    if(input.where) {
        // get the where clause from the user input.where which is in json format
        var where = input.where;

        // apply where clause to model
        getJson(where, model);
    }

    //execute the finding function for model
    model.exec(function (err, found) {
        // is there is some errors
        // then assgign 'error' to result['message']
        if(err) {
            result['message'] = 'error when finding';
            checkThenLog(log,err);
            return;
        }

        // if no match found
        // then assign a message to result['message']
        if(!found || !found.length) {
            result['message'] = 'can not find any ' + modelName;

            checkThenLog(log,'Can not find any ' + modelName + 'with these criteria');
            checkThenLog(log,getCriteria(model));
            return;
        }

        // if set is provided and action is update
        // then do the update for the found record
        if(set && action == 'update') {
            // if set is an array
            // then perform a loop through all object in that array
            if(set.length) {
                for(var i = 0; i < set.length; i++) {
                    for(var j = 0; j < found.length; j++) {
                        // for each object in set
                        // which is containing the column and the value to be set
                        // apply that to every found record
                        found[j][set[i]['column']] = set[i]['value'];
                    }
                }
            }
            // if set is only one object
            // then apply that to every record found
            else {
                for(var j = 0; j < found.length; j++) {
                    found[j][set['column']] = set['value'];
                }
            }
            // save all the changes that we just applied to the records
            for(var i = 0; i < found.length; i++) {
                found[i].save(function(err) {
                    if(err) {
                        result['message'] = 'error when updating';
                        checkThenLog(log,err);
                    }
                });
            }
        }

        // if finding success
        // then assign result['model name'] = found
        // else
        // then set status to 0
        if(result['message'] == 'success') {
            result[getName(model)] = found;
        }
        else {
            result['status'] = 0;
        }

        checkThenLog(result['message']);


        // if there is a call back function
        // then do the callback function
        if(callback) {
            // if input for message is true
            // then return the object result (which containing message and status)
            // else
            // return found variable (which only contain the matches found)
            if(message) {
                callback(result);
            }
            else {
                callback(found);
            }
        }
    });
}
