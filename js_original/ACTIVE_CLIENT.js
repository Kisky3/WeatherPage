<!--start ActiveClient table-->
function ActiveClient() {
  var compare = []
  $.ajax({
    url: 'http://wthrcdn.etouch.cn/weather_mini?citykey=101300301',
    dataType: 'json',
  }).done(function (results) {
    for (var i in results.data.forecast) {
      compare.push(parseFloat(results.data.forecast[i].date));
      console.info("compare" + compare);
    };
  });
  $('#activeClient').dataTable({
    bPaginate: false,
    bLengthChange: false,
    bSort: false,
    bInfo: false,
    bJQueryUI: true,
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
            //return (item.date == "30日星期三") ? item : null;
            if (item.date != compare) {
              item.date = "<p style='color:#FF0000'>" + item.date + "</p>";
              console.info(item.date);
              return item;
            } else {
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
      sTitle: "【風向】",
      　mData: "fengxiang"
    }, {
      sTitle: "【風力】",
      　mData: "fengli"
    }, {
      sTitle: "【最高気温】",
      mData: "high"
    }, {
      sTitle: "【種類】",
      　mData: "type"
    }, {
      sTitle: "【最低気温】",
      mData: "low"
    }, {
      sTitle: "【日付】",
      　mData: "date"
    }, ],
  }); //テーブル処理終了
};
<!--end ActiveClient table-->// JavaScript Document

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
            if (item.date == "2日星期五") {
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
            if (item.date == "2日星期五") {
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
            if (item.date == "2日星期五") {
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
            if (item.date == "2日星期五") {
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