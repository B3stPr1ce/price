function MM_jumpMenu(targ,selObj,restore){ //v3.0
	if(selObj.options[selObj.selectedIndex].value!="0"){	  eval(targ+".location='"+selObj.options[selObj.selectedIndex].value+"'");
	}
  if (restore) selObj.selectedIndex=0;
}
function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}
function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}
function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}
function MM_validateForm() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm.arguments,nm_txt,nm_arr,nm_err;
 for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]); val_field=MM_findObj(args[i]);
    if (val) { nm=args[i+1]; if ((val=val.value)!="") {
		if(val_field.type.toUpperCase() == 'FILE'){
			if(nm!=''){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
				nm_err=checkFileUpload(val_field,nm_arr[0],nm_txt);
					if(nm_err!=''){
						errors+='- '+nm_err;
					}
			}
		}
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+'欄位必須是電子郵件位址。\n';
      } else if (test!='R' && val_field.type.toUpperCase() != 'FILE') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+'欄位必須是數字。\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+'欄位必須是介於 '+min+' 和 '+max+' 之間的數字。\n';
    } } } else if (test.charAt(0) == 'R') {
		if(val_field.type.toUpperCase() != 'FILE'){
			errors += '- '+nm+'欄位必須填寫。\n';
		}else if(val_field.type.toUpperCase() == 'FILE' ){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
			errors += '- '+nm_txt+'必須要上傳檔案。\n';
		};
	}
}
} 
  if (errors) alert('錯誤訊息：\n'+errors);
  document.MM_returnValue = (errors == '');
}
function MM_validateForm_ajax_disabled() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm_ajax_disabled.arguments,nm_txt,nm_arr,nm_err;
 for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]); val_field=MM_findObj(args[i]);
    if (val) { nm=args[i+1]; if ((val=val.value)!="") {
		if(val_field.type.toUpperCase() == 'FILE'){
			if(nm!=''){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
				nm_err=checkFileUpload(val_field,nm_arr[0],nm_txt);
					if(nm_err!=''){
						errors+='- '+nm_err;
					}
			}
		}
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+'欄位必須是電子郵件位址。\n';
      } else if (test!='R' && val_field.type.toUpperCase() != 'FILE') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+'欄位必須是數字。\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+'欄位必須是介於 '+min+' 和 '+max+' 之間的數字。\n';
    } } } else if (test.charAt(0) == 'R') {
		if(val_field.type.toUpperCase() != 'FILE'){
			errors += '- '+nm+'欄位必須填寫。\n';
		}else if(val_field.type.toUpperCase() == 'FILE' ){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
			errors += '- '+nm_txt+'必須要上傳檔案。\n';
		};
	}
}
} 
  if(errors==""){	  for(i=0;i<document.forms[0].length;i++){
		if(document.forms[0].elements[i].type=='button'){
			document.forms[0].elements[i].disabled=true;
		}
		if(document.forms[0].elements[i].type=='reset'){
			document.forms[0].elements[i].disabled=true;
		}
	}	
  }
  if (errors) alert('錯誤訊息：\n'+errors);
  return (errors == '');
}
function MM_validateForm_disabled() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm_disabled.arguments,nm_txt,nm_arr,nm_err;
 for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]); val_field=MM_findObj(args[i]);
    if (val) { nm=args[i+1]; if ((val=val.value)!="") {
		if(val_field.type.toUpperCase() == 'FILE'){
			if(nm!=''){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
				nm_err=checkFileUpload(val_field,nm_arr[0],nm_txt);
					if(nm_err!=''){
						errors+='- '+nm_err;
					}
			}
		}
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+'欄位必須是電子郵件位址。\n';
      } else if (test!='R' && val_field.type.toUpperCase() != 'FILE') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+'欄位必須是數字。\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+'欄位必須是介於 '+min+' 和 '+max+' 之間的數字。\n';
    } } } else if (test.charAt(0) == 'R') {
		if(val_field.type.toUpperCase() != 'FILE'){
			errors += '- '+nm+'欄位必須填寫。\n';
		}else if(val_field.type.toUpperCase() == 'FILE' ){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
			errors += '- '+nm_txt+'必須要上傳檔案。\n';
		};
	}
}
} 
  if(errors==""){	  for(i=0;i<document.forms[0].length;i++){
		if(document.forms[0].elements[i].type=='submit'){
			document.forms[0].elements[i].disabled=true;
		}
		if(document.forms[0].elements[i].type=='reset'){
			document.forms[0].elements[i].disabled=true;
		}
	}	
  }
  if (errors) alert('錯誤訊息：\n'+errors);
  document.MM_returnValue = (errors == '');
}
function MM_validateForm_layer() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm_layer.arguments,nm_txt,nm_arr,nm_err;
 for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]); val_field=MM_findObj(args[i]);
    if (val) { nm=args[i+1]; if ((val=val.value)!="") {
		if(val_field.type.toUpperCase() == 'FILE'){
			if(nm!=''){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
				nm_err=checkFileUpload(val_field,nm_arr[0],nm_txt);
					if(nm_err!=''){
						errors+='- '+nm_err;
					}
			}
		}
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+'欄位必須是電子郵件位址。\n';
      } else if (test!='R' && val_field.type.toUpperCase() != 'FILE') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+'欄位必須是數字。\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+'欄位必須是介於 '+min+' 和 '+max+' 之間的數字。\n';
    } } } else if (test.charAt(0) == 'R') {
		if(val_field.type.toUpperCase() != 'FILE'){
			errors += '- '+nm+'欄位必須填寫。\n';
		}else if(val_field.type.toUpperCase() == 'FILE' ){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
			errors += '- '+nm_txt+'必須要上傳檔案。\n';
		};
	}
}
} 
//開啟圖層
  	 	if(errors == ''){
			window.scrollTo(0,0);	
			//MM_showHideLayers('formchk','','hidden');
			$('#waiting').show();
			for(i=0;i<document.forms[0].length;i++){
				if(document.forms[0].elements[i].type=='submit'){
					document.forms[0].elements[i].disabled=true;
				}
				if(document.forms[0].elements[i].type=='reset'){
					document.forms[0].elements[i].disabled=true;
				}
			}
 		}    
  if (errors) alert('錯誤訊息：\n'+errors);
  document.MM_returnValue = (errors == '');
}
function winopen(gourl,winname,s_close,r_close,wx,wy){ //網址、子網頁的名稱、scroolbar是否開啟、是否可以resizeable、開啟子視窗寬度、開啟子視窗高度
	var wx;wy,s_close,r_close,wx,wy,gourl,winname;
 	x=(screen.width-wx)/2;
	y=(screen.height-wy)/2;
	subWin=window.open(gourl,winname,'left=' + x + ',top=' + y + ',scrollbars=' + s_close + ',resizable=' + r_close + ',width=' +wx + ',height=' + wy);
}
function winopen1(wx,wy,linkpage){
	var wx,wy,x,y,linkpage;
	x=(screen.width-wx)/2;
	y=(screen.height-wy)/2;
	subWin=window.open(linkpage,'msg','left=' + x + ',top=' + y + ',scrollbars=no,resizable=no,width=' +wx + ',height=' + wy);
}
function del_data_post(){
	var act;
	act=confirm("確定這些資料要刪除?");
	if(act){
		document.delchk=true;
	}else{
		document.delchk=false;
	}
}
function mod_data_post(){
	var act;
		act=confirm("確定這些資料要做處理?");
		if(act){
			document.modchk=true;
		}else{
			document.modchk=false;
		}
}
function del_data_get_iframe(ifarme_name,data_txt){
	var data_txt,ifarme_name,action_data;
		act=confirm("你確定要刪除這筆資料？");
		if(act){
			 eval(ifarme_name+".location.href='"+data_txt+"'");
		}
}
function del_data_get(){
	var data_txt;
		act=confirm("你確定要刪除這筆資料？");
		if(act){
			location.replace(data_txt);
		}
}
function getFileExtension(filePath) { //v1.0
  fileName = ((filePath.indexOf('/') > -1) ? filePath.substring(filePath.lastIndexOf('/')+1,filePath.length) : filePath.substring(filePath.lastIndexOf('\\')+1,filePath.length));
  return fileName.substring(fileName.lastIndexOf('.')+1,fileName.length);
}
function checkFileUpload(field,extensions,txt) { //v1.0
  if (extensions && extensions != '') {
      if (extensions.toUpperCase().indexOf(getFileExtension(field.value).toUpperCase()) == -1) {
        return txt+'欄位的檔案類型不正確.\n能上傳的檔案類型: ' + extensions + '.\n';
  	} else{
		return'';
	}
  }else{
  	return'';
  }
}
function MM_showHideLayers() { //v6.0
  var i,p,v,obj,args=MM_showHideLayers.arguments;
  for (i=0; i<(args.length-2); i+=3) if ((obj=MM_findObj(args[i]))!=null) { v=args[i+2];
    if (obj.style) { obj=obj.style; v=(v=='show')?'visible':(v=='hide')?'hidden':v; }
    obj.visibility=v; }
}
function windowcenter(w,h){
	var w,h,x,y;
	x=(screen.width-w)/2;
	y=(screen.height-h)/2;
	//resizeTo(w,h);
	moveTo(x,y);
}
//檢查欄位是否為英文字
function checktexteng(fieldname,msg){
	txt=fieldname.value;
	if(txt!=''){
		if(txt.match(/[^a-z|^A-Z]/g))
		{
			fieldname.focus();
			alert(msg);
			//fieldname.value='';
			//fieldname.focus();
		}
	}
}
//檢測計算欄位字元數
function checkfieldwordnum(fieldname,msg,num){
	if(fieldname.value.length < num){
		alert(msg);
		//fieldname.focus();
	}
}
function show_day(getdate,pushday){
	 var WeekDay = new Array("星期日","星期一","星期二","星期三","星期四","星期五","星期六");
	 if(getdate.value!=''){
	 	pushday.value=WeekDay[parseInt(new Date(getdate.value).getDay())];	
	 }
}
function btn_mod_data_post(formname){
	var act;
	act=confirm("確定要執行?");
	if(act){
		document.forms[formname].submit();
		return true;
	}else{
		$.unblockUI();
		return false;
	}
}
function add_all(){
	for(i=0;i<document.mod_data_list.length;i++){
		if(document.mod_data_list.elements[i].type=='checkbox'){
			document.mod_data_list.elements[i].checked=true;
		}
	}
}
function cal_all(){
	for(i=0;i<document.mod_data_list.length;i++){
		if(document.mod_data_list.elements[i].type=='checkbox'){
			document.mod_data_list.elements[i].checked=false;
		}
	}
}
function add_check(id){
var z=0;
	for(i=0;i<document.mod_data_list.length;i++){
		if(document.mod_data_list.elements[i].type=='checkbox'){
			if(z==id){
				document.mod_data_list.elements[i].checked=true;
				break;
			}
			z++;
		}
	}
}
function add_check_td(id){
var z=0;
	for(i=0;i<document.mod_data_list.length;i++){
		if(document.mod_data_list.elements[i].type=='checkbox'){
			if(z==id){
				if(document.mod_data_list.elements[i].checked==false){
					document.mod_data_list.elements[i].checked=true;
				}else{
					document.mod_data_list.elements[i].checked=false;
				}
				break;
			}
			z++;
		}
	}
}
//英文訊息
function MM_validateForm_eng() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm_eng.arguments,nm_txt,nm_arr,nm_err;
 for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]); val_field=MM_findObj(args[i]);
    if (val) { nm=args[i+1]; if ((val=val.value)!="") {
		if(val_field.type.toUpperCase() == 'FILE'){
			if(nm!=''){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
				nm_err=checkFileUpload(val_field,nm_arr[0],nm_txt);
					if(nm_err!=''){
						errors+='- '+nm_err;
					}
			}
		}
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
      } else if (test!='R' && val_field.type.toUpperCase() != 'FILE') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
    } } } else if (test.charAt(0) == 'R') {
		if(val_field.type.toUpperCase() != 'FILE'){
			errors += '- '+nm+' is required.\n';
		}else if(val_field.type.toUpperCase() == 'FILE' ){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
			errors += '- '+nm_txt+' must upload.\n';
		};
	}
}
  } 
  if (errors) alert('The following error(s) occurred:\n'+errors);
  document.MM_returnValue = (errors == '');
}
function MM_validateForm_disabled_eng() { //v4.0
  var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm_disabled_eng.arguments,nm_txt,nm_arr,nm_err;
 for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]); val_field=MM_findObj(args[i]);
    if (val) { nm=args[i+1]; if ((val=val.value)!="") {
		if(val_field.type.toUpperCase() == 'FILE'){
			if(nm!=''){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
				nm_err=checkFileUpload(val_field,nm_arr[0],nm_txt);
					if(nm_err!=''){
						errors+='- '+nm_err;
					}
			}
		}
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
      } else if (test!='R' && val_field.type.toUpperCase() != 'FILE') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
    } } } else if (test.charAt(0) == 'R') {
		if(val_field.type.toUpperCase() != 'FILE'){
			errors += '- '+nm+' is required.\n';
		}else if(val_field.type.toUpperCase() == 'FILE' ){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
			errors += '- '+nm_txt+' must upload.\n';
		};
	}
}
  } 
  if(errors==""){	  for(i=0;i<document.forms[0].length;i++){
		if(document.forms[0].elements[i].type=='submit'){
			document.forms[0].elements[i].disabled='true';
		}
		if(document.forms[0].elements[i].type=='reset'){
			document.forms[0].elements[i].disabled='true';
		}
	}	
  }
  if (errors) alert('The following error(s) occurred:\n'+errors);
  document.MM_returnValue = (errors == '');
}
function MM_validateForm_layer_eng() { //v4.0
var i,p,q,nm,test,num,min,max,errors='',args=MM_validateForm_layer_eng.arguments,nm_txt,nm_arr,nm_err;
 for (i=0; i<(args.length-2); i+=3) { test=args[i+2]; val=MM_findObj(args[i]); val_field=MM_findObj(args[i]);
    if (val) { nm=args[i+1]; if ((val=val.value)!="") {
		if(val_field.type.toUpperCase() == 'FILE'){
			if(nm!=''){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
				nm_err=checkFileUpload(val_field,nm_arr[0],nm_txt);
					if(nm_err!=''){
						errors+='- '+nm_err;
					}
			}
		}
      if (test.indexOf('isEmail')!=-1) { p=val.indexOf('@');
        if (p<1 || p==(val.length-1)) errors+='- '+nm+' must contain an e-mail address.\n';
      } else if (test!='R' && val_field.type.toUpperCase() != 'FILE') { num = parseFloat(val);
        if (isNaN(val)) errors+='- '+nm+' must contain a number.\n';
        if (test.indexOf('inRange') != -1) { p=test.indexOf(':');
          min=test.substring(8,p); max=test.substring(p+1);
          if (num<min || max<num) errors+='- '+nm+' must contain a number between '+min+' and '+max+'.\n';
    } } } else if (test.charAt(0) == 'R') {
		if(val_field.type.toUpperCase() != 'FILE'){
			errors += '- '+nm+' is required.\n';
		}else if(val_field.type.toUpperCase() == 'FILE' ){
				nm_arr=nm.split("/");
				nm_txt=nm_arr[1];
			errors += '- '+nm_txt+' must upload.\n';
		};
	}
}
  } if (errors) alert('The following error(s) occurred:\n'+errors);
    //開啟圖層
  	 	if(errors == ''){
			MM_showHideLayers('formchk','','hidden');
			MM_showHideLayers('waiting','','show');
 		}  
    document.MM_returnValue = (errors == '');
}
//檢查email格式
function isEmail(email){
	if (email=="") return true;
	reEmail=/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
	return reEmail.test(email);
}
//將數字做格式化
function addCommas(nStr)
{
	nStr += '';
	x = nStr.split('.');
	x1 = x[0];
	x2 = x.length > 1 ? '.' + x[1] : '';
	var rgx = /(\d+)(\d{3})/;
	while (rgx.test(x1)) {
		x1 = x1.replace(rgx, '$1' + ',' + '$2');
	}
	return x1 + x2;
}
function checkimgtype(filename,typelist){//檢查圖片格式,filename 是欄位名稱,typelist是可以通過的格式 用 , 分隔
	if(filename=="" || typelist=="") return false;
	var typelist=typelist.toLowerCase().split(',');
	var pass_status=1;//0是no pass 1是 pass
	$('INPUT[name="'+filename+'"]').each(function(index, element) {
		if($(this).val()!=""){
			var filename_chg = $(this).val().toLowerCase();
			chk_type_txt="";
			var  setchk="jpg|gif";
			if(typelist.length>0) setchk="";
			if(typelist.length>0) var chk_type_txt=typelist.join("|");
			if(setchk.length>0) setchk="|"+setchk;
			var re = eval("/\.("+chk_type_txt+setchk+")$/i"); 
			pass_status=0;
			//console.log(re);
			if(re.test(filename_chg))pass_status=1;
			//console.log(pass_status);
		}
    });
	//console.log(pass_status);
	return pass_status;
}
function chk_field_fun(){//檢查欄位格式是否有填寫或是正確
	var error=0;
	var errmsg="";
	$(".formTable input").removeProp("style");
	$(".formTable input[data-fieldtype]").each(function(index, element) {
		//console.log($(this).data("fieldtype")+"-"+$(this).data("enter"));
		if($(this).data("enter")=="1" && $(this).val()==""){
			$(this).css({'border' : '#F00 2px solid'});
			errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("：", "")+"欄位必須填寫"; 
			//console.log($(this).parents('.row').find("label").text());
			error=1;
		}else{
			switch($(this).data("fieldtype")){
				case "email":
				if(! isEmail($(this).val())){
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("：", "")+"欄位必須填寫正確格式"; 
					//console.log($(this).parents('.row').find("label").text());
					error=1;
				}
				break;
				case "int_number"://整數
				if($(this).val().match(/[^0-9]/g)){ 
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("：", "")+"欄位必須填寫整數數值"; 
					//console.log($(this).parents('.row').find("label").text());
					error=1;
				}
				break;
				case "float_number"://數值包含小數
				if($(this).val().match(/[^.|^0-9]/g)){ 
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("：", "")+"欄位必須填寫數值"; 
					//console.log($(this).parents('.row').find("label").text());
					error=1;
				}
				break;
				case "test_eng_num"://檢驗欄位除了數字及英文以外不可有其他符號
				var re = /^[\d|a-zA-Z0-9]+$/;
				if(! re.test($(this).val())){ 
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label").text().replace("：", "")+"欄位必須填寫英文字母或數字"; 
					//console.log($(this).parents('.row').find("label").text());
					error=1;
				}
				break;
				case "file":
				var file_check_type=$(this).data("fileext")!=""?$(this).data("fileext"):"jpg,png,gif,doc,docx,pdf";
				if(! checkimgtype($(this).prop("name"),file_check_type)){
					$(this).css({'border' : '#F00 2px solid'});
					errmsg=errmsg+"<br>--"+$(this).parents('.row').find("label.col-1").text().replace("：", "")+"檔案格式必須為"+file_check_type+""; 
					error=1;
				}
				break;
			}
		}
    });
	if(error==1){
		return errmsg;
	}else{
		return "";
	}
}
function errordialog(msg){
	parent.$("#dialogMask h6").html('<i class="fa fa-exclamation-triangle"></i> 錯誤訊息');
	parent.$("#dialogMask div.Txt").html(msg);
	parent.$(".dialog_top_pop").trigger("click");
}
function msgdialog(msg){
	parent.$("#dialogMask h6").html('<i class="fa fa-exclamation-triangle"></i> 系統訊息');
	parent.$("#dialogMask div.Txt").html(msg);
	parent.$(".dialog_top_pop").trigger("click");
}


