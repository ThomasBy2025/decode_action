//Sat Aug 22 2026 02:50:16 GMT+0000 (Coordinated Universal Time)
//Base:<url id="cv1cref6o68qmpt26ol0" type="url" status="parsed" title="GitHub - echo094/decode-js: JS混淆代码的AST分析工具 AST analysis tool for obfuscated JS code" wc="2165">https://github.com/echo094/decode-js</url>
//Modify:<url id="cv1cref6o68qmpt26olg" type="url" status="parsed" title="GitHub - smallfawn/decode_action: 世界上本来不存在加密，加密的人多了，也便成就了解密" wc="741">https://github.com/smallfawn/decode_action</url>
function closeLogoutSheet() {
  window.document.getElementById("logout-sheet").classList.remove("show");
  window.document.body.style.overflow = "";
}
function confirmLogout() {
  closeLogoutSheet();
  $.get("?kglogout=1", function (guf6) {
    if (guf6.code == 200) {
      showToast(guf6.msg, "success");
      setTimeout(function () {
        location.reload();
      }, 800);
    } else if (guf6.code == 401) {
      showToast("登录已失效，请重新扫码登录", "error");
      setTimeout(openKgLoginModal, 1000);
    } else {
      showToast(guf6.msg || "退出失败", "error");
    }
  }, "json").fail(function () {
    showToast("网络请求失败", "error");
  });
}
$(window.document).on("change", "#kgjxToggle", function () {
  var wo7 = this.checked ? 11 : 22;
  var dt$tRhpoG8 = $(this);
  var eOzvFJTiT9 = "<?php echo addslashes($deviceId); ?>";
  if (!eOzvFJTiT9) {
    dt$tRhpoG8.prop("checked", !dt$tRhpoG8.prop("checked"));
    showToast("设备ID缺失，无法设置", "error");
    return;
  }
  dt$tRhpoG8.prop("disabled", true);
  $.get("", {
    action: "update_kgjx",
    deviceid: eOzvFJTiT9,
    status: wo7
  }, function (yJVELef10) {
    dt$tRhpoG8.prop("disabled", false);
    if (yJVELef10.code == 200) {
      showToast(yJVELef10.msg, "success");
    } else if (yJVELef10.code == 401) {
      showToast("登录已失效，请重新扫码登录", "error");
      setTimeout(openKgLoginModal, 1000);
    } else {
      dt$tRhpoG8.prop("checked", !dt$tRhpoG8.prop("checked"));
      showToast(yJVELef10.msg || "设置失败", "error");
    }
  }, "json").fail(function () {
    dt$tRhpoG8.prop("disabled", false);
    dt$tRhpoG8.prop("checked", !dt$tRhpoG8.prop("checked"));
    showToast("网络请求失败", "error");
  });
});
function openKgLoginModal() {
  $("#kg-login-modal").addClass("show");
  getqrpic();
}
function closeKgLoginModal() {
  $("#kg-login-modal").removeClass("show");
  cleartime();
  $("#loginmsg").html("使用酷狗手机版扫描二维码").removeAttr("data-lock");
  $("#qrimg").show().empty();
  $("#mobile").hide();
}
$("#kg-login-modal").on("click", function (Z11) {
  if (Z11.target === this) closeKgLoginModal();
});
$(window.document).on("keydown", function (gsv12) {
  if (gsv12.key === "Escape" && $("#kg-login-modal").hasClass("show")) closeKgLoginModal();
});
$(".qr-modal-content .close-btn").on("click", closeKgLoginModal);
function getqrpic() {
  cleartime();
  $.get("kglogin.php?do=getqrpic&r=" + window.Math.random(), function (wum13) {
    if (wum13.saveOK == 0) {
      $("#qrimg").attr("qrsig", wum13.qrsig).attr("qrurl", wum13.uu);
      $("#qrimg").html("<img onclick=\"getqrpic()\" src=\"data:image/png;base64," + wum13.data + "\" title=\"点击刷新二维码\" />");
      if (/Android|iPhone|iPad|iPod/i.test(navigator.userAgent)) $("#mobile").css("display", "block");
      r1 = setInterval(loginload, 1000);
      tL2 = setInterval(qrlogin, 3000);
    } else {
      showToast(wum13.msg, "error");
    }
  }, "json");
}
function qrlogin() {
  if ($("#loginmsg").attr("data-lock") === "true") return;
  var HiSd14 = $("#qrimg").attr("qrsig");
  $.get("kglogin.php?do=qrlogin&qrsig=" + encodeURIComponent(HiSd14) + "&r=" + window.Math.random(), function ($kd15) {
    if ($kd15.saveOK == 0) {
      $("#loginmsg").html("✅ 登录成功！" + decodeURIComponent($kd15.nick));
      $("#loginload").hide();
      $("#qrimg, #mobile").hide();
      $("#loginmsg").attr("data-lock", "true");
      cleartime();
      showToast("酷狗账号绑定成功，即将刷新页面", "success");
      setTimeout(function () {
        location.reload();
      }, 1500);
    } else if ($kd15.saveOK == 1) {
      getqrpic();
      $("#loginmsg").html("二维码已过期，请重新扫描");
    } else if ($kd15.saveOK == 2) {
      $("#loginmsg").html("请使用酷狗APP扫描二维码");
    } else if ($kd15.saveOK == 3) {
      $("#loginmsg").html("扫描成功，请在手机上确认登录");
    } else {
      cleartime();
      $("#loginmsg").html($kd15.msg);
    }
  }, "json");
}
function loginload() {
  if ($("#loginmsg").attr("data-lock") === "true") return;
  var fS16 = $("#loginload").text();
  $("#loginload").text(fS16.length > 2 ? "." : fS16 + ".");
}
function cleartime() {
  clearInterval(r1);
  clearInterval(tL2);
}
function mloginurl() {
  var spcFK17 = $("#qrimg").attr("qrurl");
  $("#loginmsg").html("跳转后请返回本页面");
  if (/iPhone|iPad/i.test(navigator.userAgent)) {
    window.alert("跳转后请手动返回本页面");
    window.open(spcFK17, "_blank");
  } else {
    window.location.href = spcFK17;
  }
}
$(window.document).ready(function () {
  $("#kg-login-trigger").click(openKgLoginModal);
});
function setCookie(TpeGD18, dkcQP19, BKRGUHesM20) {
  var Vaf21 = new window.Date();
  Vaf21.setTime(Vaf21.getTime() + BKRGUHesM20 * 24 * 60 * 60 * 1000);
  window.document.cookie = TpeGD18 + "=" + encodeURIComponent(dkcQP19) + ";expires=" + Vaf21.toUTCString() + ";path=/";
}
var _22 = new URLSearchParams(window.location.search).get("deviceid");
setCookie("aa", _22, 7);
function bdkey(FmPlZU23) {
  var glZOsiTXm24 = new XMLHttpRequest();
  glZOsiTXm24.open("GET", "?dhkey=" + encodeURIComponent(FmPlZU23));
  glZOsiTXm24.onreadystatechange = function () {
    if (glZOsiTXm24.readyState === XMLHttpRequest.DONE) {
      var BqJPSIbMk25 = window.document.getElementById("confirm-button");
      BqJPSIbMk25.textContent = "确定";
      BqJPSIbMk25.disabled = false;
      try {
        var $KwIioTqe26 = JSON.parse(glZOsiTXm24.responseText);
        var DzK$sdL27 = window.document.getElementById("audioA");
        if ($KwIioTqe26.code == 200) {
          DzK$sdL27.src = "ma.mp3";
          DzK$sdL27.currentTime = 0;
          DzK$sdL27.play();
          showToast("🎉 " + $KwIioTqe26.msg, "success");
          setTimeout(function () {
            location.reload();
          }, 800);
        } else {
          DzK$sdL27.src = $KwIioTqe26.code == 203 ? "whh.mp3" : "ngmhhy.mp3";
          DzK$sdL27.currentTime = 0;
          DzK$sdL27.play();
          showToast($KwIioTqe26.msg, $KwIioTqe26.code == 203 ? "error" : "warn");
        }
      } catch (e) {
        showToast("服务器响应异常", "error");
      }
    }
  };
  glZOsiTXm24.send();
}
$(window.document).ready(function () {
  $("#confirm-button").click(function () {
    var yWhX28 = $("#key-path-input").val().trim();
    if (!yWhX28) {
      var XlVa29 = window.document.getElementById("audioA");
      if (XlVa29) {
        XlVa29.src = "j.mp3";
        XlVa29.currentTime = 0;
        XlVa29.play();
      }
      showToast("请输入兑换码", "warn");
      return;
    }
    $(this).text("处理中...").prop("disabled", true);
    bdkey(yWhX28);
  });
  $("#key-path-input").keypress(function (yMeE30) {
    if (yMeE30.key === "Enter") $("#confirm-button").click();
  });
});
const fixedPrefix = "【坤】";
const scrollText = "最新资源已更新 · 每日免费兑换码 · 加q群不迷路 ";
let position = 0;
function scrollTitle() {
  const rotated = scrollText.substring(position) + scrollText.substring(0, position);
  window.document.title = fixedPrefix + rotated;
  position++;
  if (position > scrollText.length) {
    position = 0;
  }
  setTimeout(scrollTitle, 300);
}
scrollTitle();