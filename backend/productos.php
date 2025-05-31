<?php
header("Content-Type: application/json");

$productos = [
    ["id" => 1, "nombre" => "Falda a Crochet", "precio" => 9990],
    ["id" => 2, "nombre" => "Ovillo de Lana Merino", "precio" => 4990],
    ["id" => 3, "nombre" => "Cuadro decorativo", "precio" => 14990]
];

$method = $_SERVER['REQUEST_METHOD'];

switch ($method) {
    case 'GET':
        if (isset($_GET['id'])) {
            foreach ($productos as $producto) {
                if ($producto['id'] == $_GET['id']) {
                    echo json_encode($producto);
                    exit;
                }
            }
            http_response_code(404);
            echo json_encode(["error" => "Producto no encontrado"]);
        } else {
            echo json_encode($productos);
        }
        break;

    case 'POST':
        $data = json_decode(file_get_contents("php://input"), true);
        $data['id'] = end($productos)['id'] + 1;
        $productos[] = $data;
        echo json_encode(["message" => "Producto creado", "producto" => $data]);
        break;

    case 'PUT':
        parse_str(file_get_contents("php://input"), $put_data);
        foreach ($productos as &$producto) {
            if ($producto['id'] == $put_data['id']) {
                $producto['nombre'] = $put_data['nombre'];
                $producto['precio'] = $put_data['precio'];
                echo json_encode(["message" => "Producto actualizado", "producto" => $producto]);
                exit;
            }
        }
        http_response_code(404);
        echo json_encode(["error" => "Producto no encontrado"]);
        break;

    case 'DELETE':
        parse_str(file_get_contents("php://input"), $delete_data);
        foreach ($productos as $index => $producto) {
            if ($producto['id'] == $delete_data['id']) {
                unset($productos[$index]);
                echo json_encode(["message" => "Producto eliminado"]);
                exit;
            }
        }
        http_response_code(404);
        echo json_encode(["error" => "Producto no encontrado"]);
        break;

    default:
        http_response_code(405);
        echo json_encode(["error" => "Método no permitido"]);
}
?>