function checkCreditCard(formValue){
    re = /^\d{4}-\d{4}-\d{4}-\d{4}$/;
    if (!re.test(formValue.value))
        alert("你的信用卡號碼不符合「xxxx-xxxx-xxxx-xxxx」的格式！");
}
function checkID(formValue){    
	re = /^[AFC][0-9]{9}$/;
    if (!re.test(formValue.value))
        alert("你的身份證號碼格式不對！");
}
function checkMoblie(formValue){
   	re = /^[09]{2}[0-9]{8}$/;
    if (!re.test(formValue)){
        //alert("你的發票號碼格式不對！");
		return false;
	}else{
		return true;	
	}
}
function checkinvoice(formValue){//發票號碼
	re = /^[A-Za-z]{2}[0-9]{8}$/;
    if (!re.test(formValue)){
        //alert("你的發票號碼格式不對！");
		return false;
	}else{
		return true;	
	}
}
function eval_int_number(fieldname){
	if(fieldname.value.match(/[^0-9]/g)){ 
		alert('欄位值必須為數字!!');
		fieldname.value='';
		fieldname.focus();
	}
}
function eval_float_number(fieldname){
	if(fieldname.value.match(/[^.|^0-9]/g)){ 
		alert('欄位值必須為數字!!');
		fieldname.value='';
		fieldname.focus();
	}
}