'use strict';

angular.module('myApp.constants', [])

// Syntax below list is "wall-roof-lumber", i.e. "2x4-3-2x10"
.constant('heelHeightConst', {
    "2x4-3-2x10": "0-8-11",
    "2x4-4-2x10": "0-8-9",
    "2x4-5-2x10": "0-8-9",
    "2x4-6-2x10": "0-8-9",
    "2x4-7-2x10": "0-8-11",
    "2x4-8-2x10": "0-8-7",
    "2x4-9-2x10": "0-8-15",    
    "2x4-10-2x10": "0-9-2",
    "2x4-11-2x10": "0-9-5",
    "2x4-12-2x10": "0-9-9",
    "2x4-13-2x10": "0-9-14",
    "2x4-14-2x10": "0-10-2",
    "2x4-15-2x10": "0-10-7",
    "2x4-16-2x10": "0-10-12",
    "2x4-17-2x10": "dummy4",
    "2x4-18-2x10": "dummy20",
    "2x4-19-2x10": "dummy36",
    "2x4-20-2x10": "dummy52",

    "2x4-3-2x12": "0-10-12",
    "2x4-4-2x12": "0-10-11",
    "2x4-5-2x12": "0-10-12",
    "2x4-6-2x12": "0-10-13",
    "2x4-7-2x12": "0-11-0",
    "2x4-8-2x12": "0-11-3",
    "2x4-9-2x12": "0-11-7",
    "2x4-10-2x12": "0-11-12",
    "2x4-11-2x12": "1-0-1",
    "2x4-12-2x12": "1-0-7",
    "2x4-13-2x12": "1-0-13",
    "2x4-14-2x12": "1-1-3",
    "2x4-15-2x12": "1-1-10",
    "2x4-16-2x12": "1-2-1",
    "2x4-17-2x12": "dummy8",
    "2x4-18-2x12": "dummy24",
    "2x4-19-2x12": "dummy40",
    "2x4-20-2x12": "dummy56",

    "2x6-3-2x10": "0-8-3",
    "2x6-4-2x10": "0-7-15",
    "2x6-5-2x10": "0-7-12",
    "2x6-6-2x10": "0-7-9",
    "2x6-7-2x10": "0-7-8",
    "2x6-8-2x10": "0-7-7",
    "2x6-9-2x10": "0-7-7",
    "2x6-10-2x10": "0-7-7",
    "2x6-11-2x10": "0-7-8",
    "2x6-12-2x10": "0-7-9",
    "2x6-13-2x10": "0-7-11",
    "2x6-14-2x10": "0-7-13",
    "2x6-15-2x10": "0-7-15",
    "2x6-16-2x10": "0-8-1",
    "2x6-17-2x10": "dummy12",
    "2x6-18-2x10": "dummy28",
    "2x6-19-2x10": "dummy44",
    "2x6-20-2x10": "dummy60",

    "2x6-3-2x12": "0-10-4",
    "2x6-4-2x12": "0-10-0",
    "2x6-5-2x12": "0-9-14",
    "2x6-6-2x12": "0-9-13",
    "2x6-7-2x12": "0-9-13",
    "2x6-8-2x12": "0-9-14",
    "2x6-9-2x12": "0-9-15",
    "2x6-10-2x12": "0-10-1",
    "2x6-11-2x12": "0-10-4",
    "2x6-12-2x12": "0-10-7",
    "2x6-13-2x12": "0-10-10",
    "2x6-14-2x12": "0-10-14",
    "2x6-15-2x12": "0-11-2",
    "2x6-16-2x12": "0-11-7",
    "2x6-17-2x12": "dummy16",
    "2x6-18-2x12": "dummy32",
    "2x6-19-2x12": "dummy48",
    "2x6-20-2x12": "dummy64",

    "2x4-3-2x8": "dummy13",
    "2x4-4-2x8": "dummy173",
    "2x4-5-2x8": "dummy333",
    "2x4-6-2x8": "dummy493",
    "2x4-7-2x8": "dummy23",
    "2x4-8-2x8": "dummy183",
    "2x4-9-2x8": "dummy343",    
    "2x4-10-2x8": "dummy503",
    "2x4-11-2x8": "dummy663",
    "2x4-12-2x8": "dummy33",
    "2x4-13-2x8": "dummy193",
    "2x4-14-2x8": "dummy353",
    "2x4-15-2x8": "dummy513",
    "2x4-16-2x8": "dummy673",
    "2x4-17-2x8": "dummy43",
    "2x4-18-2x8": "dummy203",
    "2x4-19-2x8": "dummy363",
    "2x4-20-2x8": "dummy523",

    "2x6-3-2x8": "dummy134",
    "2x6-4-2x8": "dummy294",
    "2x6-5-2x8": "dummy454",
    "2x6-6-2x8": "dummy744",
    "2x6-7-2x8": "dummy144",
    "2x6-8-2x8": "dummy304",
    "2x6-9-2x8": "dummy464",
    "2x6-10-2x8": "dummy624",
    "2x6-11-2x8": "dummy754",
    "2x6-12-2x8": "dummy154",
    "2x6-13-2x8": "dummy314",
    "2x6-14-2x8": "dummy474",
    "2x6-15-2x8": "dummy634",
    "2x6-16-2x8": "dummy764",
    "2x6-17-2x8": "dummy164",
    "2x6-18-2x8": "dummy324",
    "2x6-19-2x8": "dummy484",
    "2x6-20-2x8": "dummy644",

    "2x4-3-1.5x11.875LVL": "dummy11",
    "2x4-4-1.5x11.875LVL": "dummy171",
    "2x4-5-1.5x11.875LVL": "dummy331",
    "2x4-6-1.5x11.875LVL": "dummy491",
    "2x4-7-1.5x11.875LVL": "dummy21",
    "2x4-8-1.5x11.875LVL": "dummy181",
    "2x4-9-1.5x11.875LVL": "dummy341",    
    "2x4-10-1.5x11.875LVL": "dummy501",
    "2x4-11-1.5x11.875LVL": "dummy661",
    "2x4-12-1.5x11.875LVL": "dummy31",
    "2x4-13-1.5x11.875LVL": "dummy191",
    "2x4-14-1.5x11.875LVL": "dummy351",
    "2x4-15-1.5x11.875LVL": "dummy511",
    "2x4-16-1.5x11.875LVL": "dummy671",
    "2x4-17-1.5x11.875LVL": "dummy41",
    "2x4-18-1.5x11.875LVL": "dummy201",
    "2x4-19-1.5x11.875LVL": "dummy361",
    "2x4-20-1.5x11.875LVL": "dummy521",

    "2x6-3-1.5x11.875LVL": "dummy132",
    "2x6-4-1.5x11.875LVL": "dummy292",
    "2x6-5-1.5x11.875LVL": "dummy452",
    "2x6-6-1.5x11.875LVL": "dummy742",
    "2x6-7-1.5x11.875LVL": "dummy142",
    "2x6-8-1.5x11.875LVL": "dummy302",
    "2x6-9-1.5x11.875LVL": "dummy462",
    "2x6-10-1.5x11.875LVL": "dummy622",
    "2x6-11-1.5x11.875LVL": "dummy752",
    "2x6-12-1.5x11.875LVL": "dummy152",
    "2x6-13-1.5x11.875LVL": "dummy312",
    "2x6-14-1.5x11.875LVL": "dummy472",
    "2x6-15-1.5x11.875LVL": "dummy632",
    "2x6-16-1.5x11.875LVL": "dummy762",
    "2x6-17-1.5x11.875LVL": "dummy162",
    "2x6-18-1.5x11.875LVL": "dummy322",
    "2x6-19-1.5x11.875LVL": "dummy482",
    "2x6-20-1.5x11.875LVL": "dummy642"    
})
