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
  "duration": 12393022500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 1473235900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 764653000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 519844600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andFillDetails()"
});
formatter.result({
  "duration": 656161000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 611139700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 539206500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 1072495300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1978531900,
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
  "duration": 9717545300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 938969600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCandidateTab()"
});
formatter.result({
  "duration": 918320100,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.whenClickAddcandidate()"
});
formatter.result({
  "duration": 714198800,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCandidateDetails()"
});
formatter.result({
  "duration": 1223793100,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 709660400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.thenCandidateEntry()"
});
formatter.result({
  "duration": 75068400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 2161450200,
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
        "UserName"
      ],
      "line": 42,
      "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;1"
    },
    {
      "cells": [
        "Vijay",
        "Kumar",
        "VijKum"
      ],
      "line": 43,
      "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;2"
    },
    {
      "cells": [
        "Ajay",
        "Singh",
        "AjaSin"
      ],
      "line": 44,
      "id": "orange-hrm-activities;add-multiple-employees-using-an-the-examples-table;;3"
    },
    {
      "cells": [
        "Rakesh",
        "Kumar",
        "RakeKum"
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
  "name": "Fill required fields \"Vijay\" \"Kumar\" \"\u003cUsername\u003e\" using the data and click Save",
  "matchedColumns": [
    0,
    1
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
  "name": "Verify that the employees \"Vijay\" \"Kumar\" have been created",
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
  "duration": 9950885000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 1257845400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddEmp()"
});
formatter.result({
  "duration": 516742000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCheckboxCheck()"
});
formatter.result({
  "duration": 339456900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vijay",
      "offset": 22
    },
    {
      "val": "Kumar",
      "offset": 30
    },
    {
      "val": "\u003cUsername\u003e",
      "offset": 38
    }
  ],
  "location": "HRMActivity.thenFillFeilds(String,String,String)"
});
formatter.result({
  "duration": 847220300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 639869500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Vijay",
      "offset": 27
    },
    {
      "val": "Kumar",
      "offset": 35
    }
  ],
  "location": "HRMActivity.andVerifyEmp(String,String)"
});
formatter.result({
  "duration": 714706500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1648244100,
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
  "name": "Fill required fields \"Ajay\" \"Singh\" \"\u003cUsername\u003e\" using the data and click Save",
  "matchedColumns": [
    0,
    1
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
  "name": "Verify that the employees \"Ajay\" \"Singh\" have been created",
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
  "duration": 10089148600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 785198200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddEmp()"
});
formatter.result({
  "duration": 686709900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCheckboxCheck()"
});
formatter.result({
  "duration": 394492800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ajay",
      "offset": 22
    },
    {
      "val": "Singh",
      "offset": 29
    },
    {
      "val": "\u003cUsername\u003e",
      "offset": 37
    }
  ],
  "location": "HRMActivity.thenFillFeilds(String,String,String)"
});
formatter.result({
  "duration": 907831200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 1067112200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Ajay",
      "offset": 27
    },
    {
      "val": "Singh",
      "offset": 34
    }
  ],
  "location": "HRMActivity.andVerifyEmp(String,String)"
});
formatter.result({
  "duration": 685259000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1557092900,
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
  "name": "Fill required fields \"Rakesh\" \"Kumar\" \"\u003cUsername\u003e\" using the data and click Save",
  "matchedColumns": [
    0,
    1
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
  "name": "Verify that the employees \"Rakesh\" \"Kumar\" have been created",
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
  "duration": 9555142700,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 783415300,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddEmp()"
});
formatter.result({
  "duration": 563722900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCheckboxCheck()"
});
formatter.result({
  "duration": 331866600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rakesh",
      "offset": 22
    },
    {
      "val": "Kumar",
      "offset": 31
    },
    {
      "val": "\u003cUsername\u003e",
      "offset": 39
    }
  ],
  "location": "HRMActivity.thenFillFeilds(String,String,String)"
});
formatter.result({
  "duration": 865892500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andPIMOption()"
});
formatter.result({
  "duration": 849700300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Rakesh",
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
  "duration": 2661460200,
  "error_message": "org.openqa.selenium.NoSuchElementException: Unable to locate element: //table[@id\u003d\u0027resultTable\u0027]/tbody/tr/td[3]/a\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:25:48\u0027\nSystem info: host: \u0027DESKTOP-GN1GR7A\u0027, ip: \u00279.79.241.44\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_201\u0027\nDriver info: org.openqa.selenium.firefox.FirefoxDriver\nCapabilities {acceptInsecureCerts: true, browserName: firefox, browserVersion: 80.0, javascriptEnabled: true, moz:accessibilityChecks: false, moz:buildID: 20200818235255, moz:geckodriverVersion: 0.26.0, moz:headless: false, moz:processID: 15744, moz:profile: C:\\Users\\VijayMoyalan\\AppDa..., moz:shutdownTimeout: 60000, moz:useNonSpecCompliantPointerOrigin: false, moz:webdriverClick: true, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, platformVersion: 10.0, rotatable: false, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify}\nSession ID: 0a515f64-cfb3-4753-93de-e5c3043b5e23\n*** Element info: {Using\u003dxpath, value\u003d//table[@id\u003d\u0027resultTable\u0027]/tbody/tr/td[3]/a}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat stepDefinations.HRMActivity.andVerifyEmp(HRMActivity.java:204)\r\n\tat ✽.And Verify that the employees \"Rakesh\" \"Kumar\" have been created(HRMApplication.feature:38)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "status": "skipped"
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
  "duration": 10828468200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 952769500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 807482000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 560275400,
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
  "duration": 659126400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 777337600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 629080500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 1128502400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 2038797200,
  "status": "passed"
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
  "duration": 10137875200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 1005119200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 854850400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 552156200,
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
  "duration": 613091000,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 690176400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 582666900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 1215328600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 1941661700,
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
  "duration": 9952397600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 907005100,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 792254400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 528383700,
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
  "duration": 642957900,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 738493100,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 663327500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 1205474800,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 2206687000,
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
  "duration": 9639277400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andRecruitmentPage()"
});
formatter.result({
  "duration": 939582500,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 791321100,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andAddJob()"
});
formatter.result({
  "duration": 528994500,
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
  "duration": 612031600,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andSaveVacancy()"
});
formatter.result({
  "duration": 725861200,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVacanciesPage()"
});
formatter.result({
  "duration": 605281400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andVerifyVacancy()"
});
formatter.result({
  "duration": 1249514400,
  "status": "passed"
});
formatter.match({
  "location": "HRMActivity.andCloseBrowser()"
});
formatter.result({
  "duration": 2125577000,
  "status": "passed"
});
});