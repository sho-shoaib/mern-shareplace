import { User } from "../model/usermodel.js";
import { catchAsync } from "../utils/catchasync.js";

export const getAllUsers = catchAsync(async (req, res, next) => {
  const userQuery = User.find();

  const users = await userQuery;

  res.status(200).json({
    status: "success",
    length: users.length,
    users,
  });
});

export const createUser = catchAsync(async (req, res, next) => {
  const userQuery = User.create(req.body);

  const user = await userQuery;

  res.status(201).json({
    status: "success",
    message: "user added",
  });
});

export const updateUser = catchAsync(async (req, res, next) => {
  const userQuery = User.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  const user = await userQuery;

  res.status(204).json({
    status: "success",
    message: "user updatets",
  });
});

export const getUserById = catchAsync(async (req, res, next) => {
  const userQuery = User.findById(req.params.id);

  const user = await userQuery;

  res.status(200).json({
    status: "success",
    user,
  });
});
