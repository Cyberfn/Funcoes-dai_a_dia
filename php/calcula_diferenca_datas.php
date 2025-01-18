<? 

function calcular_diferenca_datas(string $data1, string $data2): string {
    $d1 = new DateTime($data1);
    $d2 = new DateTime($data2);
    $intervalo = $d1->diff($d2);

    return $intervalo->format('%y anos, %m meses e %d dias');
}
