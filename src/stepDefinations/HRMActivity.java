package stepDefinations;

import static org.testng.Assert.assertEquals;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import cucumber.api.java.en.And;

public class HRMActivity {
	
	WebDriver driver;
	WebDriverWait wait;
	String job = "DevOps Developer271351";
	String FullName;
	String empid;
	
	@Given ("^I want to login to orangehrm with \"(.*)\" and \"(.*)\"$")
	public void givenLogin(String username, String password)
	{
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.get("http://alchemy.hguy.co:8080/orangehrm/symfony/web/index.php/auth/login");
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//input[contains(@name,'txtUsername')]")).sendKeys(username);
		driver.findElement(By.xpath("//input[contains(@name,'txtPassword')]")).sendKeys(password);
		driver.findElement(By.xpath("//input[contains(@id,'btnLogin')]")).click();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		
	}
	
	@And ("^navigate to recruitment page$")
	public void andRecruitmentPage()
	{
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		driver.findElement(By.xpath("//b[contains(.,'Recruitment')]")).click();		
		System.out.println("Recruitment tab is clicked");
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
	}
	
    @And ("^click vacancies menu to navigate the vacancies page$")
    public void andVacanciesPage()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	driver.findElement(By.xpath("//a[@id='menu_recruitment_viewJobVacancy']")).click();
    	System.out.println("Vacancy tab is clicked");
    }
    
    @When ("^I click on add button to navigate add job vacancy$")
    public void andAddJob()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	
    	// clicking on the ADD button
    	driver.findElement(By.xpath("//input[contains(@name,'btnAdd')]")).click();	
    	System.out.println("Add Job Clicked");
    }
    
    @And ("^fill necessary details$")
    public void andFillDetails()
    {
    	
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	
    	// selecting the value from Job Title dropdown
    	Select job_title = new Select(driver.findElement(By.xpath("//select[@id='addJobVacancy_jobTitle']")));
    	job_title.selectByIndex(2);
    	
    	// passing the Vacancy Name
    	driver.findElement(By.xpath("//input[@name='addJobVacancy[name]']")).sendKeys(job);
    	
    	// passing the Hiring Manager
    	driver.findElement(By.xpath(("//input[@name='addJobVacancy[hiringManager]']"))).sendKeys("Aditya Rai");
    	
    	// passing the Description
    	driver.findElement(By.xpath("//textarea[@rows='9'][contains(@id,'description')]")).sendKeys("Candidate should have an experience of 3+ years");
    	
    	System.out.println("Vacancy details are filled");
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    }
    
    @And ("^click on save button to save vacancy$")
    public void andSaveVacancy()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	
    	// clicking on the save button
    	driver.findElement(By.xpath("//input[@name='btnSave']")).click();
    	System.out.println("Vacancy SAVE clicked");
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS); 
    }
    
    @Then ("^Verify that the vacancy was created$")
    public void andVerifyVacancy()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	
    	// selecting the vacancy
    	Select vacancy = new Select(driver.findElement(By.xpath("//select[@name='vacancySearch[jobVacancy]'][contains(@id,'jobVacancy')]")));
    	vacancy.selectByVisibleText(job);
    	
    	// selecting hiring manager
    	Select hire_mgr = new Select(driver.findElement(By.xpath("//select[contains(@name,'vacancySearch[hiringManager]')]")));
    	hire_mgr.selectByVisibleText("Aditya Rai");
    	
    	// clicking on search btn
    	driver.findElement(By.xpath("//input[@value='Search']")).click();
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	
    	// checking the value fetched
    	String job_fetch = driver.findElement(By.xpath("//a[contains(.,'DevOps Developer27')]")).getText();
    	System.out.println("Job Searched is "+job_fetch);
    	
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    }     
    @And ("^Close the browser$")
    public void andCloseBrowser()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	driver.close();	
    }
    
    @And ("^click on candidates tab$")
    public void andCandidateTab()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	driver.findElement(By.xpath("//a[@id='menu_recruitment_viewCandidates']")).click();
    }
    
    @When ("^I click on the Add button to add candidate info$")
    public void whenClickAddcandidate()
    {	
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	driver.findElement(By.xpath("//input[@name='btnAdd']")).click();
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    }
    
    @And ("^fill in the details of the candidate$")
    public void andCandidateDetails()
    {   
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	String fname="Pankaj";
    	String lname="Das";
    	FullName= fname+"  "+lname;
    	driver.findElement(By.xpath("//input[@type='text'][contains(@id,'firstName')]")).sendKeys("Panjak");
    	driver.findElement(By.xpath("//input[@type='text'][contains(@id,'lastName')]")).sendKeys("Das");
    	driver.findElement(By.xpath("//input[contains(@id,'addCandidate_email')]")).sendKeys("orangehrm@gmail.com");
    	WebElement upload = driver.findElement(By.xpath("//input[contains(@id,'addCandidate_resume')]"));
    	upload.sendKeys("C:\\Users\\VijayMoyalan\\Desktop\\Sample Test Doc.docx");
    	driver.findElement(By.xpath("//input[@id='btnSave']")).click();
    	driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }
    
    @Then ("^I confirm candidate entry$")
    public void thenCandidateEntry()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	 //String search_candidate= driver.findElement(By.xpath("(//a[contains(.,'"+FullName+"')])[1]")).getText();
    	String search_candidate= driver.findElement(By.xpath("(//a[contains(.,'Panjak  Das')])[1]")).getText();
    	if (search_candidate == FullName)
    		System.out.println("Candidate has been added successfully");
    	else
    		System.out.println("Candidate has not been added successfully");
    }
    
    @And ("^Click on PIM option in the menu$")
    public void andPIMOption()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	driver.findElement(By.xpath("//b[contains(.,'PIM')]")).click();
    }
    
    @And ("^Click the Add button to add a new Employee$")
    public void andAddEmp()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	driver.findElement(By.xpath("//a[@id='menu_pim_addEmployee']")).click();
    }
    
    @And ("^Check the Checkbox of Create Login Details$")
    public void andCheckboxCheck()
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	
    	Boolean uncheckedBox = driver.findElement(By.xpath("//input[@name='chkLogin']")).isSelected();
    	System.out.println("the value of checkbox is "+uncheckedBox);
    	driver.findElement(By.xpath("//input[@name='chkLogin']")).click();
    	Boolean checkedBox = driver.findElement(By.xpath("//input[@name='chkLogin']")).isSelected();
    	System.out.println("the value of checkbox is "+checkedBox);
    }
    
    @Then ("^Fill required fields \"(.*)\" \"(.*)\" \"(.*)\" using the data and click Save$")
    public void thenFillFeilds(String fname,String lname,String username)
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	driver.findElement(By.xpath("//input[@id='firstName']")).sendKeys(fname);			// adding the first name
    	driver.findElement(By.xpath("//input[@id='lastName']")).sendKeys(lname);			// adding the last name
    	driver.findElement(By.xpath("//input[@id='user_name']")).sendKeys(username);		// adding the username
    	driver.findElement(By.xpath("//input[@value='Save']")).click();						// clicking on SAVE button  	
    }
    
    @And ("^Verify that the employees \"(.*)\" \"(.*)\" have been created$")
    public void andVerifyEmp(String fname,String lname)
    {
    	String fullName = fname+" "+lname;
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	driver.findElement(By.xpath("//input[contains(@id,'empName')]")).sendKeys(fullName); 	
    	driver.findElement(By.xpath("//input[@name='_search']")).click();
    	driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    	String candidateName = driver.findElement(By.xpath("//table[@id='resultTable']/tbody/tr/td[3]/a")).getText();
    	System.out.println(" Candidate searched name "+candidateName);
    	assertEquals(fname, candidateName);
    }
    
    @And ("^fill necessary details of \"(.*)\" \"(.*)\" \"(.*)\"$")
    public void andFillDetails(String title, String name, String manager)
    {
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    	
    	// selecting the value from Job Title dropdown
    	Select job_title = new Select(driver.findElement(By.xpath("//select[@id='addJobVacancy_jobTitle']")));
    	job_title.selectByIndex(2);
    	
    	// passing the Vacancy Name
    	driver.findElement(By.xpath("//input[@name='addJobVacancy[name]']")).sendKeys(name);
    	
    	// passing the Hiring Manager
    	driver.findElement(By.xpath(("//input[@name='addJobVacancy[hiringManager]']"))).sendKeys(manager);
    	
    	// passing the Description
    	driver.findElement(By.xpath("//textarea[@rows='9'][contains(@id,'description')]")).sendKeys("Candidate should have an experience of 3+ years");
    	
    	System.out.println("Vacancy details are filled");
    	driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);  	
    }   
}