$('#Search').click(function () {
  if ($.fn.dataTable.isDataTable('#Client_Info_CTL')) {
    _table = $('#Client_Info_CTL').DataTable();
    _table.destroy();
  }
  $(document).ready(function () {
    var table = $('#Client_Info_CTL').DataTable();
    $('#Client_Info_CTL tbody').on('click', 'tr', function () {
      var aData = oTable.fnGetData(this);
      var fengxiang = aData.fengxiang;
      var fengli = aData.fengli;
      var high = aData.high;
      var type = aData.type;
      var low = aData.low;
      var date = aData.date;
      swal({
        title: "詳細",
        text: '<table border="1" class="table table-hover Rule_Info th td">' + '<tr>' + '<th>【风向】</th>' + '<td>' + fengxiang + '</td>' + '</tr>' + '<tr>' + 　'<th>【風力】</th>' + '<td>' + fengli + '</td>' + '</tr>' + '<tr>' + '<th>【最高気温】</th>' + '<td>' + high + '</td>' + '</tr>' + '<tr>' + '<th>【種類】</th>' + '<td>' + type + '</td>' + '</tr>' + '<tr>' + '<th>【最低気温】</th>' + '<td>' + low + '</td>' + '</tr>' + '<tr>' + '<th>【日付】</th>' + '<td>' + date + '</td>' + '</tr>' + '</tr>' + '<tr>' + '<th>【风向】</th>' + '<td>' + fengxiang + '</td>' + '</tr>' + '<tr>' + 　'<th>【風力】</th>' + '<td>' + fengli + '</td>' + '</tr>' + '<tr>' + '<th>【最高気温】</th>' + '<td>' + high + '</td>' + '</tr>' + '<tr>' + '<th>【種類】</th>' + '<td>' + type + '</td>' + '</tr>' + '<tr>' + '<th>【最低気温】</th>' + '<td>' + low + '</td>' + '</tr>' + '<tr>' + '<th>【日付】</th>' + '<td>' + date + '</td>' + '</tr>' + '</tr>' + '</table>',
        html: true,
        showConfirmButton: true,
        confirmButtonColor: "#0C6",
        confirmButtonText: "閉じる",
      });
    });
  });
  oTable = $('#Client_Info_CTL').dataTable({
    bPaginate: false,
    bSort: false,
    paging: false,
    bInfo: false,
    oLanguage: {
      sSearch: "&nbsp;&nbsp<span class='glyphicon glyphicon-search searchbar'></span>&nbsp;&nbsp;",
      sZeroRecords: "<span style='color:#F33'>【データが見つかりませんでした。】</span>",
      sInfoEmpty: "<span style='color:#F33'>【データがありません。】</span>",
      sProcessing: "ダウロード中．．．"
    },
    sAjaxSource: 'http://wthrcdn.etouch.cn/weather_mini',
    sAjaxDataProp: "data.forecast",
    　　
    fnServerParams: function (aoData) {
      aoData.push({
        "name": "citykey",
        "value": $("#Ruleid").val(),
      })
      //aoData.push( { "name": "tag", "value": $("#Clientid").val(),});
      //aoData.push( { "name": "count", "value": $("#Type").val(),});
    },
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
      　mData: "date",
      bVisible: false
    }, {
      sTitle: "【DETAIL】",
      　mData: null
    }, ],
    columnDefs: [{
      targets: -1,
      data: null,
      defaultContent: "<button class='btn btn-success'>詳細</button>"
    }],
  });
});

$(function () {
  $('[data-toggle=tooltip]').tooltip();
});
