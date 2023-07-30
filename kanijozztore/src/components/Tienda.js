import React from 'react';
import style from '../module/tienda.module.css'

const Tienda = () => {
    return (
        <>
            <main>
                <h1 className={style.title}>Tienda</h1>
                <p>Bienvenidos a la tienda de Kanijo'z Ztore, aqui encontrarás todos los productos que tenemos disponibles al momento, listos para ser entregados.</p>

                <p>También contamos con un servicio de impresión 3D, tanto PLA como Resina. Accede a nuestro <a href="https://drive.google.com/drive/folders/12yRDfjIBVmRmso6QnJUUHSqraBLVGQaK">catálogo</a> para descubrir que tenemos, también puedes contactarnos para solicitar presupuesto de algún archivo que tengas, que viste por la red, o por alguno que no tengamos, pero podamos
                    buscar.</p>
                <div className={style.cta3D}>
                    <a href="https://api.whatsapp.com/send?phone=541173692881&text=Hola%20me%20interesa%20el%20servicio%203D" className={style.btn}>Contactar por impresiones 3D</a>
                </div>
            </main>
        </>
    );
}

export default Tienda;