<template>
  <div class="ModalWrap">
    <div
      class="DimmedBg"
      @click="$emit('modalStatus')"
      v-if="showModal == true"
    ></div>

    <div class="SubBtns">
      <ul v-if="showModal == true && step == 2">
        <li class="SubBtn" @click="showAddTimeline">1</li>
        <li class="SubBtn" @click="showAddTodo">2</li>
        <li class="SubBtn" @click="showAddDiary">3</li>
      </ul>
    </div>

    <div class="Search" v-if="showModal == true && step == 1">
      <input type="text" class="SearchBox" placeholder="무엇을 찾으시나요?" />
    </div>
  </div>

  <AddTimeline v-if="addTimeline == true" />
  <AddModal v-if="addTodo == true" />
  <ModalDiary v-if="addDiary == true" />
</template>

<script>
import AddTimeline from '../components/AddTimeline';
import AddModal from '../components/AddModal';
import ModalDiary from '../components/ModalDiary';

export default {
  name: 'Modal',
  data() {
    return {
      addTimeline: false,
      addTodo: false,
      addDiary: false,
    };
  },
  methods: {
    showAddTimeline() {
      this.addTimeline = true;
      this.addTodo = false;
      this.addDiary = false;
      this.$emit('modalStatus');
    },
    showAddTodo() {
      this.addTimeline = false;
      this.addTodo = true;
      this.addDiary = false;
      this.$emit('modalStatus');
    },
    showAddDiary() {
      this.addTimeline = false;
      this.addTodo = false;
      this.addDiary = true;
      this.$emit('modalStatus');
    },
  },
  props: {
    showModal: Boolean,
    step: Number,
  },
  components: {
    AddTimeline,
    AddModal,
    ModalDiary,
  },
};
</script>

<style lang="scss" scoped>
@import '../Mixin.scss';

$PointColor: orangered;
$CircleSize: 3rem;

.SubBtns {
  @include flex(center, '', '');

  ul {
    @include flex(space-between, '', '');
    position: absolute;
    margin-bottom: 16px;
    bottom: 5rem;
  }
}

.SubBtn {
  @include object('', $CircleSize, $CircleSize);
  background-color: $PointColor;
  border-radius: 100%;
  color: white;
  font-size: 1.5em;
  line-height: $CircleSize;
  margin-right: 8px;
  z-index: 2;

  &:last-child {
    margin-right: 0;
  }
}

.Search {
  @include flex(center, center, '');
}

.SearchBox {
  @include object('', 92%, 45px);
  position: absolute;
  bottom: 6rem;
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
