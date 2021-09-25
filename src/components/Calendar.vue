<template>
  <article id="Calendar">
    <header class="CalendarTop">
      <ul class="CurrentMonth">
        <li class="ArrowBtn" @click="prevMonth">◀</li>
        <li>In {{ month[currentDate.month] }} {{ currentDate.year }}</li>
        <li class="ArrowBtn" @click="nextMonth">▶</li>
      </ul>
    </header>

    <section>
      <div class="Weekdays">
        <div class="Weekday" v-for="(weekday, i) in weekdays" :key="i">
          {{ weekday }}
        </div>
      </div>
      <div class="Date">
        <div
          class="DayHidden"
          v-for="(n, i) in firstMonthDay - 1"
          :key="'prev' + i"
        >
          {{ prevMonthDay + 1 - firstMonthDay + n }}
        </div>
        <div
          class="Day"
          :class="{ active: n === currentDate.date }"
          v-for="(n, i) in currentMonthDays"
          :key="'day' + i"
        >
          {{ n }}
        </div>
        <div
          class="DayHidden"
          v-for="(n, i) in 43 - (currentMonthDays + firstMonthDay)"
          :key="'next' + i"
        >
          {{ n }}
        </div>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: "Calendar",
  data() {
    return {
      weekdays: ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"],
      weekdayNames: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      month: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
      currentDate: {
        date: 0,
        month: 0,
        year: 0,
      },
    };
  },

  computed: {
    currentDay() {
      return new Date(
        this.currentDate.year,
        this.currentDate.month,
        this.currentDate.date
      ).getDay();
    },
    currentMonthDays() {
      return new Date(
        this.currentDate.year,
        this.currentDate.month + 1,
        0
      ).getDate();
    },
    prevMonthDay() {
      let year =
        this.currentDate.month === 0
          ? this.currentDate.year - 1
          : this.currentDate.year;
      let month = this.currentDate.month === 0 ? 11 : this.currentDate.month;
      return new Date(year, month, 0).getDate();
    },
    firstMonthDay() {
      let firstDay = new Date(
        this.currentDate.year,
        this.currentDate.month,
        1
      ).getDay();
      if (firstDay === 0) firstDay = 7;
      return firstDay;
    },
  },

  methods: {
    getCurrentDate() {
      let today = new Date();
      this.currentDate.date = today.getDate();
      this.currentDate.month = today.getMonth();
      this.currentDate.year = today.getFullYear();
    },
    prevMonth() {
      if (this.currentDate.month == 0) {
        this.currentDate.month = 11;
        this.currentDate.year -= 1;
      } else {
        this.currentDate.month -= 1;
      }
    },
    nextMonth() {
      if (this.currentDate.month == 11) {
        this.currentDate.month = 0;
        this.currentDate.year += 1;
      } else {
        this.currentDate.month += 1;
      }
    },
  },

  created() {
    this.getCurrentDate();
  },
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
  grid-template-columns: repeat(7, 1fr);
  grid-gap: 8px;
  padding: $property;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px 0;
  }
}

$PointColor: orangered;
$Space: 16px;

#Calendar {
  overflow: hidden;
}

.CalendarTop {
  @include flex(center, "", column);
  margin: $Space 0;
}

.CurrentMonth {
  @include flex("", center, "");

  li {
    width: 20%;

    &:nth-child(1) {
      text-align: right;
    }
    &:nth-child(2) {
      width: 60%;
      font-weight: 600;
      font-size: 1.2em;
    }
    &:nth-child(3) {
      text-align: left;
    }
  }
}

.Weekdays {
  @include calendarLayout(4px 16px);
  font-size: 0.9em;
  font-weight: 500;
  background-color: #eee;

  div {
    &:last-child {
      color: $PointColor;
    }
  }
}

.Date {
  @include calendarLayout(16px);
  font-weight: 600;
  color: lightgray;

  .Day {
    color: black;
    padding: 0 6px;

    &:nth-child(7n) {
      color: $PointColor;
    }

    &:hover {
      background-color: $PointColor;
      color: white;
      border-radius: 4px;
    }
  }
  .Active {
    border: 1px dashed $PointColor;
    color: $PointColor;
    border-radius: 6px;
  }
}
</style>
