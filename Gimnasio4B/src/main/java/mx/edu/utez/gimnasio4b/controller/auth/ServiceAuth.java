package mx.edu.utez.gimnasio4b.controller.auth;

import mx.edu.utez.gimnasio4b.model.auth.BeanAuth;
import mx.edu.utez.gimnasio4b.model.auth.DaoAuth;

public class ServiceAuth {
    public BeanAuth login(String email, String password) {
        // DaoAuthentication daoAuthentication = new DaoAuthentication();
        DaoAuth daoAuth = new DaoAuth();

        return daoAuth.login(email,password);

    }
}
