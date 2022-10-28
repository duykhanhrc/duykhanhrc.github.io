---
layout: page
title: Mời Mentor Ly Coffee
permalink: "/donate/"
image: assets/images/buy-me-a-coffee.png
---

<p class="mb-0" style="line-height: 1.3;"><b>Khanh Pham</b></p>
<p class="mb-0" style="line-height: 1.3;"><b>@seniorautomationtest</b></p>
<p>Automation Test Lead &amp; Test Manager</p>

Nếu bạn cảm thấy thích những gì mình chia sẻ, hoặc là thấy thích thì thưởng vì bất kỳ lí do gì, mình rất vui nếu được mời uống coffee! :) Thanks.

<link href="{{ site.baseurl }}/assets/css/donate.css" rel="stylesheet">

<div class="row">
<div class="col-sm-6 col-md-6 col-lg-6">
<form class="paypal" action="" method="" id="paypal_form">
<div style="display:flex;align-items:center;border:1px solid rgba(255, 129, 63, 0.264776);padding:15px;margin-bottom:20px;min-width: fit-content;"><img style="height: 30px;" src="/assets/images/donation/coffee.svg"> <span class="ori" style="padding-left:20px;padding-right:20px;color:rgba(128,126,156,0.3)">X</span>

<input autocomplete="off" name="quantity" class="form-control customquantity mb-0"  id="customquantity" value="" size="2" style="text-align:center;">   &nbsp;

<div class="form-check form-check-inline">
  <input class="form-check-input bmcinput quantity" type="radio" name="quantity" id="q3" value="3" onclick="ClearFields();" checked>
  <label for="q3" class="donation-quantity mb-0">3</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input bmcinput quantity" type="radio" name="quantity" id="q5" value="5" onclick="ClearFields();">
  <label for="q5" class="donation-quantity mb-0">5</label>
</div>
<div class="form-check form-check-inline">
  <input class="form-check-input bmcinput quantity" type="radio" name="quantity" id="q10" value="10" onclick="ClearFields();">
  <label for="q10" class="donation-quantity mb-0">10</label>
</div>

</div>
<!-- <div class="mb-3">
  <input name="name" placeholder="Tên (không bắt buộc)" class="form-control mb-0"  value="" style="font-size: 1.18rem;">
</div> -->

<div class="mb-3">
  <button id="submitcoffee" type="button" name="submit" class="btn senddonate" data-bs-toggle="collapse" data-bs-target="#collapsePayment" aria-expanded="false" aria-controls="collapsePayment" style="cursor: pointer;">
  <span id="totalresult" style="font-size: 1.18rem;">150k VND</span> Gửi coffee
  </button>
</div>
</form>

<!-- <div class="collapse" id="collapsePayment" markdown="1"> -->
<div markdown="1">

Lời nhắn tham khảo: <b><span id="msn">Mình</span> gửi <span id="msq">3</span> ly coffee<b>

Gửi coffee cho mentor bằng các cách sau:

## 1. Chuyển khoản ngân hàng

Bạn có thể thưởng bằng cách chuyển khoản thông thường với thông tin sau:

+ Số TK: 0501000090055
+ Ngân hàng: Vietcombank
+ Tên tài khoản: Phạm Duy Khánh

## 2. Gửi qua MoMo

![MoMo]({{ site.baseurl }}/assets/images/donate_momo.png)

Dùng MoMo và:
+ Quyét mã QR trên đây để mời loại cà phê nào tuỳ ý nhé!
+ Hoặc là gửi theo sđt: 0976947479 - Phạm Duy Khánh

## 3. Paypal

[paypal.me/seniorautomationtest](https://paypal.me/seniorautomationtest)

Cuối cùng là cách chuyển qua Paypal bằng cách click vô link trên.
</div>
</div>

<div class="col-sm-6 col-md-6 col-lg-6">
  <div class="mt-0">
    <h2 class="mb-0 mt-0" style="line-height: 1.3;">Xem ai đã gửi coffees</h2>
    <h3 class="mb-0 mt-0" style="line-height: 1.3;">Đã nhận <span class="text-orange">
    {% assign total = 0 %}
    {% for donator in site.donators %}
      {% assign total = total | plus: donator.quantity %}
    {% endfor %}{{ total }}</span> coffees</h3>
    <hr>
    {% for donator in site.donators reversed %}
    <div class="post message">
      <div class="row ml-0 mr-0">
        <div style="color: #262626;line-height:1.4;">
          <strong><a href="{{ donator.from }}" target="_blank">{{ donator.name }}</a></strong>  sent me  <span class="row middle-xs" style="display:inline-flex;margin-left:2px; margin-right:2px;"><span class="badge">{{ donator.quantity }}</span> <img src="/assets/images/donation/coffee.svg" style="margin-left:2px; height: 20px"></span>
        </div>
      </div>
      <div class="messagebody">{{ donator.message }}</div>
    </div>
    {% endfor %}
  </div>
</div>
</div>
