package mx.edu.utez.gimnasio4b.model.auth;

public class BeanAuth {
    int id;
    String email;
    String password;

    String username;

    String rol;

    public BeanAuth() {
    }

    public BeanAuth(int id, String email, String password, String rol, String username) {
        this.id = id;
        this.email = email;
        this.password = password;
        this.rol = rol;
        this.username = username;
    }

    public String getRol() {
        return rol;
    }

    public void setRol(String rol) {
        this.rol = rol;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }
}
