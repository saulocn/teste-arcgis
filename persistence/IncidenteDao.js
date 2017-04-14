var idInicial = 4;
var incidentes = [
            {
                id:1,
                nomeCompleto: 'João da Silva',
                tipo: 'Queda de energia',
                latitude: '-23.8878195',
                longitude: '-45.1008863' 
            },
            
            {
                id:2,
                nomeCompleto: 'Carlos Augusto',
                tipo: 'Crime',
                latitude: '-20.8878195',
                longitude: '-23.1008863' 
            },
            
            {
                id:3,
                nomeCompleto: 'André de Oliveira',
                tipo: 'Queda de árvore',
                latitude: '-45.8878195',
                longitude: '-37.1008863' 
            },
            
            {
                id:4,
                nomeCompleto: 'Joaquim Padilha',
                tipo: 'Queda de energia',
                latitude: '-13.8878195',
                longitude: '-35.1008863' 
            },
            
        ];

function IncidenteDao() {
}

IncidenteDao.prototype.salva = function(incidente,callback) {
    idInicial++;
    incidente.id = idInicial;
    incidentes.push(incidente);
}


IncidenteDao.prototype.lista = function (callback) {
    return incidentes;
}
IncidenteDao.prototype.buscaPorId = function (id,callback) {
    var incidente = incidentes.filter(function(incidente){
        return id = incidente.id;
    })[0];
    return incidente;
}

module.exports = function(){
    return IncidenteDao;
};