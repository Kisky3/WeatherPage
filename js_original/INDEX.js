/* ========================================================================
 * NMAPS DASHBOARD: INDEX.js 1.0
 * AUTOR:Xiang Yu
 * ========================================================================
 */
var Beijing = "101010100";
var Shanghai = "101020100";
var Liuzhou = "101300301";
/*$(function readJson(){  
  $.get("API_Process.json",function(json){ 　
  })
  
  <!--success-->　
  .done(function(json){
     console.log("API定義ファイルの読み込みが成功する");
     <!--start to read value fron json file-->
    
    Beijing=json.beijing;
    console.info(Beijing);
    
    Shanghai=json.shanghai;
    console.info(Shanghai);
    
    Liuzhou=json.liuzhou;
    console.info(Liuzhou);*/
    
    Storage();
    Recv01();
    Recv02();
    ActiveClient();
    Recv01Table();
    Recv02Table();
    Send01Table();
    Send02Table();
/*})
    
  <!--error-->
  .fail(function(jaXHR,textStatus,errorThrown){
     alert("エラーが発生しました。");  
     window.location.href="ERROR.html"  
      });
    });
// JavaScript Document*/
<!--begin Storage graph-->
function Storage() {
  $.ajax({
    url: 'http://wthrcdn.etouch.cn/weather_mini?citykey=' + Shanghai,
    dataType: 'json',
    <!--error-->
  }).fail(function (jaXHR, textStatus, errorThrown) {
    document.getElementById("Storage_error").innerHTML = jaXHR.status + ":ストレージ使用領域表示の生成が失敗した。";
    <!--success-->
  }).done(function (results) {
    var storage = results.data.forecast[1].high.substr(3);
    document.getElementById("Storage").innerHTML = storage;
  })
}
<!--end storage graph-->

<!--get Recv01 value from api-->
function Recv01() {
  $.ajax({
      url: 'http://wthrcdn.etouch.cn/weather_mini?citykey=' + Beijing,
      dataType: 'json',
      <!--error-->
    }).fail(function (jaXHR, textStatus, errorThrown) {
      document.getElementById("Recv01_error").innerHTML = jaXHR.status + ":Recv01ディスク使用率グラフの生成が失敗した。";
    })
    <!--success-->
    .done(function (results) {
      var Recv01 = results.data.forecast[2].high.substring(3, 4);
      var Recv01Disk = new JustGage({
        id: 'Recv01Disk',
        value: Recv01,
        min: 0,
        max: 100,
        symbol: '%',
        pointer: true,
        gaugeWidthScale: 1.2,
        pointerOptions: {
          toplength: -15,
          bottomlength: 10,
          bottomwidth: 12,
          color: '#ffcc33',
          stroke_width: 5,
          stroke_linecap: 'round'
        },
        counter: true
      })
    });
}
<!--end Recv01 graph-->

<!--get Recv02 value from api-->
function Recv02() {
  $.ajax({
    url: 'http://wthrcdn.etouch.cn/weather_mini?citykey=' + Beijing,
    dataType: 'json',
    <!--error-->
  }).fail(function (jaXHR, textStatus, errorThrown) {
    document.getElementById("Recv02_error").innerHTML = jaXHR.status + ":Recv02ディスク使用率グラフの生成が失敗した。";
    <!--success-->
  }).done(function (results) {
    var Recv02 = results.data.forecast[1].high.substr(3);
    var Recv02Disk = new JustGage({
      id: 'Recv02Disk',
      value: Recv02,
      min: 0,
      max: 100,
      symbol: '%',
      pointer: true,
      gaugeWidthScale: 1.2,
      pointerOptions: {
        toplength: -15,
        bottomlength: 10,
        bottomwidth: 12,
        color: '#ffcc33',
        stroke_width: 5,
        stroke_linecap: 'round'
      },
      counter: true
    })
  });
}
<!--end Recv02 graph-->

