// ==UserScript==
// @name         ShiftCodes
// @namespace    https://victor-lange.de/
// @version      1.3
// @description  Enters SHiFT-Codes
// @author       Victor Lange
// @website      https://victor-lange.de
// @updateURL    https://raw.githubusercontent.com/supermopf/SHiFT-Codes/master/SHiFT-Codes.user.js
// @downloadURL  https://raw.githubusercontent.com/supermopf/SHiFT-Codes/master/SHiFT-Codes.user.js
// @match        https://shift.gearboxsoftware.com/rewards
// @grant        GM_getValue
// @grant        GM_setValue
// @grant        GM_deleteValue
// @require      http://code.jquery.com/jquery-3.3.1.min.js
// ==/UserScript==
var $ = window.jQuery;
var ShiftCodes = [];

$("div.main.sh_code_redemption_section > div.shift-secondary-title").before(
  '<div class="btn-group"><button type="button" id="BO1Click" class="btn btn-default">Borderlands 1</button><button type="button" id="BO2Click" class="btn btn-default">Borderlands 2</button><button type="button" id="PSClick" class="btn btn-default">Pre-Sequel</button><button type="button" id="ResetClick" class="btn btn-danger">Reset</button></div>'
);

$("#BO2Click").click(function() {
  GM_setValue("ShiftIndex", 0);
  GM_setValue("ShiftMode", "BO2");
  location.reload();
});

$("#PSClick").click(function() {
  GM_setValue("ShiftIndex", 0);
  GM_setValue("ShiftMode", "PS");
  location.reload();
});

$("#BO1Click").click(function() {
  GM_setValue("ShiftIndex", 0);
  GM_setValue("ShiftMode", "BO1");
  location.reload();
});

$("#ResetClick").click(function() {
  GM_deleteValue("ShiftIndex");
  GM_deleteValue("ShiftMode");
  location.reload();
});

