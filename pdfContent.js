module.exports = {
    content: [
        {
               sstyle: 'tableExample',
               color: '#444',
               table: {
                   widths: [200, 'auto', 'auto'],
                   headerRows: 2,
                   // keepWithHeaderRows: 1, IPERC CONTINUO IDENTIFICACIÓN DE PELIGROS, EVALUACIÓN DE RIESGOS Y DETERMINACIÓN DE CONTROLES
                   body: [
                       [{text: 'Prueba', style: 'tableHeader', colSpan: 3, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
                       [{text: 'IPERC CONTINUO IDENTIFICACIÓN DE PELIGROS, EVALUACIÓN DE RIESGOS Y DETERMINACIÓN DE CONTROLES', style: 'tableHeader', colSpan: 3, alignment: 'center'}, {}, {text: 'Header 3', style: 'tableHeader', alignment: 'center'}],
                       [{text: 'NOMBRES Y APELLIDOS', style: 'tableHeader', alignment: 'center'}, {text: 'MATRIZ DE EVALUACION DE RIESGOS	', style: 'tableHeader', alignment: 'center'}, {text: 'AREA', style: 'tableHeader', alignment: 'center'}],
                       ['Enrique Pelaez', 'Sample value 2', 'LABOR / LUGAR :'],
                       [{rowSpan: 3, text: '*Riesgos de Seguridad: Atrapamiento, Atropello, Asfixia, Caídas a distinto nivel, Electrocución, Explosión, Incendio, Volcadura, Intoxicación, Incrustamiento, Corte, etc. Riesgos de Salud: Ruido, Estrés Termico, Radiación Solar'}, 'Sample value 2', 'NIVEL:'],
                       ['', 'Sample value 2', 'EMPRESA'],
                       ['Sample value 1', 'Sample value 2', 'FECHA:'],
                       ['Sample value 1', {colSpan: 2, rowSpan: 2, text: 'Both:\nrowSpan and colSpan\ncan be defined at the same time'}, ''],
                       ['Sample value 1', '', ''],
                   ]
               }	
               },
                   {
                    text: 'NOTA: Eliminar Peligros es Tarea Prioritaria antes de Iniciar las Operaciones Diarias',
                   style: ['quote', 'small']
           }
       ]
};