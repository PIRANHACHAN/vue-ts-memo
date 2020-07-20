<template>
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <a class="navbar-brand">
          <img height="40" src="../assets/logo.png" />
        </a>
        <button
          aria-expanded="false"
          class="navbar-toggle collapsed"
          data-target=".navbar-collapse"
          data-toggle="collapse"
          type="button"
        >
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
      </div>
      <div class="collapse navbar-collapse navbar-right">
        <ul class="nav navbar-nav">
          <li class="add dropdown">
            <a class="create-new dropdown-toggle" data-toggle="dropdown">新建</a>
            <ul class="dropdown-menu">
              <li>
                <a>文本便签</a>
              </li>
            </ul>
          </li>
          <li class="categories dropdown">
            <a class="current-category dropdown-toggle" data-toggle="dropdown">
              全部
              <span class="count badge"></span>
            </a>
            <ul class="dropdown-menu">
              <li class="total">
                <a>
                  全部
                  <span class="count badge"></span>
                </a>
              </li>
              <li class="divider"></li>
              <li>
                <a>
                  工作
                  <span class="count badge"></span>
                </a>
              </li>
              <li>
                <a>
                  生活
                  <span class="count badge"></span>
                </a>
              </li>
              <li>
                <a>
                  学习
                  <span class="count badge"></span>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class MenuBar extends Vue {}
</script>

<style>
</style>