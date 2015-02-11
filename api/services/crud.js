// get the name of the model
getName = function (model) {
    return model._context.adapter.collection;
}

// get the criteria in the model after applying where clause
getCriteria = function (model) {
    var crit = model._criteria.where;
    return crit;
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

populating = function(populate, model) {
    if(populate.length) {
        for(var i = 0 ; i < populate.length ; i++) {
            model.populate(populate[i]);
        }
    }
    else { 
        model.populate(populate);
    }
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
 * updatedata - Optional
 * Type: json
 * Default: null.
 * if action is update and this json is provided
 * Then this function will update the found records with the column and value contains in this json
 *
 * add - Optional (Required if action is update and updatedata is not provided)
 * Type: json
 * Default: null
 * if action is update/create and this json is provided
 * then the function will find/create the records match to the where clause.
 * Then for each found/created record, the function will add an association for this record.
 *
 * createdata - required if action is true.
 * Type: json
 * Default: null.
 * if action is create and this json is provided
 * Then this function will create a new record with the column and value contains in this json
 */
module.exports = function(params, callback) {


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

        // if these input is provided, then parse it to json
        if(params.param('where')) {
            input.where = JSON.parse(params.param('where'));
        }

        if(params.param('updatedata')) {
            input.updatedata = JSON.parse(params.param('updatedata'));
        } 
        else if(params.param('createdata')) {
            input.createdata = JSON.parse(params.param('createdata'));
        }

        if(params.param('populate')) {
            try {
                input.populate = JSON.parse(params.param('populate'));
            }
            catch(err) {
                input.populate = params.param('populate');
            }
        }

        if(params.param('add')) {
            input.add = JSON.parse(params.param('add').toLowerCase());
        }

    }
    else {
        var input = params;

        // if these input is provided, then parse it to json
        if(params.where) {
            input.where = JSON.parse(params.where);
        }

        if(params.updatedata) {
            input.updatedata = JSON.parse(params.updatedata);
        } 
        else if(params.createdata) {
            input.createdata = JSON.parse(params.createdata);
        }

        if(params.populate) {
            try {
                input.populate = JSON.parse(params.param('populate'));
            }
            catch(err)  {
                input.populate = params.param('populate');
            }
        }

        if(params.add) {
            input.add = JSON.parse(params.add.toLowerCase());
        }
    }
    
    // check if input.from is provided
    // if not, then return with status and fail message
    if(!input.from)
    {
        checkThenLog(log,'Missing variable: from');
        result['message'] = 'Missing variable: from';
        result['status'] = 0;
        callback(result);
        return ('Missing variable: from');
    }

    // get the model name from the user input.from
    var modelName = capitaliseFirstLetter(input.from);
    var modelNameLowerCase = capitaliseFirstLetter(input.from);

    //default value 
    var message = true;
    var log = false;
    var action = 'find';
    var result = {status: 1, message: 'success'};
    var add = input.add;

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

    // if user provide the input populate
    if(input.populate) {
        var populate = input.populate;
    }

    //change the action to match the user input
    if(input.action) {
        // if input.action == destroy
        // then set action = 'destroy'
        if(input.action.toLowerCase() == 'destroy') {
            action = 'destroy';
        }

        // set data = input.data
        // set action = input.action
        // 
        // if input.action == update or input.action == insert
        // if input.data is not provided
        // then return the error message and status
        else if (input.action.toLowerCase() == 'update' || input.action.toLowerCase() == 'create') {
            action = input.action.toLowerCase();

            // dedends on the action, the data will get difference data from input
            if (action == 'create') {
                var data = input.createdata;
            }
            else if (action == 'update') {
                var data = input.updatedata;
            }

            // if data and add is not provide
            // then return with fail message and status
            if(!data && !add) {
                checkThenLog(log,'Variable "' + action + 'data" is missing for ' + action);
                result['message'] = 'Variable "' + action + 'data" is missing for ' + action;
                result['status'] = 0;
                callback(result);
                return;
            }
        }
    }
    // try to get the model name in "from" that the user provide
    try {
        // get the model. 
        // This is equal to Ingredient.find() or Store.create() ... depdends on the modelName
        if(action == 'destroy')
            var model = global[modelName].destroy();
        else if(action == 'create') {
            var model = global[modelName].create(data);

            if(populate)
                populating(populate, model);

            model.exec(function(err, created){
                // is there is some errors
                // then assgign 'error' to result['message']
                if(err) {
                    result['message'] = 'error when creating';
                    checkThenLog(log,err);
                }

                // if nothing was created
                // then assign a message to result['message']
                if(!created) {
                    result['status'] = 0;
                    result['message'] = 'can not create ' + modelName;

                    checkThenLog(log,'Can not create ' + modelName + 'with these data');
                    checkThenLog(log,data);
                }

                // if add and populate is provide
                // then perform the adding for the association
                if(add) {
                    if(populate) {

                        // loop throught each key in add
                        for( var n = 0 ; n < (Object.keys(add)).length; n++) {
                            var key = (Object.keys(add))[n];

                            // for each key of add
                            // loop through each value of that key
                            for( var m = 0 ; m < add[key].length ; m++ ) {

                                // if created is an array then perform the adding for each element
                                if(created.length) {
                                    for(var i = 0 ; i < created.length ; i ++ ) { 
                                        var value = add[key][m];
                                        created[i][key].add(value);
                                    }
                                    created[i].save();
                                }
                                // if create is only one then perform the adding to one object
                                else {
                                    var value = add[key][m];
                                    created[key].add(value);
                                    created.save();
                                }
                            }
                        }
                    }
                    else {
                        // if populate is not provided
                        // then return with fail message and status
                        result['message'] = 'Missing input for update';
                        result['status'] = 0;
                        checkThenLog(log,err);
                        callback(result);
                        return;
                    }
                }

                result[modelNameLowerCase] = created;

                // if there is a call back function
                // then do the callback function
                if(callback) {
                    // if input for message is true
                    // then return the object result (which containing message and status)
                    // else
                    // return created variable (which only contain the matches created)
                    if(message == true) {
                        callback(result);
                    }
                    else {
                        callback(created);
                    }
                }
            });
            return;
        }
        else {
            var model = global[modelName].find()
        }
    }
    catch(err) {
        result['status'] = 0;
        result['message'] = 'There is no such model name: ' + modelName;
        checkThenLog(log,'There is no such model name: ' + modelName);
        if(callback) {
            if(message == true)
                callback(result);
            else
                callback(null);
        }
        return;
    }

    // if action is find or update
    // then apply where and populate to model
    if(action != 'create') {
        // if the user provide the input where.
        // if not then find all
        if(input.where) {
            // get the where clause from the user input.where which is in json format
            var where = input.where;
            // apply where clause to model
            model.where(where);
        }

        if(populate) 
            populating(populate, model);
    }

    //execute the finding function for model
    model.exec(function (err, found) {
        // is there is some errors
        // then assgign 'error' to result['message']
        if(err) {
            result['message'] = 'error when finding';
            checkThenLog(log,err);
        }

        // if no match found
        // then assign a message to result['message']
        if(!found || !found.length) {
            result['message'] = 'can not find any ' + modelName;
            result[modelNameLowerCase] = new Array();

            checkThenLog(log,'Can not find any ' + modelName + 'with these criteria');
            checkThenLog(log,getCriteria(model));
            
            callback(result);
            return;
        }

        // if data or add is provided and action is update
        // then do the update for the found record
        if(action == 'update') {
            if(data || add) {
                // perform a loop through all object in that array
                for(var j = 0; j < found.length; j++) {

                    // if data is provide
                    // then perform the update
                    if(data){
                        for(var i = 0; i < Object.keys(data).length; i++) {
                            // for each object in data
                            // which is containing the column and the value to be data
                            // apply that to every found record
                            found[j][Object.keys(data)[i]] = data[Object.keys(data)[i]];
                        }
                    }

                    // if add is provide
                    // then perform the adding for the association
                    if(add) {
                        if(populate) {
                            for( var n = 0 ; n < (Object.keys(add)).length; n++) {
                                var key = (Object.keys(add))[n];
                                // for each key in "add"
                                // get the name of the key
                                for( var m = 0 ; m < add[key].length ; m++ ) {
                                    // loop through all the values of that key
                                    // add that value into the joint table
                                    var value = add[key][m];
                                    found[j][key].add(value);
                                }
                            }
                        }
                        else {
                            result['message'] = 'Missing input for update';
                            result['status'] = 0;
                            checkThenLog(log,err);
                            callback(result);
                            return;
                        }
                    }
                }

                // save all the changes that we just applied to the records
                for(var i = 0; i < found.length; i++) {
                    found[i].save(function(err) {
                        if(err) {
                            result['message'] = 'error when updating';
                            result['status'] = 0;
                            checkThenLog(log,err);
                            callback(result);
                            return;
                        }
                    });
                }
            }
            else {
                // if neither data or add is provide
                // then return with fail message and status
                result['message'] = 'Missing input for update';
                result['status'] = 0;
                checkThenLog(log, result['message']);
                callback(result);
                return;
            }
        }

        // if finding success
        // then assign result['model name'] = found
        // else
        // then data status to 0
        if(result['message'] == 'success') {
            result[modelNameLowerCase] = found;
        }
        else {
            result['status'] = 0;
        }

        checkThenLog(log,result['message']);

        // if there is a call back function
        // then do the callback function
        if(callback) {
            // if input for message is true
            // then return the object result (which containing message and status)
            // else
            // return found variable (which only contain the matches found)
            if(message == true) {
                callback(result);
            }
            else {
                callback(found);
            }
        }
    });
}