<!--start ActiveClient table-->
function ActiveClient() {
  var BeijingDate;
  var BeijingFengxiang;
  var BeijingType;
  $.ajax({
      url: 'http://wthrcdn.etouch.cn/weather_mini?citykey=' + Beijing,
      dataType: 'json',
      <!--error-->  
    }).fail(function (jaXHR, textStatus, errorThrown) {
      document.getElementById("ActiveClient_error").innerHTML = jaXHR.status + ":アプリバージョン情報取得APIとの接続が失敗した。";
    })
    <!--success--> 
    .done(function (results) {
      BeijingDate = results.data.forecast[0].date;
      BeijingFengxiang = results.data.forecast[1].fengxiang;
      BeijingType = results.data.forecast[0].type;
    })
  <!--create ActiveClient_Table-->
  $.fn.dataTable.ext.errMode = 'none';
  var ActiveClient_Table = $('#activeClient').on('xhr.dt', function (e, settings, json, xhr) {
    if (xhr.status != 200) {
      alert(xhr.status);
      document.getElementById("ActiveClient_error").innerHTML = jaXHR.status + ":ActiveClientテーブルの生成が失敗した。";
    }
  }).dataTable({
    bPaginate: false,
    bLengthChange: false,
    bSort: false,
    bInfo: false,
    bJQueryUI: true,
    bFilter: false,
    sAjaxSource: 'http://wthrcdn.etouch.cn/weather_mini?citykey=' + Liuzhou,
    sAjaxDataProp: "data.forecast",
    //create ActiveClient table
    aoColumns: [{
      sTitle: "【風向】",
      　mData: "fengxiang",
      mRender: function (data, type, full) {
        if (data != BeijingFengxiang) {
          console.info(BeijingFengxiang);
          return "<p style='color:#FF0000'>" + data + "</p>";
        }
        return data;
      }
    }, {
      sTitle: "【風力】",
      　mData: "fengli"
    }, {
      sTitle: "【最高気温】",
      mData: "high"
    }, {
      sTitle: "【種類】",
      　mData: "type",
      mRender: function (data, type, full) {
        if (data === BeijingType) {
          console.info(BeijingType);
          return "<p style='color:#FF0000'>" + data + "</p>";
        }
        return data;
      }
    }, {
      sTitle: "【最低気温】",
      mData: "low"
    }, {
      sTitle: "【日付】",
      　mData: "date"
    }, ],
  });
};
//Judge ActiveClient_Table status 
<!--end ActiveClient table-->

<!-- Begin Recv01 Status table -->
function Recv01Table() {
  $('#Recv01').dataTable({
    bPaginate: false,
    bLengthChange: false,
    bSort: false,
    bInfo: false,
    bFilter: false,
    sAjaxSource: 'http://wthrcdn.etouch.cn/weather_mini?citykey=101010100',
    sAjaxDataProp: "data.forecast",
    //compare value and edit value
    fnServerData: function (sSource, aoData, fnCallback, oSettings) {
      oSettings.jqXHR = $.ajax({
          url: sSource,
          type: "GET",
          data: aoData,
          dataType: 'json',
        }).pipe(function (json) {
          json.data.forecast = $.map(json.data.forecast, function (item, index) {
            if (item.date == "11日星期日") {
              item.date = "<div class='running'>" + item.date + "</div>";
              return item;
            } else {
              item.date = "<div class='stop'>" + item.date + "</div>";
              return item;
            }
          });
          return json;
        })
        // 加工したデータをDataTablesのコールバック関数へ流します。
        .done(fnCallback);
    },
    //テーブルの生成
    aoColumns: [{
      sTitle: "【種類】",
      　mData: "type"
    }, {
      sTitle: "【日付】",
      　mData: "date"
    }, ],
  }); //テーブル処理終了
};
<!-- End Recv01 Status table -->

