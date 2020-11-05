export default {
    actions: {
        
    },
    mutations: {
        changeActiveToFalse: function(state){
            state.links.forEach(e => {
                if(e.active) e.active=false;
            })
        },
        updateAverage_consumption: function(state, new_value){
            state.average_consumption = new_value;
        },
        updateAverage_price: function(state, new_value){
            state.average_price = new_value;
        },
        updateKm: function(state, new_value){
            state.km = new_value;
        },
        updateDialog: function(state, new_value){
            state.dialog = new_value;
        },
        updateFuelResult: function(state, new_value){
            state.FuelResult = new_value;
        },
        updateFuelResultPrice: function(state, new_value){
            state.FuelResultPrice = new_value;
        },
        updateError_message: function(state, new_value){
            state.error_message = new_value;
        },
        addFuelData: function(state, value){
            state.fuel_data.push(value);
            
            //set averange by mounth
            state.averangeByMounth.count = state.fuel_data.length;
            state.averangeByMounth.average_consumption = parseFloat(state.averangeByMounth.average_consumption) + parseFloat(value.average_consumption);
            state.averangeByMounth.average_price = parseFloat(state.averangeByMounth.average_price) + parseFloat(value.average_price);
            state.averangeByMounth.km = parseInt(state.averangeByMounth.km) + parseInt(value.km);


            
        },
    },
    state: {
        links:[
            {
                id: "howMuchFuel",
                name: "fuel",
                active: true
        
            },
            {
                id: "howMuchKM",
                name: "km",
                active: false
        
            }
        ],
        fuel_data: [],
        averangeByMounth: {
            average_consumption : 0,
            average_price: 0,
            km: 0,
            count: 0
        },
        FuelResult: null,
        FuelResultPrice: null,
        average_consumption: null,
        average_price: null,
        km: null,
        dialog: 'howMuchFuel',
        error_message: null,
    },
    getters: {

    }
}

