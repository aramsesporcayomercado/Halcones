package mx.edu.utez.gimnasio4b.utils;

import java.sql.Connection;
import java.sql.DriverManager;

public class MySQLConnection {
    public static Connection getConnection(){

        try {
            DriverManager.registerDriver(new com.mysql.cj.jdbc.Driver());
            return DriverManager.getConnection("jdbc:mysql://localhost:3306/gimnasio","root","gatitaMin4_");
        } catch (Exception e) {
            e.printStackTrace();
        }

        return null;
    }

    public static void main(String[] args) {
        try {
            Connection c = MySQLConnection.getConnection();
            if (c != null) {
                System.out.println("Conectado");
                c.close();
            }
            else{
                System.out.println("No conectado");
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

}
