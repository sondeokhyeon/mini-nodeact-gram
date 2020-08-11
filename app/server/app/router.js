import express from 'express';
import { photoUploader } from './config'
import {sequelize, Sequelize} from '../db/models/index';
const {Op} = Sequelize
const router = express.Router();

router.get('/sync', async (req,res) => {
    try {
        await sequelize.sync()
        res.json('싱크가 되었습니다.')
        return;
    } catch(e) {
        res.json('싱크가 실패하였습니다.')
        console.error(e)
        return;
    }
});

router.get('/list', async (req, res) => {
    const { query : {date}} = req;
    // const data = await sequelize.models.photo.findAll({
    //     raw:true,
    //     where: {
    //         createdAt: {
    //             [Op.like]: date + '%'
    //         }
    //     },
    //     order : [
    //         ['createdAt', 'DESC']
    //     ]
    // })
    const query = `select * from photos where createdAt like '${date}%' order by createdAt desc  `
    const data = await sequelize.query(query, {
        type: sequelize.QueryTypes.SELECT
    })
    res.json(data)
});

router.get('/:id', (req, res) => {
    const {id} = req.params
    console.log(id)
    res.json('hello world!')
});

router.post('/upload', photoUploader.array('photo', 50), async (req,res) => {
    const {files} = req
    try {
        for (let i = 0; i < files.length; i++) {
            await sequelize.models.photo.create({
                filename : files[i].filename,
                ori_filename:files[i].originalname,
            })
        }
        res.json({'result' : 'success'})
    } catch (e) {
        console.log(e)
        res.json({
            'result' : 'fail', 
            'error' : e
        })
    }
});

router.delete('/:idx', (req,res) => {
    const {idx} = req.params 
    try {
        sequelize.models.photo.destroy({
            where: {
                idx
            } 
        })
        res.json({'result' : 'success'})
    } catch (e) {
        res.json({
            'result' : 'fail', 
            'error' : e
        })
    }

});

export default router;