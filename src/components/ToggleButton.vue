<template>
  <label for="toggleBtn" class="ToggleButton" :class="{ Active: isActive }">
    <span class="ToggleLabel" v-if="isActive">On</span>
    <span class="ToggleLabel" v-if="!isActive">Off</span>

    <input type="checkbox" id="toggleBtn" v-model="checkedValue" />
    <span class="ToggleSwitch"></span>
  </label>
</template>

<script>
export default {
  name: 'ToggleButton',
  data() {
    return {
      toggleState: false,
    };
  },
  computed: {
    isActive() {
      return this.toggleState;
    },
    checkedValue: {
      get() {
        return this.toggleState;
      },
      set(newValue) {
        this.toggleState = newValue;
      },
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../Mixin.scss';

.ToggleButton {
  @include flex(center, center, '');
  vertical-align: middle;

  input[type='checkbox'] {
    @include object('', 1px, 1px);
    opacity: 0;
    position: absolute;
  }
}

.ToggleSwitch {
  @include object('', 60px, 30px);
  background-color: black;
  border-radius: 25px 25px 25px 25px;
  padding: 3px;
  position: relative;
  margin-left: 1em;
  transition: all 300ms ease-in;

  &::after,
  &::before {
    @include object(block, 24px, 24px);
    content: '';
    background-color: gray;
    position: absolute;
    border-radius: 50%;
    transition: all 300ms ease;
  }

  &::before {
    opacity: 0;
  }
}

.Active {
  .ToggleSwitch::after {
    left: 40%;
    background-color: white;
  }

  .ToggleSwitch::after,
  .ToggleSwitch::before {
    transform: translateX(9px);
  }
}
</style>
