import React from "react";

export const Footer = () => {

    return (
        <>
           {/* <!-- Site footer --> */}
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>¿Quienes somos?</h6>
            <p className="text-justify">  Somos un banco internacional fundado y creado en Guatemala, en nuestras visiones esta ser el mejor banco de Centro America y ser el banco mas seguro para nuestros clientes, lo lograremos a partir de una buena comunicacion entre cliente y empleado, teniendo la mayor seguridad en nustras bases de datos.</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Nuestras Areas</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/category/c-language/">Personas</a></li>
              <li><a href="http://scanfcode.com/category/front-end-development/">PYMES</a></li>
              <li><a href="http://scanfcode.com/category/back-end-development/">Empresas </a></li>
              <li><a href="http://scanfcode.com/category/java-programming-language/">Private Banking </a></li>
              <li><a href="http://scanfcode.com/category/android/"> Mapa del Sitio</a></li>
              
            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Acerca de KinalBridge</h6>
            <ul className="footer-links">
              <li><a href="http://scanfcode.com/about/">Nuestra Empresa</a></li>
              <li><a href="http://scanfcode.com/contact/">Nuestra Historia</a></li>
              <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Proposito y Valores</a></li>
              <li><a href="http://scanfcode.com/privacy-policy/">Memoria Anual</a></li>
              <li><a href="http://scanfcode.com/sitemap/">Trabaje Con Nosotros</a></li>
            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Todos los derechos reservados. 2023&copy;
         <a href="#">KinalBridge Banco Internacional.</a>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
              <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
              <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
              <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
              <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
        </>
    );
};
