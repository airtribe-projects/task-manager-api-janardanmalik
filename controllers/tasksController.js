const { v4: uuidv4 } = require('uuid');
//this is in memory staorage array for tasks
let tasks=[];
exports.create=(req,res)=>{
const {title,description='',status='todo',dueDate}=req.body;
const newTask={
id:uuidv4(),
title,
description,
status,
dueDate:dueDate ? new Date(dueDate).toISOString():null,
createdAt:new Date().toISOString(),
updatedAt:new Date().toISOString()
};
tasks.push(newTask);
res.status(201).json(newTask);
}

exports.getAll=(req,res)=>{
res.json(tasks);
}
exports.getById=(req,res)=>{
    let foundTask=null;
    for(let i=0;i<tasks.length;i++){
    if(tasks[i].id===req.params.id){
        foundTask=tasks[i];
        break;
    }
}
    if(!foundTask){
        return res.status(404).json({error:'task not found'});
    }
    res.json(foundTask);
};

exports.update=(req,res)=>{
const task=tasks.find(t=>t.id===req.params.id);
if(!task) return res.status(404).json({error:'Task not found'});

const{title,description,status,dueDate}=req.body;
if (title !== undefined) task.title = title;
if (description !== undefined) task.description = description;
if (status !== undefined) task.status = status;
if (dueDate !== undefined) task.dueDate = new Date(dueDate).toISOString();

task.updatedAt= new Date().toISOString();
res.json(task);
};
exports.remove=(req,res)=>{
  const index=tasks.findIndex(t=>t.id===req.params.id);
    if(index===-1) return res.status(404).json({error:'Task not found'});
    tasks.splice(index,1);
    res.status(204).send();  
};