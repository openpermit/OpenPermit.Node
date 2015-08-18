exports.config = config = {

	// Default limit for records to fetch
	LIMIT: process.argv[2] || 25,

	// Port for Express app to listen on.
	PORT: process.argv[3] || 3000,

	// CKAN API base.
	CKAN_API_BASE: 'http://www.civicdata.com/api/action/datastore_search_sql?sql=',

	// CKAN API endpoint for querying resource tags.
	JURISDICTION_URL: 'http://www.civicdata.com/api/action/tag_show?id=blds-building-permit-data',

	JURISDICTIONS: 
	{
		"deschutes_co-5b133ecf-43e2": 
		{
			PERMITS: "2ee2ca8f-d75a-486c-a192-2e2f76b1235b",
			PERMIT_HISTORY: "87f54b3e-07ad-4595-b78f-e748071d6f18",
			INSPECTIONS: "f40902f2-3f3e-4aa2-9326-0f88d6d07ae4",
			CONTRACTORS: "5aed9714-8798-4948-9e58-c8a76d5fae61"
		},
		"alameda-0ad8aa80-e1cb": 
		{
			PERMITS: "f148b5d2-b278-40ba-8ca4-945031d5994c",
			PERMIT_HISTORY: "c4993843-ddd6-4bcb-a75f-885e34381d7f",
			INSPECTIONS: "0a992fba-ab8a-4f87-9d7c-21e3140826a7",
			CONTRACTORS: "015cb40b-70be-47cb-b21a-24edfc7750c4"
		},
		"bernco-6772b345-399c":
		{
			PERMITS: "5a8094a3-9a68-46cd-95d0-c3b5b9d427ae",
			PERMIT_HISTORY: "2d5baecf-c3f2-4184-9e32-0e393380f90b",
			INSPECTIONS: "05500113-694d-418e-a297-a26966d57c3e",
			CONTRACTORS: "5275616d-60d2-40cd-ba5c-6e8ac46daaa1"	
		},
		"cosd-c997d807-9e5c":
		{
			PERMITS: "f51d567c-07f7-41d4-842d-c2b165722b4b",
			PERMIT_HISTORY: "6bf67547-77e8-4fed-806e-7f039568d6c5",
			INSPECTIONS: "",
			CONTRACTORS: "e725efe3-f9b2-412c-b4f5-408c70242e4e"	
		},
		"tampa-a731fc29-ce80":
		{
			PERMITS: "05af49ae-72be-4dbe-b976-98ffd159a72a",
			PERMIT_HISTORY: "",
			INSPECTIONS: "",
			CONTRACTORS: ""		
		}
	}

}