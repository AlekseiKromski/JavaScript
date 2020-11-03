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
        }
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

