---
layout: post
title:  "Hướng dẫn thay đổi kích thước cửa sổ Chrome browser bằng Selenium Python"
author: son
categories: [ selenium, automation ]
image: assets/images/automationtest/change-window-size/change-browser-window-size.png
donation: true
comments: true
---

Trong Selenium, bạn có thể sử dụng phương thức set_window_size () của đối tượng WebDriver để cài đặt kích thước cửa sổ trình duyệt. Phương thức này yêu cầu hai tham số, đó là chiều rộng và chiều cao, được truyền dưới dạng số nguyên.

Trong bài viết này, EAT sẽ hướng dẫn các bạn cách sử dụng set_window_size() với Chrome browser bằng Selenium Python.


### Code:

<div class="scriptCode">
  <p>from selenium import webdriver</p>
  <p>driver = webdriver.Chrome()</p>
  <p>driver.get("http://www.seniorautomationtest.com")</p>
  <p>driver.set_window_size(800, 600)</p>
  <p>driver.quit()</p>
</div>

##### Tương tự, bạn có thể sử dụng phương thức maximize_window () để làm toàn màn hình cửa sổ trình duyệt:

<div class="scriptCode">
  <p>from selenium import webdriver</p>
  <p>driver = webdriver.Chrome()</p>
  <p>driver.get("http://www.seniorautomationtest.com")</p>
  <p>driver.maximize_window()</p>
  <p>driver.quit()</p>
</div>


Vậy là với một đoạn code đơn giản ta có thể launch Chrome browser để bắt đầu làm việc với chiếc web của mình rồi!!!

<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>