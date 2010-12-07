function( e, doc )
{
    var widget = $(this);
    var app = $$(widget).app;

    var userDoc = {
       //"_id": "mehesz",
       //"type": "user",
       "type": "contact",   // Widgets only!!!
       "userType": "customer",
       "personalData": {
           "familyName": "",
           "surName": "",
           "mobile": "",
           "phone": "",
           "fax": "",
           "email": "",
           "web": "",
           "description": "",
           "address": {
               "country": "HUN",
               "county": "",
               "city": "",
               "zipCode": "",
               "street": "",
               "number": ""
           }
       },
       "customerData": {
           "status": "NEW",
           "challenge": "",
           "response": "",
           "login": "true",
           "customerTag": "Cat_őstermelő",
           "agent": "agent",
           "expirationDate": "",
           "paymentType": "CASH",
           "paymentID": "",
           "ratings": {
               "numberOfVotes": "0",
               "average": "0"
           }
       },
       "companyData": {
           "companyName": "",
           "taxID": "",
           "mailingAddress": {
               "country": "HUN",
               "county": "",
               "city": "",
               "zipCode": "",
               "street": "",
               "number": ""
           },
           "sites": [
               {
                   "country": "HUN",
                   "county": "",
                   "city": "",
                   "zipCode": "",
                   "street": "",
                   "number": ""
               }
           ]

       },
       "defaultImage": "noimage.jpeg"
    };

    if( doc )
    {
        userDoc = doc;
    }

    return {
        doc : userDoc,
        has_id : userDoc._id ? true : false,
        select_customerTag : function()
        {
            return function( text, render )
            {
                if( userDoc.customerData &&
                    userDoc.customerData.customerTag &&
                    userDoc.customerData.customerTag === text )
                {
                    return 'selected=true'
                }
            }
        },
        select_status : function()
        {
            return function( text, render )
            {
                if( userDoc.customerData &&
                    userDoc.customerData.status &&
                    userDoc.customerData.status === text )
                {
                    return 'selected=true'
                }
            }
        },
        select_login : function()
        {
            return function( text, render )
            {
                if( userDoc.customerData &&
                    userDoc.customerData.login &&
                    userDoc.customerData.login === text )
                {
                    return 'selected=true'
                }
            }
        }
     }
}
