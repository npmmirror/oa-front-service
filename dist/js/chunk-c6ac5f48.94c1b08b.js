(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c6ac5f48","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-2d20fed6","chunk-c6ac5f48","chunk-c6ac5f48","chunk-2d0df843"],{"89f2":function(e,t,n){"use strict";n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return c}));n("96cf"),n("28a5"),n("6b54"),n("ac4d"),n("8a81"),n("ac6a");var r=n("3b8d"),s=n("4ec3");n("0fea");function i(e){return a.apply(this,arguments)}function a(){return a=Object(r["a"])(regeneratorRuntime.mark((function e(t){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return","字典Code不能为空!");case 2:return e.next=4,Object(s["f"])(t);case 4:return n=e.sent,e.abrupt("return",n);case 6:case"end":return e.stop()}}),e)}))),a.apply(this,arguments)}function o(e,t){if(e instanceof Array){var n=!0,r=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var o=i.value;if(t===o.value)return o.text}}catch(c){r=!0,s=c}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}}return t}function c(e,t){if(0===t||"0"===t){var n=!0,r=!1,s=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var o=i.value;if(t==o.value)return o.text}}catch(u){r=!0,s=u}finally{try{n||null==a.return||a.return()}finally{if(r)throw s}}}if(!t||!e||0==e.length)return"";var c="";t=t.toString();var l=t.split(",");return e.forEach((function(e){for(var t=0;t<l.length;t++)if(l[t]===e.value){c+=e.text+",";break}})),""==c?t:c.substring(0,c.length-1)}},b65a:function(e,t,n){"use strict";n.d(t,"a",(function(){return d}));n("8e6e"),n("7f7f");var r=n("bd86"),s=(n("456d"),n("ac6a"),n("ca00")),i=n("0fea"),a=n("8bbf"),o=n.n(a),c=n("9fb0");function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){Object(r["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var d={data:function(){return{tokenHeader:{"X-Access-Token":o.a.ls.get(c["a"])},queryParam:{},dataSource:[],ipagination:{current:1,pageSize:10,pageSizeOptions:["10","20","30"],showTotal:function(e,t){return t[0]+"-"+t[1]+" 共"+e+"条"},showQuickJumper:!0,showSizeChanger:!0,total:0},isorter:{column:"createTime",order:"desc"},filters:{},loading:!1,selectedRowKeys:[],selectionRows:[],toggleSearchStatus:!1,superQueryFlag:!1,superQueryParams:""}},created:function(){this.disableMixinCreated||(console.log(" -- mixin created -- "),this.loadData(),this.initDictConfig())},methods:{loadData:function(e){var t=this;if(this.url.list){1===e&&(this.ipagination.current=1);var n=this.getQueryParams();this.loading=!0,Object(i["h"])(this.url.list,n).then((function(e){e.success&&(t.dataSource=e.result.records,t.ipagination.total=e.result.total),510===e.code&&t.$message.warning(e.message),t.loading=!1}))}else this.$message.error("请设置url.list属性!")},initDictConfig:function(){console.log("--这是一个假的方法!")},handleSuperQuery:function(e){e?(this.superQueryFlag=!0,this.superQueryParams=JSON.stringify(e)):(this.superQueryParams="",this.superQueryFlag=!1),this.loadData()},getQueryParams:function(){var e={};this.superQueryParams&&(e["superQueryParams"]=encodeURI(this.superQueryParams));var t=Object.assign(e,this.queryParam,this.isorter,this.filters);return t.field=this.getQueryField(),t.pageNo=this.ipagination.current,t.pageSize=this.ipagination.pageSize,Object(s["h"])(t)},getQueryField:function(){var e="id,";return this.columns.forEach((function(t){e+=","+t.dataIndex})),e},onSelectChange:function(e,t){this.selectedRowKeys=e,this.selectionRows=t},onClearSelected:function(){this.selectedRowKeys=[],this.selectionRows=[]},searchQuery:function(){this.loadData(1)},superQuery:function(){this.$refs.superQueryModal.show()},searchReset:function(){this.queryParam={},this.loadData(1)},batchDel:function(){if(this.url.deleteBatch)if(this.selectedRowKeys.length<=0)this.$message.warning("请选择一条记录！");else{for(var e="",t=0;t<this.selectedRowKeys.length;t++)e+=this.selectedRowKeys[t]+",";var n=this;this.$confirm({title:"确认删除",content:"是否删除选中数据?",onOk:function(){n.loading=!0,Object(i["b"])(n.url.deleteBatch,{ids:e}).then((function(e){e.success?(n.$message.success(e.message),n.loadData(),n.onClearSelected()):n.$message.warning(e.message)})).finally((function(){n.loading=!1}))}})}else this.$message.error("请设置url.deleteBatch属性!")},handleDelete:function(e){if(this.url.delete){var t=this;Object(i["b"])(t.url.delete,{id:e}).then((function(e){e.success?(t.$message.success(e.message),t.loadData()):t.$message.warning(e.message)}))}else this.$message.error("请设置url.delete属性!")},handleEdit:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="编辑",this.$refs.modalForm.disableSubmit=!1},handleAdd:function(){this.$refs.modalForm.add(),this.$refs.modalForm.title="新增",this.$refs.modalForm.disableSubmit=!1},handleTableChange:function(e,t,n){Object.keys(n).length>0&&(this.isorter.column=n.field,this.isorter.order="ascend"==n.order?"asc":"desc"),this.ipagination=e,this.loadData()},handleToggleSearch:function(){this.toggleSearchStatus=!this.toggleSearchStatus},modalFormOk:function(){this.loadData()},handleDetail:function(e){this.$refs.modalForm.edit(e),this.$refs.modalForm.title="详情",this.$refs.modalForm.disableSubmit=!0},handleExportXls2:function(){var e=encodeURI(JSON.stringify(this.getQueryParams())),t="".concat(window._CONFIG["domianURL"],"/").concat(this.url.exportXlsUrl,"?paramsStr=").concat(e);window.location.href=t},handleExportXls:function(e){var t=this;e&&"string"==typeof e||(e="导出文件");var n=u({},this.queryParam);this.selectedRowKeys&&this.selectedRowKeys.length>0&&(n["selections"]=this.selectedRowKeys.join(",")),console.log("导出参数",n),Object(i["g"])(this.url.exportXlsUrl,n).then((function(n){if(n)if("undefined"!==typeof window.navigator.msSaveBlob)window.navigator.msSaveBlob(new Blob([n],{type:"application/vnd.ms-excel"}),e+".xls");else{var r=window.URL.createObjectURL(new Blob([n],{type:"application/vnd.ms-excel"})),s=document.createElement("a");s.style.display="none",s.href=r,s.setAttribute("download",e+".xls"),document.body.appendChild(s),s.click(),document.body.removeChild(s),window.URL.revokeObjectURL(r)}else t.$message.warning("文件下载失败")}))},handleImportExcel:function(e){var t=this.$createElement;if("uploading"!==e.file.status&&console.log(e.file,e.fileList),"done"===e.file.status)if(e.file.response.success){if(201===e.file.response.code){var n=e.file.response,r=n.message,s=n.result,i=s.msg,a=s.fileUrl,o=s.fileName,c=window._CONFIG["domianURL"]+a;this.$warning({title:r,content:t("div",[t("span",[i]),t("br"),t("span",["具体详情请 ",t("a",{attrs:{href:c,target:"_blank",download:o}},["点击下载"])," "])])})}else this.$message.success(e.file.response.message||"".concat(e.file.name," 文件上传成功"));this.loadData()}else this.$message.error("".concat(e.file.name," ").concat(e.file.response.message,"."));else"error"===e.file.status&&this.$message.error("文件上传失败: ".concat(e.file.msg," "))},getImgView:function(e){return e&&e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window._CONFIG["staticDomainURL"]+"/"+e},uploadFile:function(e){e?(e.indexOf(",")>0&&(e=e.substring(0,e.indexOf(","))),window.open(window._CONFIG["staticDomainURL"]+"/"+e)):this.$message.warning("未知的文件")}}}}}]);