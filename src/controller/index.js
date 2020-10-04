const { User } = require('../db/models');

const createUser = async (req, res) => {
  try {
    const user = await User.create(req.body);
    return res.status(201).json({ user });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const getUserById = await User.findByPk(req.params.id);
    if (getUserById) {
      return res.send(getUserById);
    }
    return res.status(404).send('Error: User not found');
  } catch (error) {
    return res.status(418).send(error.message);
  }
};

const updateUser = async (req, res) => {
  try {
    console.log('Update ',req.body);
    const updated = await User.update(req.body, {
      where: { id: req.params.id },
    });
    if (updated) {
      const updatedUser = await User.findOne({
        where: { id: req.params.id },
      });
      return res.status(200).json({ User: updatedUser });
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

const deleteUser = async (req, res) => {
  try {
    const deleted = await User.destroy({
      where: { id: req.params.id },
    });
    if (deleted) {
      return res.status(204).send('User deleted');
    }
    throw new Error('User not found');
  } catch (error) {
    return res.status(500).send(error.message);
  }
};

module.exports = {
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
