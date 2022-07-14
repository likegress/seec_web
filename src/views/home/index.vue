<template>
  <div class="index">
    <h3>数据的增删改查</h3>
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" prop="date" width="100px" align="center">
      </el-table-column>
      <el-table-column label="姓名" prop="name" width="100px" align="center">
      </el-table-column>
      <el-table-column label="地址" prop="address" width="400px" align="center">
        <template slot="header" slot-scope="scope">
          <el-input v-model="search" size="mini" placeholder="输入关键字搜索" />
        </template>
      </el-table-column>
      <el-table-column label="修改" width="300px" align="right">
        <template slot-scope="scope">
          <!-- 通过插槽传参  slot-scope="scope" -->
          <el-button size="mini" type="primary" @click="handleEdit(scope)"
            >修改</el-button
          >
          <el-button size="mini" type="danger" @click="handleDelete(scope)"
            >删除</el-button
          >
        </template>
      </el-table-column>
    </el-table>
    <!-- 增加 -->
    <div>
      <el-button type="danger" @click="addFn">增加用户</el-button>
    </div>

    <!-- 修改表单 -->
    <MyDialog
      :form="form"
      :dialogFormVisible="dialogFormVisible"
      :formLabelWidth="formLabelWidth"
      @confirmFn_my="confirmFn"
      @my_cancel="cancelFn"
    />
    <!-- 增加的弹窗 -->
    <AddDialog
      :addForm="addForm"
      :formLabelWidth="formLabelWidth"
      :incrementFrom="incrementFrom"
      :addValidate="addValidate"
      @my_addCancelFn="addCancelFn"
      @my_addConfirmFn="addConfirmFn"
    ></AddDialog>
  </div>
</template>

<script>
import instance from "@/api/api";

import MyDialog from "@/components/MyDialog";
import AddDialog from "@/components/AddDialog";

export default {
  name: "Index",
  data() {
    return {
      search: "",
      tableData: [],
      dialogFormVisible: false, //表单的显示隐藏
      form: {
        //表单的绑定信息
        index: 0,
        date: null,
        name: "",
        address: "",
      },
      formLabelWidth: "120px",
      incrementFrom: false, //决定增加表单的显示影藏
      addForm: {
        //增加表单的绑定数据
        date: null,
        name: "",
        address: "",
      },
      addValidate: {
        date: [{ required: true, message: "请填写时间", trigger: "blur" }],
        name: [{ required: true, message: "请填写姓名", trigger: "blur" }],
        address: [{ required: true, message: "请填写地址", trigger: "blur" }],
      },
      pattern: "",
    };
  },
  components: {
    MyDialog,
    AddDialog,
  },
  created() {
    this.getAll();
  },
  methods: {
    // 增加业务
    async incrementFn() {
      this.incrementFrom = true;
      let { date, name, address } = this.addForm;
      // date = moment(date).format("YYYY-MM-DD");
      // console.log(date, name, address);
      let { data } = await instance.post("/add", { date, name, address });
      for (let k in this.addForm) {
        this.addForm[k] = "";
      }
      console.log(data);
    },
    addCancelFn() {
      this.incrementFrom = false;
    },
    addConfirmFn() {
      for (let k in this.addForm) {
        this.pattern = true;
        if (!this.addForm[k]) {
          this.pattern = false;
          break;
        }
      }
      if (!this.pattern) {
        this.$message({
          type: "error",
          message: "请填写每个字段",
          duration: 1000,
        });
        return;
      }
      this.incrementFn()
        .then(() => {
          this.$message({
            type: "success",
            message: "添加成功",
            duration: 1000,
            onClose: () => {
              this.incrementFrom = false;
              this.getAll();
            },
          });
        })
        .catch((err) => console.log(err));
    },
    //点击添加按钮显示
    addFn() {
      this.incrementFrom = true;
    },
    handleEdit(scope) {
      // console.log(scope);

      this.form = scope.row;
      this.$set(this.form, "index", scope.$index);
      console.log(this.form);
      this.dialogFormVisible = true;
    },
    //删除
    handleDelete(scope) {
      // console.log(scope);
      this.$confirm("确定删除吗", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          //删除成功的操作
          this.deleteFn(scope.$index).then(() => {
            this.$message({
              type: "success",
              message: "删除成功!",
            });
          }); //异步
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除",
          });
        });
    },
    // 请求数据
    async getAll() {
      let { data } = await instance.get("/all");
      this.tableData = data.tableData;
      // console.log(this.tableData);
    },

    //数据修改
    async updateFn() {
      let { date, name, address, index } = this.form;
      const { data } = await instance.put("/update", {
        date,
        name,
        address,
        index,
      });
      console.log(data);
    },
    confirmFn() {
      this.dialogFormVisible = false;
      console.log(this.form.date);
      this.updateFn();
    },
    cancelFn() {
      this.dialogFormVisible = false;
    },

    //删除数据业务
    async deleteFn(index) {
      const { data } = await instance.delete("/delete", {
        params: { index },
      });
      this.getAll();
      console.log(data);
    },
  },
  watch:{
    pattern(){
      
    }
  }
};
</script>

<style lang="scss" scoped>
h3 {
  height: 60px;
  line-height: 60px;
}
</style>
