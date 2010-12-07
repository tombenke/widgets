function(e)
{
    var widget = $(this);
    var app = $$(widget).app;

    var userDoc = {
        //_id : "",
        //_rev : "",
//        type : "user",
        type : "contact",   // widgets only!!!
        personalData : { address : {}},
        companyData : { mailingAddress : {}, sites : [] },
        customerData : {
            challenge : "EMPTY",
            response : "EMPTY",
            agent : "this_agent",
            ratings : {}
        },
        defaultImage : "noimage.jpeg"
    };

    // Personal Data
    userDoc.personalData.familyName = $('#personalData_familyName').attr('value');
    userDoc.personalData.surName = $('#personalData_surName').attr('value');
    userDoc.personalData.mobile = $('#personalData_mobile').attr('value');
    userDoc.personalData.phone = $('#personalData_phone').attr('value');
    userDoc.personalData.fax = $('#personalData_fax').attr('value');
    userDoc.personalData.email = $('#personalData_email').attr('value');
    userDoc.personalData.web = $('#personalData_web').attr('value');
    userDoc.personalData.description = $('#personalData_description').attr('value');
    userDoc.personalData.address.country = $('#personalData_address_country').attr('value');
    userDoc.personalData.address.county = $('#personalData_address_county').attr('value');
    userDoc.personalData.address.city = $('#personalData_address_city').attr('value');
    userDoc.personalData.address.zipCode = $('#personalData_address_zipCode').attr('value');
    userDoc.personalData.address.street = $('#personalData_address_street').attr('value');
    userDoc.personalData.address.number = $('#personalData_address_number').attr('value');

    // Customer DATA
    userDoc.customerData.challenge = $('#customerData_challenge').attr('value');
    userDoc.customerData.response = $('#customerData_response').attr('value');
    userDoc.customerData.password = $('#customerData_password').attr('value');
    userDoc.customerData.status = $('#customerData_status').attr('value');
    userDoc.customerData.login = $('#customerData_login').attr('value');
    userDoc.customerData.customerTag = $('#customerData_customerTag').attr('value');
    userDoc.customerData.agent = $('#customerData_agent').attr('value');
    userDoc.customerData.expirationDate = $('#customerData_expirationDate').attr('value');
    userDoc.customerData.paymentType = $('#customerData_paymentType').attr('value');
    userDoc.customerData.paymentID = $('#customerData_paymentID').attr('value');
    userDoc.customerData.agent = $('#customerData_agent').attr('value');
    userDoc.customerData.ratings.numberOfVotings = $('#customerData_ratings_numberOfVotes').attr('value');
    userDoc.customerData.ratings.average = $('#customerData_ratings_average').attr('value');

    // Company Data
    userDoc.companyData.companyName = $('#companyData_companyName').attr('value');
    userDoc.companyData.taxID = $('#companyData_taxID').attr('value');
    userDoc.companyData.mailingAddress.country = $('#companyData_mailingAddress_country').attr('value');
    userDoc.companyData.mailingAddress.county = $('#companyData_mailingAddress_county').attr('value');
    userDoc.companyData.mailingAddress.city = $('#companyData_mailingAddress_city').attr('value');
    userDoc.companyData.mailingAddress.zipCode = $('#companyData_mailingAddress_zipCode').attr('value');
    userDoc.companyData.mailingAddress.street = $('#companyData_mailingAddress_street').attr('value');
    userDoc.companyData.mailingAddress.number = $('#companyData_mailingAddress_number').attr('value');
    // TODO: Handling of company sites

    userDoc.defaultImage = $('#defaultImage').attr('value');

    // If modify customer data
    userDoc._id = $('#_id').attr('value');
    userDoc._rev = $('#_rev').attr('value');
    userDoc.userType = $('#userType').attr('value');

    // If create new customer
    userDoc._id = userDoc.personalData.email;
    var password = $('#customerData_password').attr('value');

    // Store the collected data
    app.db.saveDoc(
        userDoc,
        {
            success: function( response )
            {
                alert( "Sikeresen mentette az adatokat." );

                // If configured to save into the _users as well
                if( false )
                {
                    $.couch.signup(
                        {
                            name : userDoc._id,
                            roles : [ userDoc.userType, userDoc.customerData.status ]
                        },
                        password,
                        {
                            success : function( response )
                            {
                                alert( "Sikeresen mentette az adatokat." );
                                widget.trigger('_init');
                            }
                        }
                    );
                }
                else
                {
                    widget.trigger('_init');
                }
            }
        }
    );

    return false;
}
