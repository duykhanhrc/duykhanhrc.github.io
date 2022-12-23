---
layout: post
title:  "Hướng dẫn sử dụng Locators trong Cypress"
author: son
categories: [ cypress, automation ]
image: assets/images/automationtest/cypress/locators-cypress.png
donation: true
comments: true
---

### What are Cypress Locators?

Locators giúp định vị element trên trang web. Trong Automation, để thực hiện bất kỳ thao tác nào trên phần tử web trước tiên, bạn cần xác định vị trí phần tử và thực hiện hành động trên phần tử đó. 
Có nhiều loại locators khác nhau, chẳng hạn như id, CSS, XPath, v.v.
Bài blog này mọi người cùng tham khảo cách sử dụng locators trong Cypress Framework nhé.

### Get HTML Element by ID Selector in Cypress

ID là một thuộc tính của thẻ HTML, được sử dụng để tìm phần tử HTML. Sử dụng `cy.get()`, bạn có thể trực tiếp id với tiền tố `#` và lấy phần tử.
Ví dụ với element này:
`<input id="user_email_login">`

Ta sử dụng như sau:

<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>cy.get('#user_email_login')</p>
</div>

### Get HTML element by Class in Cypress

Giống với ID, thay vì sử dụng `#` thì ta sử dụng `.`
Ví dụ với element này:
`<input class="user_name">`

Ta sử dụng như sau:

<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>cy.get('.user_name')</p>
</div>

### Get HTML element by Tag Name in Cypress
Với TagName bạn có thể dùng như này với ví dụ ở trên:

<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>cy.get('input')</p>
</div>

(Nhưng với cách này thì khá khoai khi project lớn nha!)

### Get the HTML Element by XPath in Cypress
Với Xpath thì các bạn phải cài thêm plugin <a href='https://www.npmjs.com/package/cypress-xpath'>cypress-xpath</a>.
Mình recommend các bạn nên sử dụng cái này cho các project vừa và lớn.
Đây là cách install và sử dụng:
Step 1: Install cypress-xpath
<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>npm install -D cypress-xpath</p>
</div>
Step 2: Cài đặt cypress-xpath plugin
Thêm dòng code ở dưới vào file `cypress/support/index.js`
<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>require('cypress-xpath')</p>
</div>

Step 3: Sử dụng cypress-xpath
<div class="myDiv" style="color:black; display: table; background-color:rgb(238,238,238);text-align: left;padding:15px 40px;">
  <p>cy.xpath('//ul[@class="todo-list"]//li')</p>
</div>


Qua Blog này các bạn đã biết cách sử dụng một số những Locators phổ biến nhất trong Cypress.


<div>
    <p style=" text-align: center; ">Chúc các bạn học tập tốt!</p>
    <p style=" text-align: center; font-size: 20px; ">❤️Thanks for reading!❤️</p>
</div>