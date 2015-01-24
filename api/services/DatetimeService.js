module.exports = {

    formatDatetime: function(datetime) {
    	datetime = new Date(datetime);
    	datetime = datetime.getDate() + '/' + (datetime.getMonth() + 1) + '/' +  datetime.getFullYear()
    				+ " " + datetime.getHours() + ":" + datetime.getMinutes() + ":" + datetime.getSeconds();
    	return datetime;
    }
};