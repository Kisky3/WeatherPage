<!-- Begin Recv01 Status table -->
$(function start() {
  Recv01_Table();
  Recv02_Table();
  Send01_Table();
  Send02_Table();
})

function Recv01_Table() {
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
            if (item.date == "7日星期三") {
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
    }, {
      sTitle: "【状態】",
      mData: null,
      bSortable: false,
      mRender: function (data, type, full) {
        if (data.type === "多云") {
          return "<button class='btn btn-default btn-xs' onclick=detail(" + full.fengxiang + ")><i class='glyphicon glyphicon-adjust' style='color:#333'></i>RUNNING</button>"
        } else {
          return "<button class='btn btn-default btn-xs' onclick=detail(" + full.fengxiang + ")><i class='glyphicon glyphicon-adjust' style='color:#333'></i>STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>"
        }
      }
    }],
  }); //テーブル処理終了
};
<!-- End Recv01 Status table -->

<!-- Begin Recv02 Status table -->
function Recv02_Table() {
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
            if (item.date == "8日星期四") {
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
    }, {
      sTitle: "【状態】",
      mData: null,
      bSortable: false,
      mRender: function (data, type, full) {
        if (data.type === "多云") {
          return "<button class='btn btn-default btn-xs' onclick=detail(" + full.fengxiang + ")><i class='glyphicon glyphicon-adjust' style='color:#333'></i>RUNNING</button>"
        } else {
          return "<button class='btn btn-default btn-xs' onclick=detail(" + full.fengxiang + ")><i class='glyphicon glyphicon-adjust' style='color:#333'></i>STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>"
        }
      }
    }],
  }); //テーブル処理終了
};
<!-- End Recv02 Status table -->

<!-- Begin Send01 Status table -->
function Send01_Table() {
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
            if (item.date == "9日星期五") {
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
    }, {
      sTitle: "【状態】",
      mData: null,
      bSortable: false,
      mRender: function (data, type, full) {
        if (data.type === "多云") {
          return "<button class='btn btn-default btn-xs' onclick=detail(" + full.fengxiang + ")><i class='glyphicon glyphicon-adjust' style='color:#333'></i>RUNNING</button>"
        } else {
          return "<button class='btn btn-default btn-xs' onclick=detail(" + full.fengxiang + ")><i class='glyphicon glyphicon-adjust' style='color:#333'></i>STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>"
        }
      }
    }],
  }); //テーブル処理終了
};
<!-- End Send01 Status table -->

<!-- Begin Send01 Status table -->
function Send02_Table() {
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
    }, {
      sTitle: "【状態】",
      mData: null,
      bSortable: false,
      mRender: function (data, type, full) {
        if (data.type === "多云") {
          return "<button class='btn btn-default btn-xs' onclick=detail(" + full.fengxiang + ")><i class='glyphicon glyphicon-adjust' style='color:#333'></i>RUNNING</button>"
        } else {
          return "<button class='btn btn-default btn-xs' onclick=detail(" + full.fengxiang + ")><i class='glyphicon glyphicon-adjust' style='color:#333'></i>STOP&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</button>"
        }
      }
    }],
  }); //テーブル処理終了
};
<!-- End Send02 Status table -->