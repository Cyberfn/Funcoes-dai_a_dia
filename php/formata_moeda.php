<?

function formatar_moeda(float $valor, string $moeda = 'R$'): string {
    return $moeda . ' ' . number_format($valor, 2, ',', '.');
}