(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0ba8d9"],{3864:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-card",{staticStyle:{height:"100%"},attrs:{loading:e.cardLoading,bordered:!1}},[n("a-spin",{attrs:{spinning:e.loading}},[n("a-input-search",{staticStyle:{width:"100%","margin-top":"10px"},attrs:{placeholder:"输入机构名称查询...",allowClear:"",enterButton:""},on:{search:e.handleSearch}}),n("a-tree",{attrs:{showLine:"",checkStrictly:"",expandedKeys:e.expandedKeys,selectedKeys:e.selectedKeys,dropdownStyle:{maxHeight:"200px",overflow:"auto"},treeData:e.treeDataSource},on:{"update:expandedKeys":function(t){e.expandedKeys=t},"update:expanded-keys":function(t){e.expandedKeys=t},select:e.handleTreeSelect}})],1)],1)},s=[],d=n("4ec3"),r={name:"AddressListLeft",props:["value"],data:function(){return{cardLoading:!0,loading:!1,treeDataSource:[],selectedKeys:[],expandedKeys:[]}},created:function(){this.queryTreeData()},methods:{queryTreeData:function(e){this.commonRequestThen(Object(d["C"])({departName:e||void 0}))},handleSearch:function(e){e?this.commonRequestThen(Object(d["S"])({keyWord:e})):this.queryTreeData()},handleTreeSelect:function(e,t){if(e.length>0&&this.selectedKeys[0]!==e[0]){this.selectedKeys=[e[0]];var n=t.node.dataRef.orgCode;this.emitInput(n)}},emitInput:function(e){this.$emit("input",e)},commonRequestThen:function(e){var t=this;this.loading=!0,e.then((function(e){e.success?t.treeDataSource=e.result:(t.$message.warn(e.message),console.error("组织机构查询失败:",e))})).finally((function(){t.loading=!1,t.cardLoading=!1}))}}},o=r,c=n("2877"),i=Object(c["a"])(o,a,s,!1,null,"dcd92e46",null);t["default"]=i.exports}}]);