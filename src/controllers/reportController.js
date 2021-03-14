const User = require("../models/User");
const { Op } = require("sequelize");

module.exports = {
  async show(req, res) {
    //Econtrar todos os usuários que tem email que terminam com @fake.com
    //Desses usuarios encontrar todos que moram na rua "Uma rua qualquer"
    //Desses usuarios encontrar todas as tecnologias que começam com C
    const users = await User.findAll({
      attributes: ["name", "email"],
      where: {
        email: {
          [Op.like]: "%@fake.com",
        },
      },
      include: [
        {
          association: "addresses",
          attributes: ["street", "number"],
          where: { street: "Uma rua qualquer" },
        }, //endereços
        {
          association: "techs",
          attributes: ["name"],
          through: { attributes: [] },
          required: false,
          where: {
            name: {
              [Op.like]: "%C",
            },
          },
        }, //tecnologias
      ],
    });

    res.json(users);
  },
};
