<template>
  <div class="Setting">
    <section class="SettingSection1">
      <span class="SettingTitle">Dark Mode</span>
      <ToggleButton @change="toggleEvent" />
    </section>

    <section class="SettingSection1">
      <span class="SettingTitle">Point Color</span>
      <ul class="SettingColor">
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </section>

    <section class="SettingSection2">
      <span class="SettingTitle Left">Font</span>
      <ul class="SettingFont Selected">
        <li>Roboto</li>
        <li class="Roboto">Hello, there</li>
      </ul>
      <ul class="SettingFont">
        <li>Roboto Mono</li>
        <li class="RobotoMono">Hello, there</li>
      </ul>
      <ul class="SettingFont">
        <li>Nanum Pen Script</li>
        <li class="Nanum">Hello, there</li>
      </ul>
    </section>

    <section class="SettingBtns">
      <button>Apply</button>
    </section>
  </div>
</template>

<script>
import ToggleButton from '../components/ToggleButton';

export default {
  name: 'Setting',
  data() {
    return {
      toggleActive: false,
    };
  },
  methods: {
    toggleEvent(value) {
      this.toggleActive = value;
    },
  },
  components: {
    ToggleButton,
  },
};
</script>

<style lang="scss" scoped>
@import '../Mixin.scss';

$PointColor: orangered;
$Space: 16px;

.Setting {
  margin: $Space 0;
}

.SettingSection1 {
  @include flex(space-between, center, '');
  padding: 1.1em 2em;
}

.SettingSection2 {
  padding: 1.1em 2em;
}

.SettingTitle {
  font-weight: 600;
  font-size: 1.2em;
}

.Left {
  text-align: left;
  margin-bottom: $Space;
}

.SettingColor {
  @include flex(space-between, center, '');

  li {
    @include object('', 24px, 24px);
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

.SettingFont {
  @include object('', 100%, 40px);
  @include flex(space-between, center, '');
  text-align: left;
  border-bottom: 1px solid black;
  margin-bottom: 8px;
  color: #ccc;

  li {
    &:first-child {
      width: 45%;
      font-size: 1.15em;
    }
  }
}

.Selected {
  font-weight: 500;
  color: black;
}

.Roboto {
  font-size: 1.2em;
}

.RobotoMono {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1em;
}

.Nanum {
  font-family: 'Nanum Pen Script', cursive;
  font-size: 1.8em;
}

.SettingBtns {
  padding: 0 2em;
  margin: 32px 0;

  button {
    @include object('', 100%, 40px);
    font-weight: 500;
    background-color: black;
    color: white;
  }
}
</style>
