<template>
    <section class="diaryTotal">
        <div class="diaryTitle">먹고 죽은 귀신이 때깔도 좋다.</div>
        <div class="diaryList">
            <div id="diaryDate">{{ date }}</div>
                <ul class="diaryText">
                    <li>
                        <h1><span>On Sunday</span>
                            <span>In December 2018.</span>
                        </h1>
                        <img src="../assets/diary/diaryWeather.svg">
                    </li>
                    <li>나는 월요일이 싫다.
                    <img src="../assets/diary/cat.jpg">
                    </li>
                </ul>
        </div>
    </section>
</template>

<script>
export default {
  name: 'Diary',
  data() {
      return {
        date : "day"
      };
    },
  };
</script>

<style lang="scss" scoped>
@import '../Mixin.scss'; 
    .diaryTotal{
        @include object(block, 100%, 100%);
        padding: 5px; 
        & > .diaryTitle{
            @include object(block, 80%, 40px);
            background: #ccc; text-align: center; line-height: 40px;
            color: black; border-radius: 5px; margin: 0 auto;
        }
        & > .diaryList{
            margin: 0 auto; height: 100%; display: flex;
             border-radius: 5px; margin-top: 20px; padding-bottom: 3%;
            & > #diaryDate{
                @include object(block, 15%, 100%);
                color: black; font-weight: bold; font-size: 38px;
                margin-top: 6%;
            }
            & > .diaryText{
                 @include object(block, 85%, 100%);
                margin: 0 auto; margin-top: 20px; margin-top: 20px;
                 & > li{
                     & > h1{
                        display: inline;
                        @include object(block, 85%, 100%);
                        border-bottom: 1px solid #ccc;
                        & > span:last-child{margin-top: 10px;}
                    }
                    
                 }
                 & > li:first-child{
                    display: flex; align-items: center; 
                    flex-flow: row wrap; height: 60px;
                    margin-bottom: 10px;
                     & > img{@include object(block, 10%, 80%); object-fit: contain;}
                }
                & > li:last-child{
                    padding-right: 17%;
                    padding-left: 7%;
                    line-height: 3;
                    & > img{border-radius: 5px;}
                }
            }
        }

    }
</style>
