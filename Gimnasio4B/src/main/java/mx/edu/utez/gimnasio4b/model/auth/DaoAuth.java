package mx.edu.utez.gimnasio4b.model.auth;

import mx.edu.utez.gimnasio4b.utils.MySQLConnection;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

public class DaoAuth {

    public BeanAuth login(String email, String password) {
        String[]  roles = new String[] { "admin", "cliente","instructor" };
        BeanAuth userAuth = new BeanAuth();

        try
                (Connection con  = MySQLConnection.getConnection();
                 PreparedStatement pstm = con.prepareStatement("SELECT * FROM admin WHERE username = ? AND password = ?;");
                 PreparedStatement pstm1 = con.prepareStatement("SELECT * FROM clientes WHERE email = ? AND password = ?;");
                 PreparedStatement pstm2 = con.prepareStatement("SELECT * FROM instructores WHERE email = ? AND password = ?;");

                )

        {
            pstm.setString(1, email);
            pstm.setString(2, password);
            pstm1.setString(1, email);
            pstm1.setString(2, password);
            pstm2.setString(1, email);
            pstm2.setString(2, password);


            for(int i = 0;i<roles.length;i++){
                if(i==0) {
                    ResultSet rs = pstm.executeQuery();
                    while (rs.next()) {
                        userAuth.setId(rs.getInt("id"));
                        userAuth.setEmail(rs.getString("username"));
                        userAuth.setRol("admin");
                    }
                }
                if(i==1) {
                    ResultSet rs = pstm1.executeQuery();
                    while (rs.next()) {
                        userAuth.setId(rs.getInt("id"));
                        userAuth.setEmail(rs.getString("email"));
                        userAuth.setRol("cliente");
                    }
                }
                if(i==2) {
                    ResultSet rs = pstm2.executeQuery();
                    while (rs.next()) {
                        userAuth.setId(rs.getInt("id"));
                        userAuth.setEmail(rs.getString("email"));
                        userAuth.setRol("instructor");
                    }
                }
                if(userAuth.getEmail() != null){
                    break;
                }
            }

        } catch(Exception e) {
            e.printStackTrace();
        }

        return userAuth;
    }
}
