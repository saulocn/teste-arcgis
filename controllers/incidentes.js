module.exports = function(app){ 
    app.get('/incidentes', function(req, res){
		var incidenteDao = new app.persistence.IncidenteDao();
        var incidentes = incidenteDao.lista();
        if(incidentes){
            res.json({data:incidentes});
            return;
        }
        res.status(500).send("Erro ao obter a lista de incidentes!");
	});

    app.post('/incidentes', function(req, res){
		var incidenteDao = new app.persistence.IncidenteDao();
        incidenteDao.salva(req.body);
        console.log(req.body);
        res.status(200).send("Incidente adicionado com sucesso!");
	});
}