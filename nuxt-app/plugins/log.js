export default (context, inject) => {
    inject('log', () => {
        console.log('Hello from plugins');
    })
    
  }