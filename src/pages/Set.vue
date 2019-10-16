<template>
 <div>
    <header class="mui-bar mui-bar-nav">
        <h1 class="mui-title">设置</h1>
    </header>
    <div class="mui-content">
            <ul class="mui-table-view mui-table-view-chevron">
                <li class="mui-table-view-cell mui-media">
                    <a class="mui-navigate-right" href="#account">
                        <img class="mui-media-object mui-pull-left head-img" id="head-img" src="images/qing-tou.png">
                        <div class="mui-media-body">
                            Hello MUI
                            <p class='mui-ellipsis'>账号:hellomui</p>
                        </div>
                    </a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="#account" class="mui-navigate-right">账号与安全</a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="#notifications" class="mui-navigate-right">新消息通知</a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="#privacy" class="mui-navigate-right">隐私</a>
                </li>
                <li class="mui-table-view-cell">
                    <a href="#general" class="mui-navigate-right">通用</a>
                </li>
                <li class="mui-table-view-cell" style="text-align: center; width: 100%; padding: 2% 0; margin: 0;">
                    <a style="display: block; width: 100%; margin: 0;" href="login.html">退出登录</a>
                </li>
            </ul>
        </div>
 </div>
</template>
<style scoped>
.inbox .mui-bar-nav{box-shadow: 0 1px 6px #d7d7d7!important;}
.chebox .mui-content ul{ width: 100%;}
.chebox .mui-content ul li{ width: 100%; text-align: center; padding: 3% 0; background-color: #fff; border-bottom: solid 1px #ccc;}
.chebox .mui-content ul li img{ width: 30%;}
</style>