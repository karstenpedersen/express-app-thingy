import { Request, Response } from "express";
import { getSupabase } from "./supabase";

const express = require('express')
const app = express()
const port = process.env.PORT ?? 8080;

app.get('/', function (req: Request, res: Response) {
    const supabase = getSupabase();
    const max = 100;
    const num = Math.floor(Math.random() * max);
    res.send({
        num
    })
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`)
})