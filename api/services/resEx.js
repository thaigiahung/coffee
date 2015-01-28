/**
 * check the error and results.
 * then return an object contain the results including status and message
 */
module.exports = function(err, results) {
    var result = {message: 'success', status: 1};
    if(err) {
            result['message'] = err;
            result['status'] = 0;
    }
    else if (!results.length) {
            result['message'] = 'Not found';
            result['status'] = 0;
    }
    else {
            result['message'] = 'Success';
            result['status'] = 1
            result['data'] = results;
    }
    return result;
}