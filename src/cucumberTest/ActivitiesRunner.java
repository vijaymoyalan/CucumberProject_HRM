package cucumberTest;

import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(
    features = "C:\\Vijay\\SIT Folder\\IBM_SDET_Workspace\\Cucumber_Project_SDET_HRM\\src\\Features",
    glue = {"stepDefinations"},
    tags = {"@HRMActivity"},
    plugin = { "pretty", "html:src/cucumber-reports/reports" },
    monochrome = true,
    strict = true
)
public class ActivitiesRunner {
    //empty
}