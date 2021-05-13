const path = require('path');
const fs = require('fs');

const p = path.join(
    process.mainModule.path,
    'data',
    'card.json'
)
class Card {


    static async add (course) {
        const card = await Card.fetch();
        const index = card.courses.findIndex(c => c.id === course.id);
        const candidate = card.courses[index];
        if(candidate){
            //course already is
            candidate.count++;
            card.courses[index] = candidate;
        }else{
            //no course
            course.count = 1;
            card.courses.unshift(course)
        }

        return new Promise((resolve, reject) => {
            fs.writeFile(p, JSON.stringify(card),
            (error) => {
                if(error){
                    reject(error);
                }else{
                    resolve();
                }
            })
        })
    }

    static async fetch(){
      return new Promise((resolve, reject) => {
          fs.readFile(p, 'utf-8', (error, content) => {
              if(error){
                  reject(error);
              }else{
                  resolve(JSON.parse(content))
              }
          })
      })  
    }
}

module.exports = Card;