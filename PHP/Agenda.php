<?php

use function PHPSTORM_META\map;

require_once __DIR__ . '/AgendaInterface.php';
require_once __DIR__ . '/Evento.php';

/*
    Classe que abstrai uma agenda; consiste de uma composição simples de eventos.
    Implemente o método privado para filtrar os eventos por dia e o método da AgendaInterface
    para gerar o json ordenado.
  */

class Agenda implements AgendaInterface
{

  private $eventos = [];
  public function __construct($eventos)
  {
    $this->eventos = $eventos;
  }

  /**
   * Função que irá formatar os dados dos Eventos para o estilo Json
   */
  public function imprimirJsonEventosDiaOrdenados($dataHoraDia)
  {

    //Irá isolar somente os eventos
    $onlyEvents = array_map(function ($evento) {
      return $evento->getEstadoEmArrayAssociativo();
    }, $this->filtrarEventosDia($dataHoraDia));

    //Irá ordernar os eventos pela data
    usort($onlyEvents, function ($val1, $val2) {
      if (new DateTime($val1["dataHora"]) == new DateTime($val2["dataHora"])) {
        return 0;
      }
      return new DateTime($val1["dataHora"]) < new DateTime($val2["dataHora"]) ? -1 : 1;
    });

    //Retorna os dados em formato Json
    return json_encode(array_map(function ($evento) {
      return $evento;
    }, $onlyEvents));
  }

  /**
   * Função que retorna os eventos com a data passada no parametro
   * @return Array Lista dos eventos corespondentes com a data passada
   */
  private function filtrarEventosDia($dataHoraDia)
  {
    return array_filter($this->eventos, function ($evento) use ($dataHoraDia) {
      return $evento->getDataHora()->format('Y-m-d') == $dataHoraDia;
    });
  }
}
