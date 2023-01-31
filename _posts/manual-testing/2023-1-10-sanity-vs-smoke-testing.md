---
layout: post
title:  "Tìm hiểu và phân biệt giữa Sanity Testing và Smoke Testing"
author: son
categories: [ manual ]
image: assets/images/manual-testing/terminologies/sanity-smoke-testing.png
donation: true
comments: true
---

Smoke và Sanity testing là những chủ đề bị hiểu lầm nhất trong Kiểm thử phần mềm. Có rất nhiều tài liệu về chủ đề này, nhưng hầu hết chúng đều khó hiểu. Bài viết sau đây sẽ phần nào giúp chúng ta giải quyết được sự nhầm lẫn này.

### Smoke Testing là gì?
Smoke test là một loại Kiểm thử phần mềm được thực hiện sau khi xây dựng phần mềm để xác định rằng các chức năng quan trọng của chương trình đang hoạt động tốt. Nó được thực hiện "trước" bất kỳ kiểm tra chức năng hoặc hồi quy chi tiết nào được thực thi trên bản dựng phần mềm. Mục đích là để từ chối một ứng dụng bị hỏng nặng, vì vậy mà nhóm QA sẽ không mất nhiều thời gian cài đặt và thử nghiệm ứng dụng phần mềm.

Trong Smoke test, các trường hợp thử nghiệm được chọn bao gồm chức năng quan trọng nhất hoặc thành phần của hệ thống. Mục tiêu không phải là để thực hiện kiểm tra toàn diện, nhưng để xác minh rằng các chức năng quan trọng của hệ thống đang hoạt động tốt. Ví dụ một Smoke test điển hình sẽ là - Xác minh rằng ứng dụng chạy thành công, Kiểm tra xem GUI có đáp ứng không... v.v.

### Sanity testing là gì?
Sanity testing là một loại Kiểm thử phần mềm được thực hiện sau khi nhận được một bản build phần mềm, với những thay đổi nhỏ về mã, hoặc chức năng, để xác định rằng các lỗi đã được sửa và không có vấn đề gì khác xảy ra do những thay đổi này. Mục đích là để xác định rằng chức năng được đề xuất hoạt động gần như mong đợi. Nếu kiểm tra sanity không thành công, bản build bị từ chối để tiết kiệm thời gian và chi phí liên quan đến một thử nghiệm nghiêm ngặt hơn.

Mục tiêu là "không" để xác minh triệt để chức năng mới, nhưng để xác định rằng nhà phát triển đã áp dụng một số tính hợp lý (sanity) trong khi sản xuất phần mềm. 

### So sánh Smoke Testing và Sanity Testing
![testing]({{ site.baseurl }}/assets/images/manual-testing/terminologies/compare-sanity-smoke-testing.png)

<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>