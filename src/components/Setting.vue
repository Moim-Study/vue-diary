<template>
  <div class="setting">
    <section class="settingSection1">
      <span class="settingTitle">Dark Mode</span>
      <div class="settingToggle">
        <div></div>
      </div>
    </section>

    <section class="settingSection1">
      <span class="settingTitle">Point Color</span>
      <ul class="settingColor">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>

    <section class="settingSection2">
      <span class="settingTitle left">Font</span>
      <ul class="settingFont selected">
        <li>Roboto</li>
        <li>Hello, there</li>
      </ul>
      <ul class="settingFont">
        <li>Roboto Mono</li>
        <li class="roboto">Hello, there</li>
      </ul>
      <ul class="settingFont">
        <li>Nanum Pen Script</li>
        <li class="Nanum">Hello, there</li>
      </ul>
    </section>

    <section class="settingBtns">
      <button>Cancel</button>
      <button>Apply</button>
    </section>
  </div>
</template>

<script>
export default {
  name: "Setting",
};
</script>

<style lang="scss" scoped>
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
$space: 16px;

.setting {
  margin: $space 0;
}

.settingSection1 {
  @include flex(space-between, center, "");
  padding: 1.1em 2em;
}

.settingSection2 {
  padding: 1.1em 2em;
}

.settingTitle {
  font-weight: 600;
  font-size: 1.2em;
}

.left {
  text-align: left;
  margin-bottom: $space;
}

.settingToggle {
  @include object(64px, 35px, "");
  background-color: black;
  border-radius: 25px 25px 25px 25px;
  padding: 4px;

  div {
    @include object(50%, 100%, "");
    background-color: white;
    border-radius: 100%;
  }
}

.settingColor {
  @include flex(space-between, center, "");

  li {
    @include object(24px, 24px, "");
    background-color: darkred;
    border-radius: 100%;
    margin-left: 8px;

    &:nth-child(2) {
      background-color: orangered;
    }
    &:nth-child(3) {
      background-color: teal;
    }
    &:nth-child(4) {
      background-color: royalblue;
    }
  }
}

.settingFont {
  @include object(100%, 40px, "");
  @include flex(space-between, center, "");
  text-align: left;
  border-bottom: 1px solid black;
  margin-bottom: 8px;
  color: #ccc;

  li {
    &:first-child {
      width: 45%;
      font-size: 0.95em;
    }
  }
}

.selected {
  font-weight: 500;
  color: black;
}

.roboto {
  font-family: "Roboto Mono", monospace;
  font-size: 1.1em;
}

.Nanum {
  font-family: "Nanum Pen Script", cursive;
  font-size: 1.6em;
}

.settingBtns {
  @include flex(space-between, center, row);
  padding: 0 2em;
  margin: 32px 0;

  button {
    @include object(45%, 40px, "");
    font-weight: 500;

    &:first-child {
      border: 1px solid black;
    }
    &:last-child {
      background-color: black;
      color: white;
    }
  }
}
</style>
