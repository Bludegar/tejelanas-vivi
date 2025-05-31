<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS");

$method = $_SERVER['REQUEST_METHOD'];
$dataFile = __DIR__ . "/data.json";

function readData($dataFile) {
  return json_decode(file_get_contents($dataFile), true);
}

function saveData($dataFile, $data) {
  file_put_contents($dataFile, json_encode($data, JSON_PRETTY_PRINT));
}

$request_uri = explode('/', trim($_SERVER['REQUEST_URI'], '/'));
$id = end($request_uri);
$id = is_numeric($id) ? intval($id) : null;

switch ($method) {
  case 'GET':
    $data = readData($dataFile);
    if ($id) {
      foreach ($data as $item) {
        if ($item['id'] === $id) {
          echo json_encode($item);
          exit;
        }
      }
      http_response_code(404);
      echo json_encode(["error" => "No encontrado"]);
    } else {
      echo json_encode($data);
    }
    break;

  case 'POST':
    $input = json_decode(file_get_contents('php://input'), true);
    $data = readData($dataFile);
    $input['id'] = end($data)['id'] + 1;
    $data[] = $input;
    saveData($dataFile, $data);
    http_response_code(201);
    echo json_encode($input);
    break;

  case 'PUT':
    $input = json_decode(file_get_contents('php://input'), true);
    $data = readData($dataFile);
    $updated = false;
    foreach ($data as &$item) {
      if ($item['id'] === $id) {
        $item = array_merge($item, $input);
        $updated = true;
        break;
      }
    }
    if ($updated) {
      saveData($dataFile, $data);
      echo json_encode(["success" => true]);
    } else {
      http_response_code(404);
      echo json_encode(["error" => "No encontrado"]);
    }
    break;

  case 'DELETE':
    $data = readData($dataFile);
    $newData = array_filter($data, fn($item) => $item['id'] !== $id);
    if (count($newData) < count($data)) {
      saveData($dataFile, array_values($newData));
      echo json_encode(["success" => true]);
    } else {
      http_response_code(404);
      echo json_encode(["error" => "No encontrado"]);
    }
    break;

  default:
    http_response_code(405);
    echo json_encode(["error" => "Método no permitido"]);
}
?>
