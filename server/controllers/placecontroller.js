import AppError from "../utils/apperror.js";
//return next(new AppError("message", statusCode)); to send error
import { catchAsync } from "../utils/catchasync.js";
import { posts as places } from "../data/data.js";
import { Place } from "../model/placemodel.js";

export const getAllPlaces = catchAsync(async (req, res, next) => {
  let placesQuery = Place.find();

  const places = await placesQuery;

  res.status(200).json({
    status: "success",
    length: places.length,
    places,
  });
});

export const getPlaceById = catchAsync(async (req, res, next) => {
  let placesQuery = Place.findById(req.params.id);

  const placeFound = await placesQuery;

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

  await Place.create(body);

  res.status(201).json({
    status: "success",
    message: "post added",
  });
});

export const updatePlace = catchAsync(async (req, res, next) => {
  const placeQuery = Place.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });

  const place = await placeQuery;

  res.status(200).json({
    status: "success",
    message: "post updated",
  });
});

export const deletePlace = catchAsync(async (req, res, next) => {
  const placeQuery = Place.findByIdAndDelete(req.params.id);

  const place = await placeQuery;

  res.status(204).json({
    status: "success",
  });
});
