<?php
/*function Getquizz() {
    $query_tb = 'SELECT * FROM utilisateur';
}

$conn = mysqli_connect("localhost", "root", "", "quizz"); // Create the connexion to the database


try {
    echo json_encode(Getquizz());
}
catch (Exception $e) {
   echo "My Exception: The user could not be added.<br>" . $e->getMessage();
}*/

class connectionMYSQL {
    private $conn;

    function __construct() {

    }

    public function connecterMysql(){
        $host   = "localhost" ;//$config['mysql']['host'];
        $dbname  = "quizz";//$config['mysql']['dbname'];
        $user    = "root";//$config['mysql']['user'];
        $motdepasse   = "";//$config['mysql']['motdepasse'];
        $port = "3306";
        //$this->conn = new PDO('mysql:host='.$host.';dbname='.$dbname.';port='.$port.';charset=utf8', $user, $motdepasse);
        $this->conn = new PDO('mysql:host='.$host.';dbname='.$dbname.';charset=utf8', $user, $motdepasse);
        $this->conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    }

    public function setConn($conn) {
        $this->conn = $conn;
    }
    public function getConn() {
        return $this->conn;
    } 

}/*
try {
    $Dao =new connectionMYSQL();
    $Dao->connecterMysql();
    echo "DataBase Connected";
}
catch (PDOException $e) {
    echo "DataBase Error: The user could not be added.<br>" . $e->getMessage();
}*/

class DAOartist {

    public $con;
 
     function __construct() {
         $Connection = new connectionMYSQL();
         $Connection->connecterMysql();
         $this->con = $Connection->getConn();
     }
 
     function GetArtist(){
         $sql= "SELECT * FROM quizz";
         $stmt = $this->con->prepare($sql);
         $stmt->execute();
         $result = $stmt->fetchAll();
         //var_dump($result);
         return $result;
     }

 }
 try {
    $DaoArt =new DAOartist();

     echo json_encode($DaoArt->GetArtist());
}
catch (Exception $e) {
    echo "My Exception: The user could not be added.<br>" . $e->getMessage();
}
?>
