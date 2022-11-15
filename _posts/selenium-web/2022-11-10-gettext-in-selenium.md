---
layout: post
title:  "Hướng dẫn sử dụng getText() trong Selenium Java"
author: son
categories: [ selenium, automation ]
image: assets/images/automationtest/gettext-selenium/getText-selenium.png
donation: true
comments: true
---

Với bài blog này mình sẽ hướng dẫn các bạn sử dụng hàm getText() trong Selenium Java.

Chúng ta có thể lấy văn bản từ một web element bằng Selenium webdriver.
Với hàm getText (), ta nhận được innerText của một phần tử. Nó tìm văn bản của một phần tử có thể nhìn thấy cùng với các phần tử con của nó. Nó bỏ qua các khoảng trống ở cuối và ở đầu.

Trước hết, chúng ta cần locate element với sự trợ giúp của bất kỳ locators nào như id, class, name, xpath hoặc css và sau đó áp dụng hàm getText () trên nó để lấy nội dung văn bản của phần tử.

(Nếu bạn nào chưa rõ các locators trong Selenium thì mời các bạn tham khảo tại <a href="https://seniorautomationtest.com/locators-in-selenium/">đây</a>). 

#### Syntax:


<div class="myDiv" style="color:green; display: table; background-color:rgb(238,238,238);text-align: left; padding:15px;">
  <p class="scriptCode">WebElement getTextElement=driver.findElement(By.xpath("//h1"));</p>
  <p class="scriptCode">String text= getTextElement.getText();</p>
</div>
  


<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>