<template>
     <ul class="pro">
      <li>
        <a href="#">
          <figure>
            <img src="images/a1.png" />
          </figure>
          <dl>
            <dt>
              <img src="images/phonr.png" />
            </dt>
            <dd>
              手机探店
              <br />全景展示
            </dd>
          </dl>
        </a>
      </li>
      <li>
        <a href="#">
          <figure>
            <img src="images/a2.png" />
          </figure>
          <dl>
            <dt>
              <img src="images/you.png" />
            </dt>
            <dd>
              首块喷漆
              <br />不限车型
            </dd>
          </dl>
        </a>
      </li>
    </ul>
</template>
<style scoped>
.pro {
  width: 100%;
  margin: 5% 0;
  height: 5em;
  overflow: hidden;
}
.pro li {
  position: relative;
  float: left;
  width: 46%;
  height: 5em;
  margin: 0 2%;
  overflow: hidden;
  border-radius: 0.2em;
}
.pro li a {
  width: 100%;
  overflow: hidden;
  display: block;
  height: 100%;
}
.pro li figure {
  height: 100%;
  width: 100%;
  margin: 0;
}
.pro li figure img {
  width: 100%;
  min-height: 100%;
}
.pro li dl {
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  width: 100%;
  height: 100%;
  border-radius: 0.2em;
  display: table;
}
.pro li dl dt {
  width: 36%;
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}
.pro li dl dt img {
  width: 30%;
}
.pro li:last-child dl dt img {
  width: 50%;
}
.pro li dl dd {
  display: table-cell;
  vertical-align: middle;
  width: 64%;
  color: #fff;
  font-size: 1.2em;
  line-height: 1.4;
}
</style>