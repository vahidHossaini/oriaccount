# Description
This module creates and manages centralized user data.
Services is not public and Internal used.
# Install
- origamicore [Doc](https://github.com/vahidHossaini/origami#readme)
# Configuration
 
    {
        { 'context': '{db context name}' }
    }
# Internal Services

        //Check Exist User
        global.acc.existAccount(odata)
        //Get User Data 
        global.acc.get(userid)
        //create user
        global.acc.create(userid,role)
        //update user 
        global.acc.update(userid,key,value)