---
layout: post
title:  "Hướng dẫn sử dụng hàm Click trong Selenium với Java vàn Python"
author: son
categories: [ selenium, automation ]
image: assets/images/automationtest/click-in-selenium/click-in-selenium.png
donation: true
comments: true
---

Bài viết này đề cập tới cách sử dụng hàm Click trong Selenium. Hàm Click được sử dụng để nhấp chuột vào bất kỳ phần tử nào, chẳng hạn như Button, Link v.v.

(Với bài này, mình sẽ hướng dẫn cách click 1 button cùng với Selenium, các bạn có thể sử dụng để click vào link,... hay bất cứ element nào khác!)

### &nbsp;&nbsp;&nbsp; Syntax:

Trước hết, chúng ta phải xác định Button với sự trợ giúp của bất kỳ locators nào như id, tên lớp, tên, văn bản liên kết, xpath, css hoặc một phần văn bản liên kết (các bạn có thể tham khảo để hiểu hơn về Locators trong Selenium tại: <a href="https://seniorautomationtest.com/locators-in-selenium/">đây</a>).
Sau khi xác định, chúng ta phải nhấp vào Button với sự trợ giúp của hàm Click.

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Java
<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p> WebElement button = driver. findElement(By.id("button"));</p>
  button.click();
</div>

##### &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Python

<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p> button = driver.findElement(By.id("button"))</p>
  button.click()
</div>

&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;(Với Python, syntax lúc nào cũng nhanh gọn và dễ đọc code hơn 😄 )

Từ những hàm cơ bạn như vậy, các bạn có thể sử dụng để build framework cho dự án của mình và cho công ty để làm việc được hiệu suất cao. và khi maintain dễ dàng hơn, tiết kiệm thời gian hơn.

Ví dụ với Project của mình:
![class-by]({{ site.baseurl }}/assets/images/automationtest/click-in-selenium/click_on.png)

Và khi maintain sẽ dễ dàng hơn, tiết kiệm thời gian hơn.


##### Chúc các bạn học tập tốt!

                                ❤️Thanks for reading!❤️
