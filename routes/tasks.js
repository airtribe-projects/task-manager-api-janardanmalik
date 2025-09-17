const express=require('express');
const{ create, getById,update,remove} =require('../controllers/tasksController');
const { body } = require('express-validator');
const validate = require('../middleware/validate');
const {getAll}= require('../controllers/tasksController');
const router=express.Router();
router.post(
  '/',
  [
    body('title').notEmpty().withMessage('Title is required'),
    body('status').optional().isIn(['todo','inprogress','done']).withMessage('Invalid status'),
    body('dueDate').optional().isISO8601().withMessage('Due date must be valid date')
  ],
  validate,
  create
);
router.patch('/:id',
    [
     body('title').optional().notEmpty().withMessage('Title cannot be empty'),
     body('status').optional().isIn(['todo','inprogress','done']).withMessage('Invalid status'),
     body('dueDate').optional().isISO8601().withMessage('Due date must be valid date')
    ],
    validate,
    update
);
router.get('/',getAll);
router.get('/:id',getById);
router.delete('/:id',remove);

module.exports=router;