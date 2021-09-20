<template>
  <article id="calendar">
    <header class="calendarTop">
      <ul class="currentMonth">
        <li class="arrowBtn">◀</li>
        <li>In September 2021</li>
        <li class="arrowBtn">▶</li>
      </ul>
    </header>

    <section>
      <div class="weekdays">
        <div class="weekday" v-for="(weekday, i) in weekdays" :key="i">
          {{ weekday }}
        </div>
      </div>
      <div class="date">
        <div class="dayHidden">29</div>
        <div class="dayHidden">30</div>
        <div class="dayHidden">31</div>
        <div class="day" v-for="(n, i) in 31" :key="i">
          {{ n }}
        </div>
        <div class="day" v-for="(n, i) in 8" :key="i">
          {{ n }}
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  data() {
    return {
      weekdays: ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"],
    };
  },
  methods: {},
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

@mixin calendarLayout($property) {
  display: grid;
  /*grid-template-columns: repeat(auto-fit, minmax(45px, 1fr));*/
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 15px 30px;
  padding: $property;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
  }
}

#calendar {
  overflow: hidden;
  cursor: default;
  margin-top: 24px;
}

.calendarTop {
  @include flex(center, "", "");
  margin-bottom: 24px;
}

.arrowBtn {
  cursor: pointer;
}

.currentMonth {
  @include flex(space-between, center, "");

  li {
    &:nth-child(2) {
      padding: 0 48px;
      font-weight: 600;
      font-size: 1.3rem;
    }
  }
}

.weekdays {
  @include calendarLayout(0 30px);
  font-weight: 600;

  div {
    &:first-child {
      color: orangered;
    }
    &:last-child {
      color: royalblue;
    }
  }
}

.date {
  @include calendarLayout(20px 30px);
  font-weight: 500;
  cursor: pointer;
  color: lightgray;

  .day {
    color: black;
    &:hover {
      background-color: orangered;
      border-radius: 4px;
      color: #fff;
    }
  }
}
</style>
