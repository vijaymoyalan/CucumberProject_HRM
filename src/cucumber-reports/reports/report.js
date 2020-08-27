$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("HRMApplication.feature");
formatter.feature({
  "line": 2,
  "name": "Orange HRM activities",
  "description": "performing the activities related to project",
  "id": "orange-hrm-activities",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.scenario({
  "line": 6,
  "name": "Creating job vacancy",
  "description": "",
  "id": "orange-hrm-activities;creating-job-vacancy",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 5,
      "name": "@Activity1"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "navigate to recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on add button to navigate add job vacancy",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "fill necessary details",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "click on save button to save vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "Verify that the vacancy was created",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 10253618600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 960841200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 786962100,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 482618700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andFillDetails()"
});
formatter.result({
  "duration": 685236300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 776402500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 599903900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 1309362700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1890607600,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Adding a candidate for recruitment",
  "description": "",
  "id": "orange-hrm-activities;adding-a-candidate-for-recruitment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 18,
      "name": "@Activity2"
    }
  ]
});
formatter.step({
  "line": 20,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 21,
  "name": "navigate to recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "click on candidates tab",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "I click on the Add button to add candidate info",
  "keyword": "When "
});
formatter.step({
  "line": 24,
  "name": "fill in the details of the candidate",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "navigate to recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "I confirm candidate entry",
  "keyword": "Then "
});
formatter.step({
  "line": 27,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 9417471900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 932668700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCandidateTab()"
});
formatter.result({
  "duration": 859593800,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.whenClickAddcandidate()"
});
formatter.result({
  "duration": 750476500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCandidateDetails()"
});
formatter.result({
  "duration": 1310860000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 812336900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.thenCandidateEntry()"
});
formatter.result({
  "duration": 146987000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1628557000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 31,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Activity3"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Click on PIM option in the menu",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click the Add button to add a new Employee",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Check the Checkbox of Create Login Details",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Fill required fields \"\u003cFname\u003e\" \"\u003cLname\u003e\" \"\u003cUsername\u003e\" using the data and click Save",
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on PIM option in the menu",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify that the employees \"\u003cFname\u003e\" \"\u003cLname\u003e\" have been created",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 41,
  "name": "",
  "description": "",
  "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;",
  "rows": [
    {
      "cells": [
        "Fname",
        "Lname",
        "Username"
      ],
      "line": 42,
      "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;1"
    },
    {
      "cells": [
        "VijayA",
        "Kumar",
        "VijaKum"
      ],
      "line": 43,
      "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;2"
    },
    {
      "cells": [
        "AjayA",
        "Singh",
        "AjaaSin"
      ],
      "line": 44,
      "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;3"
    },
    {
      "cells": [
        "Sushma",
        "Kumar",
        "SushKum"
      ],
      "line": 45,
      "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 43,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Activity3"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Click on PIM option in the menu",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click the Add button to add a new Employee",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Check the Checkbox of Create Login Details",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Fill required fields \"VijayA\" \"Kumar\" \"VijaKum\" using the data and click Save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on PIM option in the menu",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify that the employees \"VijayA\" \"Kumar\" have been created",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 9444264400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 1182019200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddEmp()"
});
formatter.result({
  "duration": 532294500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCheckboxCheck()"
});
formatter.result({
  "duration": 363830400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VijayA",
      "offset": 22
    },
    {
      "val": "Kumar",
      "offset": 31
    },
    {
      "val": "VijaKum",
      "offset": 39
    }
  ],
  "location": "HRMActivity.thenFillFeilds(String,String,String)"
});
formatter.result({
  "duration": 1046930600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 641630200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "VijayA",
      "offset": 27
    },
    {
      "val": "Kumar",
      "offset": 36
    }
  ],
  "location": "HRMActivity.andVerifyEmp(String,String)"
});
formatter.result({
  "duration": 671483200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1534693600,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Activity3"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Click on PIM option in the menu",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click the Add button to add a new Employee",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Check the Checkbox of Create Login Details",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Fill required fields \"AjayA\" \"Singh\" \"AjaaSin\" using the data and click Save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on PIM option in the menu",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify that the employees \"AjayA\" \"Singh\" have been created",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 9731539500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 848262500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddEmp()"
});
formatter.result({
  "duration": 642980600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCheckboxCheck()"
});
formatter.result({
  "duration": 370872300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AjayA",
      "offset": 22
    },
    {
      "val": "Singh",
      "offset": 30
    },
    {
      "val": "AjaaSin",
      "offset": 38
    }
  ],
  "location": "HRMActivity.thenFillFeilds(String,String,String)"
});
formatter.result({
  "duration": 853872700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 903853600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "AjayA",
      "offset": 27
    },
    {
      "val": "Singh",
      "offset": 35
    }
  ],
  "location": "HRMActivity.andVerifyEmp(String,String)"
});
formatter.result({
  "duration": 946798500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1794106000,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Add multiple employees using an the Examples table",
  "description": "",
  "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 30,
      "name": "@Activity3"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 32,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 33,
  "name": "Click on PIM option in the menu",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "Click the Add button to add a new Employee",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "Check the Checkbox of Create Login Details",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "Fill required fields \"Sushma\" \"Kumar\" \"SushKum\" using the data and click Save",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 37,
  "name": "Click on PIM option in the menu",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "Verify that the employees \"Sushma\" \"Kumar\" have been created",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 9303325800,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 912019500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddEmp()"
});
formatter.result({
  "duration": 615485600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCheckboxCheck()"
});
formatter.result({
  "duration": 364039900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sushma",
      "offset": 22
    },
    {
      "val": "Kumar",
      "offset": 31
    },
    {
      "val": "SushKum",
      "offset": 39
    }
  ],
  "location": "HRMActivity.thenFillFeilds(String,String,String)"
});
formatter.result({
  "duration": 923310300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 885748400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sushma",
      "offset": 27
    },
    {
      "val": "Kumar",
      "offset": 36
    }
  ],
  "location": "HRMActivity.andVerifyEmp(String,String)"
});
formatter.result({
  "duration": 741915700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1523044300,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 49,
  "name": "Creating multiple vacancies using data from Examples",
  "description": "",
  "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Activity4"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "navigate to recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on add button to navigate add job vacancy",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "fill necessary details of \"\u003ctitle\u003e\" \"\u003cname\u003e\" \"\u003cmanager\u003e\"",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "click on save button to save vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Verify that the vacancy was created",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 60,
  "name": "",
  "description": "",
  "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;",
  "rows": [
    {
      "cells": [
        "title",
        "name",
        "manager"
      ],
      "line": 61,
      "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;1"
    },
    {
      "cells": [
        "Android Developer",
        "VSCode Dev",
        "Aditya Rai"
      ],
      "line": 62,
      "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;2"
    },
    {
      "cells": [
        "Android Developer",
        "Android Dev",
        "Aditya Rai"
      ],
      "line": 63,
      "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;3"
    },
    {
      "cells": [
        "Android Developer",
        ".Net Dev",
        "Aditya Rai"
      ],
      "line": 64,
      "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;4"
    },
    {
      "cells": [
        "Android Developer",
        "Test Specialist",
        "Aditya Rai"
      ],
      "line": 65,
      "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 62,
  "name": "Creating multiple vacancies using data from Examples",
  "description": "",
  "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Activity4"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "navigate to recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on add button to navigate add job vacancy",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "fill necessary details of \"Android Developer\" \"VSCode Dev\" \"Aditya Rai\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "click on save button to save vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Verify that the vacancy was created",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 9580758000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 807099500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 915328000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 649437300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Developer",
      "offset": 27
    },
    {
      "val": "VSCode Dev",
      "offset": 47
    },
    {
      "val": "Aditya Rai",
      "offset": 60
    }
  ],
  "location": "HRMActivity.andFillDetails(String,String,String)"
});
formatter.result({
  "duration": 727008300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 1162216400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 582833700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 247526500,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element reference of \u003coption\u003e is stale; either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027DESKTOP-GN1GR7A\u0027, ip: \u00279.79.241.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 80.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200818235255, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 24960, moz:profile: C:\\Users\\VijayMoyalan\\AppDa..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: f8bc5490-1634-47c1-87e7-d5164db0a08b\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isSelected(RemoteWebElement.java:146)\r\n\tat org.openqa.selenium.support.ui.Select.setSelected(Select.java:310)\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:116)\r\n\tat stepDefinations.HRMActivity.andVerifyVacancy(HRMActivity.java:107)\r\n\tat ✽.Then Verify that the vacancy was created(HRMApplication.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 63,
  "name": "Creating multiple vacancies using data from Examples",
  "description": "",
  "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Activity4"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "navigate to recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on add button to navigate add job vacancy",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "fill necessary details of \"Android Developer\" \"Android Dev\" \"Aditya Rai\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "click on save button to save vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Verify that the vacancy was created",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 10183008200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 1184725900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 736314600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 603113400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Developer",
      "offset": 27
    },
    {
      "val": "Android Dev",
      "offset": 47
    },
    {
      "val": "Aditya Rai",
      "offset": 61
    }
  ],
  "location": "HRMActivity.andFillDetails(String,String,String)"
});
formatter.result({
  "duration": 689292000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 790228000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 599064200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 1288985900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 2022128700,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Creating multiple vacancies using data from Examples",
  "description": "",
  "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Activity4"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "navigate to recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on add button to navigate add job vacancy",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "fill necessary details of \"Android Developer\" \".Net Dev\" \"Aditya Rai\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "click on save button to save vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Verify that the vacancy was created",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 9931198200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 1038521800,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 764988700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 552667000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Developer",
      "offset": 27
    },
    {
      "val": ".Net Dev",
      "offset": 47
    },
    {
      "val": "Aditya Rai",
      "offset": 58
    }
  ],
  "location": "HRMActivity.andFillDetails(String,String,String)"
});
formatter.result({
  "duration": 650690400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 768826300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 727741400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 1194666400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 2118422600,
  "status": "passed"
});
formatter.scenario({
  "line": 65,
  "name": "Creating multiple vacancies using data from Examples",
  "description": "",
  "id": "orange-hrm-activities;creating-multiple-vacancies-using-data-from-examples;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 48,
      "name": "@Activity4"
    },
    {
      "line": 1,
      "name": "@HRMActivity"
    }
  ]
});
formatter.step({
  "line": 50,
  "name": "I want to login to orangehrm with \"orange\" and \"orangepassword123\"",
  "keyword": "Given "
});
formatter.step({
  "line": 51,
  "name": "navigate to recruitment page",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "I click on add button to navigate add job vacancy",
  "keyword": "When "
});
formatter.step({
  "line": 54,
  "name": "fill necessary details of \"Android Developer\" \"Test Specialist\" \"Aditya Rai\"",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "click on save button to save vacancy",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "click vacancies menu to navigate the vacancies page",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "Verify that the vacancy was created",
  "keyword": "Then "
});
formatter.step({
  "line": 58,
  "name": "Close the browser",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "orange",
      "offset": 35
    },
    {
      "val": "orangepassword123",
      "offset": 48
    }
  ],
  "location": "HRMActivity.givenLogin(String,String)"
});
formatter.result({
  "duration": 9813861500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 1003417000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 779578300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 516578200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Android Developer",
      "offset": 27
    },
    {
      "val": "Test Specialist",
      "offset": 47
    },
    {
      "val": "Aditya Rai",
      "offset": 65
    }
  ],
  "location": "HRMActivity.andFillDetails(String,String,String)"
});
formatter.result({
  "duration": 662112200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 731355300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 686169400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 201706300,
  "error_message": "org.openqa.selenium.StaleElementReferenceException: The element reference of \u003coption\u003e is stale; either the element is no longer attached to the DOM, it is not in the current frame context, or the document has been refreshed\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/stale_element_reference.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027DESKTOP-GN1GR7A\u0027, ip: \u00279.79.241.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 80.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200818235255, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 14844, moz:profile: C:\\Users\\VijayMoyalan\\AppDa..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: b844822b-062c-4b2c-af33-93cf3a6def8a\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.isSelected(RemoteWebElement.java:146)\r\n\tat org.openqa.selenium.support.ui.Select.setSelected(Select.java:310)\r\n\tat org.openqa.selenium.support.ui.Select.selectByVisibleText(Select.java:116)\r\n\tat stepDefinations.HRMActivity.andVerifyVacancy(HRMActivity.java:107)\r\n\tat ✽.Then Verify that the vacancy was created(HRMApplication.feature:57)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "status": "skipped"
});
});