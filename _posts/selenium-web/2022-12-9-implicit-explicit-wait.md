---
layout: post
title:  "Tìm hiểu về Implicit Wait và Explicit Wait trong Selenium Webdriver"
author: son
categories: [ selenium, automation ]
image: assets/images/automationtest/waits-in-selenium/waits-in-selenium2.png
donation: true
comments: true
---

Với bài blog này chúng ta sẽ hiểu về Implicit Wait và Explicit Wait trong Selenium Webdriver.

Đôi khi chúng ta đang run automation với Selenium thì gặp error `ElementNotVisibleException` mà nhiều khi các bạn không hiểu vì sao, rồi tự hỏi các câu như kiểu: “rõ ràng lấy đúng locator rồi mà”, “rõ ràng thấy button hiển thị mà”,...Nhưng đừng lo, vì chúng ra đã có Waits giúp chúng ta giải quyết vấn đề này. Waits trong Selenium có 2 loại chính và mỗi loại sẽ phù hợp với những mục đích sử dụng khác nhau. Vậy trong bài hướng dẫn này chúng ta sẽ cùng nhau tìm hiểu về 2 loại Waits phổ biến trong Selenium:

* Implicit wait
* Explicit Wait



![class-by]({{ site.baseurl }}/assets/images/automationtest/waits-in-selenium/waits-in-selenium.png)

### Implicit Wait

`Implicit Wait` sẽ báo cho trình điều khiển web chờ trong khoảng thời gian xác định trước khi nó hết kiên nhẫn và đưa ra thông báo “No Such Element Exception”.

##### Syntax:

<div class="myDiv" style="color:green; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>driver.manage().timeouts().implicitlyWait(TimeOut, TimeUnit.SECONDS);</p>
</div>

* TimeOut được để mặc định là 0, và khi chúng ta cài đặt TimeOut, trình điều khiển web sẽ chờ đợi trong khoảng thời gian TimeOut đó trước khi đưa ra ngoại lệ
* Tham số thứ 2: TimeUnit.SECONDS, ngoài Seconds chúng ta còn có thể cài đặt phép đo thời gian theo MINUTES, MILISECOND, MICROSECONDS, NANOSECONDS, DAYS, HOURS, v.v.

(Lưu ý : `Implicit Wait` sẽ dừng thực hiện chờ đợi 1 phần tử được tải xong nếu đã tìm thấy element đó mà không cần chờ cho hết TimeOut đã được đặt sẵn từ đầu.)

### Explicit Wait

`Explicit Wait` được sử dụng để yêu cầu trình duyệt web chờ đợi trong một thời gian nhất định, theo một điều kiện cụ thể. Nếu vượt quá thời gian chờ đợi thì sẽ đưa ra error `ElementNotVisibleException`

##### Syntax:

<div class="myDiv" style="color:green; display: table; background-color:rgb(238,238,238);text-align: center;padding:15px 40px;">
  <p>WebDriverWait wait=new WebDriverWait(WebDriveReference,TimeOut);</p>
</div>

(Lưu ý : `Explicit Wait` chỉ được áp dụng cho phần tử nào được chỉ định.

Vậy là chúng ta đã tìm hiểu sơ lược qua Implicit Wait và Explicit Wait trong Selenium Webdriver
Blog này mình mong giúp được các bạn hiểu về 2 loại Waits này.
Blog sau mình sẽ giúp các bạn so sánh 2 loại waits này để các bạn có cái nhìn rõ hơn nhé


<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>
