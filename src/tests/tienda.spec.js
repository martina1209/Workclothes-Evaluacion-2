import {agregar,cambiarCantidad,quitar,total} from '../data/carrito.js';
import {listarProductos,crearProducto,actualizarProducto,eliminarProducto,dinero} from '../data/datos.js';
import React from 'react';
import { createRoot } from 'react-dom/client';
import { flushSync } from 'react-dom';
import { MemoryRouter } from 'react-router-dom';
import Producto from '../components/Producto.jsx';
describe('Workclothes - 10 pruebas unitarias',()=>{
let productos;beforeEach(()=>{localStorage.clear();productos=listarProductos();});
it('1. muestra los datos del producto en React', () => {
    const contenedor = document.createElement('div');
    document.body.appendChild(contenedor);

    const root = createRoot(contenedor);

    flushSync(() => {
        root.render(
            <MemoryRouter>
                <Producto producto={productos[0]} agregar={() => {}} />
            </MemoryRouter>
        );
    });

    expect(contenedor.textContent)
        .toContain(productos[0].nombre);

    root.unmount();
    contenedor.remove();
});


it('2. llama a agregar al carrito al hacer clic', () => {
    const agregarMock = jasmine.createSpy('agregar');

    const contenedor = document.createElement('div');
    document.body.appendChild(contenedor);

    const root = createRoot(contenedor);

    flushSync(() => {
        root.render(
            <MemoryRouter>
                <Producto
                    producto={productos[0]}
                    agregar={agregarMock}
                />
            </MemoryRouter>
        );
    });

    const boton = contenedor.querySelector('button');

    boton.click();

    expect(agregarMock)
        .toHaveBeenCalledWith(productos[0].id);

    root.unmount();
    contenedor.remove();
});
it('3. agrega un producto al carrito',()=>{expect(agregar([],1)).toEqual([{id:1,cantidad:1}]);});
it('4. suma cantidad al agregar producto repetido',()=>{expect(agregar([{id:1,cantidad:1}],1)[0].cantidad).toBe(2);});
it('5. disminuye cantidad sin bajar de uno',()=>{expect(cambiarCantidad([{id:1,cantidad:1}],1,-1)[0].cantidad).toBe(1);});
it('6. elimina un producto del carrito',()=>{expect(quitar([{id:1,cantidad:1}],1)).toEqual([]);});
it('7. calcula el total según precio y cantidad',()=>{expect(total([{id:1,cantidad:2}],productos)).toBe(99980);});
it('8. crea un producto en datos simulados',()=>{crearProducto({nombre:'Prueba',precio:1000,stock:1});expect(listarProductos().some(p=>p.nombre==='Prueba')).toBeTrue();});
it('9. actualiza un producto existente',()=>{actualizarProducto(1,{stock:3});expect(listarProductos().find(p=>p.id===1).stock).toBe(3);});
it('10. elimina un producto de datos simulados',()=>{eliminarProducto(1);expect(listarProductos().find(p=>p.id===1)).toBeUndefined();});
});