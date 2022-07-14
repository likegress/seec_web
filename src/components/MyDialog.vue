<template>
  <div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="日期" :label-width="formLabelWidth">
          <el-date-picker
            v-model="form.date"
            @change="pickFn"
            type="date"
            placeholder="选择日期"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item label="姓名" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="地址" :label-width="formLabelWidth">
          <el-input v-model="form.address" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelFn">取 消</el-button>
        <el-button type="primary" @click="confirmFn">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import moment from "moment";
export default {
  name: "MyDialog",
  props: ["form", "dialogFormVisible", "formLabelWidth"],
  methods: {
    // 日期时间失去焦点的时候把格式改为字符串
    pickFn() {
      let time = moment(this.form.date).format("YYYY-MM-DD");
      this.form.date = time;
    },
    confirmFn() {
        this.$emit("confirmFn_my")
        //事件名
    },
    cancelFn(){
        this.$emit("my_cancel");
    }
  },
};
</script>

<style lang="scss" scoped></style>
