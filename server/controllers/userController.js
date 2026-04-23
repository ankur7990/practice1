import User from "../models/User.js";
import mongoose from "mongoose";

async function getUsers(req, res) {
  try {
    const getUsers = await User.find({});

    res.status(201).json({ message: getUsers });
  } catch (err) {
    console.log("error getting users", err.message);
  }
}

async function addUsers(req, res) {
  try {
    const { name, email, password } = req.body;
    const createUser = await User.create({
      name,
      email,
      password,
    });

    res.status(201).json({
      message: "User created successfully.",
      data: createUser,
    });
  } catch (err) {
    console.log("error creating user", err);
  }
}

async function editUsers(req, res) {
  try {
    const id = req.params.id;
    const updatedData = req.body;

    if (!mongoose.isValidObjectId(id)) {
      return res.status(400).json({ message: "Invalid ID format" });
    }

    const updateUser = await User.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });

    if (!updateUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updateUser);
  } catch (err) {
    console.log("error in put", err.message);
  }
}

async function deleteUsers(req, res) {
  try {
    const id = req.params.id;

    const deleteUser = await User.findOneAndDelete(id);
    res.status(200).json(deleteUser);
  } catch (err) {
    console.log("error in delete", err.message);
  }
}

export { getUsers, addUsers, editUsers, deleteUsers };
