import AppError from "../utils/apperror.js";
//return next(new AppError("message", statusCode)); to send error
import { catchAsync } from "../utils/catchasync.js";
import { posts as places } from "../data/data.js";

export const getAllPlaces = catchAsync(async (req, res, next) => {
  res.status(200).json({
    status: "success",
    length: places.length,
    places,
  });
});

export const getPlaceById = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const placeFound = places.find((place) => {
    return place.id === id * 1;
  });

  if (!placeFound) {
    return next(new AppError(`No post found with id ${id}`, 404));
  }

  res.status(200).json({
    status: "success",
    place: placeFound,
  });
});

export const getPlacesByUserId = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const placesFound = places.filter((place) => place.creatorId === id * 1);

  if (!placesFound) {
    return next(new AppError(`No posts found for user with id ${id}`), 404);
  }

  res.status(200).json({
    status: "success",
    length: placesFound.length,
    places: placesFound,
  });
});

export const addPlace = catchAsync(async (req, res, next) => {
  const body = req.body;

  if (!body || body === {}) {
    return next(new AppError(`Invalid data sent`), 404);
  }

  places.push(body);

  res.status(200).json({
    status: "success",
    message: "post added",
  });
});
