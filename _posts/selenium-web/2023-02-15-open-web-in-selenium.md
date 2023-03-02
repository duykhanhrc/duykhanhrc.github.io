---
layout: post
title:  "Hướng dẫn mở Website trên Chrome browser bằng Selenium Python"
author: son
categories: [ selenium, automation ]
image: assets/images/automationtest/launch-chrome-selenium/launch-chrome-selenium-python.png
donation: true
comments: true
---

Selenium là một Automation tool trên web phổ biến và open source. Ưu điểm chính của việc sử dụng Selenium là nó hỗ trợ tất cả các trình duyệt như Google Chrome, Microsoft Edge, Mozilla Firefox và Safari, hoạt động trên tất cả các hệ điều hành chính và các tập lệnh của nó được viết bằng nhiều ngôn ngữ khác nhau như Java, Python, JavaScript, C#, v.v. 

Trong bài viết này, EAT sẽ hướng dẫn các bạn cách launch Chrome browser bằng Selenium Python.

### Chuẩn bị:
* Web Driver: Web Driver là một package để tương tác với trình duyệt web. Nó tương tác với trình duyệt web hoặc máy chủ web từ xa thông qua giao thức dây chung cho tất cả. Tải xuống Chrome Web Driver theo Phiên bản Chrome của bạn <a href='https://sites.google.com/chromium.org/driver/downloads'>tại đây</a>.
Sau đó đưa file vào project của bạn.
* Selenium: Để install selenium ta sử dụng command `pip install selenium` (hoặc `pip3 install selenium` trên MacOS)


### Code

<div class="scriptCode">
  <p>from selenium import webdriver</p>
  <p>driver = webdriver.Chrome()</p>
  <p>driver.get("http://www.seniorautomationtest.com")</p>
</div>

Vậy là với một đoạn code đơn giản ta có thể launch Chrome browser để bắt đầu làm việc với chiếc web của mình rồi!!!

<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>