<?php
header("Content-Type: application/json");

$servicios = [
    ["id" => 1, "nombre" => "Taller Telar Junio", "ubicacion" => "Mall Vivo", "fecha" => "08/06/2025"],
    ["id" => 2, "nombre" => "Taller Telar Julio", "ubicacion" => "Laguna de Zapallar", "fecha" => "20/07/2025"]
];

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            foreach ($servicios as $servicio) {
                if ($servicio['id'] == $_GET['id']) {
                    echo json_encode($servicio);
                    exit;
                }
            }
            http_response_code(404);
            echo json_encode(["error" => "Servicio no encontrado"]);
        } else {
            echo json_encode($servicios);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $data['id'] = end($servicios)['id'] + 1;
        $servicios[] = $data;
        echo json_encode(["message" => "Servicio creado", "servicio" => $data]);
        break;

    case 'PUT':
        parse_str(file_get_contents("php://input"), $put_data);
        foreach ($servicios as &$servicio) {
            if ($servicio['id'] == $put_data['id']) {
                $servicio['nombre'] = $put_data['nombre'];
                $servicio['ubicacion'] = $put_data['ubicacion'];
                $servicio['fecha'] = $put_data['fecha'];
                echo json_encode(["message" => "Servicio actualizado", "servicio" => $servicio]);
                exit;
            }
        }
        http_response_code(404);
        echo json_encode(["error" => "Servicio no encontrado"]);
        break;

    case 'DELETE':
        parse_str(file_get_contents("php://input"), $delete_data);
        foreach ($servicios as $index => $servicio) {
            if ($servicio['id'] == $delete_data['id']) {
                unset($servicios[$index]);
                echo json_encode(["message" => "Servicio eliminado"]);
                exit;
            }
        }
        http_response_code(404);
        echo json_encode(["error" => "Servicio no encontrado"]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método no permitido"]);
}
?>