if (GM_getValue("ShiftMode") == "PS") {
  ShiftCodes = [
    "5KWB3-S9X5F-3W3BJ-TJBBB-BXKTK",
    "555B3-ZHF9K-JXC33-JBJBT-BF6FS",
    "55WT3-ZFKSW-BFK33-T3TJJ-63XB3",
    "5C5JJ-WBTT6-36KB3-JBB3J-T6CF3",
    "5C5JJ-WJRZ5-T6W33-TJJBT-JRJ9Z",
    "5CKBJ-BTFSC-TRCJB-3TBJB-X6J6Z",
    "5CKTB-CCXZK-JXCJB-TJ3JT-H6KJX",
    "5K53J-J9FJ3-BT3JB-3BTT3-9JF5J",
    "5K5BB-9JZSK-TRC3B-3JBTJ-JX556",
    "5W53J-TRR9K-JXWBJ-3JJJ3-SFWHK",
    "5WCT3-55ZZ5-JRCJ3-T3JBT-BHHRJ",
    "C55BT-S95HK-HTT3J-B3J3J-5H5CR",
    "C5CJ3-JT33X-3FKTB-TJJBT-JWFKX",
    "CC53J-RKRZC-BR5T3-TJBBT-HBW9S",
    "CKCJB-FB9ZK-TF5TJ-J333J-WRWS3",
    "CWCBJ-X6Z9W-36CBT-TT3B3-3RRXZ",
    "K553B-ZW9ZC-J65TT-3TBJJ-9F66H",
    "K5WTB-SS9ZK-BXKTT-BJ3JT-5BJCJ",
    "KCCJ3-XHCZ5-J6WBB-TB3J3-6C3WT",
    "KCCTJ-H5FST-BTBBT-3B33B-BTH5Z",
    "KCKJT-36SZW-JRCT3-J33TT-TFSBH",
    "KK5B3-35SHK-3F53B-JBTBT-RCR3C",
    "KK5BT-TKXZ5-JFCJT-TBBJJ-69RCX",
    "KKC3T-B3ZSW-TRKJ3-3TB3T-XRBCB",
    "KKW3B-C6Z9K-BRKBB-BTJ3T-FKRJX",
    "KKWBB-5SK9W-TRCB3-B3JT3-BWBR9",
    "KKWBJ-6B5FJ-3JJBT-JBBJB-WWH6X",
    "KW5TJ-X5SSW-B6CJ3-33TJB-RCRRX",
    "W5KBB-9S5ZC-J6CBT-J3BBJ-BF9FB",
    "W5KBJ-H9FX3-TBTJ3-T3J3T-RRCTS",
    "W5WJ3-Z5XH5-TFK3T-BTJJB-CRBHC",
    "WC5JJ-HTXSC-TFWJJ-BJBJJ-HXWXB",
    "WCCJB-JZKSC-BRC33-JJJ3T-WWSW3",
    "WCKTB-6999K-J6C3T-TJT33-CZCK5",
    "WCW3J-KSSZC-BR5JB-JJTTB-XF9FZ",
    "WK533-CZ6JB-T3BB3-3TB33-W9XXR",
    "WKCTT-J99HC-BXKTJ-JJTB3-JK39J",
    "WW53B-HXSSK-36WTB-TJ3JT-WFBT6",
    "WWWTB-F36H5-J6KJ3-3BJ3T-WW9RS",
    "KKWBB-5KS3T-TJBB3-B3JT3-BWBXB",
    "CKKT3-K3SHK-3RK3B-3JB33-ZHRZJ"
  ];
}
if (GM_getValue("ShiftMode") == "BO2") {
  ShiftCodes = [
    "KJ5BT-FBKSK-KXJ3T-3BTJT-FJX5C",
    "WTC3B-Z5ZWC-HW6JT-JJJBJ-9FWXR",
    "KBWJJ-WTXB9-C59J6-WFBTJ-TK6BJ",
    "K3WJT-BFBRW-S5RTT-TBBB3-9XWZ5",
    "5JKBJ-K9WHW-WBZTJ-T3TTB-TW9HR",
    "WJWJ3-FXC33-KT3CR-KR33J-J9B35",
    "WTCJT-J653B-C3TKF-5X333-F6JRH",
    "WJKBB-KXC3J-5BBCR-5X33J-XZ6RZ",
    "KJKJT-WHBKX-HC9BT-TJBJ3-XJFSJ",
    "CBKBJ-6ZJW6-HKH3T-B3T33-F5ZRS",
    "CT5BB-XTW5X-9CSBT-3BTTJ-FT5X5",
    "KTC3T-WTW5F-ZCHB3-BT3B3-XJ9WR",
    "CBKBB-ZHJC6-SWHJT-JJ3BB-3CXHS",
    "WBCJJ-33KWR-S5Z33-BJTTB-65WJJ",
    "CTC3J-KR9H5-WTZ3T-TJ3TB-6SRRJ",
    "KTK3J-FR3JS-ZX55B-B3BJ3-HSRB6",
    "535BB-3R3BZ-HF5K3-JJB33-3BF3J",
    "CTKJ3-9CBJS-9R5WT-JBJ3T-WKXKF",
    "CBCJ3-W5TT9-S65K3-BJJ3B-XHWWC",
    "CBKJ3-5FT39-ZRCCT-JTJB3-RFJ5B",
    "5J5TT-RCJBS-ZXWCJ-TJ3BJ-TK3FB",
    "CJKBJ-3XWTF-HCJ6K-JJB3T-SB35X",
    "CTWTB-RXKTR-SKJXW-3TBTJ-KXKKH",
    "KBWT3-WF5TR-SC3XW-T333B-TSCTS",
    "W3C33-H653X-9CTR5-3TBJ3-HZ99S",
    "53WT3-59KJX-95B65-3J333-S9JW9",
    "CTKTJ-JSWJF-SCJXK-3TJJ3-RWTKX",
    "5BW3B-F96CT-KXJFK-TB3B3-39BWZ",
    "5JWTT-KHTSB-S5TXC-BB33J-HCJ6K",
    "K353B-TWSBX-H5BR5-J3T33-6XTCK",
    "WBK3T-BKW6T-TXTRK-JTTBT-C6BS5",
    "5BWBT-RX5ZH-FJBJB-JBTJT-CRBWX",
    "CJWJJ-HR5Z9-6JT3J-J3TBT-6TJ6K",
    "WTCTJ-J9CS9-RJJ33-T3J3B-BT9XH",
    "CBCJB-K9WHH-63JTJ-B3JJB-HT533",
    "C35JB-R9WSH-XBBJT-JJ33B-F3WFB",
    "K3WBT-Z95HZ-FTT3J-BTTJB-ZFX63",
    "K3CB3-3JF99-RJ3JB-JJ3JJ-BT3RX",
    "W3KJJ-KJXHZ-6JJBJ-3TT3T-33XBR",
    "C3CTJ-XJ6HZ-FJTTJ-JBBBJ-3WTJZ",
    "WTKJ3-9JXZ9-6TJJB-33T3J-FRJC6",
    "KB5BJ-WCRZ9-6J33J-BBJ3T-XK96K",
    "K3WTT-TKRH9-X3BJT-BJTBT-KXTSB",
    "535JJ-XKRHS-XJ3TT-3JJT3-FTSR6",
    "KBKJB-S5FSZ-FTTTT-TJJJB-XC95X",
    "535T3-JR6ZH-6B3J3-3TJT3-T9JBK",
    "WB5JJ-KX6HS-XBJBT-TBJJB-XW3S3",
    "KJ53B-RRRSZ-F3TJJ-TJTT3-WBHT6",
    "W353B-9FXZZ-RBJ3J-BT3B3-JK9KH",
    "WTWJ3-TSXZS-FTJB3-3TTJJ-WBCT3",
    "CJW3J-KHXZH-63TTJ-T3J33-R5HXK",
    "CBWJ3-6HRZS-6TJJ3-3BJBT-WH3TZ",
    "KT5T3-HS6HZ-FBJT3-3TJT3-ZC5KH",
    "WBCJB-B3HHZ-RJJJJ-JJT3B-69XHK",
    "W3CB3-RXRXB-TFBR5-BBT3T-F3KXS",
    "K3CTT-SF6XT-B6JXK-TBJBT-9KZZJ",
    "K35TJ-6399H-XTBBT-33TJB-ZZ3BX",
    "W3KJB-H9CBW-XRBRW-JTBTJ-9JRXK",
    "C35TB-WS6ST-TXBRK-TTTJT-JJH6H",
    "53KBB-KXXRC-RZ66Z-WFJBB-WSRZ3",
    "5B3BJ-XZWFW-T3KRZ-JBJTB-6WST9",
    "ZFKJ3-TT3BB-JTBJT-T3JJT-JWX9H",
    "CTWTB-JTBW5-KFTTT-JTB33-JTBWB",
    "W3C3B-5JRZC-WJH33-JBJJB-9S6CJ",
    "CBWJ3-S5CJ3-WTTCF-WX333-9STBF",
    "W353J-RR6RC-X96R9-C63J3-RJTFW",
    "CBCB3-SW36X-KJXW3-TTT3J-SFBSB",
    "C3WBB-W3BRR-5J6WB-3JJJJ-35ZKZ",
    "KTK3J-JWT6X-KB65T-3JJ3J-WHBRT",
    "CJ5B3-6TTFF-5365T-TBJBB-SKTCB",
    "CJ5T3-K5TF6-5TRC3-TBTJB-HZ5ZF",
    "5B5TB-XFBX6-WBXWJ-JJ3TJ-9RXZW",
    "W3CTJ-BFTFR-KJRK3-JJT3J-H6H36",
    "53K3T-JZJX6-WBXKB-BBJJB-SJH3K",
    "C35BJ-SRBF6-5TFKB-BBTJT-FSBZK",
    "5BC33-CRJRF-WB6WB-3TTTB-655ZX",
    "WJW3B-5HBR6-5BXCT-33TJ3-WXT53",
    "CT5JB-FSTFX-5TF5T-3JJTT-6CF6T",
    "535TJ-3JC6X-KJXCJ-BTBBT-K5WFR",
    "KTCJ3-WCXHJ-FRTRW-TJBBB-JW6XW",
    "5BWTB-R5FZT-FRJRW-B3T3T-W9ZH5"
  ];
}
if (GM_getValue("ShiftMode") == "BO1") {
  ShiftCodes = [
    "SFCJT-RF6XX-CJ6KB-JJJJ3-6JB33",
    "965BT-56RF6-CJ65B-B3BJJ-CXW39",
    "HFCJT-B6RRR-5BXKT-3BB3J-JCRH5",
    "9XK3B-9W6R6-W3XCB-TJJ33-XFSJS",
    "ZFCB3-6C66R-WJX5B-JBBBT-HRWBS",
    "SRCBJ-5KXFF-5T6K3-33BBB-WBF6H",
    "WJCBB-5RRJK-9B3RJ-6XT3T-CBZBF"
  ];
}

