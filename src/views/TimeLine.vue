<template>
  <div class="TimeLinePage">
    <nav class="TimeLineTopWrap">
      <div class="TimeLineTop">
        <ul class="TimeLineDays">
          <li class="TimeLineDay">M</li><li class="TimeLineDay">T</li><li class="TimeLineDay">W</li><li class="TimeLineDay">T</li><li class="TimeLineDay">F</li><li class="TimeLineDay">S</li><li class="TimeLineDay">S</li>
        </ul>
        <ul class="TimeLineWeeks">
          <li class="TimeLineWeek">
            <ol class="TimeLineDates">
              <li class="TimeLineDate">1</li>
              <li class="TimeLineDate">2</li>
              <li class="TimeLineDate TodayDate">3</li>
              <li class="TimeLineDate">4</li>
              <li class="TimeLineDate">5</li>
              <li class="TimeLineDate">6</li>
              <li class="TimeLineDate">7</li>
            </ol>
          </li>
          <li class="TimeLineWeek">
            <ol class="TimeLineDates">
              <li class="TimeLineDate">8</li>
              <li class="TimeLineDate">9</li>
              <li class="TimeLineDate">10</li>
              <li class="TimeLineDate">11</li>
              <li class="TimeLineDate">12</li>
              <li class="TimeLineDate">13</li>
              <li class="TimeLineDate">14</li>
            </ol>
          </li>
          <li class="TimeLineWeek">
            <ol class="TimeLineDates">
              <li class="TimeLineDate">15</li>
              <li class="TimeLineDate">16</li>
              <li class="TimeLineDate">17</li>
              <li class="TimeLineDate">18</li>
              <li class="TimeLineDate">19</li>
              <li class="TimeLineDate">20</li>
              <li class="TimeLineDate">21</li>
            </ol>
          </li>
          <li class="TimeLineWeek">
            <ol class="TimeLineDates">
              <li class="TimeLineDate">22</li>
              <li class="TimeLineDate">23</li>
              <li class="TimeLineDate">24</li>
              <li class="TimeLineDate">25</li>
              <li class="TimeLineDate">26</li>
              <li class="TimeLineDate">27</li>
              <li class="TimeLineDate">28</li>
            </ol>
          </li>
          <li class="TimeLineWeek">
            <ol class="TimeLineDates">
              <li class="TimeLineDate">29</li>
              <li class="TimeLineDate">30</li>
              <li class="TimeLineDate">31</li>
              <li class="TimeLineDate">1</li>
              <li class="TimeLineDate">2</li>
              <li class="TimeLineDate">3</li>
              <li class="TimeLineDate">4</li>
            </ol>
          </li>
        </ul>
      </div>
    </nav>
    <section class="TimeLineMainWrap">
      <div class="TimeLineMain">
        <div class="TimeLineTimesWrap">
          <ul class="TimeLineTimes">
            <li>00:00</li>
            <li>01:00</li>
            <li>02:00</li>
            <li>03:00</li>
            <li>04:00</li>
            <li>05:00</li>
            <li>06:00</li>
            <li>07:00</li>
            <li>08:00</li>
            <li>09:00</li>
            <li>10:00</li>
            <li>11:00</li>
            <li>12:00</li>
            <li>13:00</li>
            <li>14:00</li>
            <li>15:00</li>
            <li>16:00</li>
            <li>17:00</li>
            <li>18:00</li>
            <li>19:00</li>
            <li>20:00</li>
            <li>21:00</li>
            <li>22:00</li>
            <li>23:00</li>
          </ul>
        </div>
        <div class="TimeLineSchedulesWrap">
          <ul class="TimeLineSchedules">
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
            <li> </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script> 
export default { name: 'TimeLine'}; 
</script>

<style lang="scss" scoped>
  @import '../Mixin.scss';

  /* TimeLine 전체 페이지 */
  .TimeLinePage { 
    @include object('', 100vw, auto);
    position: relative;
    margin: 0 auto;
    border-radius: 5%;
  }



  /* TimeLine 상단 파트 */
  .TimeLineTopWrap {
    @include object('', 100vw, 12vh);
    position: fixed;
    background-color: #FFFFFF;
    box-shadow: 0px 5px 5px #DDDDDD;
    margin-bottom: 10px;
  }

  .TimeLineTop {
    @include object(flex, 100%, inherit);  
    flex-flow: column wrap;
    justify-content: flex-start;
    overflow: hidden;                 // 날짜가 일주일 단위로 swipe 되도록 함
  }

  .TimeLineDays {
      @include object(flex, 100%, 5vh);
      flex-flow: wrap row;
      justify-content: space-evenly;
      &>li{
        @include object(block, 5vh, inherit);
        line-height: 5vh;
        text-align: center;
        color: #BBBBBB;
        font-weight: 700;
      }
      &>li:last-child {
        margin-right: 0;
      }
  }

  .TimeLineWeeks { 
    @include object(flex, 600%, 5vh);
    &>li{
      @include object('', 100vw, inherit);
      float: left;
      &>ol{
        @include object(flex, 100%, inherit);
        flex-flow: wrap row;
        justify-content: space-evenly;
        &>li{
          @include object('', 5vh, inherit);
          float: left;
          line-height: 5vh;
          font-weight: 700;
          border-radius: 30%;
        }
        &>li:last-child {
          margin-right: 0;
        }
      }
    }
  }
  .TodayDate { background-color: orangered; color: #FFFFFF;}



  /* TimeLine Main */
  .TimeLinePage .TimeLineMainWrap {
    @include object('', 100vw, auto);
    padding: 0 25px 0;
    z-index: 1;
  }

  .TimeLineMain {
    @include object(flex, 100%, 300vh);
    flex-flow: wrap row;
    justify-content: flex-start;
  }

  .TimeLineTimesWrap{
    @include object('', 30%, inherit);
  }

  .TimeLineTimes{
    @include object(flex, 100%, inherit);
    flex-flow: wrap column;
    justify-content: space-evenly;
    align-items: flex-start;
    &>li{
      @include object('', 100%, 100px);
      color: #BBBBBB;
      font-weight: 700;
      line-height: 100px;
    }
  }

  .TimeLineSchedulesWrap{
    @include object('', 70%, inherit);
  }

  .TimeLineSchedules{
    @include object(flex, 100%, inherit);
    flex-flow: wrap column;
    justify-content: space-evenly;
    align-items: flex-start;
    &>li{
      @include object('', 100%, 100px);
      border: 0.5px solid #BBBBBB;
    }
  }
</style>