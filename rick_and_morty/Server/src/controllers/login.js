const allowedUsers = require("../utils/allowedUsers");
const { User } = require("../DB_connection");
const { Op } = require("sequelize");

function login(req, res) {
  const { email, password } = req.query;
  let access = false;

  allowedUsers.forEach((user) => {
    if (user.email === email && user.password === password) {
      access = true;
    }
  });

  return res.json({ access }); 
}

async function createUser(obj) {
  try {
    
    const user = await User.findOrCreate({
      where: { email: obj.email },
      defaults: {
        password: obj.password,
      },
    });


    return user;
  } catch (error) {
    throw error;
  }
}

async function getUsers() {
  try {
    const users = await User.findByPk("adf16015-acaa-4ca2-8734-d515b72b6da7");
    return users;
  } catch (error) {
    return error;
  }
}



async function updater(obj) {
  try {
    const update = await User.update(obj, { where: { password: "40404040" } });
    return update;
  } catch (error) {
    return error;
  }
}

async function deleter(id) {
  try {
    const user = await User.destroy({ where: { id } });
    // user.destroy();
    return user;
  } catch (error) {
    return error;
  }
}

async function truncateModel() {
  try {
    return await User.truncate();
  } catch (error) {
    return error;
  }
}

async function filter(str) {
  try {
    console.log("entré");

    const filtered = await User.findAll({
      where: {
        email: {
          [Op.like]: str + "%",
        },
      },
    });

    return filtered;
  } catch (error) {
    return error;
  }
}

module.exports = {
  login,
  createUser,
  getUsers,
  updater,
  deleter,
  truncateModel,
  filter,
};