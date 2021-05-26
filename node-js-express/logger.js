
class Logger {
    constructor(){
        this.servicename = "LOGGER"
        this.loggerLogs = true;
    }

    log(string, service) {
        if(service !== undefined){
            console.log(service + " : " + string);
        }else{
            console.log(this.servicename + " : " + string)
        }
    }

    setServiceName(newServiceName){
        this.servicename = newServiceName;
        this.loggerLogs ? this.log("Change service name to: " + newServiceName, "LOGGER"): '';
    }

    makeDefaultSettings(){
        this.servicename = "LOGGER";
        this.loggerLogs ? this.log("Change service name to default"): '';
    }
    
    setLoggerLogs(setting){
        if(typeof setting !== 'boolean'){
            this.log("setting type not boolean", "LOGGER_ERROR");
        }else{
            this.loggerLogs = setting;
            this.log("Change logger setting : loggerLogs", "LOGGER");
            
        }
    }
}

module.exports = new Logger();