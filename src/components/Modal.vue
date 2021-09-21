<template>
  <div>
    <div class="dimmedBg" v-if="step == 1 || step == 2"></div>

    <div class="subBtns">
      <ul v-if="step == 2">
        <li class="subBtn activeBtn">1</li>
        <li class="subBtn">2</li>
        <li class="subBtn">3</li>
        <li class="subBtn">4</li>
      </ul>
    </div>

    <div class="search" v-if="step == 1">
      <input type="text" class="searchBox" placeholder="무엇을 찾으시나요?" />
    </div>
  </div>
</template>

<script>
export default {
  name: "Modal",
  props: {
    modalStatue: Boolean,
    step: Number,
  },
};
</script>

<style lang="scss">
@mixin object($w, $h, $p) {
  width: $w;
  height: $h;
  position: $p;
}

@mixin flex($j, $a, $d) {
  display: flex;
  justify-content: $j;
  align-items: $a;
  flex-direction: $d;
}

$pointColor: orangered;
$circleSize: 3.5em;

.subBtns {
  @include flex(center, "", "");

  ul {
    @include flex(space-between, "", "");
    position: absolute;
    margin-bottom: 16px;
    bottom: 110px;
  }
}

.subBtn {
  @include object($circleSize, $circleSize, "");
  background-color: black;
  border-radius: 100%;
  color: white;
  line-height: $circleSize;
  margin-right: 8px;
  z-index: 2;

  &:last-child {
    margin-right: 0;
  }
}

.activeBtn {
  background-color: $pointColor;
}

.search {
  @include flex(center, center, "");
}

.searchBox {
  @include object(92%, 45px, absolute);
  bottom: 7.5rem;
  border: 1px solid black;
  text-indent: 10px;
  font-size: 14px;
  z-index: 1;
}

.dimmedBg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1;
}
</style>
