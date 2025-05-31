<?php
header("Content-Type: application/json");
$request = $_SERVER['REQUEST_URI'];

if (strpos($request, "/backend/public/products-services") !== false) {
  require __DIR__ . '/../api/productos.php';
} else {
  http_response_code(404);
  echo json_encode(["error" => "Ruta no encontrada"]);
}
?>
