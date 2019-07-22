$('#Search').click(function () {
  if ($.fn.dataTable.isDataTable('#Rule_Info')) {
    _table = $('#Rule_Info').DataTable();
    _table.destroy();
  }
  var table = $('#Rule_Info').dataTable({
    bPaginate: false,
    bSort: false,
    paging: false,
    bInfo: false,
    oLanguage: {
      sSearch: "&nbsp;&nbsp<span class='glyphicon glyphicon-search searchbar'></span>&nbsp;&nbsp;",
      sZeroRecords: "",
      sInfoEmpty: "",
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
    }, ],
  });
});