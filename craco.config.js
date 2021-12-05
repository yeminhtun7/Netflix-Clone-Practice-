const path = require("path");

module.exports = {
   webpack : {
      alias : {
         '@home' : path.resolve(__dirname, "src/home"),
         '@component' : path.resolve(__dirname, "src/components/index")
      }
   }
}