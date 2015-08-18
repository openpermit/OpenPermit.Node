#Permit Data API

A RESTful API for permit information using the [BLDS data format](http://permitdata.org/).

This code is in an alpha state and will be updated frequently.

## Base URL

http://openpermit.cloudapp.net/api/

## HTTP Headers

To query permit, imspection or contractor data for a specific jurisdiction, you use a jurisdiction ID. To get a list of jurisdiction IDs, access the <code>/jurisdictions</code> endpoint.

Jurisdiction IDs are passed as an HTTP header called <code>x-jurisdiction-id</code>.

## API Methods

### Get Jurisdictions

* Description: Retrieves a list of jurisdictions supplying data.
* HTTP Method: GET
* Path: <code>/jurisdictions</code>

```json
[
  "alameda-0ad8aa80-e1cb",
  "deschutes_co-5b133ecf-43e2",
  "bernco-6772b345-399c"
]
```

### Get Permits

* Description: Retrieves a list of permits.
* HTTP Method: GET
* Path: <code>/permits</code>

| Parameter | Required  | 
|---|---|
| limit | false |


### Get Permit

* Description: Retrieves a specific permit record details.
* HTTP Method: GET
* Path: <code>/permits/{permitnum}</code>

| Parameter | Required  | 
|---|---|
| permitnum | true |


### Get Permit Timeline

* Description: Retrieves the history of a specific permit record.
* HTTP Method: GET
* Path: <code>/permits/{permitnum}/timeline</code>

| Parameter | Required  | 
|---|---|
| permitnum | true |


### Get Permit Inspections

* Description: Retrieves the inspections for a specific permit.
* HTTP Method: GET
* Path: <code>/permits/{permitnum}/inspections</code>

| Parameter | Required  | 
|---|---|
| permitnum | true |


### Get Permit Contractors

* Description: Retrieves the contractors for a specific permit.
* HTTP Method: GET
* Path: <code>/permits/{permitnum}/contractors</code>

| Parameter | Required  | 
|---|---| 
| permitnum | true |

### Get Inspections

* Description: Retreives a list of inspections.
* HTTP Method: GET
* Path: <code>/inspections</code>

| Parameter | Required  | 
|---|---|
| limit | false | 

### Get Inpsection

* Description: Retrieves details of a specific inspection.
* HTTP Method: GET
* Path: <code>/inspections/{inspectionid}</code>

| Parameter | Required  | 
|---|---|
| inspectionid | true |

### Get Contractors

* Description: Retrieves a list of contractors.
* HTTP Method: GET
* Path: <code>/contractors</code>

| Parameter | Required  | 
|---|---|
| limit | false | 

### Get Contractor

* Description: Retrieves details for a specific contractor
* HTTP Method: GET
* Path: <code>/contractors/{contractorid}</code>

| Parameter | Required  | 
|---|---|
| contractorid | true |
