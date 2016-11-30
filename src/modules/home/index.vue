<style >
	
 	.all_center{color: red;}
 	.el-row {
 	    margin-bottom: 20px;
 	    &:last-child {
 	      margin-bottom: 0;
 	    }
 	  }
 	  .el-col {
 	    border-radius: 4px;
 	  }
 	  .bg-purple-dark {
 	    background: #99a9bf;
 	  }
 	  .bg-purple {
 	    background: #d3dce6;
 	  }
 	  .bg-purple-light {
 	    background: #e5e9f2;
 	  }
 	  .grid-content {
 	    border-radius: 4px;
 	    min-height: 36px;
 	  }
 	  .row-bg {
 	    padding: 10px 0;
 	    background-color: #f9fafc;
 	  }
</style>

<template lang="html">
	<div class="all_center" style="top: 26%;text-align: center;z-index: 9;left: 22%;">
		<h1 style="color: yellow;">欢迎到来，fuc1ker</h1>
		<h2 style="color: green;">请先登录 杀杀杀速度222</h2>
	</div>
	<el-row>
	  <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="8"><div class="grid-content bg-purple"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="6"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
	<el-row>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple"></div></el-col>
	  <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
	</el-row>
</template>
 


<script>
export default {
    data() {
      return { visible: false }
    }
  };
</script>