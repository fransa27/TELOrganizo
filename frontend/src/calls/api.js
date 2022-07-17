import React, {Component, useState} from 'react';

export const createTask = async (newTask) =>{
    const res = await fetch('http://10.0.2.2:4000/tareas',{
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(newTask)
    })
    return await res.json()
    
}
