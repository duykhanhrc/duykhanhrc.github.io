---
layout: post
title:  "Hướng dẫn cách xác minh page title trong Selenium Java"
author: son
categories: [ selenium, automation ]
image: assets/images/automationtest/verify-assert/verify-title-page.png
donation: true
comments: true
---

Với bài blog này mình sẽ hướng dẫn các bạn sử dụng hàm getTitle() và assertEquals(actualTitle, expectedTitle) trong Selenium Java để chúng ra có thể verify page title.

Các bước để verify chiếc page title là:
* Sử dụng hàm getTitle() và lưu giá trị vào 1 String
* Sử dụng assertEquals(actualTitle, expectedTitle) để verify page title



![class-by]({{ site.baseurl }}/assets/images/automationtest/getTitle-in-Selenium/title.png)

##### Đầu tiên chúng ta phải lấy được page title bằng hàm getTitle() và lưu vào 1 biến:

<div class="myDiv" style="color:green; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>String getTitlePage = driver.getTitle();</p>
</div>
  
##### Sau đó chúng ta sử dụng assertEquals để verify chiếc page title của trang web:

<div class="myDiv" style="color:green; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>Assert.assertEquals(actualTitle, expectedTitle);</p>
</div>

(Nếu muốn print kết quả của việc verify có success hay không ta có thể thêm ghi chú như sau:)
<div class="myDiv" style="color:green; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>Assert.assertEquals(actualTitle, expectedTitle, “Title matched”);</p>
</div>

<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>