var MsgShiftGame = [
  "Um weitere SHiFT-Codes einzulösen, starte bitte zuerst ein SHiFT-verbundenes Spiel.",
  "To continue to redeem SHiFT codes, please launch a SHiFT-enabled title first!"
];
var ContinueRedeemFlag = true;

if (GM_getValue("ShiftMode") === undefined) {
  //Nothing happend
} else {
  $("div.shift-secondary-title > h1").html(
    "SHiFT-Code " + (GM_getValue("ShiftIndex") + 1) + " of " + ShiftCodes.length
  );

  if ($(".alert.notice").val() != undefined) {
    //Alert exists
    if (
      MsgShiftGame.includes(
        $(".alert.notice")
          .html()
          .trim()
      )
    ) {
      //Start SHiFT Game
      GM_setValue("ShiftIndex", Number(GM_getValue("ShiftIndex")) - 1);
      ContinueRedeemFlag = false;
      alert("Please start or restart your game! Reload the page to continue!");
    }
  }

  if (
    GM_getValue("ShiftIndex") <= ShiftCodes.length - 1 &&
    ContinueRedeemFlag
  ) {
    $("#shift_code_input").val(ShiftCodes[GM_getValue("ShiftIndex")]);
    $("#shift_code_check").click();
    setTimeout(function() {
      if ($(".redeem_button").length) {
        $(".redeem_button").click();
      } else {
        alert(
          "We are too quick... Please wait a minute and redeem this code manually."
        );
      }
    }, 500);
    GM_setValue("ShiftIndex", Number(GM_getValue("ShiftIndex")) + 1);
  } else {
    if (GM_getValue("ShiftIndex") > ShiftCodes.length - 1) {
      $("div.shift-secondary-title > h1").html(
        ShiftCodes.length + " SHiFT-Codes redeemed"
      );
      GM_deleteValue("ShiftIndex");
      GM_deleteValue("ShiftMode");
    }
  }
}
