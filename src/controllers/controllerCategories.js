const {
    Categories,
  } = require('../database/models');

class controllerUser{    
    static async getCategory(req,res,next){
        try {
            const categoryType = req.query.type


            if (categoryType === 'income') {
                return Categories.findAll({ where: { category_type: 1 } });
            } else  if (categoryType === 'outcome') {
                return Categories.findAll({ where: { category_type: 2 } });
            }
    
            return []
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }

}

module.exports = controllerUser