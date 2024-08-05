package seliniumtesting;

import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.UnhandledAlertException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.Test;

public class test1 {

    WebDriver driver;

@Test (priority=0)  
  public void testing() throws InterruptedException {
      

        long start = System.currentTimeMillis();
        driver.manage().window().maximize();
        driver.get("http://localhost:4200/home");
        long finish = System.currentTimeMillis();
        long totalTime = finish - start; 
        Thread.sleep(1000);
        //Testing Admin COmponents
        driver.navigate().to("http://localhost:4200/login");
       
        driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("kb123@gmail.com");
        driver.findElement(By.xpath("//*[@id=\"pwd\"]")).sendKeys("12345678");
        driver.findElement(By.xpath("/html/body/app-root/div/app-login/div/div/div/div/div[2]/form/div[3]/input")).click();
        System.out.println("sucessfully signUp ");
        Thread.sleep(4000);
}
@Test (priority=1)  
public void customersignin() throws InterruptedException  {
    //Customer Login And Raising Complaints
       driver.get("http://localhost:4200/login");
       driver.findElement(By.xpath("/html/body/app-root/div/app-login/nav/div/div/button/a")).click();
       driver.findElement(By.xpath("//*[@id=\"name\"]")).sendKeys("kavin");
       driver.findElement(By.xpath("//*[@id=\"email\"]")).sendKeys("kavin123@gmail.com");
       driver.findElement(By.xpath("//*[@id=\"password\"]")).sendKeys("12345");
       driver.findElement(By.xpath("//*[@id=\"phno\"]")).sendKeys("9632587410");
       driver.findElement(By.xpath("//*[@id=\"address\"]")).sendKeys("123B,ABC street"); 
       driver.findElement(By.xpath("//*[@id=\"panno\"]")).sendKeys("78954");
       driver.findElement(By.xpath("//*[@id=\"date\"]")).sendKeys("2022-10-27");
       driver.findElement(By.xpath("//*[@id=\"transactionpassword\"]")).sendKeys("12345");
       Thread.sleep(1000);
       driver.findElement(By.xpath("/html/body/app-root/div/app-signup/div/div/div/div/form/div[9]/button")).click();
	        System.out.println("sucessfully raised a complaint");	
    
    
		}
  @BeforeMethod
    public void beforeMethod() {
        
      System.setProperty("webdriver.chrome.driver", "C:\\Users\\VIGNESHWARAN R\\Downloads\\chromedriver_win32 (1)\\chromedriver.exe");
      driver=new ChromeDriver();
      driver.manage().window().maximize();
    }
  

    @AfterMethod
    public void afterMethod() {
        //driver.close();
         driver = null;
    }
}