using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using WebDriverManager;
using WebDriverManager.DriverConfigs.Impl;

namespace iotTests
{
    [TestClass]
    class IntegrationTest
    {


        ChromeDriver _driver;
        private string _url = "https://localhost:5001";



        [TestInitialize]
        public void InitializeSel()
        {
            new DriverManager().SetUpDriver(new ChromeConfig());
            var options = new ChromeOptions
            {
                PageLoadStrategy = PageLoadStrategy.Normal,
                AcceptInsecureCertificates = true


            };
            _driver = new ChromeDriver(options);

        }


        public void AddDevice()
        {
            _driver.Url = _url;


        }



    }
}
