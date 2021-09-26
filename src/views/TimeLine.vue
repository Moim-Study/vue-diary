<template>
  <div class="TimeLine">
    <nav class="TimeLineTopWrap">
       <ul class="TimeLineDays">
          <li class="TimeLineDay">S</li>
          <li class="TimeLineDay">M</li>
          <li class="TimeLineDay">T</li>
          <li class="TimeLineDay">W</li>
          <li class="TimeLineDay">T</li>
          <li class="TimeLineDay">F</li>
          <li class="TimeLineDay">S</li>
       </ul>
       <ul class="TimeLineDates">
          <li class="TimeLineDate">19</li>
          <li class="TimeLineDate">20</li>
          <li class="TimeLineDate">21</li>
          <li class="TimeLineDate">22</li>
          <li class="TimeLineDate">23</li>
          <li class="TimeLineDate">24</li>
          <li class="TimeLineDate">25</li>
       </ul>
    </nav>
    <section class="TimeLineScheduleWrap">
       <div class="TimeLineSchedule">
          
       </div>
    </section>

    <section class="TimeLineSection2">
      <span class="TimeLineTitle Left">Font</span>
      <ul class="TimeLineFont Selected">
        <li>Roboto</li>
        <li>Hello, there</li>
      </ul>
      <ul class="TimeLineFont">
        <li>Roboto Mono</li>
        <li class="Roboto">Hello, there</li>
      </ul>
      <ul class="TimeLineFont">
        <li>Nanum Pen Script</li>
        <li class="Nanum">Hello, there</li>
      </ul>
    </section>

    <section class="TimeLineBtns">
      <button>Cancel</button>
      <button>Apply</button>
    </section>
  </div>
</template>

<script>
export default {
  name: 'TimeLine',
};
</script>

<style lang="scss" scoped>
@import '../Mixin.scss';

$PointColor: orangered;
$Space: 16px;

.TimeLine {
  margin: $Space 0;
}

.TimeLineSection1 {
  @include flex(space-between, center, '');
  padding: 1.1em 2em;
}

.TimeLineSection2 {
  padding: 1.1em 2em;
}

.TimeLineTitle {
  font-weight: 600;
  font-size: 1.2em;
}

.Left {
  text-align: left;
  margin-bottom: $Space;
}

.TimeLineToggle {
  @include object('', 64px, 35px);
  background-color: black;
  border-radius: 25px 25px 25px 25px;
  padding: 4px;

  div {
    @include object('', 50%, 100%);
    background-color: white;
    border-radius: 100%;
  }
}

.TimeLineColor {
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

.TimeLineFont {
  @include object('', 100%, 40px);
  @include flex(space-between, center, '');
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

.Selected {
  font-weight: 500;
  color: black;
}

.Roboto {
  font-family: 'Roboto Mono', monospace;
  font-size: 1.1em;
}

.Nanum {
  font-family: 'Nanum Pen Script', cursive;
  font-size: 1.6em;
}

.TimeLineBtns {
  @include flex(space-between, center, row);
  padding: 0 2em;
  margin: 32px 0;

  button {
    @include object('', 45%, 40px);
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
