<template>
  <div>
    <el-dialog title="添加新用户" :visible.sync="incrementFrom">
      <el-form :model="addForm" :rules="addValidate">
        <el-form-item label="日期" :label-width="formLabelWidth" prop="date">
          <el-date-picker
            v-model="addForm.date"
            type="date"
            placeholder="选择日期"
            @change="addPickFn"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth" prop="name">
          <el-input v-model="addForm.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth" prop="address">
          <el-input v-model="addForm.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="addCancelFn">取 消</el-button>
        <el-button type="primary" @click="addConfirmFn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "AddDialog",
  props:["addForm","formLabelWidth","incrementFrom","addValidate"],
  data() {
    return {
        pattern:""
    }
  },
  methods: {
    addPickFn() {
        let time = moment(this.addForm.date).format("YYYY-MM-DD");
        this.addForm.date = time;
    },
    addCancelFn(){
        this.$emit("my_addCancelFn")
    },
    addConfirmFn(){
        this.$emit("my_addConfirmFn")
    },
    
  },
};
</script>

<style lang="scss" scoped></style>
