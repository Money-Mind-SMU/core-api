const {
    Categories,
  } = require('../database/models');

const {
    CATEGORY_TYPE
  } = require('../helpers/constant')

class controllerUser{    
    static async getCategory(req,res,next){
        try {
            const categoryType = req.query.type


            if (categoryType === 'income') {
                return Categories.findAll({ where: { category_type: CATEGORY_TYPE.INCOME } });
            } else  if (categoryType === 'outcome') {
                return Categories.findAll({ where: { category_type: CATEGORY_TYPE.EXPENSE } });
            }
    
            return []
          } catch (error) {
            console.error(error);
            return res.status(500).json({ error: 'Internal Server Error' });
          }
    }

}

module.exports = controllerUser