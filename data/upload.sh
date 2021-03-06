#!/bin/bash

declare -rx db=widgets
declare -rx datafiles="countries contacts"

#public settings
declare -rx public_username=admin
declare -rx public_password=admin
declare -rx public_host=tombenke.couchone.com
declare -rx public_dburl=http://${public_username}:${public_password}@${public_host}/${db}

#local settings
declare -rx local_username=admin
declare -rx local_password=admin
declare -rx local_host=localhost:5984
declare -rx local_dburl=http://${local_username}:${local_password}@${local_host}/${db}

# Default is the 'local_dburl'
declare -x  dburl=${local_dburl}

if [ $1 == 'public' ] ; then
    dburl=${public_dburl}
fi

# Delete the database if exists
curl -X DELETE ${dburl}

# Create an empty database
curl -X PUT ${dburl}

# Upload the data files listed in 'datafiles'
for datafile in $datafiles
do
    curl -X POST \
         -d @${datafile}.json \
         -H "Content-type: application/json" \
         $dburl/_bulk_docs
    echo $datafile
done
