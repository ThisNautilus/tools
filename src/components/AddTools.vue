<template>
  <div class="addtools well">
    <h4>新工具入库：</h4>
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">编号</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具编号" v-model="id">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">名称</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具名称" v-model="name">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">型号</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具型号" v-model="model">
    </div>
    <div class="input-group">
      <span class="input-group-addon" id="sizing-addon2">数量</span>
      <input type="text" style="width:400px;" class="form-control" placeholder="请输入工具数量 " v-model="count">
    </div>
    <button type="button" class="btn btn-default" @click="addTools" >录入</button>
  </div>
</template>

<script>
export default {
  name: 'AddTools',
  data () {
    return {
      id:'',
      name:'',
      model:'',
      count:1,
      using:[],
      newTool:{}
    }
  },
  methods:{
    addTools(){
      this.newTool.id = this.id;
      this.newTool.name = this.name;
      this.newTool.model = this.model;
      this.newTool.count = this.count;
      this.newTool.using = this.using;
      this.$store.commit("pushTool",this.newTool)
      console.log(this.$store.state.tools);
      this.id = this.name = this.model = this.count = '';
      this.$router.push('/out');
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.addtools {
  width: 1200px;
  height: 500px;
  margin: 10px auto;
}
.input-group {
  margin: 10px auto;
}
</style>
