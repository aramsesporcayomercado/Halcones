package mx.edu.utez.gimnasio4b.controller.auth;

import mx.edu.utez.gimnasio4b.model.auth.BeanAuth;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import java.io.IOException;

    @WebServlet(name = "ServletAuth",
            urlPatterns = {
                    "/login",
                    "/logout"
            }
    )
    public class ServletAuth extends HttpServlet {
        @Override
        protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            String option = request.getServletPath();
            if (option.equals("/logout")) {
                request.getSession().removeAttribute("name");
                request.getSession().removeAttribute("rol");
                request.getSession().invalidate();
                response.sendRedirect("index.jsp");
            }else{
                response.sendRedirect("index.jsp");

            }
        }

        @Override
        protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
            try{
                if(request.getSession().getAttribute("name") != null){
                    response.sendRedirect("home");
                    return;
                }
            } catch (Exception e) {
                e.printStackTrace();
            }

            String option = request.getServletPath();
            if (option.equals("/login")){
                String email = request.getParameter("email")!=null?
                        request.getParameter("email"):"";
                String password = request.getParameter("password")!=null?
                        request.getParameter("password"):"";


                ServiceAuth serviceAuth = new ServiceAuth();
                BeanAuth userAuth =  serviceAuth.login(email,password);

                if (userAuth.getEmail() != null){
                    HttpSession session = request.getSession(true);
                    session.setAttribute("name", userAuth.getEmail());
                    session.setAttribute("rol", userAuth.getRol());

                    response.sendRedirect("home");

                } else {
                    response.sendRedirect("index.jsp?message=error");
                }
            }else{
                // request.getRequestDispatcher("index.jsp").forward(request,response);
                response.sendRedirect("index.jsp");

            }
        }
    }
