const sala = require('../model/sala');
const aluno = require('../model/aluno');
const { Where } = require('sequelize/lib/utils');

module.exports = {
    async alunos(req,res){
        const update_id = req.params.id;
        console.log(update_id);
        const alunos = await aluno.findByPk(update_id,{
            raw:true,
            attributes: ['IDAluno','Nome','Idade','Sexo','Foto','IDSala']
        });
        const salas = await sala.findAll({raw:true,attributes:['IDSala','Nome']});
        res.render('../views/UpdateStudent',{salas,alunos});
    },
    async update(req,res){
        const dados = req.body;
        const id = req.params.id;
        await aluno.update({
            Nome: dados.StudentName,
            Idade: dados.StudentAge,
            Sexo: dados.StudentSex,
            IDSala: dados.IdSala
        },
        {
            where: {IDAluno:id}
        });
        if(req.file){
            const antigaFoto = await aluno.findAll({
                raw:true,
                attributes:['Foto'],
                where:{ IDAluno:id}
            });
            if(antigaFoto[0].Foto != 'DefaultUser.png')fs.unlink(`public/img/${antigaFoto[0].Foto}`,( err => {
                if(err) console.log(err);
            }))
            await aluno.update(
                {Foto: req.file.filename},
                {Where : {IDAluno: id}}
            );
        }
        res.redirect('/');
    }
}