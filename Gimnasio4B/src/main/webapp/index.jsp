
<%@ page import="java.sql.*" %>
<%@ page contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Iniciar sesión</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
<div class="contenedor">
    <div class="hijo">
        <h1>Gimnasio Halcones</h1>
        <form method="post" action="login">
            <input type="email" name="email" placeholder="ejemplo@utez.edu.mx"><br>
            <br>
            <input type="password" name="password" placeholder="contraseña" ><br><br>
            <button type="submit" style="margin-bottom: 15%;">Inicia sesión</button><br>
            <a href="register.jsp" style="color: white;">¿Aún no tienes una cuenta? Regístrate</a><br><br>
            <a href=""style="color: white;">Olvidé mi contraseña</a>
        </form>
    </div>
</div>
</body>
</html>
<%
    response.setHeader("Cache-Control", "no-cache, no-store, must-revalidate");
    if (request.getSession().getAttribute("name") != null) {
        response.sendRedirect("home");
    }
%>