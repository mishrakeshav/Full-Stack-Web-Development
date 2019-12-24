<?php

    $name = $_POST['name'];
    $email = $_POST['email'];
    $pnumber = $_POST['pnumber'];
    $job = $_POST['job'];
    $pass = $_POST['password'];
    $cpass = $_POST['cpassword'];
    echo "name: $name , email: $email \n";
    echo "pnumber : $pnumber , job: $job \n";
    echo "pass : $pass , cpass : $cpass";  
     

    $con = mysqli_connect('localhost', 'root', '', 'phasebook');
    if(!$con){
        die("Unable to connect to Server");
    }

    $sql = "SELECT email FROM records WHERE email = '$email'";

    $emailexists = mysqli_query($con, $sql);
    if($emailexists){
        echo "<script>alert('Email already exists')</script>";
        header("Location:register.html");
    }
    else{
        if($password===$cpassword){
            $sql = "INSERT INTO records(name, email, pnumber,job,cpassword)";
            mysqli_query($con, $sql);
            header("Location:profile.html");
        }
        else{
            echo "<script>alert('Entry in Password and Confirm Password should me same')</script>"; 
            header("Location:profile")
        }
        
    }

?>  