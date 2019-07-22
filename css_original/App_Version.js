$(function App_Version(){
 		
		$('#AppVersion').dataTable({
        bPaginate: false,
		bLengthChange: false,
		bSort: false,  
        bInfo:false,
		bFilter: false,  
		sAjaxSource : 'http://wthrcdn.etouch.cn/weather_mini?citykey=101010100', 
		sAjaxDataProp: "data.forecast",

		//テーブルの生成
		aoColumns : [
            { sTitle:"【風向】",　  mData: "fengxiang"},
            { sTitle:"【風力】",　  mData: "fengli"},
			{ sTitle:"【最高気温】",mData: "high"},
            { sTitle:"【種類】",　  mData: "type"},
			{ sTitle:"【最低気温】",mData: "low"},
            { sTitle:"【日付】",　  mData: "date"},
         ],   
	 });//テーブル処理終了
  });
// JavaScript Document