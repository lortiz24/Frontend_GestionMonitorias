
const generateEmail = (emailMonitor,materia,fecha) => {
    return {
        emailMonitor,
        asunto: 'Nueva asignacion de monitoria',
        text: `Cordial saludo.\nLa presente es para informarle de una nueva monitoria de ${materia} para la fecha ${fecha}`
    }
}

export default generateEmail;