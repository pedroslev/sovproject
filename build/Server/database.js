<?php

    $db_connection = pg_connect("host=ec2-18-211-48-247.compute-1.amazonaws.com dbname=d5nviljvls6e8v user=nknskzkksjrswn password=3db4897d9bb441379bf69eb55e105e6f200aa316b9d762379c3285abb13d2493");

    $result = pg_query($db_connection, "SELECT * FROM Productos");
    
?>

<script>

    var resultado = $result;
    console.log(resultado);
</script>