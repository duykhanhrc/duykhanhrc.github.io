---
layout: post
title:  "Một số trường hợp kiểm thử cho CAPTCHA"
author: son
categories: [ manual ]
image: assets/images/manual-testing/captcha/testcases-for-captcha.png
donation: true
comments: true
---

Ngày nay, hầu hết các công cụ Automation đều có sẵn trên thị trường. Vì vậy, để ngừng bot hoặc công cụ để truy cập trang web

Mục đích của Captcha là xác định và cho phép người dùng thực sự truy cập, đồng thời ngăn các bot và hệ thống tự động gửi dữ liệu biểu mẫu trực tuyến.

Blog này liệt kê ra một số trường hợp kiểm thử cho các loại CAPTCHA



#### Captcha Image Test

Phần này sẽ cố gắng hiểu cách xác thực kiểm tra hình ảnh captcha. Một số trang kiểm tra hình ảnh xác thực đã sử dụng kiểm tra hình ảnh xác thực để ngăn chặn bot.

* Kiểm tra hình ảnh trong ô có được hiển thị bằng cách nhấp vào check box hay không.
* Kiểm tra xem hình ảnh có hiển thị với người dùng hay không.
* Kiểm tra xem hình ảnh ô hiển thị trên hình ảnh xác thực có thể nhấp được hay không.
* Kiểm tra xem hình ảnh xác thực được tải đúng cách khi tải trang web.
* Kiểm tra tất cả các hình ảnh được tạo và hiển thị chính xác
* Kiểm tra xem Captcha có hiển thị thông báo có ý nghĩa cho người dùng về những gì họ cần chọn hay không.
* Kiểm tra người dùng có thể chọn và tiếp tục.
* Kiểm tra lựa chọn hình ảnh không chính xác và trình từ chối người dùng.
(Khi người dùng gửi không chính xác, hệ thống sẽ tải lại Captcha.)


#### Captcha Test Cases For Text Captcha

* Kiểm tra xem hình ảnh văn bản (màn hình Mã captcha) có được hiển thị chính xác không.
* Kiểm tra văn bản có thể được đọc (kiểm tra chức năng và trải nghiệm người dùng)
* Kiểm tra người dùng có thể nhập dữ liệu vào trường Captcha.
* Kiểm tra độ nhạy trường hợp của mã captcha.
* Kiểm tra lỗi xác thực captcha khi nhập mã captcha không chính xác
* Kiểm tra xác thực captcha thành công khi nhập đúng mã Captcha.
* Kiểm tra nút làm mới tạo mã mới

#### Captcha Testing Scenarios for Audio Captcha

* Kiểm tra Giao diện người dùng Captcha đã được tạo chính xác chưa.
* Kiểm tra biểu tượng âm thanh được hiển thị.
* Khi Captcha đã được tạo, Kiểm tra biểu tượng âm thanh có thể được nhấp.
* Kiểm tra xem Trình phát âm thanh và các nút điều khiển có hiển thị không
* Kiểm tra hoạt động của từng chức năng điều khiển âm thanh (ví dụ: Phát, tạm dừng, quay lại, chuyển tiếp)
* Việc chọn nút 'Phát' sẽ tạo ra Captcha chính xác cho mỗi màn hình.
* Kiểm tra Captcha âm thanh được chấp nhận.

#### Captcha Testing Scenarios for Audio Captcha

* Kiểm tra màn hình hình ảnh xác thực và đảm bảo rằng tất cả các phần tử giao diện người dùng được tạo chính xác.
* Kiểm tra xem nút video có phát video không.
* Kiểm tra video hỏi bạn một câu hỏi liên quan đến video
* Kiểm tra video chấp nhận đúng (câu trả lời liên quan)
* Kiểm tra video từ chối một câu trả lời sai.

### Test Cases For Captcha Puzzle

* Kiểm tra xem tất cả các hình ảnh câu đố đã được tạo trên màn hình chưa
* Kiểm tra xem tất cả các mục UI và điều khiển đã được tạo chưa
* Kiểm tra xem việc chọn nút chuột có hoàn thành đúng hành động hay không (bạn sẽ quyết định điều này dựa trên những gì bạn đang cố gắng kiểm tra)
* Kiểm tra xem việc hoàn thành Puzzle Captcha có cho phép bạn chuyển sang bước tiếp theo không
đây có thể là ủy quyền đăng nhập, v.v.
* Kiểm tra xem việc không nhập được hình ảnh xác thực của câu đố sẽ từ chối hành động của người dùng và yêu cầu họ thử lại hay hệ thống sẽ thực hiện hành động khác.


<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>
