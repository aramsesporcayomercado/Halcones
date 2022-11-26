package mx.edu.utez.gimnasio4b.controller.auth;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(name = "ServletHome", urlPatterns = {
        "/home"
})
public class ServletHome extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        String option = request.getServletPath();
        switch (option) {
            case "/home":
                try{
                    String rol = (String) request.getSession().getAttribute("rol");
                    if (rol == null) {
                        response.sendRedirect("index.jsp");
                        System.out.println("entra");
                        return;
                    }
                    if(rol.equals("admin")){
                        request.getRequestDispatcher("WEB-INF/view/admin/inicio-admin.jsp").forward(request, response);
                        return;
                    }
                    if(rol.equals("cliente")){
                        request.getRequestDispatcher("WEB-INF/view/cliente/inicio-cliente.jsp").forward(request, response);
                        return;
                    }
                    if(rol.equals("instructor")){
                        request.getRequestDispatcher("WEB-INF/view/instructor/inicio-instructor.jsp").forward(request, response);
                        return;
                    }
                }catch(Exception e){
                    e.printStackTrace();
                }

                break;
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

    }
}
