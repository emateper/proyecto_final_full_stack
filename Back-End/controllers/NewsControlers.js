import { where } from "sequelize";
import NewsModel from "../models/newsModels.js";

export const showAllNews = async (req, res) => {

    try {
        const news = await NewsModel.findAll()
        res.json(news)
    } catch (error) {
        res.json ( {message: error.message} )
    }
}

export const getNews = async (req, res) => {
    try {
        const shownews = await NewsModel.findAll({
            where: {
                id: req.params.id
            }
        })
    } catch (error) {
        res.json( { message:error.message } )
    }
}

export const createNews = async (req, res) => {
    try {
        const create = await NewsModel.create(req.body)
        res.status(201).json(create);
    } catch (error) {
        res.json( { message:error.message } )
    }
}

export const updateNews = async (req, res) => {
    try {
        NewsModel.update(req.body, {
            where: { id: req.params.id }
        })
        res.json({
            "message": "Registro actualizado correctamente!"
        })
    } catch (error) {
        res.json( { message:error.message } )
    }
}

export const deleteNews = async (req, res) => {
    try {
        await NewsModel.destroy({
            where: { id: req.params.id }
        })
        res.json({
            "message": "Registro borrado correctamente!"
        })    
    } catch (error) {
        res.json( { message:error.message } )
    }
}