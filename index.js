const express= require('express');
const morgan=require('morgan');
const tasksRoutes=require('./routes/tasks')

const app=express();
app.use(morgan('dev'));
app.use(express.json());
//Routes 
app.use('/api/tasks',tasksRoutes);
//if routes are not found
app.use((req,res)=> res.status(404).json({error:'Not Found'}));





const PORT=process.env.PORT || 3000;
app.listen(PORT,()=>{console.log(`Server is running on port ${PORT}`)});