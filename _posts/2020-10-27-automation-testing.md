---
layout: post
title:  "Automation testing"
author: khanh
categories: [ selenium, automation ]
image: assets/images/automationtest/automationtesting.jpg
donation: true
comments: true
---
Automation testing (Kiểm thử tự động) là một kĩ thuật test và so sánh giá trị thực tế với giá trị mong muốn. Đễ thực hiện thì chúng ta cần phải viết các test scripts hoặc sử dụng các test automation tool. Kiểm thử tự động được dùng để tự động hóa các công việc lặp đi lặp lại, và các bước test mà khó có thể hoàn thành thủ công.

## Hệ sinh thái của automation testing với ngôn ngữ Java:

![ecosystem]({{ site.baseurl }}/assets/images/automationtest/ecosystm.jpg)

Selenium là thứ đầu tiên bạn cần quan tâm khi muốn học automation test với các ứng dụng web. Selenium là một tool rất hữu ích bởi vì nó là open source - nghĩa là bạn có thể sử dụng nó miễn phí, và có thể tạo testing framework với nhiều ngôn ngữ khác nhau như Java, C#, Ruby, Python. Việc chọn ngôn ngữ lập trình nào phụ thuộc vào kĩ năng của bạn, ứng dụng web cần test, cộng đồng hỗ trợ, các library có sẵn để phục vụ việc tạo test automation framework.

Java là một ngôn ngữ lập trình nổi tiếng. Do đó sự kết hợp Selenium - Java khá là được ưa chuộng. 

Cho dù việc lựa chọn ngôn ngữ lập trình có thể khác nhau cho mỗi dự án. Việc học Selenium Java có thể giúp bạn có nền tảng vững chắc và hiểu biết về Selenium. Sau đó bạn có thể tùy ý sử dụng nó kết hợp với bất kì ngôn ngữ lập trình nào mà bạn muốn.  

## Vị trí của automation tester trong một dự án:

![yourrole]({{ site.baseurl }}/assets/images/automationtest/yourrole.jpg)

Đây là mô hình làm việc cổ điển và phổ biến nhất trong phát triển phần mềm.

Khi phần mềm được viết xong, việc testing sẽ diễn ra. Ở đây sẽ có các hoạt dộng test được diễn ra như functional test, security test, performance test, và automation test cũng là một trong số đó theo yêu cầu của dự án.

## Công việc testing trong mô hình làm việc Agile:

![agile]({{ site.baseurl }}/assets/images/automationtest/agile.jpg)

Automation testing trong Agile team cho phép test cases được run một cách tự động mỗi khi code được push vào repository của application. Hay còn được gọi là Continuous Testing, để đảm bảo ít bug xảy ra nhất trước khi đưa ra production.

Automation testing trong Agile được hiện thực thông qua một số tool và framework như là Selenium và Cypress. Việc thực hiện CI/CD cũng cần có sự hỗ trợ từ các tool như Jenkins, Pipeline,...

Kết hợp tất cả các tools này lại với nhau, tester có thể đảm bảo việc viết auto test scripts theo ứng dụng. Và các test scripts này có thể được thực thi một cách tự động mỗi khi có code mới được thêm vào ứng dụng.

