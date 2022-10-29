---
layout: post
title:  "8 công cụ để locate element hàng đầu trong Selenium"
author: son
categories: [ selenium, automation ]
image: assets/images/automationtest/locating-element/selenium-locators.png
donation: true
comments: true
---

Locators Selenium hoạt động sau khi Selenium WebDriver đã được khởi tạo và trang web cần kiểm tra.

Locators cho phép người kiểm tra chọn một phần tử DOM HTML để thực hiện các hoạt động.

Bài đăng này, mình chia sẻ 8 công cụ để locate element/elements hàng đầu trong Selenium WebDriver.

### 8 công cụ để locate element/elements

Class ‘By’ được sử dụng để chỉ định thuộc tính nào được sử dụng để định vị các phần tử trên một trang.
![class-by]({{ site.baseurl }}/assets/images/automationtest/locating-element/class-by.png)

Đây là những cách khác nhau mà các thuộc tính được sử dụng để định vị các phần tử trên một trang:

* By ID: find_element(By.ID, "id")
* By NAME: find_element(By.NAME, "name")
* By XPATH: find_element(By.XPATH, "xpath")
* By LINK_TEXT: find_element(By.LINK_TEXT, "link text")
* By PARTIAL_LINK_TEXT: find_element(By.PARTIAL_LINK_TEXT, "partial link text")
* By TAG_NAME: find_element(By.TAG_NAME, "tag name")
* By CLASS_NAME: find_element(By.CLASS_NAME, "class name")
* By CSS_SELECTOR: find_element(By.CSS_SELECTOR, "css selector")

(Để tìm nhiều elements chúng ta sử dụng 'find_elements')

#### Ví dụ với 1 đoạn HTML:
![class-by]({{ site.baseurl }}/assets/images/automationtest/locating-element/html.png)

Các elements có thể được located như sau:

* login_form = driver.find_element(By.ID, 'loginForm')

* username = driver.find_element(By.NAME, 'username')

* login_form_with_xpath = driver.find_element(By.XPATH, "//form[@id='loginForm']")

* continue_link = driver.find_element(By.LINK_TEXT, 'Continue')

* partial_continue_link = driver.find_element(By.PARTIAL_LINK_TEXT, 'Conti')

* heading1 = driver.find_element(By.TAG_NAME, 'h1')

* content_with_class_name = driver.find_element(By.CLASS_NAME, 'content')

* content_with_css_selectors = driver.find_element(By.CSS_SELECTOR, 'p.content')

##### Với các dự án lớn, mình recommend sử dụng Xpath để có được hiệu suất tốt nhất khi làm việc.
* ###### Tại bài viết sau mình sẽ hướng dẫn cách lấy và viết xpath nhé!

                                ❤️Thanks for reading!❤️
