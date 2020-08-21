
    var Radiología
        Radiología = [
        { Hora: '11:00', Especialista: 'Ignacio Schulz', Paciente: 'Francisca Rojas', Rut:
        '9878782-1', Prevision: 'Fonasa'},
        { Hora: '11:30', Especialista: 'Federico Subercaseaux', Paciente: 'Pamela Estrada', Rut:
        '15345241-3', Prevision: 'Isapre'},
        { Hora: '15:00', Especialista: 'Fernando Wurthz', Paciente: 'Armando Luna', Rut:
        '16445345-9', Prevision: 'Isapre'},
        { Hora: '15:30', Especialista: 'Ana María Godoy', Paciente: 'Manuel Godoy', Rut:
        '17666419-0', Prevision: 'Fonasa'},
        { Hora: '16:00', Especialista: 'Patricia Suazo', Paciente: 'Ramon Ulloa', Rut:
        '14989389-K', Prevision: 'Fonasa'},
    ]; 

    var Traumatología
        Traumatología = [
        { Hora: '8:00', Especialista: 'María Paz Altuzarra', Paciente: 'Paula Sanchez', Rut:
        '15554774-5', Prevision: 'Fonasa'},
        { Hora: '10:00', Especialista: 'Raúl Araya', Paciente: 'Angélica Navas', Rut:
        '15444147-9', Prevision: 'Isapre'},
        { Hora: '10:30', Especialista: 'María Arriagada', Paciente: 'Ana Klapp', Rut:
        '17879423-9', Prevision: 'Isapre'},
        { Hora: '11:00', Especialista: 'Alejandro Badilla', Paciente: 'Felipe Mardones', Rut:
        '1547423-6', Prevision:'Isapre'},
        { Hora: '11:30', Especialista: 'Cecilia Budnik', Paciente: 'Diego Marre', Rut:
        '16554741-K', Prevision: 'Fonasa'},
        { Hora: '12:00', Especialista: 'Arturo Cavagnaro', Paciente: 'Cecilia Mendez', Rut:
        '9747535-8', Prevision: 'Isapre'},
        { Hora: '12:30', Especialista: 'Andres Kanacri', Paciente: 'Marcial Suazo', Rut:
        '11254785-5', Prevision:'Isapre'},   
    ];  

    var Dental
        Dental = [
        { Hora: '8:30', Especialista: 'Andrea Zuñiga', Paciente: 'Marcela Retamal', Rut:
        '11123425-6', Prevision: 'Isapre'},
        { Hora: '11:00', Especialista: 'María Paz Zañartu', Paciente: 'Angel Muñoz', Rut:
        '9878789-2', Prevision: 'Isapre'},
        { Hora: '11:30', Especialista: 'Scarlett Witting', Paciente: 'Mario Kast', Rut:
        '7998789-5', Prevision: 'Fonasa'},
        { Hora: '13:00', Especialista: 'Francisco Von Teuber', Paciente: 'Karin Fernandez', Rut:
        '18887662-K', Prevision:'Fonasa'},
        { Hora: '13:30', Especialista: 'Eduardo Viñuela', Paciente: 'Hugo Sanchez', Rut:
        '17665461-4', Prevision: 'Fonasa'},
        { Hora: '14:00', Especialista: 'Raquel Villaseca', Paciente: 'Ana Sepulveda', Rut:
        '14441281-0', Prevision: 'Isapre'},
    ]; 

    document.write('<h1>Estadisticas centro médico ñuñoa</h1>');
    document.write('<hr>');
    document.write('<h3>Cantidad de atenciones para</h3>');
    document.write('<h3>Radiología: '+Radiología.length+' pacientes</h3>');
    document.write('<h3>Traumatología: '+Traumatología.length+' pacientes</h3>');
    document.write('<h3>Dental: '+Dental.length+' pacientes</h3>');
    document.write('<hr>');
    document.write(`<h4>Primera atencion: ${Radiología[0].Paciente} - ${Radiología[0].Prevision} | Última atención: ${Radiología[Radiología.length -1].Paciente} - ${Radiología[Radiología.length -1].Prevision}.</h4>`);
    document.write(`<h4>Primera atencion: ${Traumatología[0].Paciente} - ${Traumatología[0].Prevision} | Última atención: ${Traumatología[Traumatología.length -1].Paciente} - ${Traumatología[Traumatología.length -1].Prevision}.</h4>`);
    document.write(`<h4>Primera atencion: ${Dental[0].Paciente} - ${Dental[0].Prevision} | Última atención: ${Dental[Dental.length -1].Paciente} - ${Dental[Dental.length -1].Prevision}.</h4>`);











	




