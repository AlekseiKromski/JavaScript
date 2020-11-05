<template>
  <div class="row">
    <div class="col-12">
      <div  v-if="fuel_data.length != 0">
        <p><b>Таблица значений:</b></p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Расход на 100 км</th>
              <th scope="col">Средняя цена топлива</th>
              <th scope="col">Кольво км</th>
              <th scope="col">Дата</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="fd in fuel_data" v-bind:key="fd.id">
              <td>{{fd.average_consumption}} л/100</td>
              <td>{{fd.average_price}} л/евро</td>
              <td>{{fd.km}} км</td>
              <td>{{fd.date}}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div v-if="fuel_data.length != 0" class="mt-5"> 
        <p><b>Среднее значение за месяц:</b></p>
        <table class="table table-striped">
          <thead>
            <tr>
              <th scope="col">Расход на 100 км</th>
              <th scope="col">Примерная сумма</th>
              <th scope="col">Кольво км</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{averangeByMounth.average_consumption}} л/100</td>
              <td>{{averangeByMounth.average_price}} евро / мес</td>
              <td>{{averangeByMounth.km}} км</td>
            </tr>
          </tbody>
        </table>
      </div>  
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex';
export default {
  computed: {
    ...mapState({
      fuel_data: state => state.consumption.fuel_data,
      averangeByMounth: state => {
        let avr = {};
        avr.average_consumption =  Math.round(state.consumption.averangeByMounth.average_consumption /  state.consumption.averangeByMounth.count * 100) / 100;
        avr.average_price = state.consumption.averangeByMounth.average_price /  state.consumption.averangeByMounth.count;
        avr.km =  Math.round(state.consumption.averangeByMounth.km /  state.consumption.averangeByMounth.count * 100) / 100;
        avr.average_price = (((avr.average_consumption * avr.km) / 100) * avr.average_price) * 30;
        return avr;
      },
    }),

  },
  data: function(){
    return {
    }
  },
  methods:{
        
  }
}
</script>

<style>

</style>
