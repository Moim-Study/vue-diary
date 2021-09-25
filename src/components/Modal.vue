<template>
  <div>
    <div class="DimmedBg" v-if="step == 1 || step == 2"></div>

    <div class="SubBtns">
      <ul v-if="step == 2">
        <li class="SubBtn ActiveBtn">1</li>
        <li class="SubBtn">2</li>
        <li class="SubBtn">3</li>
        <li class="SubBtn">4</li>
      </ul>
    </div>

    <div class="Search" v-if="step == 1">
      <input type="text" class="SearchBox" placeholder="무엇을 찾으시나요?" />
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

$PointColor: orangered;
$CircleSize: 3.5em;

.SubBtns {
  @include flex(center, "", "");

  ul {
    @include flex(space-between, "", "");
    position: absolute;
    margin-bottom: 16px;
    bottom: 110px;
  }
}

.SubBtn {
  @include object($CircleSize, $CircleSize, "");
  background-color: black;
  border-radius: 100%;
  color: white;
  line-height: $CircleSize;
  margin-right: 8px;
  z-index: 2;

  &:last-child {
    margin-right: 0;
  }
}

.ActiveBtn {
  background-color: $PointColor;
}

.Search {
  @include flex(center, center, "");
}

.SearchBox {
  @include object(92%, 45px, absolute);
  bottom: 7.5rem;
  border: 1px solid black;
  text-indent: 10px;
  font-size: 14px;
  z-index: 1;
}

.DimmedBg {
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  z-index: 1;
}
</style>
