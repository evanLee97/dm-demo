<template>
  <div class="">
    <el-form class="login-from">
      <div class="titlr-container">
        <h3 class="titiel">用户登陆</h3>
      </div>
      <!-- username -->
      <el-form-item>
        <span class="svg-con">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="username" name="username" type="text"></el-input>
      </el-form-item>
      <!-- password -->
      <el-form-item>
        <span class="svg-con">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
        <el-input placeholder="password" name="password"></el-input>
        <span class="show-pwd">
          <el-icon>
            <avatar />
          </el-icon>
        </span>
      </el-form-item>

      <!-- button -->
      <el-button type="primary" style="width: 100%; margin-bottom: 20px;">
        登陆
      </el-button>
    </el-form>
  </div>
</template>

<script setup>
import { Avatar } from '@element-plus/icons'
import {} from 'vue'
</script>

<style lang="scss" scoped></style>
