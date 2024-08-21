const express = require('express');
const getEntrepreneur = require('../controllers/entrepreneursControllers/getEntrepreneurs');
const addEntrepreneur = require('../controllers/entrepreneursControllers/addEntrepreneur');
const deleteEntrepreneur = require('../controllers/entrepreneursControllers/deleteEntrepreneur');
const updateEntrepreneurById = require('../controllers/entrepreneursControllers/UpdateEntrepreneureById');
const getEntrepreneurById = require('../controllers/entrepreneursControllers/getEntrepreneurById');
const ctrlWrapper = require('../helpers/ctrlWrapper');

const entrepreneursRouter = express.Router();

entrepreneursRouter.get('/', ctrlWrapper(getEntrepreneur));
entrepreneursRouter.get('/:id', ctrlWrapper(getEntrepreneurById))
entrepreneursRouter.post('/', ctrlWrapper(addEntrepreneur));
entrepreneursRouter.delete('/:id', ctrlWrapper(deleteEntrepreneur));
entrepreneursRouter.put('/:id', ctrlWrapper(updateEntrepreneurById));


module.exports = entrepreneursRouter;

