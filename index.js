const axios = require('axios');

module.exports = function(wasabiURL, userID, applicationName, experimentLabel, context, createAssignment, ignoreSamplingPercent) {
    if(typeof context === 'undefined')
      context = 'PROD';
    if(typeof createAssignment === 'undefined')
      createAssignment = 'true';
    if(typeof ignoreSamplingPercent === 'undefined')
      ignoreSamplingPercent = 'false';
    
    var url = wasabiURL+'/api/v1/assignments/applications/'+applicationName+'/experiments/'+experimentLabel+'/users/'+userID;
    return axios.get(url, {
            params : {
              context : context,
              createAssignment : createAssignment,
              ignoreSamplingPercent : ignoreSamplingPercent
            }
          })
          .then(function(res) {
            return res.data;
          })
          .catch(function(error) {
            throw error;
          });
};
