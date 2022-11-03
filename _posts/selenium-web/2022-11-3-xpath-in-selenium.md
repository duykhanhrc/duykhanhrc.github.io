---
layout: post
title:  "Hướng dẫn sử dụng XPATH trong Selenium"
author: son
categories: [ selenium, automation ]
image: assets/images/automationtest/xpath-in-selenium/xpath-in-selenium.png
donation: true
comments: true
---

Xpath là một trong những công cụ locating element được sử dụng trong Selenium để xác định các element duy nhất trên một trang web. 

Nó đi qua DOM để tiếp cận element mong muốn có thuộc tính cụ thể hoặc không có tagName.

#### Xpath có thể được viết bằng những cách sau đây:


<div class="myDiv" style="color:green; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p> 1.   //tagname[@attribute='value']</p>
  <p> 2.   //*[@attribute='value']</p>
  
</div>


Xpath có thể được tạo bằng các phương pháp sau:

* OR & AND expression.

* following- sibling expression.

* parent.

* child.

* ancestor.

* self.

* descendant.

* starts-with()

* ends-with()

* text()

* preceding.

#### Có hai loại xpath - absolute và relative.

* Relative Xpath - Đường dẫn này bắt đầu từ bất kỳ phần nào của html DOM. Nó được biểu diễn bằng dấu gạch chéo kép // và giúp xác định các phần tử từ bất kỳ phần nào của trang web và biểu thức xpath không dài dòng.

  Tốt hơn hết là sử dụng Relative Xpath. Vì chúng ta không cần bắt đầu từ gốc để locate element của chúng ta. Vì vậy, trong trường hợp bất kỳ thuộc tính nào hoặc giá trị của chúng đang được sửa đổi, xác suất bị ảnh hưởng đến một xpath không chính xác sẽ ít hơn.

##### Syntax 
<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">

<p style="color:black; font-size:15px;"> login_form_with_xpath = driver.find_element(By.XPATH, "//form[@id='loginForm']")</p>
</div>

* Absolute Xpath - Đường dẫn này bắt đầu từ HTML gốc đến phần tử mong muốn. Nó được biểu diễn bằng một dấu gạch chéo /. Nó dài hơn so với Relative Xpath và nếu bất kỳ thuộc tính nào hoặc giá trị của chúng bắt đầu từ phần tử gốc bị thay đổi, thì chúng tôi sẽ không thể xác định duy nhất đối tượng mong muốn của chúng tôi trên trang.

##### Syntax 
<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">

<p style="color:black; font-size:15px;"> login_form_with_xpath = driver.find_element(By.XPATH, "/html/body/div/form")</p>
</div>

* Xpath có thể thực hiện luồng hai chiều có nghĩa là truyền tải có thể là cả hai cách từ cha mẹ đến con và ngược lại.

#### Parent to child

##### Syntax 
<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">

<p style="color:black; font-size:15px;"> login_form_with_xpath = driver.find_element(By.XPATH, "//table/tbody/tr[2]/td[2]")</p>
</div>

#### Child to parent

##### Syntax 
<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">

<p style="color:black; font-size:15px;"> login_form_with_xpath = driver.find_element(By.XPATH, "//form[@id='loginForm']/parent::div")</p>
</div>

##### Với bài viết này mình đã hướng dẫn các bạn về Xpath trong Selenium! Chúc các bạn học tập tốt nhé !

                                ❤️Thanks for reading!❤️