<!-- Begin Recv02 Status table -->
function Recv02Table() {
  $('#Recv02').dataTable({
    bPaginate: false,
    bLengthChange: false,
    bSort: false,
    bInfo: false,
    bFilter: false,
    sAjaxSource: 'http://wthrcdn.etouch.cn/weather_mini?citykey=101010100',
    sAjaxDataProp: "data.forecast",
    //比較とデータの加工
    fnServerData: function (sSource, aoData, fnCallback, oSettings) {
      oSettings.jqXHR = $.ajax({
          url: sSource,
          type: "GET",
          data: aoData,
          dataType: 'json',
        })
        // サーバから取得したデータを加工します。
        .pipe(function (json) {
          json.data.forecast = $.map(json.data.forecast, function (item, index) {
            if (item.date == "10日星期六") {
              item.date = "<div class='running'>" + item.date + "</div>";
              return item;
            } else {
              item.date = "<div class='stop'>" + item.date + "</div>";
              return item;
            }
          });
          return json;
        })
        // 加工したデータをDataTablesのコールバック関数へ流します。
        .done(fnCallback);
    },
    //テーブルの生成
    aoColumns: [{
      sTitle: "【種類】",
      　mData: "type"
    }, {
      sTitle: "【日付】",
      　mData: "date"
    }, ],
  }); //テーブル処理終了
};
<!-- End Recv02 Status table -->

<!-- Begin Send01 Status table -->
function Send01Table() {
  $('#Send01').dataTable({
    bPaginate: false,
    bLengthChange: false,
    bSort: false,
    bInfo: false,
    bFilter: false,
    sAjaxSource: 'http://wthrcdn.etouch.cn/weather_mini?citykey=101010100',
    sAjaxDataProp: "data.forecast",
    //比較とデータの加工
    fnServerData: function (sSource, aoData, fnCallback, oSettings) {
      oSettings.jqXHR = $.ajax({
          url: sSource,
          type: "GET",
          data: aoData,
          dataType: 'json',
        })
        // サーバから取得したデータを加工します。
        .pipe(function (json) {
          json.data.forecast = $.map(json.data.forecast, function (item, index) {
            if (item.date == "10日星期六") {
              item.date = "<div class='running'>" + item.date + "</div>";
              return item;
            } else {
              item.date = "<div class='stop'>" + item.date + "</div>";
              return item;
            }
          });
          return json;
        })
        // 加工したデータをDataTablesのコールバック関数へ流します。
        .done(fnCallback);
    },
    //テーブルの生成
    aoColumns: [{
      sTitle: "【種類】",
      　mData: "type"
    }, {
      sTitle: "【日付】",
      　mData: "date"
    }, ],
  }); //テーブル処理終了
};
<!-- End Send01 Status table -->

<!-- Begin Send01 Status table -->
function Send02Table() {
  $('#Send02').dataTable({
    bPaginate: false,
    bLengthChange: false,
    bSort: false,
    bInfo: false,
    bFilter: false,
    sAjaxSource: 'http://wthrcdn.etouch.cn/weather_mini?citykey=101010100',
    sAjaxDataProp: "data.forecast",
    //比較とデータの加工
    fnServerData: function (sSource, aoData, fnCallback, oSettings) {
      oSettings.jqXHR = $.ajax({
          url: sSource,
          type: "GET",
          data: aoData,
          dataType: 'json',
        })
        // サーバから取得したデータを加工します。
        .pipe(function (json) {
          json.data.forecast = $.map(json.data.forecast, function (item, index) {
            if (item.date == "5日星期一") {
              item.date = "<div class='running'>" + item.date + "</div>";
              return item;
            } else {
              item.date = "<div class='stop'>" + item.date + "</div>";
              return item;
            }
          });
          return json;
        })
        // 加工したデータをDataTablesのコールバック関数へ流します。
        .done(fnCallback);
    },
    //テーブルの生成
    aoColumns: [{
      sTitle: "【種類】",
      　mData: "type"
    }, {
      sTitle: "【日付】",
      　mData: "date"
    }, ],
  }); //テーブル処理終了
};
<!-- End Send02 Status table -->